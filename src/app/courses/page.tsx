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
    id: 'core-system',
    title: 'Core System',
    price: '199$',
    period: '',
    billing: 'Thanh toán một lần',
    saving: 'Giá đề xuất: 199$',
    level: 'Khoá 1 · Hệ thống giao dịch thực chiến',
    tagline1: 'Xây hệ thống · Học & thực hành',
    tagline2: 'Biết chính xác khi nào nên vào lệnh, ngừng giao dịch theo cảm xúc',
    features: [
      'Phù hợp với người muốn xây dựng một hệ thống giao dịch rõ ràng, vào–thoát lệnh có kế hoạch thay vì giao dịch cảm tính.',
      'Cấu trúc thị trường & tư duy đọc biểu đồ thực tế.',
      'Phân tích kỹ thuật nâng cao (Fibonacci, cấu trúc sóng, vùng thanh khoản).',
      'Xây dựng chiến lược đa khung thời gian (D1 – H4 – H1 – M15).',
      'Quy tắc quản lý vốn 1–2% theo hệ thống.',
      'Backtest & checklist vào/ra lệnh chuẩn hoá.',
      'Bộ template & mẫu nhật ký giao dịch.',
      'Truy cập cộng đồng học viên.',
      'Kết quả: có hệ thống riêng để luyện tập, ngừng giao dịch theo cảm xúc.',
    ],
    href: '/courses/checkout?plan=core-system',
    highlight: true,
  },
  {
    id: 'mentorship',
    title: 'Mentorship Đồng Hành',
    price: '499$',
    period: '',
    billing: 'Thanh toán một lần',
    saving: 'Giá đề xuất: 499$',
    level: 'Khoá 2 · Cá nhân hoá & nâng cấp hiệu suất',
    tagline1: 'Cá nhân hoá & tối ưu · Đồng hành & nâng cấp',
    tagline2: 'Chuẩn hoá hệ thống cá nhân, loại bỏ giao dịch bốc đồng, duy trì hiệu suất ổn định',
    features: [
      'Phù hợp với người đã có nền tảng và muốn nâng cấp hệ thống, cải thiện kỷ luật và tối ưu hiệu suất giao dịch.',
      'Bao gồm toàn bộ nội dung Core System.',
      'Cá nhân hoá hệ thống giao dịch theo tính cách & khung thời gian phù hợp.',
      'Review nhật ký giao dịch hàng tuần.',
      'Phân tích lệnh thực tế và sửa lỗi trực tiếp.',
      'Phòng thảo luận & cập nhật thị trường định kỳ.',
      '1:1 review chiến lược mỗi tháng.',
      'Ưu tiên hỗ trợ khi thị trường biến động mạnh.',
      'Mục tiêu: chuẩn hoá hệ thống cá nhân, loại bỏ giao dịch bốc đồng, duy trì hiệu suất ổn định theo tháng.',
    ],
    href: '/courses/checkout?plan=mentorship',
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
          {('tagline1' in plan || 'tagline2' in plan) && (
            <div className="mt-2 space-y-0.5 text-sm text-neutral-700 dark:text-neutral-200">
              {'tagline1' in plan && plan.tagline1 && <p>{plan.tagline1}</p>}
              {'tagline2' in plan && plan.tagline2 && <p>{plan.tagline2}</p>}
            </div>
          )}
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
            <FadeInStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-4xl mx-auto">
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











