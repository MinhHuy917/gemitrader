import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Khoá Học',
  description:
    'Các khoá học trading từ cơ bản đến nâng cao, được thiết kế bởi các chuyên gia có nhiều năm kinh nghiệm.',
}

const courses = [
  {
    id: 1,
    title: 'Trading cho người mới bắt đầu',
    level: 'Cơ bản',
    duration: '8 tuần',
    price: '2,500,000 VNĐ',
    instructor: 'Gemi Trader',
    description:
      'Khoá học toàn diện dành cho người mới bắt đầu, bao gồm các khái niệm cơ bản về thị trường tài chính, cách đọc biểu đồ và thực hành giao dịch.',
    topics: [
      'Giới thiệu về thị trường tài chính',
      'Cách đọc biểu đồ giá',
      'Các chỉ báo kỹ thuật cơ bản',
      'Quản lý rủi ro',
      'Thực hành trên tài khoản demo',
    ],
  },
  {
    id: 2,
    title: 'Phân tích kỹ thuật nâng cao',
    level: 'Nâng cao',
    duration: '10 tuần',
    price: '4,500,000 VNĐ',
    instructor: 'Gemi Trader',
    description:
      'Khoá học chuyên sâu về phân tích kỹ thuật, bao gồm các mẫu biểu đồ phức tạp, chiến lược giao dịch và cách tối ưu hóa điểm vào/ra lệnh.',
    topics: [
      'Mẫu biểu đồ nâng cao',
      'Fibonacci và sóng Elliott',
      'Chiến lược giao dịch đa khung thời gian',
      'Tối ưu hóa điểm vào/ra',
      'Backtesting và forward testing',
    ],
  },
  {
    id: 3,
    title: 'Tâm lý học trong Trading',
    level: 'Trung cấp',
    duration: '6 tuần',
    price: '3,000,000 VNĐ',
    instructor: 'Gemi Trader',
    description:
      'Hiểu rõ về tâm lý học trading, cách kiểm soát cảm xúc, xây dựng kỷ luật và phát triển mindset của một trader chuyên nghiệp.',
    topics: [
      'Tâm lý thị trường',
      'Kiểm soát cảm xúc',
      'Xây dựng kỷ luật trading',
      'Quản lý stress',
      'Phát triển hệ thống giao dịch cá nhân',
    ],
  },
  {
    id: 4,
    title: 'Giao dịch Crypto chuyên nghiệp',
    level: 'Trung cấp',
    duration: '8 tuần',
    price: '3,500,000 VNĐ',
    instructor: 'Gemi Trader',
    description:
      'Khoá học chuyên về giao dịch cryptocurrency, bao gồm cách phân tích thị trường crypto, các chiến lược đặc thù và quản lý rủi ro.',
    topics: [
      'Đặc điểm thị trường crypto',
      'Phân tích on-chain metrics',
      'Chiến lược giao dịch crypto',
      'Quản lý rủi ro trong crypto',
      'Staking và DeFi',
    ],
  },
  {
    id: 5,
    title: 'Algorithmic Trading',
    level: 'Nâng cao',
    duration: '12 tuần',
    price: '6,000,000 VNĐ',
    instructor: 'Gemi Trader',
    description:
      'Học cách xây dựng và triển khai các chiến lược giao dịch tự động sử dụng Python và các công cụ trading hiện đại.',
    topics: [
      'Lập trình Python cho trading',
      'Xây dựng trading bot',
      'Backtesting với dữ liệu thực',
      'Machine Learning trong trading',
      'Triển khai và monitoring',
    ],
  },
  {
    id: 6,
    title: 'Quản lý danh mục đầu tư',
    level: 'Trung cấp',
    duration: '6 tuần',
    price: '2,800,000 VNĐ',
    instructor: 'Gemi Trader',
    description:
      'Học cách xây dựng và quản lý danh mục đầu tư đa dạng, phân bổ tài sản và tối ưu hóa lợi nhuận/rủi ro.',
    topics: [
      'Phân bổ tài sản',
      'Đa dạng hóa danh mục',
      'Quản lý rủi ro danh mục',
      'Rebalancing',
      'Đánh giá hiệu suất',
    ],
  },
]

function CourseCard({
  course,
}: {
  course: (typeof courses)[number]
}) {
  return (
    <article className="relative flex w-full flex-col rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100 sm:p-8">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-x-2">
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700">
              {course.level}
            </span>
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700">
              {course.duration}
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            Giảng viên: {course.instructor}
          </p>
          <p className="mt-4 text-base text-neutral-600">{course.description}</p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-neutral-950">
              Nội dung khoá học:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              {course.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-neutral-400">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-display text-xl font-semibold text-neutral-950">
              {course.price}
            </span>
            <Button
              href={`/courses/${course.id}`}
              aria-label={`Đăng ký: ${course.title}`}
            >
              Đăng ký ngay
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Courses() {
  return (
    <>
      <PageIntro eyebrow="Khoá Học" title="Nâng cao kỹ năng trading của bạn">
        <p>
          Tham gia các khoá học được thiết kế bởi các chuyên gia có nhiều năm
          kinh nghiệm, từ cơ bản đến nâng cao, giúp bạn trở thành trader chuyên
          nghiệp.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {courses.map((course) => (
            <FadeIn key={course.id}>
              <CourseCard course={course} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <ContactSection />
    </>
  )
}

