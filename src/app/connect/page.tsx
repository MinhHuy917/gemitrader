import { type Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Kết nối',
  description:
    'Đăng ký tài khoản các sàn giao dịch, tham gia các group trading, và kết nối với Gemi Trader trên các nền tảng mạng xã hội.',
}

const exchanges = [
  {
    name: 'Exness',
    description: 'Sàn forex và CFD uy tín với spread thấp',
    href: 'https://exness.com/a/gemitrader',
    icon: '📈',
    badge: 'Link Ref',
    bgGradient: 'from-[#003d82] via-[#0052a3] to-[#0066cc]',
    logoColor: '#ffffff',
  },
  {
    name: 'Binance',
    description: 'Sàn crypto lớn nhất thế giới',
    href: 'https://binance.com/ref/gemitrader',
    icon: '₿',
    badge: 'Link Ref',
    bgGradient: 'from-[#f3ba2f] via-[#f0b90b] to-[#f3ba2f]',
    logoColor: '#000000',
  },
]

const socialLinks = [
  {
    name: 'Facebook Trading Group',
    description: 'Tham gia group trading cộng đồng, chia sẻ kinh nghiệm và nhận tín hiệu',
    href: 'https://facebook.com/groups/gemitrader',
    icon: '👥',
    platform: 'Facebook',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    bgPattern: 'facebook',
  },
  {
    name: 'Facebook Cá nhân',
    description: 'Theo dõi Gemi Trader để cập nhật thông tin trading mới nhất',
    href: 'https://facebook.com/gemitrader',
    icon: '📘',
    platform: 'Facebook',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    bgPattern: 'facebook',
  },
  {
    name: 'TikTok Trading',
    description: 'Xem video trading ngắn, tips nhanh và phân tích thị trường',
    href: 'https://tiktok.com/@gemitrader',
    icon: '🎵',
    platform: 'TikTok',
    color: 'from-black via-gray-900 to-black',
    hoverColor: 'hover:from-gray-900 hover:via-black hover:to-gray-900',
    bgPattern: 'tiktok',
  },
  {
    name: 'TikTok Education',
    description: 'Kênh giáo dục trading, hướng dẫn chi tiết từ cơ bản đến nâng cao',
    href: 'https://tiktok.com/@gemitrader_edu',
    icon: '📚',
    platform: 'TikTok',
    color: 'from-black via-gray-900 to-black',
    hoverColor: 'hover:from-gray-900 hover:via-black hover:to-gray-900',
    bgPattern: 'tiktok',
  },
  {
    name: 'YouTube',
    description: 'Xem video hướng dẫn trading chi tiết, phân tích kỹ thuật và case studies',
    href: 'https://youtube.com/@gemitrader',
    icon: '▶️',
    platform: 'YouTube',
    color: 'from-red-600 to-red-700',
    hoverColor: 'hover:from-red-700 hover:to-red-800',
    bgPattern: 'youtube',
  },
  {
    name: 'Telegram Channel',
    description: 'Nhận tín hiệu trading, phân tích thị trường real-time và cập nhật nhanh',
    href: 'https://t.me/gemitrader',
    icon: '📢',
    platform: 'Telegram',
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'hover:from-blue-600 hover:to-cyan-600',
    bgPattern: 'telegram',
  },
]

