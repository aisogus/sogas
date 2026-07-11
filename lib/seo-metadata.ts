import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "盘搜 - 全网资源一站式搜索平台",
  description: "快速搜索百度网盘、阿里云盘、夸克网盘等主流网盘资源，电影、音乐、软件、教程应有尽有",
  keywords: ["网盘搜索", "百度网盘", "阿里云盘", "夸克网盘", "资源搜索", "电影下载", "软件搜索"],
  authors: [{ name: "盘搜团队" }],
  creator: "盘搜",
  publisher: "盘搜",
  robots: "index, follow",
  openGraph: {
    title: "盘搜 - 全网资源一站式搜索平台",
    description: "快速搜索百度网盘、阿里云盘、夸克网盘等主流网盘资源",
    type: "website",
    locale: "zh_CN",
    siteName: "盘搜",
  },
  twitter: {
    card: "summary_large_image",
    title: "盘搜 - 全网资源一站式搜索平台",
    description: "快速搜索百度网盘、阿里云盘、夸克网盘等主流网盘资源",
  },
  verification: {
    google: "your-google-verification-code",
  },
}
