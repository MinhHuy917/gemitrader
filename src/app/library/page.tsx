import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Thư viện',
  description:
    'Thư viện tài liệu, sách, video và các nguồn tài liệu hữu ích về trading và đầu tư tài chính.',
}

const libraryItems = [
  {
    id: 1,
    title: 'Sách: Trading trong vùng',
    author: 'Mark Douglas',
    type: 'Sách',
    category: 'Tâm lý Trading',
    description:
      'Cuốn sách kinh điển về tâm lý trading, giúp bạn hiểu cách kiểm soát cảm xúc và phát triển mindset đúng đắn trong giao dịch.',
  },
  {
    id: 2,
    title: 'Video: Phân tích kỹ thuật cơ bản',
    type: 'Video',
    category: 'Phân tích kỹ thuật',
    duration: '2h 30m',
    description:
      'Video hướng dẫn chi tiết về các chỉ báo kỹ thuật cơ bản như MACD, RSI, Bollinger Bands và cách áp dụng vào thực tế.',
  },
  {
    id: 3,
    title: 'Ebook: Chiến lược giao dịch theo xu hướng',
    author: 'Gemi Trader',
    type: 'Ebook',
    category: 'Chiến lược',
    description:
      'Ebook miễn phí về các chiến lược giao dịch theo xu hướng, bao gồm cách xác định xu hướng và điểm vào lệnh tối ưu.',
  },
  {
    id: 4,
    title: 'Podcast: Phỏng vấn trader chuyên nghiệp',
    type: 'Podcast',
    category: 'Kinh nghiệm',
    duration: '45m',
    description:
      'Podcast chia sẻ kinh nghiệm từ các trader chuyên nghiệp, những bài học quý giá và cách họ quản lý rủi ro.',
  },
  {
    id: 5,
    title: 'Template: Kế hoạch giao dịch mẫu',
    type: 'Template',
    category: 'Công cụ',
    description:
      'Template Excel để lập kế hoạch giao dịch, theo dõi lợi nhuận và phân tích hiệu suất trading của bạn.',
  },
  {
    id: 6,
    title: 'Sách: Nến Nhật từ A đến Z',
    author: 'Steve Nison',
    type: 'Sách',
    category: 'Phân tích kỹ thuật',
    description:
      'Cuốn sách toàn diện về biểu đồ nến Nhật, từ các mẫu cơ bản đến nâng cao, với nhiều ví dụ thực tế.',
  },
]

function LibraryCard({
  item,
}: {
  item: (typeof libraryItems)[number]
}) {
  return (
    <article className="relative flex w-full flex-col rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100 sm:p-8">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-x-2">
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700">
              {item.type}
            </span>
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700">
              {item.category}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
            {item.title}
          </h3>
          {item.author && (
            <p className="mt-2 text-sm text-neutral-600">Tác giả: {item.author}</p>
          )}
          {item.duration && (
            <p className="mt-1 text-sm text-neutral-600">Thời lượng: {item.duration}</p>
          )}
          <p className="mt-4 text-base text-neutral-600">{item.description}</p>
        </div>
      </div>
      <Button
        href={`/library/${item.id}`}
        aria-label={`Xem chi tiết: ${item.title}`}
        className="mt-6"
      >
        Xem chi tiết
      </Button>
    </article>
  )
}

export default function Library() {
  return (
    <>
      <PageIntro eyebrow="Thư viện" title="Tài liệu và nguồn học tập">
        <p>
          Khám phá thư viện tài liệu phong phú bao gồm sách, video, ebook, podcast
          và các công cụ hữu ích để nâng cao kỹ năng trading của bạn.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {libraryItems.map((item) => (
            <FadeIn key={item.id}>
              <LibraryCard item={item} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <ContactSection />
    </>
  )
}

