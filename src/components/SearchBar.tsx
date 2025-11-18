'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

interface SearchResult {
  title: string
  href: string
  description: string
}

interface SearchBarProps {
  articles: SearchResult[]
  className?: string
}

export function SearchBar({ articles, className }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (query.trim()) {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered.slice(0, 5))
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, articles])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (href: string) => {
    router.push(href)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div ref={searchRef} className={clsx('relative w-full max-w-md', className)}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Tìm kiếm bài viết..."
          className={clsx(
            'w-full rounded-xl border border-neutral-300 dark:border-neutral-700',
            'bg-white dark:bg-neutral-900',
            'px-4 py-3 pl-10 pr-4',
            'text-sm text-neutral-950 dark:text-neutral-50',
            'placeholder:text-neutral-500 dark:placeholder:text-neutral-400',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'transition-all duration-200'
          )}
        />
        <svg
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden">
          <div className="max-h-96 overflow-y-auto">
            {results.map((result) => (
              <button
                key={result.href}
                onClick={() => handleSelect(result.href)}
                className="w-full text-left px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border-b border-neutral-100 dark:border-neutral-800 last:border-b-0"
              >
                <div className="font-semibold text-sm text-neutral-950 dark:text-neutral-50 mb-1">
                  {result.title}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {result.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl p-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Không tìm thấy kết quả
        </div>
      )}
    </div>
  )
}

