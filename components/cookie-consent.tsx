"use client"

import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { cn } from "@/utils/utils"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent === null) {
      setTimeout(() => setIsVisible(true), 500) // Delay to allow for initial page load
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 p-4 bg-gray-900 border-t transition-transform duration-300 ease-in-out transform",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white dark:text-black">
          <h2 className="text-lg font-semibold mb-2">Cookie Consent</h2>
          <p className="text-sm text-slate-200">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            Please choose to accept or decline cookies.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={handleAccept} className="w-full sm:w-auto">Accept All</Button>
          <Button onClick={handleDecline} variant="outline" className="w-full sm:w-auto">Decline</Button>
        </div>
      </div>
    </div>
  );
}