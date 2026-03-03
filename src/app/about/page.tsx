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
    `Năm 2020, mình mở tài khoản đầu tiên bằng số tiền tiết kiệm nhỏ.
Trade theo cảm xúc nhiều hơn kế hoạch. Lên nhanh rồi cũng xuống rất nhanh. Cháy tài khoản vài lần mới hiểu rằng thị trường không quan tâm mình là ai — chỉ phản ánh đúng những gì mình làm sai.`,
  },
  {
    title: 'Chuyển sang sống bằng trading',
    description:
      `Sau nhiều năm ghi chép, backtest và tự sửa sai, mình dần giao dịch đơn giản hơn — chỉ giữ lại vài setup thật sự hiểu rõ. Không còn tìm “chén thánh”, chỉ tập trung vào kỷ luật và quản lý rủi ro. Trading từ áp lực dần trở thành một công việc có thể duy trì lâu dài.`
  },
  {
    title: 'Viết và chia sẻ',
    description:
      'Website này là nơi mình ghi lại những gì học được mỗi tuần: ý tưởng giao dịch, checklist và những ghi chú về tâm lý. Không phải để dạy ai, chỉ là chia sẻ lại hành trình mình đã đi qua. Nếu những gì ở đây giúp được bạn phần nào, thì xem như chúng ta có chung một đoạn đường.'
  },
]

