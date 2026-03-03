import { type Metadata } from 'next'
import Script from 'next/script'
import { Inter, Space_Grotesk } from 'next/font/google'

import { RootLayout } from '@/components/RootLayout'
import { ThemeProvider } from '@/components/ThemeProvider'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Gemi Trader',
    default: 'Gemi Trader - Trader chuyên nghiệp với hơn 7 năm kinh nghiệm',
  },
  description:
    'Gemi Trader - Chia sẻ chiến lược trading, nhật ký giao dịch, phân tích thị trường và thư viện tài liệu miễn phí.',
  keywords: [
    'trading',
    'forex',
    'crypto',
    'giao dịch',
    'phân tích kỹ thuật',
    'Gemi Trader',
  ],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://gemitrader.com',
    siteName: 'Gemi Trader',
    title: 'Gemi Trader - Trader chuyên nghiệp',
    description:
      'Chia sẻ chiến lược trading, nhật ký giao dịch, phân tích thị trường.',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2982G26PTB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2982G26PTB');
          `}
        </Script>

        {/* Init theme before hydration */}
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

      <body
        className={`${inter.variable} ${spaceGrotesk.variable} flex min-h-full flex-col bg-white text-neutral-950 antialiased dark:bg-neutral-950 dark:text-neutral-50`}
      >
        <ThemeProvider>
          <RootLayout>{children}</RootLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
