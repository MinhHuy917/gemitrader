'use client'

import { useEffect, useRef, useState } from 'react'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

type TradingShort = {
  id: string
  title: string
  topic: string
  level: string
  duration: string
  description: string
  videoUrl: string
}

const shorts: TradingShort[] = [
  {
    id: 'price-action-fakeout',
    title: 'Nhận diện fakeout đơn giản trong vùng kháng cự',
    topic: 'Price Action',
    level: 'Cơ bản',
    duration: '0:45',
    description:
      'Cách nhìn nhanh cấu trúc nến để tránh bị quét stoploss khi giá phá vỡ giả.',
    // Demo video nguồn public (Google sample)
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
  {
    id: 'risk-1-percent',
    title: 'Quy tắc 1%: cách không cháy tài khoản',
    topic: 'Quản lý vốn',
    level: 'Cơ bản',
    duration: '0:38',
    description:
      'Giải thích nhanh tại sao chỉ nên rủi ro 1% tài khoản cho mỗi lệnh giao dịch.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: 'london-session-plan',
    title: 'Checklist 5 bước trước phiên London',
    topic: 'Trading plan',
    level: 'Trung cấp',
    duration: '0:52',
    description:
      'Cách mình chuẩn bị trước khi phiên London mở cửa để không bị FOMO.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    id: 'crypto-funding',
    title: 'Funding rate crypto nói gì về tâm lý thị trường?',
    topic: 'Crypto',
    level: 'Trung cấp',
    duration: '0:41',
    description:
      'Tóm tắt cách dùng funding rate để tránh long/short ngược phía đám đông.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  },
]

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}

export default function TradingShortsPage() {
  const [orderedShorts, setOrderedShorts] = useState<TradingShort[]>(shorts)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const isRequestingFullscreen = useRef(false)

  useEffect(() => {
    setOrderedShorts(shuffle(shorts))
  }, [])

  function toggleFullscreen() {
    const el = scrollRef.current
    if (!el) return

    if (!document.fullscreenElement && el.requestFullscreen && !isRequestingFullscreen.current) {
      isRequestingFullscreen.current = true
      el
        .requestFullscreen()
        .catch(() => {
          // ignore
        })
        .finally(() => {
          isRequestingFullscreen.current = false
        })
      return
    }

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {
        // ignore
      })
    }
  }

  // Simple keyboard navigation (↑ / ↓) giữa các video
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!scrollRef.current) return
      const container = scrollRef.current
      const step = container.clientHeight

      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault()
        container.scrollBy({ top: step, behavior: 'smooth' })
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        container.scrollBy({ top: -step, behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <PageIntro eyebrow="Trading Shorts" title="Video ngắn về trading & thị trường tài chính">
        <p>
          Bộ sưu tập video ngắn dạng TikTok: mỗi video tập trung vào một ý chính về trading, quản
          lý vốn, tâm lý và thị trường. Lướt dọc để xem ngẫu nhiên, mỗi lần một video toàn màn
          hình.
        </p>
      </PageIntro>

      <div className="mt-6 pb-12 sm:mt-10 lg:mt-12">
        <Container>
          <FadeIn>
            <div
              ref={scrollRef}
              className="relative h-[calc(100vh-220px)] overflow-y-auto rounded-3xl border border-neutral-200 bg-neutral-900/95 shadow-xl shadow-neutral-900/40 snap-y snap-mandatory dark:border-neutral-800"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.2),transparent_55%)] opacity-70" />

              <div className="relative z-10 h-full">
                {orderedShorts.map((short) => (
                  <section
                    key={short.id}
                    className="flex h-full min-h-[calc(100vh-220px)] snap-start items-center justify-center px-4 py-6 sm:px-6"
                  >
                    <div
                      className="flex h-full max-h-[720px] w-full max-w-[420px] flex-col rounded-[32px] bg-neutral-950/90 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.7)] ring-1 ring-white/5"
                      onClick={toggleFullscreen}
                    >
                      {/* Video frame */}
                      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-black">
                        <video
                          src={short.videoUrl}
                          className="h-full w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                        />

                        {/* Overlay gradient & info */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 text-left text-neutral-50">
                          <h2 className="text-base font-semibold leading-snug">{short.title}</h2>
                          <p className="text-xs text-neutral-200 line-clamp-2">
                            {short.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  )
}


