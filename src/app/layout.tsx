import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { ThemeProvider } from '@/components/ThemeProvider'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Gemi Trader',
    default: 'Gemi Trader - Trader chuyên nghiệp với hơn 7 năm kinh nghiệm',
  },
  description:
    'Gemi Trader - Chia sẻ chiến lược trading, nhật ký giao dịch, phân tích thị trường và thư viện tài liệu miễn phí. Trader chuyên nghiệp với hơn 7 năm kinh nghiệm.',
  keywords: [
    'trading',
    'forex',
    'crypto',
    'giao dịch',
    'phân tích kỹ thuật',
    'Gemi Trader',
    'trading strategy',
    'quản lý rủi ro',
  ],
  authors: [{ name: 'Gemi Trader' }],
  creator: 'Gemi Trader',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://gemitrader.com',
    siteName: 'Gemi Trader',
    title: 'Gemi Trader - Trader chuyên nghiệp với hơn 7 năm kinh nghiệm',
    description:
      'Chia sẻ chiến lược trading, nhật ký giao dịch, phân tích thị trường và thư viện tài liệu miễn phí.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemi Trader - Trader chuyên nghiệp',
    description:
      'Chia sẻ chiến lược trading, nhật ký giao dịch, phân tích thị trường và thư viện tài liệu miễn phí.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var initialTheme = theme || systemTheme;
                  if (initialTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-neutral-950 antialiased transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-50">
        <ThemeProvider>
          <RootLayout>{children}</RootLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
