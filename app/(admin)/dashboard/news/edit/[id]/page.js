'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import ImageUpload from '@/components/ImageUpload'
import Image from 'next/image'  // <-- Import Next.js Image component

export default function EditNewsPage({ params }) {
  const { id } = params
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    async function fetchNews() {
      const docRef = doc(db, 'news', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = docSnap.data()
        setTitle(data.title)
        setExcerpt(data.excerpt)
        setContent(data.content)
        setImage(data.image || '')
      }
    }
    fetchNews()
  }, [id])

  async function handleSubmit(e) {
    e.preventDefault()
    const docRef = doc(db, 'news', id)
    await updateDoc(docRef, {
      title,
      excerpt,
      content,
      image,
      updatedAt: new Date(),
    })
    alert('News updated successfully!')
    router.push('/(admin)/dashboard/news')
  }

  return (
    <div className="max-w-3xl p-6 mx-auto mt-10 bg-white rounded shadow">
      <h1 className="mb-6 text-2xl font-bold">Edit News</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows={6}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Current Image</label>
          {image ? (
            <div className="relative w-64 h-40 mb-4 overflow-hidden rounded">
              <Image
                src={image}
                alt="News"
                fill
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          ) : (
            <p>No image uploaded yet.</p>
          )}
          <ImageUpload newsId={id} />
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Update News
        </button>
      </form>
    </div>
  )
}
