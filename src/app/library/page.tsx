import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import imageLaptop from '@/images/laptop.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageTeam from '@/images/team/chelsea-hagon.jpg'

export const metadata: Metadata = {
  title: 'Thư viện',
  description:
    'Kho tài nguyên giao dịch miễn phí: ebook, báo cáo, template quản lý vốn và poster kiến thức trading.',
}

type LibraryResource = {
  title: string
  description: string
  format: string
  size: string
  link: string
}

type LibraryCollection = {
  id: string
  badge: string
  title: string
  description: string
  thumbnail: StaticImageData
  resources: LibraryResource[]
}

const collections: LibraryCollection[] = [
  {
    id: 'books',
    badge: 'Sách & Ebook',
    title: 'Tài liệu đọc sâu để thay đổi tư duy trading',
    description:
      'Những cuốn ebook tôi biên tập lại từ ghi chú cá nhân, tập trung vào quản trị cảm xúc, price action và tư duy hệ thống.',
    thumbnail: imageWhiteboard,
    resources: [
      {
        title: 'Trading in the Zone – Bản dịch ghi chú',
        description: 'PDF tiếng Việt + checklist mindset sau mỗi chương',
        format: 'PDF',
        size: '12 MB',
        link: '#',
      },
      {
        title: 'Price Action Blueprint',
        description: 'Ebook tiếng Anh + sơ đồ mô hình giá quan trọng',
        format: 'EPUB',
        size: '18 MB',
        link: '#',
      },
    ],
  },
  {
    id: 'reports',
    badge: 'Báo cáo & Slide',
    title: 'Phân tích chuyên sâu và báo cáo độc quyền',
    description:
      'Báo cáo PDF và slide backtest giúp bạn cập nhật bối cảnh vĩ mô, chiến lược xác suất cao và cách tôi triển khai trong tài khoản thực tế.',
    thumbnail: imageLaptop,
    resources: [
      {
        title: 'Weekly Macro Outlook',
        description: '10 trang điểm lại các vùng cung cầu, dữ liệu kinh tế chính',
        format: 'PDF',
        size: '6 MB',
        link: '#',
      },
      {
        title: 'Playbook Breakout & Pullback',
        description: 'Slide minh họa setup ưa thích + checklist điều kiện thị trường',
        format: 'Keynote / PPTX',
        size: '25 MB',
        link: '#',
      },
    ],
  },
  {
    id: 'tools',
    badge: 'Excel & Framework',
    title: 'Bộ công cụ hành động ngay',
    description:
      'Mẫu Excel, Notion và framework tâm lý giúp bạn quản lý vốn, tracking lệnh và giữ kỷ luật.',
    thumbnail: imageMeeting,
    resources: [
      {
        title: 'Risk Manager 2% Rule',
        description: 'Excel auto tính khối lượng lệnh theo % rủi ro và đòn bẩy',
        format: 'XLSX',
        size: '2 MB',
        link: '#',
      },
      {
        title: 'Daily Trade Journal (Notion)',
        description: 'Template ghi chép trade + tracker cảm xúc',
        format: 'PDF',
        size: '4 MB',
        link: '#',
      },
    ],
  },
  {
    id: 'visuals',
    badge: 'Hình ảnh & Truyện tranh',
    title: 'Poster & hình ảnh ghi nhớ nhanh',
    description:
      'Cheatsheet cấu trúc thị trường, flashcard nến Nhật và quote truyền cảm hứng dành riêng cho trader.',
    thumbnail: imageTeam,
    resources: [
      {
        title: 'Market Structure Cheat Sheet',
        description: 'Ảnh PNG độ phân giải cao: BOS, CHoCH, vùng thanh khoản',
        format: 'JPG',
        size: '8 MB',
        link: '#',
      },
      {
        title: 'Candlestick Flashcards',
        description: 'PDF in ra được, gồm 24 mẫu nến quan trọng + ghi chú',
        format: 'PDF',
        size: '30 MB',
        link: '#',
      },
    ],
  },
]

const stats = [
  { label: 'Tài nguyên miễn phí', value: '40+', detail: 'PDF, EPUB, slide, ảnh trading' },
  { label: 'Lượt tải mỗi tháng', value: '3.2K', detail: 'Trader & nhà đầu tư' },
  { label: 'Cập nhật định kỳ', value: 'Hàng tuần', detail: 'Thứ Hai và Thứ Sáu' },
]

function ResourceCard({ resource }: { resource: LibraryResource }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          {resource.format} • {resource.size}
        </p>
        <h4 className="text-lg font-semibold text-neutral-900">{resource.title}</h4>
        <p className="text-sm text-neutral-600">{resource.description}</p>
      </div>
      <Button href={resource.link} className="mt-6 w-full" aria-label={`Tải ${resource.title}`}>
        Tải ngay
      </Button>
    </div>
  )
}

export default function Library() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-white to-primary/10" />
        <PageIntro eyebrow="Thư viện" title="Kho tài nguyên tải về miễn phí">
          <p>
            Tôi sắp xếp lại toàn bộ ebook, báo cáo thị trường, template quản lý vốn và poster kiến thức đã chia sẻ trên kênh riêng,
            giúp bạn tải nhanh và áp dụng trực tiếp cho hành trình trading của mình.
          </p>
        </PageIntro>

        <Container className="mt-16">
          <div className="grid gap-6 rounded-3xl border border-neutral-200 bg-white/70 p-8 shadow-lg shadow-primary/10 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-neutral-100 pl-6 first:border-none first:pl-0">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-semibold text-neutral-950">{stat.value}</p>
                <p className="mt-1 text-sm text-neutral-600">{stat.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="mt-24 space-y-16 sm:mt-32 lg:mt-40">
        {collections.map((collection) => (
          <FadeIn key={collection.id}>
            <section className="grid gap-8 rounded-4xl border border-neutral-100 bg-white/90 p-8 shadow-xl shadow-neutral-900/5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {collection.badge}
                </span>
                <h2 className="font-display text-3xl font-semibold text-neutral-950">{collection.title}</h2>
                <p className="text-base leading-relaxed text-neutral-600">{collection.description}</p>
                <div className="relative h-48 overflow-hidden rounded-3xl">
                  <Image
                    src={collection.thumbnail}
                    alt={collection.title}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    placeholder="blur"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/20" />
                </div>
              </div>
              <div className="space-y-5">
                {collection.resources.map((resource) => (
                  <ResourceCard key={`${collection.id}-${resource.title}`} resource={resource} />
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
      </Container>

      <ContactSection />
    </>
  )
}







