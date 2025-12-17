import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { BrokerReviewCard } from '@/components/BrokerReviewCard'

export const metadata: Metadata = {
  title: 'Sàn Crypto uy tín',
  description:
    'Top sàn Crypto mà Gemi Trader đang đánh giá và sử dụng cho các chiến lược giao dịch thị trường tiền mã hoá.',
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

const cryptoBrokerReviews: BrokerReviews[] = [
  {
    brokerName: 'Binance',
    brokerLogo: 'B',
    reviews: [
      {
        id: 'binance-uy-tin',
        title: 'Binance có uy tín không? Đánh giá sàn Binance 2025',
        headerTitle: 'SÀN BINANCE CÓ UY TÍN KHÔNG?',
        description: 'Phân tích độ uy tín, bảo mật và quy định của sàn Binance',
        href: '/brokers/binance/uy-tin',
        badge: '✓',
      },
      {
        id: 'binance-dang-ky',
        title: 'Hướng Dẫn Đăng Ký Binance Chi Tiết Cho Người Mới',
        headerTitle: 'HƯỚNG DẪN ĐĂNG KÝ BINANCE',
        description: 'Từng bước hướng dẫn đăng ký và xác minh tài khoản Binance',
        href: '/brokers/binance/dang-ky',
      },
      {
        id: 'binance-futures',
        title: 'Hướng Dẫn Giao Dịch Futures Binance Cho Trader',
        headerTitle: 'HƯỚNG DẪN GIAO DỊCH FUTURES BINANCE',
        description: 'Hướng dẫn chi tiết cách giao dịch futures trên Binance',
        href: '/brokers/binance/futures',
      },
      {
        id: 'binance-danh-gia',
        title: 'Binance Là Gì? Review Sàn Binance Chi Tiết 2025',
        headerTitle: 'ĐÁNH GIÁ SÀN BINANCE',
        description: 'Review toàn diện về sàn Binance từ trải nghiệm thực tế',
        href: '/brokers/binance/danh-gia',
      },
    ],
  },
  {
    brokerName: 'Bybit',
    brokerLogo: 'BY',
    reviews: [
      {
        id: 'bybit-uy-tin',
        title: 'Bybit có uy tín không? Review sàn Bybit 2025',
        headerTitle: 'SÀN BYBIT CÓ UY TÍN KHÔNG?',
        description: 'Đánh giá về độ uy tín và điều kiện giao dịch của Bybit',
        href: '/brokers/bybit/uy-tin',
        badge: '✓',
      },
      {
        id: 'bybit-dang-ky',
        title: 'Hướng Dẫn Đăng Ký Bybit Chi Tiết Năm 2025',
        headerTitle: 'HƯỚNG DẪN ĐĂNG KÝ BYBIT',
        description: 'Hướng dẫn từng bước đăng ký và xác minh tài khoản Bybit',
        href: '/brokers/bybit/dang-ky',
      },
      {
        id: 'bybit-copy-trading',
        title: 'Hướng Dẫn Copy Trading Trên Bybit Cho Người Mới',
        headerTitle: 'HƯỚNG DẪN COPY TRADING BYBIT',
        description: 'Hướng dẫn cách sử dụng tính năng copy trading trên Bybit',
        href: '/brokers/bybit/copy-trading',
      },
      {
        id: 'bybit-danh-gia',
        title: 'Bybit Là Gì? Đánh Giá Sàn Bybit Chi Tiết',
        headerTitle: 'ĐÁNH GIÁ SÀN BYBIT',
        description: 'Review chi tiết về sàn Bybit từ trải nghiệm thực tế',
        href: '/brokers/bybit/danh-gia',
      },
    ],
  },
  {
    brokerName: 'OKX',
    brokerLogo: 'OK',
    reviews: [
      {
        id: 'okx-uy-tin',
        title: 'OKX có uy tín không? Review sàn OKX 2025',
        headerTitle: 'SÀN OKX CÓ UY TÍN KHÔNG?',
        description: 'Phân tích độ uy tín và các tính năng của sàn OKX',
        href: '/brokers/okx/uy-tin',
        badge: '✓',
      },
      {
        id: 'okx-dang-ky',
        title: 'Hướng Dẫn Đăng Ký OKX Chi Tiết Cho Trader',
        headerTitle: 'HƯỚNG DẪN ĐĂNG KÝ OKX',
        description: 'Quy trình đăng ký và xác minh tài khoản OKX',
        href: '/brokers/okx/dang-ky',
      },
      {
        id: 'okx-danh-gia',
        title: 'OKX Là Gì? Đánh Giá Sàn OKX Chi Tiết',
        headerTitle: 'ĐÁNH GIÁ SÀN OKX',
        description: 'Review toàn diện về sàn OKX từ trải nghiệm thực tế',
        href: '/brokers/okx/danh-gia',
      },
      {
        id: 'okx-api',
        title: 'Hướng Dẫn Sử Dụng API OKX Cho Algorithmic Trading',
        headerTitle: 'HƯỚNG DẪN SỬ DỤNG API OKX',
        description: 'Hướng dẫn cách kết nối và sử dụng API OKX cho bot trading',
        href: '/brokers/okx/api',
      },
    ],
  },
]

export default function CryptoBrokers() {
  return (
    <>
      <PageIntro eyebrow="Top sàn Crypto" title="Review & Hướng dẫn các sàn Crypto uy tín">
        <p>
          Tổng hợp các bài đánh giá, hướng dẫn đăng ký và sử dụng các sàn Crypto mà Gemi Trader đang
          đồng hành. Lựa chọn sàn Crypto cần chú ý tới thanh khoản, phí giao dịch, bảo mật và khả
          năng kết nối API.
        </p>
      </PageIntro>

      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <FadeInStagger className="space-y-20">
          {cryptoBrokerReviews.map((broker) => (
            <div key={broker.brokerName} className="relative">
              {/* Section Header */}
              <FadeIn>
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 text-2xl font-bold text-white shadow-xl shadow-amber-500/30 transition-transform duration-300 hover:scale-105">
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
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
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
            *Rủi ro: Thị trường crypto biến động mạnh, hãy ưu tiên an toàn tài khoản (2FA, bảo mật
            email) và không sử dụng đòn bẩy quá mức so với kinh nghiệm và chiến lược cá nhân.
          </p>
        </FadeIn>
      </Container>
    </>
  )
}


