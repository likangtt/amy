"use client";

import { useState, useRef } from "react";
import ImageSelectorModal from "./ImageSelectorModal";

interface EnhancedRichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const EnhancedRichTextEditor: React.FC<EnhancedRichTextEditorProps> = ({ value, onChange }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // 插入文本到光标位置
  const insertTextAtCursor = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    
    onChange(newText);
    
    // 设置光标位置
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + selectedText.length
      );
    }, 0);
  };
  
  // 处理粗体按钮点击
  const handleBoldClick = () => {
    insertTextAtCursor('**', '**');
  };
  
  // 处理斜体按钮点击
  const handleItalicClick = () => {
    insertTextAtCursor('*', '*');
  };
  
  // 处理链接按钮点击
  const handleLinkClick = () => {
    const url = prompt('请输入链接URL:', 'https://');
    if (url) {
      insertTextAtCursor('[', `](${url})`);
    }
  };
  
  // 处理引用按钮点击
  const handleQuoteClick = () => {
    insertTextAtCursor('> ');
  };
  
  // 处理图片按钮点击
  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  // 处理图片选择
  const handleImageSelect = (imageUrl: string, altText: string) => {
    insertTextAtCursor(`![${altText}](${imageUrl})`);
  };

  // 处理标题按钮点击
  const handleHeadingClick = () => {
    insertTextAtCursor('## ');
  };

  // 处理列表按钮点击
  const handleListClick = () => {
    insertTextAtCursor('- ');
  };

  // 处理分隔线按钮点击
  const handleHrClick = () => {
    insertTextAtCursor('\n---\n');
  };

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div className="bg-gray-100 border-b border-gray-300 p-2 flex flex-wrap gap-2">
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="标题"
          onClick={handleHeadingClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="粗体"
          onClick={handleBoldClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="斜体"
          onClick={handleItalicClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="链接"
          onClick={handleLinkClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="引用"
          onClick={handleQuoteClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992a4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="列表"
          onClick={handleListClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded" 
          title="分隔线"
          onClick={handleHrClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </svg>
        </button>
        <button 
          type="button" 
          className="p-1 hover:bg-gray-200 rounded bg-blue-100" 
          title="插入图片"
          onClick={handleImageClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
          </svg>
        </button>
      </div>
      <textarea
        ref={textareaRef}
        className="w-full p-4 min-h-[400px] focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="在这里输入文章内容..."
      />
      
      {/* 图片选择对话框 */}
      <ImageSelectorModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        onImageSelect={handleImageSelect}
      />
    </div>
  );
};

export default EnhancedRichTextEditor;