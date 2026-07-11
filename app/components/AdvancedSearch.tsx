import React, { useState } from 'react';
import { Search, Filter, Calendar, Tag, Folder, FileText, Image, Video, Music, Code } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  size: string;
  date: string;
  type: string;
  link: string;
}

interface AdvancedSearchProps {
  onSearch: (query: string, filters: any) => void;
  isLoading: boolean;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [fileType, setFileType] = useState('all');
  const [dateRange, setDateRange] = useState('all');
  const [minSize, setMinSize] = useState('');
  const [maxSize, setMaxSize] = useState('');
  const [tags, setTags] = useState('');

  const handleSearch = () => {
    onSearch(query, {
      fileType,
      dateRange,
      minSize,
      maxSize,
      tags
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 mr-2 text-blue-500" />
        <h3 className="text-lg font-semibold">高级搜索</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2">文件类型</label>
          <select 
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">全部</option>
            <option value="document">文档</option>
            <option value="image">图片</option>
            <option value="video">视频</option>
            <option value="audio">音频</option>
            <option value="code">代码</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">日期范围</label>
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">全部时间</option>
            <option value="today">今天</option>
            <option value="week">本周</option>
            <option value="month">本月</option>
            <option value="year">今年</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">标签</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="输入标签，逗号分隔"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2">最小大小 (MB)</label>
          <input
            type="number"
            value={minSize}
            onChange={(e) => setMinSize(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">最大大小 (MB)</label>
          <input
            type="number"
            value={maxSize}
            onChange={(e) => setMaxSize(e.target.value)}
            placeholder="无限制"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? '搜索中...' : '搜索'}
        </button>
      </div>
    </div>
  );
};

export default AdvancedSearch;
