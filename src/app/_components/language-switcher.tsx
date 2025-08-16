"use client";

import { useState, useEffect } from "react";
import cn from "classnames";

const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "ar", name: "العربية" },
  { code: "hi", name: "हिन्दी" },
];

export function LanguageSwitcher() {
  // 使用suppressHydrationWarning来避免水合警告
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  
  // 使用useEffect确保只在客户端执行
  useEffect(() => {
    // 从localStorage或cookie中获取保存的语言设置
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && languages.some(lang => lang.code === savedLang)) {
      setCurrentLang(savedLang);
    }
  }, []);

  const switchLanguage = (langCode: string) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    // 更新状态
    setCurrentLang(langCode);
    setIsOpen(false);
    
    // 保存语言偏好到localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferredLanguage', langCode);
      } catch (e) {
        console.error('无法保存语言偏好:', e);
      }
    }
    
    // 在实际项目中，这里会切换语言
    // 由于我们的i18n配置尚未完全设置，这里只是模拟切换
    console.log(`切换到语言: ${langCode}`);
  };

  const getCurrentLanguageName = () => {
    const lang = languages.find(lang => lang.code === currentLang);
    return lang ? lang.name : "English";
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          id="language-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {getCurrentLanguageName()}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm",
                  currentLang === lang.code
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                )}
                role="menuitem"
                onClick={() => switchLanguage(lang.code)}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
