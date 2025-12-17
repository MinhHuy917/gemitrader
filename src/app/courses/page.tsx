import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { CourseFeedback } from '@/components/CourseFeedback'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Khoá Học',
  description:
    'Các khoá học trading từ cơ bản đến nâng cao, được thiết kế bởi các chuyên gia có nhiều năm kinh nghiệm.',
}

const plans = [
  {
    id: 'essential',
    title: 'Essential',
    price: '2.5 triệu',
    period: '',
    billing: 'Thanh toán một lần',
    saving: '',
    level: 'Cơ bản',
    features: [
      'Lộ trình nhập môn trading 8 tuần',
      'Hiểu cấu trúc thị trường & đọc biểu đồ',
      'Thực hành demo với bộ template có sẵn',
      'Quy tắc quản lý rủi ro 1-2%',
      'Cộng đồng hỗ trợ cơ bản',
    ],
    href: '/courses/checkout?plan=essential',
  },
  {
    id: 'plus',
    title: 'Plus',
    price: '4.5 triệu',
    period: '',
    billing: 'Thanh toán một lần',
    saving: '',
    level: 'Trung cấp',
    features: [
      'Phân tích kỹ thuật nâng cao 10 tuần',
      'Mẫu biểu đồ, Fibonacci, Elliott',
      'Chiến lược đa khung thời gian',
      'Backtest & checklist vào/ra lệnh',
      'Coaching nhóm 2 buổi/tháng',
    ],
    href: '/courses/checkout?plan=plus',
    highlight: true,
  },
  {
    id: 'premium',
    title: 'Premium',
    price: '6 triệu',
    period: '',
    billing: 'Thanh toán một lần',
    saving: '',
    level: 'Chuyên sâu',
    features: [
      'Tâm lý giao dịch & kỷ luật hệ thống',
      'Quản trị cảm xúc, hạn chế FOMO',
      'Kế hoạch giao dịch cá nhân hoá',
      'Phản hồi nhật ký giao dịch hằng tuần',
      'Phòng thảo luận real-time',
    ],
    href: '/courses/checkout?plan=premium',
  },
  {
    id: 'ultimate',
    title: 'Ultimate',
    price: '8.5 triệu',
    period: '',
    billing: 'Thanh toán một lần',
    saving: '',
    level: 'Master',
    features: [
      'Giao dịch Crypto chuyên sâu & on-chain',
      'Algorithmic trading cơ bản với Python',
      'Bộ chỉ báo & dashboard tuỳ chỉnh',
      '1:1 review chiến lược mỗi tháng',
      'Ưu tiên hỗ trợ & tài liệu cập nhật',
    ],
    href: '/courses/checkout?plan=ultimate',
  },
]

function PlanCard({
  plan,
}: {
  plan: (typeof plans)[number]
}) {
  return (
    <div
      className={[
        'relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-xl transition',
        'bg-white/90 text-neutral-900 dark:border-neutral-800/80 dark:bg-neutral-950/90 dark:text-neutral-50',
        'backdrop-blur-lg',
        plan.highlight
          ? 'border-amber-300/60 ring-2 ring-amber-300/40 dark:border-amber-400/60 dark:ring-amber-400/40'
          : 'border-neutral-200/80 hover:border-neutral-300/80 dark:border-neutral-800/80 dark:hover:border-neutral-700',
      ].join(' ')}
    >
      <div
        className={[
          'pointer-events-none absolute inset-0 opacity-80',
          plan.highlight
            ? 'bg-gradient-to-br from-amber-200/40 via-transparent to-blue-200/20 dark:from-amber-500/20 dark:via-transparent dark:to-blue-500/10'
            : 'bg-gradient-to-b from-neutral-100/40 via-transparent to-neutral-200/30 dark:from-neutral-900/60 dark:via-transparent dark:to-neutral-900/20',
        ].join(' ')}
        aria-hidden
      />
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-300">
            {plan.level}
          </p>
          <h3 className="font-display text-2xl font-semibold text-neutral-950 dark:text-white">
            {plan.title}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {plan.billing || 'Thanh toán một lần'}
          </p>
          {plan.saving && (
            <p className="text-sm text-amber-500 dark:text-amber-300">{plan.saving}</p>
          )}
        </div>
        <div
          className={[
            'rounded-full px-3 py-1 text-xs font-semibold shadow-sm',
            plan.highlight
              ? 'bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200'
              : 'bg-neutral-200/60 text-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-200',
          ].join(' ')}
        >
          {plan.highlight ? 'Phổ biến' : 'Gợi ý'}
        </div>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-3xl font-bold text-neutral-950 dark:text-white">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-sm text-neutral-500 dark:text-neutral-400">{plan.period}</span>
        )}
      </div>

          <div className="mt-6">
        <Button
          href={plan.href}
          className={[
            'w-full justify-center',
            plan.highlight
              ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300'
              : 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white',
          ].join(' ')}
          aria-label={`Đăng ký ${plan.title}`}
        >
          Bắt đầu ngay
        </Button>
      </div>

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />

      <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-100">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-0.5 text-amber-500 dark:text-amber-300">✓</span>
            <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default function Courses() {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl border border-neutral-200/40 bg-gradient-to-b from-white via-neutral-50 to-neutral-100 px-4 py-14 shadow-lg dark:border-neutral-900/60 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,179,101,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.08),transparent_32%)] opacity-90 dark:opacity-70" />
        <Container className="relative">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
              Lộ trình linh hoạt
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-neutral-950 dark:text-white sm:text-5xl">
              Gói khoá học cho mọi mục tiêu trading
            </h1>
            <p className="mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">
              Chọn khoá học phù hợp, thanh toán một lần và nhận trọn bộ nội dung, cập nhật mới, cộng
              đồng hỗ trợ và mentor đồng hành lâu dài.
            </p>
          </div>

          <div className="mt-12">
            <FadeInStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan) => (
                <FadeIn key={plan.id}>
                  <PlanCard plan={plan} />
            </FadeIn>
          ))}
        </FadeInStagger>
          </div>
      </Container>
      </section>

      <CourseFeedback />

      <ContactSection />
    </>
  )
}











