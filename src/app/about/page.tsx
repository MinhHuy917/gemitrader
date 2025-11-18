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

const achievements = [
  {
    title: 'Kinh nghiệm thực chiến',
    description:
      'Hơn 7 năm giao dịch trên các thị trường Forex, Crypto và Chứng khoán với hàng nghìn lệnh đã thực hiện. Trải qua đầy đủ các giai đoạn từ người mới bắt đầu đến trader chuyên nghiệp.',
  },
  {
    title: 'Hệ thống giao dịch được kiểm chứng',
    description:
      'Xây dựng và tối ưu hóa các chiến lược Breakout, Pullback, và Trend Following qua nhiều chu kỳ thị trường. Hệ thống quản lý rủi ro 2% rule đã được áp dụng thành công trong nhiều năm.',
  },
  {
    title: 'Chia sẻ và giáo dục',
    description:
      'Đã hướng dẫn và đồng hành cùng hàng trăm trader trên hành trình phát triển. Tạo ra thư viện tài liệu miễn phí với hàng nghìn lượt tải về và phản hồi tích cực từ cộng đồng.',
  },
]

const values = [
  {
    title: 'Minh bạch',
    description:
      'Tôi tin rằng sự minh bạch là nền tảng của lòng tin. Mọi chiến lược, kết quả giao dịch và bài học đều được chia sẻ công khai để bạn có thể học hỏi và đánh giá.',
  },
  {
    title: 'Thực tế',
    description:
      'Không có lời hứa về lợi nhuận &ldquo;thần thánh&rdquo;. Trading là một nghề đòi hỏi kỷ luật, kiên nhẫn và quản lý rủi ro. Tôi chia sẻ những gì thực sự hoạt động, không phải những điều nghe có vẻ hay.',
  },
  {
    title: 'Cộng đồng',
    description:
      'Website này được tạo ra để xây dựng một cộng đồng trader hỗ trợ lẫn nhau. Mỗi người đều có thể học hỏi và phát triển cùng nhau thông qua việc chia sẻ kiến thức và kinh nghiệm.',
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
                Hành trình của tôi bắt đầu từ năm 2017, khi tôi quyết định từ bỏ công việc văn phòng để theo đuổi đam mê trading. Những ngày đầu tiên không hề dễ dàng - tôi đã mất tiền, mất niềm tin, và nhiều lần muốn từ bỏ.
              </p>
              <p>
                Nhưng chính những thất bại đó đã dạy tôi những bài học quý giá nhất: <strong className="text-neutral-950 dark:text-neutral-50">Trading không phải là đoán đúng hướng thị trường, mà là quản lý rủi ro khi bạn sai.</strong> Tôi học được rằng thành công trong trading không đến từ việc tìm ra &ldquo;holy grail&rdquo;, mà từ việc tuân thủ nghiêm ngặt một hệ thống giao dịch có kỷ luật.
              </p>
              <p>
                Sau nhiều năm thử nghiệm, tôi đã xây dựng được hệ thống giao dịch của riêng mình - kết hợp phân tích kỹ thuật, quản lý vốn chặt chẽ, và tâm lý giao dịch vững vàng. Từ một trader thua lỗ liên tục, tôi đã trở thành một trader có thể kiếm sống từ nghề này.
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
        eyebrow="Thành tích & Kinh nghiệm"
        title="Những gì tôi đã trải qua"
      >
        <p>
          Hơn 7 năm trong thị trường đã cho tôi những trải nghiệm quý giá và những bài học không thể học được từ sách vở.
        </p>
      </SectionIntro>
      <GridList className="mt-16">
        {achievements.map((achievement) => (
          <GridListItem key={achievement.title} title={achievement.title}>
            {achievement.description}
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
            Tại sao tôi tạo ra website này?
                </h2>
          <div className="mt-8 space-y-6 text-base text-neutral-600 dark:text-neutral-200">
            <p>
              Sau nhiều năm trading, tôi nhận ra rằng <strong className="text-neutral-950 dark:text-neutral-50">kiến thức chỉ có giá trị khi được chia sẻ.</strong> Tôi đã từng là một người mới bắt đầu, đã từng mất tiền vì thiếu kiến thức, và đã từng cảm thấy lạc lõng trong hành trình này.
            </p>
            <p>
              Website này được tạo ra với mục đích <strong className="text-neutral-950 dark:text-neutral-50">gieo duyên và chia sẻ</strong> - chia sẻ những gì tôi đã học được, những sai lầm tôi đã mắc phải, và những bài học quý giá mà tôi đã tích lũy qua hơn 7 năm trong thị trường.
            </p>
            <p>
              Tôi không hứa hẹn bạn sẽ trở thành triệu phú sau khi đọc blog hay tham gia khóa học. Nhưng tôi cam kết sẽ chia sẻ với bạn những kiến thức thực tế, những chiến lược đã được kiểm chứng, và quan trọng nhất - <strong className="text-neutral-950 dark:text-neutral-50">cách tư duy đúng đắn về trading</strong>.
            </p>
            <p>
              Nếu bạn cảm thấy những gì tôi chia sẻ có giá trị, tôi rất vui nếu bạn đăng ký tài khoản qua link của tôi hoặc tham gia các khóa học. Điều này giúp tôi duy trì website và tiếp tục tạo ra nội dung chất lượng cho cộng đồng.
                            </p>
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
    'Tôi là một trader chuyên nghiệp với hơn 7 năm kinh nghiệm trong lĩnh vực giao dịch. Chia sẻ câu chuyện, kinh nghiệm và mục đích tạo ra website này.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Về tôi" title="Trader chuyên nghiệp với hơn 7 năm kinh nghiệm">
        <p>
          Tôi là một trader chuyên nghiệp với hơn 7 năm kinh nghiệm trong lĩnh vực giao dịch. 
          Hành trình của tôi từ một người mới bắt đầu đến trader có thể kiếm sống từ nghề này 
          đã cho tôi những bài học quý giá mà tôi muốn chia sẻ với bạn.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="7+" label="Năm kinh nghiệm trading" />
          <StatListItem value="1000+" label="Lệnh đã thực hiện" />
          <StatListItem value="500+" label="Trader đã hướng dẫn" />
        </StatList>
      </Container>

      <MyStory />

      <Achievements />

      <Values />

      <Purpose />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Bài viết mới nhất"
        intro="Những bài viết về trading, phân tích thị trường và chia sẻ kinh nghiệm từ hành trình 7 năm của tôi."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
