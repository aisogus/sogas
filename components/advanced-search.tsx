"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Search, TrendingUp, Clock, Star, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDebounce } from '@/hooks/use-debounce';

interface SearchResult {
  id: string;
  title: string;
  link: string;
  site: string;
  size: string;
  date: string;
  category: string;
  rating?: number;
}

export default function AdvancedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'size'>('relevance');
  const debouncedQuery = useDebounce(query, 300);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    { id: 'all', name: '全部', icon: '🌐' },
    { id: 'movie', name: '影视', icon: '🎬' },
    { id: 'music', name: '音乐', icon: '🎵' },
    { id: 'software', name: '软件', icon: '💻' },
    { id: 'book', name: '图书', icon: '📚' },
    { id: 'game', name: '游戏', icon: '🎮' },
  ];

  // Fetch search results
  const performSearch = useCallback(async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}&category=${selectedCategory}&sort=${sortBy}&page=1`
      );
      
      if (response.ok) {
        const data = await response.json();
        setResults(data.results || []);
      }
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, [query, selectedCategory, sortBy]);

  // Handle search submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Input
            ref={searchInputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索网盘资源..."
            className="w-full h-14 px-6 pr-32 text-lg rounded-full border-2 focus:border-blue-500 transition-all"
          />
          
          <div className="absolute right-2 flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory(selectedCategory === 'all' ? 'movie' : 'all')}
              className="rounded-full"
            >
              <Filter className="w-4 h-4 mr-1" />
              {selectedCategory === 'all' ? '全部' : categories.find(c => c.id === selectedCategory)?.name}
            </Button>
            
            <Button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  搜索
                </>
              )}
            </Button>
          </div>
        </div>
      </form>

      {/* Trending Searches */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <TrendingUp className="w-4 h-4" />
        <span className="font-medium">热门搜索:</span>
        {['最新电影', '热门剧集', '编程教程', '音乐专辑'].map((term) => (
          <Badge
            key={term}
            variant="secondary"
            className="cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            onClick={() => {
              setQuery(term);
              setTimeout(() => searchInputRef.current?.focus(), 100);
            }}
          >
            {term}
          </Badge>
        ))}
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              找到 {results.length} 个结果
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">排序:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-sm border rounded-md px-2 py-1 bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="relevance">相关性</option>
                <option value="date">最新</option>
                <option value="size">大小</option>
              </select>
            </div>
          </div>

          {results.map((result, index) => (
            <Card
              key={result.id || index}
              className="hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => window.open(result.link, '_blank')}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors truncate">
                      {result.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {result.site}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-500">
                      <Badge variant="outline">{result.category}</Badge>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {result.date}
                      </span>
                      <span className="font-mono">{result.size}</span>
                      {result.rating && (
                        <span className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-3 h-3 fill-current" />
                          {result.rating}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    查看详情
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            未找到相关结果
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            尝试使用不同的关键词或筛选条件
          </p>
        </div>
      ) : null}
    </div>
  );
}