function ExchangeCard({
  exchange,
}: {
  exchange: (typeof exchanges)[number]
}) {
  return (
    <a
      href={exchange.href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'group relative flex w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br p-8 ring-1 ring-neutral-950/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neutral-950/30 sm:p-10',
        exchange.bgGradient,
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      
      {/* Logo/Brand background */}
      <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                <span className="text-4xl">{exchange.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-semibold text-white drop-shadow-lg">
                  {exchange.name}
                </h3>
                <span className="mt-2 inline-block rounded-full bg-white/20 border border-white/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {exchange.badge}
                </span>
              </div>
            </div>
            <p className="mt-6 text-base text-white/90 leading-relaxed drop-shadow-sm">
              {exchange.description}
            </p>
            <div className="mt-6 flex items-center gap-x-2 text-sm font-semibold text-white">
              <span>Đăng ký qua link này để ủng hộ Gemi Trader</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </a>
  )
}

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
        'group relative flex w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br p-6 ring-1 ring-neutral-950/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:p-8',
        social.color,
        social.hoverColor,
      )}
    >
      {/* Background pattern based on platform */}
      {social.bgPattern === 'facebook' && (
        <>
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-32 w-32 rounded-full bg-white/5 blur-xl" />
        </>
      )}
      {social.bgPattern === 'tiktok' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,128,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,242,234,0.3),transparent_50%)]" />
        </>
      )}
      {social.bgPattern === 'youtube' && (
        <>
          <div className="absolute right-0 top-0 -mr-12 -mt-12 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-24 w-24 rounded-full bg-white/10 blur-xl" />
        </>
      )}
      {social.bgPattern === 'telegram' && (
        <>
          <div className="absolute right-0 top-0 -mr-12 -mt-12 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-28 w-28 rounded-full bg-white/10 blur-xl" />
        </>
      )}
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-x-4">
              <div className={clsx(
                'flex h-14 w-14 items-center justify-center rounded-xl backdrop-blur-sm shadow-lg border',
                isDark 
                  ? 'bg-white/20 border-white/30' 
                  : 'bg-white/90 border-white/50'
              )}>
                <span className="text-3xl">{social.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className={clsx(
                  'font-display text-lg font-semibold drop-shadow-sm',
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
              'mt-4 text-sm leading-relaxed drop-shadow-sm',
              isDark ? 'text-white/90' : 'text-neutral-700 dark:text-neutral-200'
            )}>
              {social.description}
            </p>
            <div className={clsx(
              'mt-4 flex items-center gap-x-2 text-xs font-semibold',
              isDark ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-200'
            )}>
              <span>Khám phá ngay</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

function VIPSection() {
  return (
    <div className="relative mt-24 rounded-4xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:mt-32 sm:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 rounded-4xl bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
      
      <Container>
        <FadeIn className="max-w-4xl">
          <div className="relative">
            <div className="flex items-center gap-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 border border-yellow-400/30">
                <span className="text-4xl">⭐</span>
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  Telegram VIP Group
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Hỗ trợ trading chuyên nghiệp
                </p>
              </div>
            </div>
            
            <p className="mt-8 text-xl text-neutral-200 leading-relaxed">
              Tham gia nhóm VIP để nhận hỗ trợ trực tiếp về trading từ Gemi Trader.
              Bạn sẽ được:
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                'Hỗ trợ phân tích thị trường real-time',
                'Tư vấn chiến lược giao dịch cá nhân',
                'Nhận tín hiệu trading chất lượng cao',
                'Thảo luận với cộng đồng trader chuyên nghiệp',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-x-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    ✓
                  </span>
                  <span className="text-base text-neutral-200">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-transparent border border-yellow-500/30 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-x-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="text-base font-semibold text-yellow-400">
                    Yêu cầu tham gia VIP Group:
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    Để được hỗ trợ trong nhóm VIP, bạn cần đăng ký tài khoản qua{' '}
                    <strong className="text-white font-semibold">link ref của Gemi Trader</strong> tại
                    các sàn Exness hoặc Binance. Sau khi đăng ký, vui lòng liên hệ để được
                    thêm vào nhóm VIP.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://t.me/gemitrader_vip"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center overflow-hidden rounded-xl bg-white px-8 py-4 text-base font-semibold text-neutral-950 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10">Tham gia VIP Group</span>
                <span className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                Liên hệ hỗ trợ
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export default function Connect() {
  return (
    <>
      <PageIntro eyebrow="Kết nối" title="Tham gia cùng Gemi Trader">
        <p>
          Đăng ký tài khoản qua link ref của Gemi Trader để ủng hộ và nhận được
          hỗ trợ tốt nhất. Kết nối với chúng tôi trên các nền tảng để không bỏ lỡ
          những thông tin trading mới nhất.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              Đăng ký tài khoản sàn giao dịch
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-200 max-w-2xl mx-auto lg:mx-0">
              Đăng ký qua link ref của Gemi Trader để ủng hộ và nhận được hỗ trợ tốt
              nhất từ chúng tôi. Mỗi đăng ký giúp chúng tôi tiếp tục tạo nội dung chất lượng.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {exchanges.map((exchange) => (
            <FadeIn key={exchange.name}>
              <ExchangeCard exchange={exchange} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              Kết nối mạng xã hội
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-200 max-w-2xl mx-auto lg:mx-0">
              Theo dõi Gemi Trader trên các nền tảng để nhận thông tin, tips trading
              mới nhất và không bỏ lỡ bất kỳ cơ hội nào.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((social) => (
            <FadeIn key={social.name}>
              <SocialCard social={social} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <VIPSection />

      <ContactSection />
    </>
  )
}

