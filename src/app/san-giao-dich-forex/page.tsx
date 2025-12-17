import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { BrokerReviewCard } from '@/components/BrokerReviewCard'

export const metadata: Metadata = {
  title: 'Sàn Forex uy tín',
  description:
    'Top sàn Forex uy tín mà Gemi Trader đang đánh giá và đồng hành, phù hợp cho các chiến lược trading thực chiến.',
}

type BrokerReviews = {
  brokerName: string
  brokerLogo: string
  reviews: {
    id: string
    title: string
    headerTitle: string
    description: string
    href: string
    badge?: string
  }[]
}

const forexBrokerReviews: BrokerReviews[] = [
  {
    brokerName: 'Exness',
    brokerLogo: 'X',
    reviews: [
      {
        id: 'exness-uy-tin',
        title: 'Sàn Exness uy tín không? Sàn Exness của nước nào?',
        headerTitle: 'SÀN EXNESS CÓ UY TÍN KHÔNG?',
        description: 'Đánh giá chi tiết về độ uy tín và quy định pháp lý của sàn Exness',
        href: '/brokers/exness/uy-tin',
        badge: '✓',
      },
      {
        id: 'exness-mt5',
        title: 'MT5 Exness Là Gì? Hướng Dẫn Sử Dụng Exness MT5 Chi Tiết',
        headerTitle: 'HƯỚNG DẪN SỬ DỤNG NỀN TẢNG MT5 EXNESS',
        description: 'Hướng dẫn chi tiết cách sử dụng MetaTrader 5 trên sàn Exness',
        href: '/brokers/exness/mt5',
      },
      {
        id: 'exness-dang-ky',
        title: 'Hướng Dẫn Tạo Tài Khoản Exness Chi Tiết Năm 2025',
        headerTitle: 'HƯỚNG DẪN ĐĂNG KÝ SÀN EXNESS',
        description: 'Từng bước hướng dẫn đăng ký và xác minh tài khoản Exness',
        href: '/brokers/exness/dang-ky',
      },
      {
        id: 'exness-danh-gia',
        title: 'Exness Là Gì? Đánh Giá Sàn Exness Chi Tiết (2025)',
        headerTitle: 'ĐÁNH GIÁ SÀN EXNESS',
        description: 'Review toàn diện về sàn Exness: ưu nhược điểm, điều kiện giao dịch',
        href: '/brokers/exness/danh-gia',
      },
    ],
  },
  {
    brokerName: 'IC Markets',
    brokerLogo: 'IC',
    reviews: [
      {
        id: 'ic-markets-uy-tin',
        title: 'IC Markets có uy tín không? Đánh giá sàn IC Markets',
        headerTitle: 'SÀN IC MARKETS CÓ UY TÍN KHÔNG?',
        description: 'Phân tích độ uy tín và giấy phép của sàn IC Markets',
        href: '/brokers/ic-markets/uy-tin',
        badge: '✓',
      },
      {
        id: 'ic-markets-ctrader',
        title: 'Hướng Dẫn Sử Dụng cTrader IC Markets Cho Người Mới',
        headerTitle: 'HƯỚNG DẪN SỬ DỤNG CTRADER IC MARKETS',
        description: 'Hướng dẫn chi tiết cách sử dụng nền tảng cTrader trên IC Markets',
        href: '/brokers/ic-markets/ctrader',
      },
      {
        id: 'ic-markets-dang-ky',
        title: 'Hướng Dẫn Mở Tài Khoản IC Markets Nhanh Chóng 2025',
        headerTitle: 'HƯỚNG DẪN ĐĂNG KÝ IC MARKETS',
        description: 'Quy trình đăng ký và xác minh tài khoản IC Markets',
        href: '/brokers/ic-markets/dang-ky',
      },
      {
        id: 'ic-markets-danh-gia',
        title: 'IC Markets Là Gì? Review Sàn IC Markets Chi Tiết',
        headerTitle: 'ĐÁNH GIÁ SÀN IC MARKETS',
        description: 'Review toàn diện về sàn IC Markets từ trải nghiệm thực tế',
        href: '/brokers/ic-markets/danh-gia',
      },
    ],
  },
  {
    brokerName: 'MH Markets',
    brokerLogo: 'MH',
    reviews: [
      {
        id: 'mh-markets-uy-tin',
        title: 'MH Markets có uy tín không? Review sàn MH Markets',
        headerTitle: 'SÀN MH MARKETS CÓ UY TÍN KHÔNG?',
        description: 'Đánh giá về độ uy tín và điều kiện giao dịch của MH Markets',
        href: '/brokers/mh-markets/uy-tin',
        badge: '✓',
      },
      {
        id: 'mh-markets-dang-ky',
        title: 'Hướng Dẫn Đăng Ký MH Markets Chi Tiết 2025',
        headerTitle: 'HƯỚNG DẪN ĐĂNG KÝ MH MARKETS',
        description: 'Hướng dẫn từng bước đăng ký tài khoản MH Markets',
        href: '/brokers/mh-markets/dang-ky',
      },
      {
        id: 'mh-markets-danh-gia',
        title: 'MH Markets Là Gì? Đánh Giá Sàn MH Markets',
        headerTitle: 'ĐÁNH GIÁ SÀN MH MARKETS',
        description: 'Review chi tiết về sàn MH Markets từ trải nghiệm thực tế',
        href: '/brokers/mh-markets/danh-gia',
      },
      {
        id: 'mh-markets-mt4',
        title: 'Hướng Dẫn Sử Dụng MT4 MH Markets Cho Trader',
        headerTitle: 'HƯỚNG DẪN SỬ DỤNG MT4 MH MARKETS',
        description: 'Hướng dẫn cách sử dụng MetaTrader 4 trên MH Markets',
        href: '/brokers/mh-markets/mt4',
      },
    ],
  },
]

