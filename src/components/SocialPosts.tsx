'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import { Container } from '@/components/Container'
import { getSocialPostHref, socialPosts } from '@/data/socialPosts'

const formatLabel = (index: number) => `Blog note #${index + 1}`

const buildTitle = (text: string, fallback: string) => {
  const safe = text?.trim()
  return safe.length ? safe : fallback
}

const buildExcerpt = (fullContent: string, limit = 160) => {
  const normalized = fullContent.replace(/\s+/g, ' ').trim()
  if (normalized.length <= limit) {
    return normalized
  }
  return `${normalized.slice(0, limit)}…`
}

const PAGE_SIZE = 6

export default function SocialPostsShowcase() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(socialPosts.length / PAGE_SIZE) || 1

  const visiblePosts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return socialPosts.slice(start, start + PAGE_SIZE)
  }, [page])

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages))
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Trading Journal</p>
          <h2 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Bài viết mới trên mạng xã hội
          </h2>
          <p className="max-w-3xl text-base text-neutral-600">
            Những đoạn “micro blog” tôi đăng trên Telegram / mạng xã hội được gom lại để bạn đọc nhanh và
            truy cập đúng bài viết gốc khi cần chia sẻ hoặc trích dẫn cho cộng đồng.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post, index) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-[32px] border border-neutral-200 bg-white px-6 py-7 shadow-[0_25px_60px_rgba(15,23,42,0.05)] transition hover:-translate-y-1"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {formatLabel((page - 1) * PAGE_SIZE + index)}
              </div>
              <Link
                href={getSocialPostHref(post.slug)}
                className="mt-4 text-lg font-semibold leading-snug text-neutral-900 transition hover:text-primary"
              >
                {buildTitle(post.content, `Insight #${post.id}`)}
              </Link>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                {buildExcerpt(post.fullContent)}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs font-medium text-neutral-400">
                <span>{post.author}</span>
                <span>{post.time}</span>
              </div>
              <Link
                href={getSocialPostHref(post.slug)}
                className="mt-4 inline-flex w-fit items-center rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-neutral-800"
              >
                Đọc bài viết
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-3 text-sm font-semibold text-neutral-600">
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="rounded-full border border-neutral-200 px-4 py-2 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Trước
          </button>
          <span className="text-xs uppercase tracking-[0.3em]">
            Trang {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="rounded-full border border-neutral-200 px-4 py-2 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Tiếp
          </button>
        </div>
      </Container>
    </section>
  )
}
