import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Trading',
    links: [
      { title: 'Quotes', href: '/quotes' },
      { title: 'Blog', href: '/blog' },
      { title: 'Thư viện', href: '/library' },
    ],
  },
  {
    title: 'Học tập',
    links: [
      { title: 'Khoá Học', href: '/courses' },
      { title: 'Thư viện', href: '/library' },
      { title: 'Blog', href: '/blog' },
      { title: 'Liên hệ', href: '/contact' },
    ],
  },
  {
    title: 'Kết nối',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950 dark:text-neutral-50">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700 dark:text-neutral-200">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950 dark:hover:text-neutral-50"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950 dark:text-neutral-50">
        Đăng ký nhận bản tin
      </h2>
      <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-200">
        Đăng ký để nhận tin tức mới nhất về thị trường, bài viết, tài liệu và
        các cập nhật từ Gemi Trader.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-transparent dark:bg-neutral-900 py-4 pl-6 pr-20 text-base/6 text-neutral-950 dark:text-neutral-50 ring-4 ring-transparent transition placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:border-neutral-950 dark:focus:border-neutral-50 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-neutral-50/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 dark:border-neutral-50/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700 dark:text-neutral-200">
            © Gemi Trader {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
