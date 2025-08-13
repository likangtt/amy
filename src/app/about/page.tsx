import Container from "@/app/_components/container";
import { BannerAd } from "@/app/_components/banner-ad";

export default function About() {
  return (
    <main>
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight md:text-6xl mt-10 mb-6">
            关于我们
          </h1>
          
          <BannerAd position="top" />
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">
              欢迎来到我们的博客！我们致力于为读者提供高质量的内容和有价值的信息。
            </p>
            
            <h2>我们的使命</h2>
            <p>
              我们的使命是创建一个多语言平台，让来自世界各地的读者都能获取到有价值的信息。我们相信知识无国界，通过提供多种语言的内容，我们希望能够连接不同文化背景的人们。
            </p>
            
            <h2>我们的团队</h2>
            <p>
              我们的团队由来自不同国家和地区的专业人士组成，他们在各自的领域都有丰富的经验和专业知识。我们的作者、编辑和翻译人员共同努力，确保我们的内容既准确又易于理解。
            </p>
            
            <h2>我们的价值观</h2>
            <ul>
              <li><strong>质量</strong>：我们致力于提供高质量的内容，确保信息的准确性和相关性。</li>
              <li><strong>多样性</strong>：我们尊重并庆祝文化多样性，通过多语言内容反映这一点。</li>
              <li><strong>可访问性</strong>：我们努力使我们的内容对所有人都易于访问，无论其语言或背景如何。</li>
              <li><strong>创新</strong>：我们不断寻求改进我们的平台和内容，以满足读者不断变化的需求。</li>
            </ul>
            
            <h2>联系我们</h2>
            <p>
              如果您有任何问题、建议或反馈，请随时通过我们的<a href="/contact">联系页面</a>与我们联系。我们非常重视您的意见，并期待听到您的声音。
            </p>
          </div>
          
          <BannerAd position="bottom" />
        </div>
      </Container>
    </main>
  );
}