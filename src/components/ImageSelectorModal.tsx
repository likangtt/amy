"use client";

import { useState, useEffect } from "react";
import ImageUploader from "./ImageUploader";

interface ImageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImageSelect: (imageUrl: string, altText: string) => void;
}

const ImageSelectorModal: React.FC<ImageSelectorModalProps> = ({ 
  isOpen, 
  onClose, 
  onImageSelect 
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [altText, setAltText] = useState("");
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
  const [recentImages, setRecentImages] = useState<string[]>([]);

  // Load recently used images
  useEffect(() => {
    const savedImages = localStorage.getItem("recent_images");
    if (savedImages) {
      try {
        setRecentImages(JSON.parse(savedImages));
      } catch (e) {
        console.error("Failed to parse recent images:", e);
      }
    }
  }, []);

  // 保存最近使用的图片
  const saveRecentImage = (url: string) => {
    const updatedImages = [url, ...recentImages.filter(img => img !== url)].slice(0, 10);
    setRecentImages(updatedImages);
    localStorage.setItem("recent_images", JSON.stringify(updatedImages));
  };

  // 处理图片选择
  const handleSelectImage = () => {
    if (imageUrl) {
      onImageSelect(imageUrl, altText || "Image");
      saveRecentImage(imageUrl);
      handleClose();
    }
  };

  // 处理关闭
  const handleClose = () => {
    setImageUrl("");
    setAltText("");
    onClose();
  };

  // 处理上传图片选择
  const handleUploadedImage = (url: string) => {
    setImageUrl(url);
  };

  // 处理最近图片选择
  const handleRecentImageSelect = (url: string) => {
    setImageUrl(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* 背景遮罩 */}
        <div 
          className="fixed inset-0 transition-opacity" 
          aria-hidden="true"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* 对话框 */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Insert Image
                </h3>
                
                {/* 选项卡 */}
                <div className="border-b border-gray-200 mb-4">
                  <nav className="-mb-px flex">
                    <button
                      className={`py-2 px-4 border-b-2 font-medium text-sm ${
                        activeTab === "upload"
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                      onClick={() => setActiveTab("upload")}
                    >
                      Upload Image
                    </button>
                    <button
                      className={`py-2 px-4 border-b-2 font-medium text-sm ${
                        activeTab === "url"
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                      onClick={() => setActiveTab("url")}
                    >
                      Image URL
                    </button>
                  </nav>
                </div>
                
                {/* 上传图片选项卡 */}
                {activeTab === "upload" && (
                  <div className="space-y-4">
                    <ImageUploader onImageSelect={handleUploadedImage} />
                    
                    {/* 最近使用的图片 */}
                    {recentImages.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Recently Used Images</h4>
                        <div className="grid grid-cols-4 gap-2">
                          {recentImages.map((img, index) => (
                            <div 
                              key={index} 
                              className={`relative aspect-square border rounded overflow-hidden cursor-pointer ${
                                imageUrl === img ? 'ring-2 ring-blue-500' : ''
                              }`}
                              onClick={() => handleRecentImageSelect(img)}
                            >
                              <img 
                                src={img} 
                                alt="Recent image" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Failed+to+load';
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* 图片URL选项卡 */}
                {activeTab === "url" && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="image-url" className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL
                      </label>
                      <input
                        type="text"
                        id="image-url"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    
                    {/* 图片预览 */}
                    {imageUrl && (
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700 mb-1">Preview</p>
                        <div className="border rounded p-2">
                          <img 
                            src={imageUrl} 
                            alt="Preview" 
                            className="max-h-40 mx-auto"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x150?text=Image+failed+to+load';
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* 图片描述 */}
                <div className="mt-4">
                  <label htmlFor="alt-text" className="block text-sm font-medium text-gray-700 mb-1">
                    Image Description
                  </label>
                  <input
                    type="text"
                    id="alt-text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={altText}
                    onChange={(e) => setAltText(e.target.value)}
                    placeholder="Describe image content (for SEO and accessibility)"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* 按钮区域 */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${
                !imageUrl ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleSelectImage}
              disabled={!imageUrl}
            >
              Insert Image
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSelectorModal;