'use client'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button onClick={toggleTheme} className="text-xl leading-none">
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  )
}

export default ThemeToggle
