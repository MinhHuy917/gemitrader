import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import QuotesShowcase from '@/components/Quotes'
import SocialPosts from '@/components/SocialPosts'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

const libraryHighlights = [
  {
    title: 'Trading in the Zone – Bản dịch ghi chú',
    detail: 'PDF tiếng Việt + checklist mindset',
    format: 'PDF · 12MB',
    image: imageWhiteboard,
    link: '/library',
  },
  {
    title: 'Playbook Breakout & Pullback',
    detail: 'Slide mô tả setup ưa thích + checklist',
    format: 'PPTX · 25MB',
    image: imageLaptop,
    link: '/library',
  },
  {
    title: 'Risk Manager 2% Rule',
    detail: 'Excel tự động tính khối lượng lệnh',
    format: 'XLSX · 2MB',
    image: imageMeeting,
    link: '/library',
  },
]

const brokerLinks = [
  {
    name: 'Exness',
    description:
      'Đăng ký qua link chính thức của Gemi Trader để nhận hướng dẫn thiết lập tài khoản, chiến lược ưu tiên và tham gia nhóm hỗ trợ riêng.',
    cta: 'Mở tài khoản Exness',
    href: 'https://www.exness.com/',
  },
  {
    name: 'Binance',
    description:
      'Nhận bộ tài liệu quản lý vốn cho crypto futures + quyền truy cập nhóm tín hiệu khi xác minh tài khoản Binance thành công.',
    cta: 'Mở tài khoản Binance',
    href: 'https://www.binance.com/',
  },
]

export const metadata: Metadata = {
  description:
    'Gemi Trader – chia sẻ chiến lược, nhật ký giao dịch và thư viện tài liệu trading miễn phí.',
}

function InsightsPreview({ articles }: { articles: Awaited<ReturnType<typeof loadArticles>> }) {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Blog mới nhất</p>
        <h2 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
          Bản tin thị trường & góc nhìn giao dịch
        </h2>
        <p className="max-w-3xl text-base text-neutral-600">
          Những bài viết ngắn giúp bạn cập nhật cơ hội, tâm lý và hệ thống giao dịch mà tôi đang sử dụng.
          Toàn bộ bài viết đều được SEO chuẩn để bạn dễ dàng chia sẻ lại cho cộng đồng.
        </p>
      </div>
      <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <FadeIn key={article.href}>
            <article className="flex h-full flex-col rounded-[32px] bg-white px-6 py-7 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {formatDate(article.date).toUpperCase()}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                <Link href={article.href}>{article.title}</Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{article.description}</p>
              <div className="mt-5 flex items-center gap-3 text-sm text-neutral-500">
                <Image
                  alt={article.author.name}
                  {...article.author.image}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900">{article.author.name}</p>
                  <p>{article.author.role}</p>
                </div>
              </div>
              <Button href={article.href} className="mt-6 w-fit" aria-label={`Đọc: ${article.title}`}>
                Đọc bài viết
              </Button>
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>
    </section>
  )
}

function LibraryPreview() {
  return (
    <section className="mt-24 rounded-4xl border border-neutral-200 bg-white/90 p-8 shadow-xl shadow-primary/10 sm:mt-32 lg:mt-40">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Thư viện tải miễn phí</p>
        <h2 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
          Ebook, slide và template quản lý vốn
        </h2>
        <p className="max-w-3xl text-base text-neutral-600">
          Tổng hợp tài nguyên mà tôi thường nhắc trên các buổi livestream. Bạn có thể tải ngay và áp dụng vào hệ thống giao dịch của mình.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {libraryHighlights.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-44 overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 25vw, 100vw"
                placeholder="blur"
              />
            </div>
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              {item.format}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-neutral-950">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm text-neutral-600">{item.detail}</p>
            <Button href={item.link} className="mt-4 w-fit">
              Tải tài liệu
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}

function BrokerCTA() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Nhóm hỗ trợ Gemi Trader</p>
        <h2 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
          Đăng ký Exness / Binance để vào nhóm coaching
        </h2>
        <p className="max-w-3xl text-base text-neutral-600">
          Hoàn tất đăng ký qua link dưới đây, gửi mã UID cho đội ngũ hỗ trợ, bạn sẽ nhận được quyền truy cập nhóm tín hiệu Telegram + buổi coaching hàng tuần.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {brokerLinks.map((broker) => (
          <article
            key={broker.name}
            className="flex flex-col rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-white to-neutral-50 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.05)]"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{broker.name}</div>
            <h3 className="mt-3 text-2xl font-semibold text-neutral-950">
              Tham gia nhóm hỗ trợ {broker.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{broker.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-neutral-500">
              <span>Ưu tiên khớp lệnh</span>
              <span>Checklist quản lý vốn</span>
              <span>Nhóm tín hiệu riêng</span>
            </div>
            <Button href={broker.href} className="mt-6 w-fit" target="_blank" rel="noreferrer">
              {broker.cta}
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default async function Home() {
  const articles = (await loadArticles()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Gemi Trader
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Tôi là một trader chuyên nghiệp với hơn 7 năm kinh nghiệm trong lĩnh vực giao dịch.
          </p>
        </FadeIn>
      </Container>
      <div className="mt-16 sm:mt-24 lg:mt-28">
        <QuotesShowcase />
      </div>

      <Container>
        <InsightsPreview articles={articles} />
        <SocialPosts />
        <LibraryPreview />
        <BrokerCTA />
      </Container>

      <ContactSection />
    </>
  )
}
