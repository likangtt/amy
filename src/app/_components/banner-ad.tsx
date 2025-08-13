import { AdUnit } from "./ad-unit";

type BannerAdProps = {
  position: "top" | "bottom" | "middle";
  className?: string;
};

export function BannerAd({ position, className }: BannerAdProps) {
  // 根据位置使用不同的广告单元
  const adSlot = {
    top: "1234567890",    // 替换为您的实际广告单元ID
    middle: "0987654321", // 替换为您的实际广告单元ID
    bottom: "1122334455"  // 替换为您的实际广告单元ID
  }[position];

  return (
    <div className={`my-8 ${className}`}>
      <AdUnit 
        adClient="ca-pub-XXXXXXXXXXXXXXXX" // 替换为您的AdSense发布商ID
        adSlot={adSlot}
        adFormat="horizontal"
        responsive={true}
        className="w-full"
      />
    </div>
  );
}