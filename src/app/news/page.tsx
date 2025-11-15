import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'News',
  description:
    'Tin tức mới nhất về thị trường tài chính, phân tích kỹ thuật và các sự kiện quan trọng trong trading.',
}

const newsItems = [
  {
    id: 1,
    title: 'Thị trường chứng khoán tăng mạnh sau báo cáo kinh tế tích cực',
    date: '2024-01-15',
    category: 'Thị trường',
    description:
      'Chỉ số VN-Index tăng 2.5% sau khi có báo cáo tích cực về tăng trưởng kinh tế quý 4. Các nhà đầu tư đang kỳ vọng vào triển vọng tích cực trong năm 2024.',
  },
  {
    id: 2,
    title: 'Phân tích kỹ thuật: Bitcoin vượt ngưỡng kháng cự quan trọng',
    date: '2024-01-14',
    category: 'Crypto',
    description:
      'Bitcoin đã phá vỡ ngưỡng kháng cự tại $45,000, mở ra cơ hội tăng giá tiếp theo. Các nhà phân tích kỳ vọng giá có thể chạm mốc $50,000 trong tuần tới.',
  },
  {
    id: 3,
    title: 'Fed giữ nguyên lãi suất, thị trường phản ứng tích cực',
    date: '2024-01-13',
    category: 'Kinh tế',
    description:
      'Cục Dự trữ Liên bang Mỹ quyết định giữ nguyên lãi suất ở mức hiện tại, phù hợp với kỳ vọng của thị trường. Điều này tạo điều kiện thuận lợi cho các tài sản rủi ro.',
  },
  {
    id: 4,
    title: 'Hướng dẫn phân tích biểu đồ nến Nhật cho người mới bắt đầu',
    date: '2024-01-12',
    category: 'Học tập',
    description:
      'Bài viết chi tiết về cách đọc và phân tích biểu đồ nến Nhật, một công cụ quan trọng trong trading. Bao gồm các mẫu nến cơ bản và cách áp dụng vào thực tế.',
  },
]

export default function News() {
  return (
    <>
      <PageIntro eyebrow="News" title="Tin tức mới nhất về trading">
        <p>
          Cập nhật tin tức mới nhất về thị trường tài chính, phân tích kỹ thuật
          và các sự kiện quan trọng ảnh hưởng đến trading.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {newsItems.map((item) => (
            <FadeIn key={item.id}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <div className="flex items-center gap-x-4 text-sm text-neutral-600">
                        <span className="font-semibold text-neutral-950">
                          {item.category}
                        </span>
                        <span className="text-neutral-300" aria-hidden="true">
                          /
                        </span>
                        <time dateTime={item.date}>
                          {new Date(item.date).toLocaleDateString('vi-VN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                        {item.title}
                      </h2>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {item.description}
                      </p>
                      <Button
                        href={`/news/${item.id}`}
                        aria-label={`Đọc thêm: ${item.title}`}
                        className="mt-8"
                      >
                        Đọc thêm
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection />
    </>
  )
}

