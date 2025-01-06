'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import CookiePreferencesModal from './cookie-modal'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('cookieConsent')) {
        setIsVisible(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }))
    setIsVisible(false)
  }

  const customizePreferences = () => {
    setIsModalOpen(true)
  }

  const dismiss = () => {
    setIsVisible(false)
  }

  const handleModalClose = (preferences: Record<string, boolean> | null) => {
    setIsModalOpen(false)
    if (preferences) {
      localStorage.setItem('cookieConsent', JSON.stringify(preferences))
      setIsVisible(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6 lg:p-8 bg-background/80 backdrop-blur-sm border-t border-border animate-in slide-in-from-bottom duration-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Cookie Notice</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              We use cookies to improve your experience. Choose your preferences below.
            </p>
          </div>
          <div className="flex flex-col xs:flex-row gap-2 xs:items-center">
            <Button variant="outline" size="sm" onClick={customizePreferences}>
              Customize
            </Button>
            <Button size="sm" onClick={acceptAll}>Accept All</Button>
          </div>
          <button
            onClick={dismiss}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss cookie consent"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      <CookiePreferencesModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  )
}

