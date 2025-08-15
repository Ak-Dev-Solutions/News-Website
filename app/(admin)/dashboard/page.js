import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Link href="/(admin)/dashboard/news" className="p-4 border rounded hover:shadow">Manage News</Link>
        <Link href="/(admin)/dashboard/categories" className="p-4 border rounded hover:shadow">Manage Categories</Link>
        <Link href="/(admin)/dashboard/users" className="p-4 border rounded hover:shadow">Manage Users</Link>
      </div>
    </div>
  )
}