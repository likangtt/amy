// 这是一个服务器组件，可以导出metadata
export const metadata = {
  title: '管理面板 - Massage Chair Expert',
  description: '管理和编辑网站内容',
};

import { AdminLayoutClient } from './layout-client';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}