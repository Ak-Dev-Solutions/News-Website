import '../../styles/globals.css'
import AdminSidebar from '../../components/AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <div className="flex">
          <aside className="sticky top-0 w-64 h-screen border-r"><AdminSidebar /></aside>
          <div className="flex-1 p-6">{children}</div>
        </div>
      </body>
    </html>
  )
}