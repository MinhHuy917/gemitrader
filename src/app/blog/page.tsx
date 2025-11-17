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
    <article className="flex h-full flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={cover}
          alt={article.title}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/45" aria-hidden />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-800">
          {formatDate(article.date).toUpperCase()}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-4">
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          <Image
            alt={article.author.name}
            {...article.author.image}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-neutral-900">{article.author.name}</p>
            <p>{article.author.role}</p>
          </div>
        </div>
        <Link
          href={article.href}
          className="font-display text-xl font-semibold text-neutral-950 transition hover:text-primary"
        >
          {article.title}
        </Link>
        <p className="flex-1 text-sm leading-relaxed text-neutral-600">{article.description}</p>
        <Button href={article.href} aria-label={`Đọc thêm: ${article.title}`} className="mt-2 w-fit">
          Đọc bài viết
        </Button>
      </div>
    </article>
  )
}

export default async function Blog() {
  const articles = await loadArticles()

  return (
    <>
      <PageIntro eyebrow="Blog" title="Bản tin & góc nhìn trading mới nhất">
        <p>
          Cập nhật phân tích thị trường, góc nhìn chiến lược và chia sẻ từ trải nghiệm thực chiến
          — được sắp xếp lại thành các bài viết ngắn, dễ đọc.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24 lg:mt-32">
        <FadeInStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <FadeIn key={article.href}>
              <ArticleCard article={article} index={index} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <SocialPosts />

      <ContactSection />
    </>
  )
}
