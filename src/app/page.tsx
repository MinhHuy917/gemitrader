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
    icon: '📈',
    gradient: 'from-[#003d82] via-[#0052a3] to-[#0066cc]',
  },
  {
    name: 'Binance',
    description:
      'Nhận bộ tài liệu quản lý vốn cho crypto futures + quyền truy cập nhóm tín hiệu khi xác minh tài khoản Binance thành công.',
    cta: 'Mở tài khoản Binance',
    href: 'https://www.binance.com/',
    icon: '₿',
    gradient: 'from-[#f3ba2f] via-[#f0b90b] to-[#f3ba2f]',
  },
]

export const metadata: Metadata = {
  description:
    'Gemi Trader – chia sẻ chiến lược, nhật ký giao dịch và thư viện tài liệu trading miễn phí.',
}

function AboutPreview() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeIn>
          <div className="rounded-4xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 p-8 shadow-xl shadow-primary/10 sm:p-12 lg:p-16">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary dark:text-primary-400">Về tôi</p>
              <h2 className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              Hành trình hơn 7 năm cùng thị trường tài chính
              </h2>
              <p className="max-w-3xl text-base text-neutral-600 dark:text-white">
              Mình là Gemi — một trader đã gắn bó với thị trường tài chính hơn 7 năm, bắt đầu từ những ngày đầu đầy mơ hồ, thiếu kinh nghiệm và không ít lần thất bại. Hành trình từ một người mới bước chân vào thị trường đến khi có thể sống cùng trading đã mang lại cho mình nhiều bài học đắt giá, không chỉ về chiến lược giao dịch mà còn về tâm lý và cách hiểu chính bản thân mình.
              </p>
            </div>
            {/* <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col">
                <div className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">8+</div>
                <div className="mt-2 text-base text-neutral-600 dark:text-white">Tám kinh nghiệm trading</div>
              </div>
              <div className="flex flex-col">
                <div className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">Thực chiến</div>
                <div className="mt-2 text-base text-neutral-600 dark:text-white">Thị trường forex & crypto</div>
              </div>
              <div className="flex flex-col">
                <div className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">Chia sẻ</div>
                <div className="mt-2 text-base text-neutral-600 dark:text-white">Thứ còn lại sau sai lầmn</div>
              </div>
            </div> */}
            <div className="mt-8 space-y-4 text-base dark:text-white">
              <p>
                Sau nhiều năm trading, mình nhận ra rằng <strong className="text-neutral-950 dark:text-neutral-50">kiến thức chỉ có giá trị khi được chia sẻ.</strong> 
                {' '}  Website này được tạo ra với mục đích gieo duyên và chia sẻ - chia sẻ những gì mình đã học được, 
                những sai lầm mình đã mắc phải, và những bài học quý giá mà mình đã tích lũy qua hơn 7 năm trong thị trường.
              </p>
              <p>
                Mình không hứa hẹn bạn sẽ trở thành triệu phú sau khi đọc blog hay tham gia khóa học. 
                Nhưng mình cam kết sẽ chia sẻ với bạn những kiến thức thực tế, những chiến lược đã được kiểm chứng, 
                và quan trọng nhất - <strong className="text-neutral-950 dark:text-neutral-50">cách tư duy đúng đắn về trading</strong>.
              </p>
            </div>
            <Button href="/about" className="mt-8 w-fit">
              Đọc thêm về mình
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function InsightsPreview({ articles }: { articles: Awaited<ReturnType<typeof loadArticles>> }) {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary dark:text-primary-400">Blog mới nhất</p>
        <h2 className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
          Góc nhận định thị trường hằng tuần
        </h2>
        <p className="max-w-3xl text-base text-neutral-600 dark:text-white">
          Những bài viết ngắn giúp bạn cập nhật cơ hội, tâm lý và hệ thống giao dịch mà tôi đang sử dụng.
          Toàn bộ bài viết đều được SEO chuẩn để bạn dễ dàng chia sẻ lại cho cộng đồng.
        </p>
      </div>
      <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <FadeIn key={article.href}>
            <article className="flex h-full flex-col rounded-[32px] bg-white dark:bg-neutral-900 px-6 py-7 shadow-[0_25px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
                {formatDate(article.date).toUpperCase()}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                <Link href={article.href} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">{article.title}</Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-white">{article.description}</p>
              <div className="mt-5 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                <Image
                  alt={article.author.name}
                  {...article.author.image}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">{article.author.name}</p>
                  <p className="text-neutral-500 dark:text-neutral-400">{article.author.role}</p>
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
    <section className="mt-24 rounded-4xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 p-8 shadow-xl shadow-primary/10 sm:mt-32 lg:mt-40">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary dark:text-primary-400">Thư viện tải miễn phí</p>
        <h2 className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
          Ebook, slide và template quản lý vốn
        </h2>
        <p className="max-w-3xl text-base text-neutral-600 dark:text-white">
          Tổng hợp tài nguyên mà tôi thường nhắc trên các buổi livestream. Bạn có thể tải ngay và áp dụng vào hệ thống giao dịch của mình.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {libraryHighlights.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-3xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-white">
              {item.format}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-neutral-950 dark:text-neutral-50">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm text-neutral-600 dark:text-neutral-200">{item.detail}</p>
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
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary dark:text-primary-400">Nhóm VIP Gemi Trader</p>
        <h2 className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
          Tham gia nhóm VIP - Hỗ trợ trading chuyên nghiệp
        </h2>
        <p className="max-w-3xl text-base text-neutral-600 dark:text-neutral-200">
          Đăng ký tài khoản qua link ref của Gemi Trader tại Exness hoặc Binance, nạp tối thiểu $200, 
          và nhận quyền truy cập nhóm VIP với hỗ trợ trading chuyên nghiệp, tín hiệu chất lượng cao và cộng đồng trader chuyên nghiệp.
        </p>
      </div>
      
      {/* Steps */}
      <div className="mt-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 p-8 shadow-lg sm:p-10">
        <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-neutral-50 mb-6">Các bước tham gia nhóm VIP:</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl bg-white dark:bg-neutral-900 p-5 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 text-white dark:text-neutral-950 font-bold text-lg">
              1
            </div>
            <div>
              <h4 className="font-semibold text-neutral-950 dark:text-neutral-50">Đăng ký tài khoản</h4>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-200">Chọn một trong hai sàn Exness hoặc Binance và đăng ký qua link ref của Gemi Trader</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl bg-white dark:bg-neutral-900 p-5 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 text-white dark:text-neutral-950 font-bold text-lg">
              2
            </div>
            <div>
              <h4 className="font-semibold text-neutral-950 dark:text-neutral-50">Nạp tối thiểu $200</h4>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-200">Nạp tối thiểu $200 vào tài khoản để đảm bảo bạn sẵn sàng bắt đầu trading</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl bg-white dark:bg-neutral-900 p-5 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-950 to-neutral-800 dark:from-neutral-50 dark:to-neutral-100 text-white dark:text-neutral-950 font-bold text-lg">
              3
            </div>
            <div>
              <h4 className="font-semibold text-neutral-950 dark:text-neutral-50">Nhắn tin cho Gemi</h4>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-200">Gửi mã UID và thông tin tài khoản để được thêm vào nhóm VIP Telegram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Broker Cards */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {brokerLinks.map((broker) => (
          <article
            key={broker.name}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${broker.gradient.includes('from-') ? 'var(--gradient)' : 'transparent'})`,
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${broker.gradient} opacity-95`} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                  <span className="text-4xl">{broker.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display text-2xl font-semibold text-white drop-shadow-lg">
                      {broker.name}
                    </h3>
                    <span className="rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-bold text-neutral-950 uppercase tracking-wide">
                      VIP
                    </span>
                  </div>
                  <p className="text-base text-white/90 leading-relaxed drop-shadow-sm">
                    {broker.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                    <span>Đăng ký ngay để vào nhóm VIP</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <Button 
                    href={broker.href} 
                    className="mt-6 w-fit bg-white text-neutral-950 hover:bg-neutral-100" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    {broker.cta}
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>

      {/* Benefits */}
      <div className="mt-10 rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-950 to-neutral-900 p-8 text-white sm:p-10">
        <h3 className="font-display text-2xl font-semibold mb-6">Lợi ích khi tham gia nhóm VIP:</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Tín hiệu trading chất lượng cao, được phân tích kỹ lưỡng',
            'Hỗ trợ phân tích thị trường real-time từ Gemi Trader',
            'Tư vấn chiến lược giao dịch cá nhân hóa',
            'Thảo luận với cộng đồng trader chuyên nghiệp',
            'Nhận checklist quản lý vốn và risk management',
            'Ưu tiên khớp lệnh và hỗ trợ kỹ thuật 24/7',
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400 font-bold">
                ✓
              </span>
              <span className="text-base text-neutral-200">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-transparent border border-yellow-500/30 p-6 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💬</span>
            <div>
              <p className="text-base font-semibold text-yellow-400">
                Sau khi đăng ký và nạp tối thiểu $200:
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Gửi mã UID và screenshot nạp tiền cho Gemi Trader qua Telegram hoặc Facebook để được thêm vào nhóm VIP ngay lập tức.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default async function Home() {
  const articles = (await loadArticles()).slice(0, 3)

  return (
    <>
      <AboutPreview />

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
