import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import imageLaptop from '@/images/laptop.jpg'

const milestones = [
  {
    title: 'Bắt đầu với vài trăm đô',
    description:
      'Năm 2017 tôi mở tài khoản đầu tiên bằng số tiền tiết kiệm nhỏ. Lên đỉnh, rơi xuống đáy, học cách đặt dừng lỗ và hiểu thị trường không quan tâm tôi là ai.',
  },
  {
    title: 'Chuyển sang sống bằng trading',
    description:
      'Sau nhiều năm ghi chép và backtest, tôi giữ kỷ luật với 1-2 setup quen thuộc, giao dịch nhẹ nhàng hơn và đủ tự tin nghỉ hẳn công việc văn phòng.',
  },
  {
    title: 'Viết và chia sẻ',
    description:
      'Tôi lập website này để lưu lại những gì mình làm mỗi tuần: ý tưởng giao dịch, checklist và các ghi chú tâm lý. Nếu nó giúp được bạn, xem như chúng ta có duyên.',
  },
]

const values = [
  {
    title: 'Minh bạch',
    description:
      'Tôi đăng cả lệnh đẹp lẫn lệnh xấu. Trading không hoàn hảo và mọi người cần nhìn thấy thực tế đó.',
  },
  {
    title: 'Thực tế',
    description:
      'Không có lời hứa về lợi nhuận &ldquo;thần thánh&rdquo;. Trading là nghề buồn tẻ: vào lệnh ít, ngồi chờ nhiều.',
  },
  {
    title: 'Cộng đồng',
    description:
      'Tôi muốn gom những người có cùng nhịp giao dịch vào một nhóm nhỏ để cùng nhau trao đổi thẳng thắn.',
  },
]

function MyStory() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              Câu chuyện của tôi
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600 dark:text-neutral-200">
              <p>
                Tôi đến với trading giống hầu hết mọi người: xem video trên YouTube, tham gia vài nhóm tín hiệu rồi đốt toàn bộ tài khoản đầu tiên trong vòng hai tháng.
              </p>
              <p>
                Tôi chỉ thực sự tiến bộ khi bắt đầu ghi lại từng lệnh, đọc lại cảm xúc của mình và nhận ra <strong className="text-neutral-950 dark:text-neutral-50">kỷ luật mới là phần khó nhất.</strong> Từ đó tôi cắt bớt chỉ báo, giữ 1-2 setup và giao dịch ít hơn.
              </p>
              <p>
                Website này là nơi tôi viết lại những gì đã xảy ra trên thị trường tuần này, tại sao tôi vào lệnh, vì sao tôi sai và tôi sẽ cải thiện như thế nào. Nó giúp tôi giữ mình ở chế độ học tập liên tục.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative overflow-hidden rounded-4xl bg-neutral-100">
              <Image
                alt="Trading workspace"
                src={imageLaptop}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function Achievements() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Những cột mốc nhỏ"
        title="Tôi đã trải qua những gì"
      >
        <p>Không phải thành tích to tát, chỉ là vài cột mốc nhắc tôi đi đúng hướng.</p>
      </SectionIntro>
      <GridList className="mt-16">
        {milestones.map((milestone) => (
          <GridListItem key={milestone.title} title={milestone.title}>
            {milestone.description}
          </GridListItem>
        ))}
      </GridList>
    </Container>
  )
}

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Giá trị cốt lõi"
        title="Những điều tôi tin tưởng"
        invert
      >
        <p>
          Website này được xây dựng dựa trên những giá trị mà tôi đã học được trong suốt hành trình trading của mình.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {values.map((value) => (
            <GridListItem key={value.title} title={value.title} invert>
              {value.description}
          </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  )
}

function Purpose() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
              <FadeIn>
        <div className="rounded-4xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 p-8 shadow-xl shadow-primary/10 sm:p-12 lg:p-16">
          <h2 className="font-display text-3xl font-semibold text-neutral-950 dark:text-neutral-50 sm:text-4xl">
            Vì sao tôi tạo website này
                </h2>
          <div className="mt-8 space-y-6 text-base text-neutral-600 dark:text-neutral-200">
            <p>
              Tôi không muốn bạn lặp lại những sai lầm từng khiến tôi cháy tài khoản. Tài liệu, checklist, nhật ký tôi đăng miễn phí để bạn tham khảo và điều chỉnh cho phù hợp.
            </p>
            <p>
              Nếu bạn thấy hữu ích, hãy giữ liên lạc, đăng ký tài khoản qua link ref hoặc tham gia khóa học khi cảm thấy cần. Đó là cách tốt nhất để ủng hộ dự án này.
            </p>
            <p>Tôi không hứa biến bạn thành triệu phú. Tôi chỉ chia sẻ những gì đang làm và cách tôi quản lý rủi ro mỗi ngày.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/courses" className="w-full sm:w-auto">
              Xem khóa học
            </Button>
            <Button href="/connect" className="w-full sm:w-auto" invert>
              Đăng ký tài khoản
            </Button>
                          </div>
                        </div>
                      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Về tôi - Gemi Trader',
  description:
    'Tôi là một trader chuyên nghiệp với hơn 8 năm kinh nghiệm trong lĩnh vực giao dịch. Chia sẻ câu chuyện, kinh nghiệm và mục đích tạo ra website này.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Về tôi" title="Trader chuyên nghiệp với hơn 8 năm kinh nghiệm">
        <p>Tôi là Gemi. Tôi giao dịch Forex và Crypto toàn thời gian, viết nhật ký mỗi tuần và chia sẻ lại mọi thứ tôi học được.</p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="7" label="Năm bám trụ thị trường" />
          <StatListItem value="2" label="Thị trường chính: Forex & Crypto" />
          <StatListItem value="1" label="Nhật ký giao dịch cập nhật mỗi tuần" />
        </StatList>
      </Container>

      <MyStory />

      <Achievements />

      <Values />

      <Purpose />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Bài viết mới nhất"
        intro="Những bài viết về trading, phân tích thị trường và chia sẻ kinh nghiệm từ hành trình 8 năm của tôi."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
