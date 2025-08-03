import './globals.css'

export const metadata = {
  title: 'Student Performance ERP',
  description: 'Manage student data, attendance, and performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">{children}</body>
    </html>
  )
}
