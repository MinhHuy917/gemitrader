import { type Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'
import QuotesShowcase from '@/components/Quotes'

export const metadata: Metadata = {
  title: 'Quotes',
  description:
    'Những câu nói truyền cảm hứng từ các trader và nhà đầu tư huyền thoại.',
}

export default function Quotes() {
  return (
    <>
      <PageIntro eyebrow="Quotes" title="Trading wisdom sống động">
        <p>
          Tổng hợp những lời khuyên kinh điển từ các trader và nhà đầu tư huyền
          thoại, giúp bạn giữ tâm lý vững vàng trên hành trình giao dịch.
        </p>
      </PageIntro>

      <QuotesShowcase />

      <ContactSection />
    </>
  )
}



