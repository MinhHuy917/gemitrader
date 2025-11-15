import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Quotes',
  description:
    'Báo giá real-time các cặp tiền tệ, chỉ số chứng khoán, và các tài sản tài chính khác.',
}

const quotes = [
  {
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    price: 1.0856,
    change: 0.0023,
    changePercent: 0.21,
    type: 'Forex',
  },
  {
    symbol: 'GBP/USD',
    name: 'British Pound / US Dollar',
    price: 1.2645,
    change: -0.0012,
    changePercent: -0.09,
    type: 'Forex',
  },
  {
    symbol: 'USD/JPY',
    name: 'US Dollar / Japanese Yen',
    price: 148.23,
    change: 0.45,
    changePercent: 0.30,
    type: 'Forex',
  },
  {
    symbol: 'BTC/USD',
    name: 'Bitcoin / US Dollar',
    price: 45230.50,
    change: 1234.50,
    changePercent: 2.81,
    type: 'Crypto',
  },
  {
    symbol: 'ETH/USD',
    name: 'Ethereum / US Dollar',
    price: 2650.75,
    change: 45.25,
    changePercent: 1.74,
    type: 'Crypto',
  },
  {
    symbol: 'VN-Index',
    name: 'VN-Index',
    price: 1156.42,
    change: 12.35,
    changePercent: 1.08,
    type: 'Stock',
  },
  {
    symbol: 'S&P 500',
    name: 'S&P 500 Index',
    price: 4785.23,
    change: 23.45,
    changePercent: 0.49,
    type: 'Stock',
  },
  {
    symbol: 'Gold',
    name: 'Gold Spot',
    price: 2034.50,
    change: -8.25,
    changePercent: -0.40,
    type: 'Commodity',
  },
]

function QuoteCard({
  symbol,
  name,
  price,
  change,
  changePercent,
  type,
}: {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  type: string
}) {
  const isPositive = change >= 0

  return (
    <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-x-2">
            <span className="font-display text-lg font-semibold text-neutral-950">
              {symbol}
            </span>
            <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700">
              {type}
            </span>
          </div>
          <p className="mt-1 text-sm text-neutral-600">{name}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="font-display text-2xl font-semibold text-neutral-950">
          {price.toLocaleString('en-US', {
            minimumFractionDigits: type === 'Forex' ? 4 : 2,
            maximumFractionDigits: type === 'Forex' ? 4 : 2,
          })}
        </div>
        <div
          className={`mt-2 flex items-center gap-x-2 text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <span>{isPositive ? '+' : ''}{change.toFixed(2)}</span>
          <span>
            ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Quotes() {
  return (
    <>
      <PageIntro eyebrow="Quotes" title="Báo giá thị trường real-time">
        <p>
          Theo dõi báo giá real-time các cặp tiền tệ, chỉ số chứng khoán, crypto
          và các tài sản tài chính khác.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((quote) => (
            <FadeIn key={quote.symbol}>
              <QuoteCard {...quote} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <ContactSection />
    </>
  )
}

