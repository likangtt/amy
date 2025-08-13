"use client";

import Link from "next/link";
import { Suspense } from "react";

// 创建一个不使用useSearchParams的404页面组件
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">页面未找到</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        抱歉，您要查找的页面不存在或已被移动。
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}