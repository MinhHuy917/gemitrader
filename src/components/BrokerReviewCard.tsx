import Link from 'next/link'
import clsx from 'clsx'
import { FadeIn } from './FadeIn'

type ReviewArticle = {
  id: string
  title: string
  headerTitle: string
  description: string
  href: string
  icon?: React.ReactNode
  badge?: string
}

type BrokerReviewCardProps = {
  brokerName: string
  brokerLogo: string
  reviews: ReviewArticle[]
  source?: string
}

export function BrokerReviewCard({
  brokerName,
  brokerLogo,
  reviews,
  source = 'gemitrader.com',
}: BrokerReviewCardProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
      {reviews.map((review) => (
        <FadeIn key={review.id}>
          <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl dark:border-neutral-800/80 dark:bg-neutral-950 dark:hover:border-neutral-700">
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 via-transparent to-teal-50/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-neutral-900/50 dark:to-teal-950/20" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">
              {/* Header */}
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 text-sm font-bold text-neutral-700 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:from-neutral-800 dark:to-neutral-700 dark:text-neutral-200">
                      {brokerLogo}
                    </div>
                    <Link
                      href={`/brokers/${brokerName.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[10px] font-medium text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                    >
                      {source}
                    </Link>
                  </div>
                  <h3 className="text-xs font-bold uppercase leading-tight tracking-wide text-neutral-900 dark:text-neutral-50">
                    {review.headerTitle}
                  </h3>
                </div>
                {review.badge && (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-xs font-bold text-white shadow-md shadow-amber-500/30">
                    ✓
                  </span>
                )}
              </div>

              {/* Illustration Area */}
              <div className="relative mb-5 flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 via-neutral-50 to-teal-50/50 dark:from-neutral-900 dark:via-neutral-800 dark:to-teal-950/30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
                <div className="relative text-5xl opacity-30 transition-transform duration-300 group-hover:scale-110">
                  {review.icon || '📊'}
                </div>
              </div>

              {/* Content Title */}
              <h4 className="mb-4 text-lg font-bold leading-tight text-neutral-900 dark:text-neutral-50">
                {review.title}
              </h4>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {review.description}
              </p>

              {/* CTA Button */}
              <div className="mt-auto">
                <Link
                  href={review.href}
                  className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:from-teal-700 hover:to-teal-800 hover:shadow-xl hover:shadow-teal-500/30 dark:from-teal-500 dark:to-teal-600 dark:hover:from-teal-600 dark:hover:to-teal-700"
                >
                  <span className="relative z-10">ĐỌC THÊM</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
                    »
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
                </Link>
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-neutral-200/60 pt-4 text-[11px] font-medium text-neutral-500 dark:border-neutral-800/60 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  Gemi Trader
                </span>
                <span>Không có bình luận</span>
              </div>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  )
}

