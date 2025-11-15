'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}


function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!
  let pathname = usePathname()

  const navLinks = [
    { href: '/news', label: 'News' },
    { href: '/quotes', label: 'Quotes' },
    { href: '/blog', label: 'Blog' },
    { href: '/library', label: 'Thư viện' },
    { href: '/courses', label: 'Khoá Học' },
  ]

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="relative z-10 transition-transform duration-300 hover:scale-105"
        >
          <Logomark
            className="h-9 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden h-9 sm:block"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300',
                  'group overflow-hidden',
                  isActive
                    ? invert
                      ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                      : 'bg-gradient-to-r from-neutral-950 to-neutral-800 text-white shadow-lg shadow-neutral-950/20'
                    : invert
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100',
                )}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-neutral-800 rounded-xl -z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {!isActive && !invert && (
                  <span className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-x-3 lg:gap-x-6">
          <Link
            href="/connect"
            className={clsx(
              'relative inline-flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300',
              'group overflow-hidden',
              invert
                ? 'text-white/90 hover:text-white hover:bg-white/10'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100',
            )}
          >
            <span className="relative z-10">Kết nối</span>
            {!invert && (
              <span className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            )}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group relative -m-2.5 rounded-xl p-2.5 transition-all duration-300 lg:hidden',
              'hover:scale-110 active:scale-95',
              invert 
                ? 'hover:bg-white/10' 
                : 'hover:bg-neutral-950/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6 transition-transform duration-300',
                expanded && 'rotate-90',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation({ 
  pathname, 
  onLinkClick 
}: { 
  pathname: string
  onLinkClick?: () => void 
}) {
  const navLinks = [
    { href: '/news', label: 'News' },
    { href: '/quotes', label: 'Quotes' },
    { href: '/blog', label: 'Blog' },
    { href: '/library', label: 'Thư viện' },
    { href: '/courses', label: 'Khoá Học' },
  ]

  return (
    <nav className="px-6 py-4 space-y-2">
      {navLinks.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'relative block px-5 py-4 text-lg font-semibold rounded-xl transition-all duration-300',
              'group overflow-hidden',
              isActive
                ? 'bg-gradient-to-r from-neutral-950 to-neutral-800 text-white shadow-lg shadow-neutral-950/20'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100',
            )}
            onClick={onLinkClick}
          >
            <span className="relative z-10">{link.label}</span>
            {isActive && (
              <motion.span
                layoutId="activeNavMobile"
                className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-neutral-800 rounded-xl -z-0"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {!isActive && (
              <span className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let pathname = usePathname()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        {/* Fixed Header with Navigation */}
        <div className="fixed left-0 right-0 top-0 z-50">
          {/* Gradient Background with Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/95 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          
          {/* Header Content */}
          <div className="relative pt-5 pb-5">
            <Header
              panelId={panelId}
              icon={MenuIcon}
              toggleRef={openRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded)
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true }),
                )
              }}
            />
          </div>
        </div>

        {/* Spacer for fixed header */}
        <div className="h-[76px]" />

        {/* Mobile Menu Overlay */}
        {expanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[76px] z-30 bg-neutral-950/40 backdrop-blur-md lg:hidden"
              onClick={() => setExpanded(false)}
              aria-hidden="true"
            />
            {/* Menu Panel */}
            <motion.div
              layout
              id={panelId}
              className="fixed inset-x-0 top-[76px] z-40 overflow-y-auto lg:hidden max-h-[calc(100vh-76px)] shadow-2xl"
              aria-hidden={expanded ? undefined : 'true'}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
            <div className="relative">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50/95 backdrop-blur-2xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
              
              <div className="relative">
                <div ref={navRef} className="pb-16 pt-8">
                  <Container>
                    <div className="flex items-center justify-between mb-10">
                      <h2 className="font-display text-2xl font-bold text-neutral-950">
                        Menu
                      </h2>
                      <button
                        ref={closeRef}
                        type="button"
                        onClick={() => {
                          setExpanded(false)
                          window.setTimeout(() =>
                            openRef.current?.focus({ preventScroll: true }),
                          )
                        }}
                        className="group relative -m-2.5 rounded-xl p-2.5 transition-all duration-300 hover:bg-neutral-950/10 hover:scale-110 active:scale-95"
                        aria-label="Close navigation"
                      >
                        <XIcon className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700 transition-colors" />
                      </button>
                    </div>
                  </Container>
                </div>
                <Navigation 
                  pathname={pathname} 
                  onLinkClick={() => setExpanded(false)}
                />
              </div>
            </div>
          </motion.div>
          </>
        )}
      </header>

      <motion.div
        layout
        className="relative flex flex-auto overflow-hidden bg-white"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