const values = [
  {
    title: 'Quản lý rủi ro quan trọng hơn lợi nhuận',
    description:
      'Không có hệ thống nào thắng mãi. Điều giữ bạn ở lại thị trường là kiểm soát thua lỗ, không phải số lần thắng.',
  },
  {
    title: 'Kỷ luật tạo ra lợi nhuận, không phải cảm xúc',
    description:
      'Thị trường không quan tâm bạn nghĩ gì. Chỉ có việc tuân thủ kế hoạch mới tạo ra kết quả ổn định.',
  },
  {
    title: 'Tồn tại đủ lâu mới có cơ hội kiếm tiền',
    description:
      'Trading không phải trò chơi làm giàu nhanh. Ai còn vốn, còn tâm lý ổn định, người đó còn cơ hội.',
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
                Hi, mình là Gemi. Tính đến thời điểm này, mình có thể tự tin nói rằng:{' '}
                <strong className="text-neutral-950 dark:text-neutral-50">“I’m a Trader.”</strong>{' '}
                Hành trình với thị trường tài chính của mình đã kéo dài gần một thập kỷ, bắt đầu từ
                năm 2020 khi lần đầu nghe một người bạn trong phòng nhắc đến Bitcoin. Từ khoảnh khắc
                đó, một hành trình mang tên Trading chính thức mở ra.
              </p>
              <p>
                Như rất nhiều anh em khác, mình bước vào thị trường với một số tiền tích luỹ nhỏ, một niềm tin
                đổi đời rất lớn, nhưng lại đi kèm một cái đầu gần như trống rỗng — mơ hồ, thiếu định
                hướng và đầy cái tôi. Không kiến thức, không kinh nghiệm, không chiến lược, mình lao
                vào thị trường như một người lính ra chiến trường mà không có bản đồ, không áo giáp,
                cũng chẳng biết kẻ địch là ai.
              </p>
              <p>
                Thị trường đã dạy mình bằng cách khắc nghiệt nhất: cháy tài khoản nhiều đến mức không
                còn đếm nổi, có lúc nợ nần, hoài nghi bản thân và muốn bỏ cuộc. Tưởng chừng hành trình
                này đã kết thúc, nhưng may mắn là mình vẫn còn ở đây — vẫn tiếp tục trading, tiếp tục
                học hỏi và đủ bình tĩnh để viết lại câu chuyện của mình.
              </p>
              <p>
                Mình biết ơn “người thầy” lớn nhất mang tên Market — nơi không nói nhiều nhưng luôn trả
                bài rất công bằng sau mỗi sai lầm. Dần dần, mình nhận ra cuộc chiến lớn nhất trong
                trading chưa bao giờ nằm ở biểu đồ, mà nằm ở chính lòng tham, nỗi sợ và bản ngã của
                mỗi người.
              </p>
              <p>
                Sau nhiều năm trải nghiệm, mình nhận ra một điều:{' '}
                <strong className="text-neutral-950 dark:text-neutral-50">
                  kiến thức chỉ thật sự có giá trị khi được chia sẻ.
                </strong>{' '}
                Website này được tạo ra với mục đích rất đơn giản: gieo duyên và chia sẻ. Chia sẻ những
                gì mình đã học được, những sai lầm từng phải trả giá và những bài học thực tế được tích
                lũy qua hơn 7 năm tồn tại trong thị trường.
              </p>
              <p>
                Mình không hứa bạn sẽ trở thành triệu phú sau khi đọc blog hay tham gia bất kỳ khóa học
                nào. Trading không phải con đường làm giàu nhanh. Nhưng mình sẽ cố gắng mang đến cho
                bạn những góc nhìn thực tế, những chiến lược đã được kiểm chứng và quan trọng nhất là{' '}
                <strong className="text-neutral-950 dark:text-neutral-50">
                  một tư duy đúng đắn về trading
                </strong>
                , để bạn không phải bước đi trong thị trường này một cách vô định như mình của những
                ngày đầu.
              </p>
              <p>Chào mừng bạn đến với hành trình này.</p>
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
        title="Mình đã đi qua những gì"
      >
        <p>Không phải thành tích lớn lao.
        Chỉ là vài dấu mốc đủ để biết mình vẫn đang đi đúng hướng.</p>
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
        title="Những điều mình tin tưởng"
        invert
      >
        <p>
          Website này được xây dựng dựa trên những giá trị mà mình đã học được trong suốt hành trình trading của mình.
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
            Trước hết, website này dành cho chính tôi.
            Đây là nơi tôi ghi lại quá trình học hỏi và làm việc với thị trường mỗi ngày — để nhìn lại, chỉnh sửa và hoàn thiện hệ thống của mình.
            </p>
            <p>
            Thứ hai, tôi chia sẻ những gì mình thấy thực sự hữu ích. Không phải để dạy ai, mà để những bạn đang tự học trading có thêm một nguồn tham khảo, một nơi để rèn luyện tư duy và kỹ năng một cách nghiêm túc.
            </p>
            <p>
            Nếu bạn đang tìm một con đường làm giàu nhanh, có lẽ nơi này không phù hợp.
            Nhưng nếu bạn muốn xây dựng nền tảng vững, hiểu rủi ro và đi đường dài, hy vọng những gì tôi chia sẻ sẽ giúp được phần nào.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/courses" className="w-full sm:w-auto">
              Xem khóa học
            </Button>
            <Button href="/connect" className="w-full sm:w-auto" invert>
              Kết nối với mình
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
    'Hành trình gần một thập kỷ trading của Gemi Trader, từ những lần cháy tài khoản đến việc chia sẻ kiến thức và kinh nghiệm thực tế về thị trường tài chính.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Về tôi" title="Hành trình hơn 7 năm cùng thị trường tài chính">
        <p>
        Mình là Gemi — một trader đã gắn bó với thị trường tài chính hơn 7 năm, bắt đầu từ những ngày đầu đầy mơ hồ, thiếu kinh nghiệm và không ít lần thất bại. Hành trình từ một người mới bước chân vào thị trường đến khi có thể sống cùng trading đã mang lại cho mình nhiều bài học đắt giá, không chỉ về chiến lược giao dịch mà còn về tâm lý và cách hiểu chính bản thân mình.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="7+ Năm" label="Kinh nghiệm thực chiến" />
          <StatListItem value="2" label="Thị trường chính: Forex & Crypto" />
          <StatListItem value="Hệ thống" label="Giao dich thuận xu hướng" />
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
