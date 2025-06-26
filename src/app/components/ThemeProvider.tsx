'use client'
import { ThemeProvider } from 'next-themes'
import { AppProvider } from '@/contexts/AppContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      <AppProvider>
        {children}
      </AppProvider>
    </ThemeProvider>
  )
}
