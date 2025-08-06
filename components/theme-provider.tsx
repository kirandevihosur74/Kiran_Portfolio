'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

// Custom hook to override system theme behavior
function useCustomTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  
  // Override resolvedTheme to always return 'dark' when system is selected
  const customResolvedTheme = theme === 'system' ? 'dark' : resolvedTheme
  
  return {
    theme,
    setTheme,
    resolvedTheme: customResolvedTheme
  }
}

// Custom theme provider component
function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}

// Export the custom hook for components that need it
export { useCustomTheme as useTheme }

// Export the custom provider
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <CustomThemeProvider>{children}</CustomThemeProvider>
} 