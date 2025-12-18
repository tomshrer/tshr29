import ReactLenis from 'lenis/react'
import Footer from './Footer'
import Header from './Header'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
  children: React.ReactNode
}

export function Layout(props: Props) {
  const { children } = props

  return (
    <ReactLenis root>
      <Header />
      <Toaster position="top-right" />
      <>{children}</>
      <Footer />
    </ReactLenis>
  )
}
