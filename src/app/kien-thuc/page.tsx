import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Kiến thức',
  description:
    'Tổng hợp tài liệu, video ngắn và nội dung nền tảng giúp bạn xây dựng hệ thống trading vững chắc.',
}

const knowledgeSections = [
  {
    id: 'co-ban',
    title: 'Kiến thức trading cơ bản',
    description:
      'Các khái niệm nền tảng: thị trường hoạt động thế nào, quản lý rủi ro, cách đọc biểu đồ và xây dựng tư duy đúng ngay từ đầu.',
    href: '/kien-thuc#co-ban',
    cta: 'Bắt đầu từ cơ bản',
    badge: 'Cơ bản',
  },
  {
    id: 'thu-vien',
    title: 'Thư viện tài liệu',
    description:
      'Tài liệu PDF, checklist, template quản lý rủi ro và hệ thống giao dịch để bạn tải về và áp dụng ngay.',
    href: '/library',
    cta: 'Xem thư viện',
    badge: 'Tài liệu',
  },
  {
    id: 'trading-shorts',
    title: 'Trading Shorts',
    description:
      'Video/ngắn và note nhanh về các góc nhìn thị trường, setup tiêu biểu và mẹo tối ưu lệnh.',
    href: '/trading-shorts',
    cta: 'Xem Trading Shorts',
    badge: 'Thực chiến',
  },
]

export default function Knowledge() {
  return (
    <>
      <PageIntro eyebrow="Kiến thức" title="Nền tảng vững chắc cho hành trình trading">
        <p>
          Một nơi để bạn bắt đầu và ôn lại các nguyên tắc cốt lõi trong trading: từ kiến thức nền,
          tài liệu thực hành cho đến các chia sẻ nhanh theo thị trường.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24 lg:mt-32">
        <FadeInStagger className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {knowledgeSections.map((section) => (
            <FadeIn key={section.title}>
              <article
                id={section.id}
                className="relative flex h-full flex-col rounded-3xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm shadow-neutral-200/60 transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950/80 dark:shadow-black/40 dark:hover:border-neutral-700"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100/40 via-transparent to-blue-100/40 opacity-70 mix-blend-luminosity dark:from-amber-500/10 dark:via-transparent dark:to-blue-500/10" />
                <div className="relative flex flex-1 flex-col">
                  <div className="inline-flex w-fit items-center rounded-full border border-amber-200/70 bg-amber-50/70 px-3 py-1 text-xs font-semibold text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300">
                    {section.badge}
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                    {section.description}
                  </p>
                  <div className="mt-6">
                    <Button href={section.href}>{section.cta}</Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}


