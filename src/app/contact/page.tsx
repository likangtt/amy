"use client";

import { useState } from "react";
import Container from "@/app/_components/container";
import { BannerAd } from "@/app/_components/banner-ad";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 这里可以添加实际的表单提交逻辑
      // 例如使用 fetch API 发送数据到后端
      
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // 成功提交后
      setSubmitStatus({
        success: true,
        message: "您的消息已成功发送！我们会尽快回复您。",
      });
      
      // 重置表单
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "发送消息时出错，请稍后再试。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight md:text-6xl mt-10 mb-6">
            联系我们
          </h1>
          
          <BannerAd position="top" />
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-lg">
              我们很乐意听取您的意见、问题或建议。请填写下面的表单，我们会尽快回复您。
            </p>
          </div>
          
          {submitStatus.message && (
            <div
              className={`p-4 mb-6 rounded-md ${
                submitStatus.success
                  ? "bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100"
                  : "bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-100"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                姓名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                电子邮件
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                主题
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                消息
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? "发送中..." : "发送消息"}
              </button>
            </div>
          </form>
          
          <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-4">其他联系方式</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">电子邮件</h3>
                <p>info@massagechairreview.shop</p>
              </div>
              <div>
                <h3 className="font-semibold">社交媒体</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="https://twitter.com/youraccount" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    Twitter
                  </a>
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    Facebook
                  </a>
                  <a href="https://instagram.com/youraccount" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <BannerAd position="bottom" />
        </div>
      </Container>
    </main>
  );
}