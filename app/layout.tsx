import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import { seoMetadata } from "@/lib/seo-metadata"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = seoMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="盘搜 - 全网资源一站式搜索平台，快速搜索百度网盘、阿里云盘、夸克网盘等主流网盘资源" />
        <meta name="keywords" content="网盘搜索,百度网盘,阿里云盘,夸克网盘,资源搜索,电影下载,软件搜索" />
        <meta property="og:title" content="盘搜 - 全网资源一站式搜索平台" />
        <meta property="og:description" content="快速搜索百度网盘、阿里云盘、夸克网盘等主流网盘资源" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_CN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="盘搜 - 全网资源一站式搜索平台" />
        <meta name="twitter:description" content="快速搜索百度网盘、阿里云盘、夸克网盘等主流网盘资源" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
