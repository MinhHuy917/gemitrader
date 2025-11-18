import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import SocialPosts from '@/components/SocialPosts'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageTeam from '@/images/team/chelsea-hagon.jpg'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

const coverImages: StaticImageData[] = [imageLaptop, imageMeeting, imageWhiteboard, imageTeam]

const getCover = (index: number) => coverImages[index % coverImages.length]

function ArticleCard({
  article,
  index,
}: {
  article: Awaited<ReturnType<typeof loadArticles>>[number]
  index: number
}) {
  const cover = getCover(index)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[32px] bg-white dark:bg-neutral-900 shadow-[0_25px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={cover}
          alt={article.title}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/45" aria-hidden />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 dark:bg-neutral-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-800 dark:text-neutral-200">
          {formatDate(article.date).toUpperCase()}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-4">
        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-300">
          <Image
            alt={article.author.name}
            {...article.author.image}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">{article.author.name}</p>
            <p className="text-neutral-500 dark:text-neutral-300">{article.author.role}</p>
          </div>
        </div>
        <Link
          href={article.href}
          className="font-display text-xl font-semibold text-neutral-950 dark:text-neutral-50 transition hover:text-primary dark:hover:text-primary-400"
        >
          {article.title}
        </Link>
        <p className="flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-200">{article.description}</p>
        <Button href={article.href} aria-label={`Đọc thêm: ${article.title}`} className="mt-2 w-fit">
          Đọc bài viết
        </Button>
      </div>
    </article>
  )
}

const ARTICLES_PER_PAGE = 9

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const pages = []
  const maxVisible = 5
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2))
  let endPage = Math.min(totalPages, startPage + maxVisible - 1)

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <nav className="mt-16 flex items-center justify-center gap-2" aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? '/blog' : `/blog?page=${currentPage - 1}`}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 transition hover:border-neutral-950 dark:hover:border-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          <span className="sr-only">Trang trước</span>
          ←
        </Link>
      )}

      {startPage > 1 && (
        <>
          <Link
            href="/blog"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 transition hover:border-neutral-950 dark:hover:border-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            1
          </Link>
          {startPage > 2 && (
            <span className="flex h-10 w-10 items-center justify-center text-neutral-500 dark:text-neutral-400">
              ...
            </span>
          )}
        </>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? '/blog' : `/blog?page=${page}`}
          className={page === currentPage
            ? 'flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-950 dark:border-neutral-50 bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950'
            : 'flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 transition hover:border-neutral-950 dark:hover:border-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800'}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="flex h-10 w-10 items-center justify-center text-neutral-500 dark:text-neutral-400">
              ...
            </span>
          )}
          <Link
            href={`/blog?page=${totalPages}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 transition hover:border-neutral-950 dark:hover:border-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 transition hover:border-neutral-950 dark:hover:border-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          <span className="sr-only">Trang sau</span>
          →
        </Link>
      )}
    </nav>
  )
}

export default async function Blog({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const allArticles = await loadArticles()
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const articles = allArticles.slice(startIndex, endIndex)

  return (
    <>
      <PageIntro eyebrow="Blog" title="Góc nhận định thị trường hằng tuần">
        <p>
          Cập nhật phân tích thị trường, góc nhìn chiến lược và chia sẻ từ trải nghiệm thực chiến
          — được sắp xếp lại thành các bài viết ngắn, dễ đọc.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24 lg:mt-32">
        <FadeInStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <FadeIn key={article.href}>
              <ArticleCard article={article} index={startIndex + index} />
            </FadeIn>
          ))}
        </FadeInStagger>
        
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </Container>

      <SocialPosts />

      <ContactSection />
    </>
  )
}
