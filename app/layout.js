import './globals.css'

export const metadata = {
  title: 'ITBANK - Home'
}

export default function RootLayout ({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
