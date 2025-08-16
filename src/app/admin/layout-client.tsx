"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthProvider } from "../_components/auth-context";
import { useAuth } from "../_components/auth-context";

// 客户端组件包装
function AdminLayoutContentInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const { logout } = useAuth();

  // 如果是登录页面，不显示侧边栏和顶部导航
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      {/* 侧边栏 */}
      <div className="w-64 bg-blue-800 text-white p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">管理面板</h1>
          <p className="text-sm text-blue-200">Massage Chair Expert</p>
        </div>
        
        <nav className="space-y-1">
          <Link href="/admin" className="block py-2 px-4 rounded hover:bg-blue-700">
            仪表盘
          </Link>
          <Link href="/admin/articles" className="block py-2 px-4 rounded hover:bg-blue-700">
            文章管理
          </Link>
          <Link href="/admin/articles/new" className="block py-2 px-4 rounded hover:bg-blue-700">
            新建文章
          </Link>
          <div className="pt-4 mt-4 border-t border-blue-700">
            <Link href="/" className="block py-2 px-4 rounded hover:bg-blue-700" target="_blank">
              查看网站
            </Link>
          </div>
        </nav>
      </div>
      
      {/* 主内容区 */}
      <div className="flex-1 bg-gray-100">
        {/* 顶部导航栏 */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-6 py-3">
            <h2 className="text-xl font-semibold text-gray-800">管理面板</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-4">管理员</span>
              <button 
                className="text-sm text-red-600 hover:text-red-800"
                onClick={logout}
              >
                退出登录
              </button>
            </div>
          </div>
        </header>
        
        {/* 页面内容 */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayoutContentInner>{children}</AdminLayoutContentInner>
  );
}

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}