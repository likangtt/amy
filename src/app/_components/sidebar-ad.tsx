import { AdUnit } from "./ad-unit";

type SidebarAdProps = {
  className?: string;
};

export function SidebarAd({ className }: SidebarAdProps) {
  return (
    <div className={`my-6 ${className}`}>
      <AdUnit 
        adClient="ca-pub-XXXXXXXXXXXXXXXX" // 替换为您的AdSense发布商ID
        adSlot="5566778899" // 替换为您的实际广告单元ID
        adFormat="vertical"
        responsive={false}
        style={{ minHeight: "600px" }}
      />
    </div>
  );
}