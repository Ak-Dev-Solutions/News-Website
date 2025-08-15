'use client'

import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { db, storage } from '@/lib/firebase'  // <-- import storage here

export default function ImageUpload({ newsId, onUploadComplete }) {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)

  async function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file || !newsId) return

    setUploading(true)
    setError(null)

    try {
      const uniqueName = `${Date.now()}-${file.name}`
      const storageRef = ref(storage, `news-images/${newsId}/${uniqueName}`)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setUploadProgress(progress)
        },
        (error) => {
          setError(error.message)
          setUploading(false)
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
          const newsRef = doc(db, 'news', newsId)
          await updateDoc(newsRef, { image: downloadURL })
          setUploading(false)
          setUploadProgress(0)
          if (onUploadComplete) onUploadComplete(downloadURL)
        }
      )
    } catch (err) {
      setError(err.message)
      setUploading(false)
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="mb-2"
        key={uploading ? 'uploading' : 'idle'}
      />
      {uploading && <p>Uploading: {uploadProgress.toFixed(0)}%</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
