import type { Metadata } from 'next';

export const generateMetadata = async ({ searchParams }: { searchParams: { q?: string } }): Promise<Metadata> => {
  const query = searchParams.q || '';
  
  return {
    title: query ? `${query} - 网盘资源搜索 | SOGAS` : 'SO GAS - 全网网盘资源搜索引擎',
    description: query 
      ? `搜索 ${query} 的网盘资源，包括电影、电视剧、软件、图书等`
      : 'SOGAS 是一个强大的网盘资源搜索引擎，支持百度网盘、阿里云盘、夸克网盘等多平台资源搜索',
    keywords: query 
      ? [`网盘搜索`, query, `资源搜索`, `在线下载`].join(', ')
      : '网盘搜索, 资源搜索, 百度网盘, 阿里云盘, 夸克网盘, 在线下载, 免费资源',
    openGraph: {
      title: query ? `${query} - SOGAS 网盘搜索` : 'SOGAS - 全网网盘资源搜索引擎',
      description: query 
        ? `搜索 ${query} 的网盘资源`
        : 'SOGAS 是一个强大的网盘资源搜索引擎',
      type: 'website',
      locale: 'zh_CN',
      siteName: 'SOGAS',
    },
    twitter: {
      card: 'summary_large_image',
      title: query ? `${query} - SOGAS 网盘搜索` : 'SOGAS - 全网网盘资源搜索引擎',
      description: query 
        ? `搜索 ${query} 的网盘资源`
        : 'SOGAS 是一个强大的网盘资源搜索引擎',
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
  };
};
