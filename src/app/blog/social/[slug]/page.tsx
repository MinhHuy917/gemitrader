import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ContactSection } from '@/components/ContactSection'
import { findSocialPostBySlug, getSocialPostHref, socialPosts } from '@/data/socialPosts'

type SocialPostPageProps = {
  params: {
    slug: string
  }
}

const formatParagraphs = (content: string) =>
  content
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

export function generateStaticParams() {
  return socialPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: SocialPostPageProps): Promise<Metadata> {
  const post = findSocialPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  const title = post.content?.trim().length
    ? `${post.content.replace(/…$/, '')} | Gemi Trader`
    : `Gemi Trader Insight #${post.id}`

  const descriptionSource = post.fullContent.replace(/\s+/g, ' ').trim()
  const description =
    descriptionSource.length > 160 ? `${descriptionSource.slice(0, 157)}…` : descriptionSource

  return {
    title,
    description,
    alternates: {
      canonical: getSocialPostHref(post.slug),
    },
    openGraph: {
      title,
      description,
      url: getSocialPostHref(post.slug),
      type: 'article',
      locale: 'vi_VN',
    },
  }
}

export default function SocialPostPage({ params }: SocialPostPageProps) {
  const post = findSocialPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const paragraphs = formatParagraphs(post.fullContent)

  return (
    <>
      <Container className="mt-16 sm:mt-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <Link
            href="/blog"
            className="text-sm font-medium text-primary transition hover:text-primary/80"
          >
            ← Quay lại blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Social Insight</span>
            <span>{post.author}</span>
            <span aria-hidden="true">•</span>
            <span>{post.time}</span>
          </div>

          <h1 className="font-display text-4xl font-semibold text-neutral-950">
            {post.content?.trim().length ? post.content : `Gemi Trader Insight #${post.id}`}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
            <span>{post.views.toLocaleString('vi-VN')} lượt xem</span>
            <span>{post.likes.toLocaleString('vi-VN')} lượt thích</span>
            <span>{post.comments.toLocaleString('vi-VN')} bình luận</span>
            <span>{post.shares.toLocaleString('vi-VN')} lượt chia sẻ</span>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-neutral-700">
            {paragraphs.map((paragraph, index) => (
              <p key={`${post.id}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/blog">Khám phá thêm bài viết</Button>
            <Button invert href={getSocialPostHref(post.slug)}>
              Chia sẻ bài viết
            </Button>
          </div>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}

