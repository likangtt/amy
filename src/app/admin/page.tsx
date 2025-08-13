import Link from "next/link";

export default function AdminDashboard() {
  // 模拟一些统计数据
  const stats = [
    { label: "文章总数", value: 24 },
    { label: "评论总数", value: 156 },
    { label: "本月访问量", value: "3,254" },
    { label: "待审核评论", value: 5 },
  ];

  // 模拟最近的文章
  const recentArticles = [
    { id: 1, title: "最佳按摩椅2023年榜单", date: "2023-08-10", status: "已发布" },
    { id: 2, title: "如何选择适合您的按摩椅", date: "2023-08-05", status: "已发布" },
    { id: 3, title: "按摩椅的健康益处", date: "2023-07-28", status: "草稿" },
    { id: 4, title: "按摩椅维护指南", date: "2023-07-20", status: "已发布" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">仪表盘</h1>
      
      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* 快速操作 */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">快速操作</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/admin/articles/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            创建新文章
          </Link>
          <Link href="/admin/media/upload" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            上传媒体
          </Link>
          <Link href="/admin/settings" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            网站设置
          </Link>
        </div>
      </div>
      
      {/* 最近文章 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">最近文章</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  标题
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  日期
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  状态
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentArticles.map((article) => (
                <tr key={article.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{article.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{article.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      article.status === "已发布" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/admin/articles/edit/${article.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                      编辑
                    </Link>
                    <button className="text-red-600 hover:text-red-900">
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}