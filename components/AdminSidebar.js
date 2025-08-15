'use client'
import Link from 'next/link'

export default function AdminSidebar(){
  return (
    <div className="p-4">
      <div className="mb-6 text-xl font-bold">Admin</div>
      <nav className="space-y-2">
        <Link href="/(admin)/dashboard">Dashboard</Link>
        <Link href="/(admin)/dashboard/news">News</Link>
        <Link href="/(admin)/dashboard/categories">Categories</Link>
        <Link href="/(admin)/dashboard/users">Users</Link>
      </nav>
    </div>
  )
}