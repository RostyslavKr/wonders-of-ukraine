import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wonders of Ukraine',
  description: 'Travel through Ukraine with us',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      
      <body suppressHydrationWarning={true}>
        {children}
        
      </body>
    </html>
  )
}
