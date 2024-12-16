'use client'

import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { LoadingIndicator } from './LoadingIndicator'

export function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleStop = () => setIsLoading(false)

    const handleRouteChange = () => {
      handleStart()
      setTimeout(handleStop, 500)
    }

    handleRouteChange()

    return () => {
      // Cleanup effect
    }
  }, [pathname, searchParams])

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {children}
    </>
  )
}

