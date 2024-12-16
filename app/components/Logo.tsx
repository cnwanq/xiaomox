import React from 'react'

export function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#logo-gradient)"/>
      <path d="M7 7H13V13H7V7Z" fill="white"/>
      <path d="M7 19H13V25H7V19Z" fill="white"/>
      <path d="M19 7H25V13H19V7Z" fill="white"/>
      <path d="M19 19H25V25H19V19Z" fill="white"/>
      <path d="M13 13H19V19H13V13Z" fill="white"/>
    </svg>
  )
}

