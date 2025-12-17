import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

type Feedback = {
  name: string
  role: string
  course: string
  content: string
  rating: number
}

const feedbacks: Feedback[] = [
  {
    name: 'Nguyễn Hoàng Minh',
    role: 'Full-time trader',
    course: 'Phân tích kỹ thuật nâng cao',
    content:
      'Khoá học giúp mình hệ thống lại kiến thức và tối ưu điểm vào/ra lệnh rõ ràng hơn. Các ví dụ thực tế bám sát thị trường.',
    rating: 5,
  },
  {
    name: 'Trần Thu Hà',
    role: 'Nhân viên tài chính',
    course: 'Tâm lý học trong Trading',
    content:
      'Phần mindset và quản trị cảm xúc cực kỳ hữu ích. Sau khoá học mình kiểm soát kỷ luật tốt hơn, hạn chế FOMO rõ rệt.',
    rating: 5,
  },
  {
    name: 'Lê Đức Anh',
    role: 'Developer & trader bán thời gian',
    course: 'Algorithmic Trading',
    content:
      'Nội dung Python và backtest được hướng dẫn rất chi tiết. Có thể tự viết bot đơn giản và kiểm thử trên dữ liệu thật.',
    rating: 4,
  },
  {
    name: 'Phạm Quỳnh',
    role: 'Swing trader',
    course: 'Giao dịch Crypto chuyên nghiệp',
    content:
      'Hiểu sâu hơn về đặc thù thị trường crypto và cách quản lý rủi ro. Bộ tài liệu kèm theo rất đầy đủ để thực hành.',
    rating: 5,
  },
]

function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          aria-hidden
          className={index < value ? 'text-amber-500' : 'text-neutral-300 dark:text-neutral-700'}
        >
          ★
        </span>
      ))}
      <span className="sr-only">{value} trên 5 sao</span>
    </div>
  )
}

export function CourseFeedback() {
  return (
    <section className="relative mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
              Học viên nói gì
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              Feedback về khoá học trading
            </h2>
            <p className="mt-3 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">
              Những chia sẻ thực tế sau khi hoàn thành khoá học. Thêm động lực để bạn bắt đầu hành trình trading vững chắc hơn.
            </p>
          </div>
        </div>

        <FadeInStagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {feedbacks.map((feedback) => (
            <FadeIn key={feedback.name}>
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-neutral-700">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                      {feedback.name}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{feedback.role}</p>
                  </div>
                  <Rating value={feedback.rating} />
                </div>
                <p className="mt-4 text-base text-neutral-700 dark:text-neutral-200">{feedback.content}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                    {feedback.course}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

