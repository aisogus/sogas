import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "盘搜 - 全网资源一站式搜索平台",
    template: "%s | 盘搜"
  },
  description: "盘搜是一个专业的网盘资源搜索平台，支持全网资源一键搜索，快速找到您需要的电影、音乐、软件、教程等资源。",
  keywords: ["网盘搜索", "资源搜索", "电影下载", "音乐下载", "软件下载", "教程下载", "百度网盘", "阿里云盘", "夸克网盘"],
  authors: [{ name: "盘搜团队" }],
  creator: "盘搜",
  publisher: "盘搜",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://sogas.vercel.app",
    siteName: "盘搜",
    title: "盘搜 - 全网资源一站式搜索平台",
    description: "盘搜是一个专业的网盘资源搜索平台，支持全网资源一键搜索，快速找到您需要的电影、音乐、软件、教程等资源。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "盘搜平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "盘搜 - 全网资源一站式搜索平台",
    description: "盘搜是一个专业的网盘资源搜索平台，支持全网资源一键搜索，快速找到您需要的电影、音乐、软件、教程等资源。",
    images: ["/twitter-image.png"],
    creator: "@sogas_platform",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    baidu: "your-baidu-verification-code",
  },
  category: "search",
  alternates: {
    canonical: "https://sogas.vercel.app",
    languages: {
      "zh-CN": "/zh",
      "en-US": "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "盘搜",
            "description": "全网资源一站式搜索平台",
            "url": "https://sogas.vercel.app",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
