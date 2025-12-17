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
import { ThemeToggle } from '@/components/ThemeToggle'

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
  let [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navLinks = [
    { href: '/about', label: 'Về tôi' },
    {
      href: '/kien-thuc',
      label: 'Kiến thức',
      children: [
        { href: '/kien-thuc#co-ban', label: 'Kiến thức cơ bản' },
        { href: '/quotes', label: 'Quotes' },
        { href: '/trading-shorts', label: 'Trading Shorts' },
        { href: '/library', label: 'Thư viện' },
      ],
    },
    { href: '/blog', label: 'Blog' },
    { href: '/courses', label: 'Khoá học' },
    {
      href: '/san-giao-dich',
      label: 'Sàn giao dịch',
      children: [
        { href: '/san-giao-dich-forex', label: 'Sàn Forex' },
        { href: '/san-giao-dich-crypto', label: 'Sàn Crypto' },
      ],
    },
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
            className="sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden sm:block"
            invert={invert}
            filled={logoHovered}
            fillOnHover
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const hasChildren = 'children' in link && Array.isArray(link.children)

            if (!hasChildren) {
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
                        : 'bg-gradient-to-r from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 text-white dark:text-neutral-950 shadow-lg shadow-neutral-950/20 dark:shadow-neutral-50/20'
                      : invert
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-neutral-700 dark:text-white hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50',
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 rounded-xl -z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {!isActive && !invert && (
                    <span className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
                  )}
                </Link>
              )
            }

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown((current) => (current === link.href ? null : current))}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    'relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ',
                    'group overflow-hidden flex items-center gap-1',
                    isActive
                      ? invert
                        ? 'bg-white/20 text-white shadow-lg shadow-white/10'
                        : 'bg-gradient-to-r from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 text-white dark:text-neutral-950 shadow-lg shadow-neutral-950/20 dark:shadow-neutral-50/20'
                      : invert
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-neutral-700 dark:text-white hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50',
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="relative z-10 text-xs opacity-70">▾</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 rounded-xl -z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {!isActive && !invert && (
                    <span className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
                  )}
                </Link>

                {openDropdown === link.href && (
                  <div className="absolute left-0 top-full mt-0.5 w-56 rounded-2xl border border-neutral-200 bg-white/95 p-2 text-sm shadow-xl backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/95">
                    {(link as { children: { href: string; label: string }[] }).children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={clsx(
                          'flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                          'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white',
                        )}
                      >
                        <span>{child.label}</span>
                        <span className="text-xs text-neutral-400 dark:text-neutral-500">↗</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="flex items-center gap-x-3 lg:gap-x-6">
          <ThemeToggle className="hidden sm:flex" />
          <Link
            href="/connect"
            className={clsx(
              'relative inline-flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300',
              'group overflow-hidden',
              invert
                ? 'text-white/90 hover:text-white hover:bg-white/10'
                : 'text-neutral-700 dark:text-white hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
            )}
          >
            <span className="relative z-10">Kết nối</span>
            {!invert && (
              <span className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800/50 dark:to-neutral-700/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
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
                  : 'fill-neutral-950 dark:fill-white group-hover:fill-neutral-700 dark:group-hover:fill-neutral-200',
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
  onLinkClick,
}: {
  pathname: string
  onLinkClick?: () => void
}) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const navLinks = [
    { href: '/about', label: 'Về tôi' },
    {
      href: '/kien-thuc',
      label: 'Kiến thức',
      children: [
        { href: '/kien-thuc#co-ban', label: 'Kiến thức cơ bản' },
        { href: '/quotes', label: 'Quotes' },
        { href: '/trading-shorts', label: 'Trading Shorts' },
        { href: '/library', label: 'Thư viện' },
      ],
    },
    { href: '/blog', label: 'Blog' },
    { href: '/courses', label: 'Khoá học' },
    {
      href: '/san-giao-dich',
      label: 'Sàn giao dịch',
      children: [
        { href: '/san-giao-dich-forex', label: 'Sàn Forex' },
        { href: '/san-giao-dich-crypto', label: 'Sàn Crypto' },
      ],
    },
    { href: '/connect', label: 'Kết nối' },
  ]

  return (
    <nav className="px-6 py-4 space-y-2">
      {navLinks.map((link) => {
        const isActive = pathname === link.href
        const hasChildren = 'children' in link && Array.isArray(link.children)

        if (!hasChildren) {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'relative block px-5 py-4 text-lg font-semibold rounded-xl transition-all duration-300',
                'group overflow-hidden',
                isActive
                  ? 'bg-gradient-to-r from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 text-white dark:text-neutral-950 shadow-lg shadow-neutral-950/20 dark:shadow-neutral-50/20'
                  : 'text-neutral-700 dark:text-white hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
              )}
              onClick={onLinkClick}
            >
              <span className="relative z-10">{link.label}</span>
              {isActive && (
                <motion.span
                  layoutId="activeNavMobile"
                  className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 rounded-xl -z-0"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {!isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              )}
            </Link>
          )
        }

        const isOpen = openSection === link.href

        return (
          <div key={link.href} className="space-y-1">
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? null : link.href)}
              className={clsx(
                'w-full relative flex items-center justify-between px-5 py-4 text-lg font-semibold rounded-xl text-left transition-all duration-300',
                'group overflow-hidden',
                isActive
                  ? 'bg-gradient-to-r from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 text-white dark:text-neutral-950 shadow-lg shadow-neutral-950/20 dark:shadow-neutral-50/20'
                  : 'text-neutral-700 dark:text-white hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800',
              )}
            >
              <span className="relative z-10">{link.label}</span>
              <span
                className={clsx(
                  'relative z-10 text-xs transition-transform duration-200',
                  isOpen ? 'rotate-180' : '',
                )}
              >
                ▾
              </span>
            </button>

            {isOpen && (
              <div className="ml-8 space-y-1">
                {(link as { children: { href: string; label: string }[] }).children.map(
                  (child) => {
                    const childActive = pathname === child.href
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onLinkClick}
                        className={clsx(
                          'flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                          childActive
                            ? 'text-neutral-950 dark:text-white'
                            : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:text-white dark:hover:bg-neutral-800',
                        )}
                      >
                        <span>{child.label}</span>
                        <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
                          →
                        </span>
                      </Link>
                    )
                  },
                )}
              </div>
            )}
          </div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/95 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950/95 backdrop-blur-xl transition-colors duration-300" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent transition-colors duration-300" />
          
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
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50/95 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900/95 backdrop-blur-2xl transition-colors duration-300" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-300" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent transition-colors duration-300" />
              
              <div className="relative">
                <div ref={navRef} className="pb-16 pt-8">
                  <Container>
                    <div className="flex items-center justify-between mb-10">
                      <h2 className="font-display text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                        Menu
                      </h2>
                      <div className="flex items-center gap-3">
                        <ThemeToggle />
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
                        <XIcon className="h-6 w-6 fill-neutral-950 dark:fill-neutral-50 group-hover:fill-neutral-700 dark:group-hover:fill-neutral-300 transition-colors" />
                      </button>
                      </div>
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
        className="relative flex flex-auto overflow-hidden bg-white dark:bg-neutral-950 transition-colors duration-300"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 dark:fill-neutral-900 stroke-neutral-950/5 dark:stroke-neutral-50/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] dark:[mask-image:linear-gradient(to_bottom_left,black_40%,transparent_50%)] transition-colors duration-300"
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