export default function ForexBrokers() {
  return (
    <>
      <PageIntro eyebrow="Top sàn Forex" title="Review & Hướng dẫn các sàn Forex uy tín">
        <p>
          Tổng hợp các bài đánh giá, hướng dẫn đăng ký và sử dụng các sàn Forex mà Gemi Trader đang
          đồng hành. Mỗi sàn có nhiều bài viết chi tiết giúp bạn dễ dàng lựa chọn và bắt đầu.
        </p>
      </PageIntro>

      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <FadeInStagger className="space-y-20">
          {forexBrokerReviews.map((broker) => (
            <div key={broker.brokerName} className="relative">
              {/* Section Header */}
              <FadeIn>
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-2xl font-bold text-white shadow-xl shadow-blue-500/30 transition-transform duration-300 hover:scale-105">
                        {broker.brokerLogo}
                      </div>
                      <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full border-2 border-white bg-gradient-to-br from-amber-400 to-amber-500 dark:border-neutral-950" />
                    </div>
                    <div>
                      <h2 className="font-display text-3xl font-bold text-neutral-950 dark:text-neutral-50">
                        {broker.brokerName}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        {broker.reviews.length} bài viết • Review & Hướng dẫn chi tiết
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50/80 px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Đang cập nhật
                  </div>
                </div>
              </FadeIn>

              {/* Review Cards */}
              <BrokerReviewCard
                brokerName={broker.brokerName}
                brokerLogo={broker.brokerLogo}
                reviews={broker.reviews}
              />
            </div>
          ))}
        </FadeInStagger>

        <FadeIn>
          <p className="mt-12 max-w-3xl text-sm text-neutral-500 dark:text-neutral-400">
            *Lưu ý: Hãy ưu tiên bảo vệ vốn, kiểm tra lại thông tin pháp lý trên website chính thức
            của sàn và chỉ sử dụng số tiền bạn có thể chấp nhận rủi ro.
          </p>
        </FadeIn>
      </Container>
    </>
  )
}


