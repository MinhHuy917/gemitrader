import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const socialLinks = [
  {
    name: 'Telegram Channel',
    description: 'Nhận tín hiệu trading, phân tích thị trường real-time và cập nhật nhanh',
    href: 'https://t.me/gemitrader',
    icon: '📢',
    platform: 'Telegram',
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'hover:from-blue-600 hover:to-cyan-600',
  },
  {
    name: 'Facebook Trading Group',
    description: 'Tham gia group trading cộng đồng, chia sẻ kinh nghiệm và nhận tín hiệu',
    href: 'https://facebook.com/groups/gemitrader',
    icon: '👥',
    platform: 'Facebook',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
  },
  {
    name: 'Facebook Cá nhân',
    description: 'Theo dõi Gemi Trader để cập nhật thông tin trading mới nhất',
    href: 'https://facebook.com/gemitrader',
    icon: '📘',
    platform: 'Facebook',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
  },
  {
    name: 'YouTube',
    description: 'Xem video hướng dẫn trading chi tiết, phân tích kỹ thuật và case studies',
    href: 'https://youtube.com/@gemitrader',
    icon: '▶️',
    platform: 'YouTube',
    color: 'from-red-600 to-red-700',
    hoverColor: 'hover:from-red-700 hover:to-red-800',
  },
  {
    name: 'TikTok Trading',
    description: 'Xem video trading ngắn, tips nhanh và phân tích thị trường',
    href: 'https://tiktok.com/@gemitrader',
    icon: '🎵',
    platform: 'TikTok',
    color: 'from-black via-gray-900 to-black',
    hoverColor: 'hover:from-gray-900 hover:via-black hover:to-gray-900',
  },
]

function SocialCard({
  social,
}: {
  social: (typeof socialLinks)[number]
}) {
  const isDark = social.platform === 'TikTok'
  
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'group relative flex w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br p-5 ring-1 ring-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:p-6',
        social.color,
        social.hoverColor,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
      
      {social.platform === 'TikTok' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,128,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,242,234,0.3),transparent_50%)]" />
        </>
      )}
      
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className={clsx(
            'flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-sm shadow-lg border',
            isDark 
              ? 'bg-white/20 border-white/30' 
              : 'bg-white/90 border-white/50'
          )}>
            <span className="text-2xl">{social.icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={clsx(
              'font-display text-base font-semibold truncate',
              isDark ? 'text-white' : 'text-neutral-950 dark:text-neutral-50'
            )}>
              {social.name}
            </h3>
            <span className={clsx(
              'mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium backdrop-blur-sm',
              isDark
                ? 'bg-white/20 border border-white/30 text-white'
                : 'bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200'
            )}>
              {social.platform}
            </span>
          </div>
        </div>
        <p className={clsx(
          'mt-3 text-sm leading-relaxed line-clamp-2',
          isDark ? 'text-white/90' : 'text-neutral-100 dark:text-neutral-200'
        )}>
          {social.description}
        </p>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  )
}

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Kết nối với Gemi Trader
            </h2>
            <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
              Theo dõi Gemi Trader trên các nền tảng để nhận thông tin, tips trading mới nhất và không bỏ lỡ bất kỳ cơ hội nào.
            </p>
            </div>
          
          <FadeInStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((social) => (
              <FadeIn key={social.name}>
                <SocialCard social={social} />
              </FadeIn>
            ))}
          </FadeInStagger>
          
          <div className="mt-12 text-center">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
            >
              Xem tất cả kênh kết nối
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
