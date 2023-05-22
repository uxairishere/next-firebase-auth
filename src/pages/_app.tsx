import ProtectedRoute from '@/components/protectedRoute'
import { AuthContextProvider } from '@/context/AuthUserContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const noAuthRequired = ['/', '/login', '/signup']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <AuthContextProvider >{noAuthRequired.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <ProtectedRoute>
      <Component {...pageProps} />
    </ProtectedRoute>
  )}</AuthContextProvider>
}
