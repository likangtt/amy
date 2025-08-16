import Container from "@/app/_components/container";
import { BannerAd } from "@/app/_components/banner-ad";

export default function Privacy() {
  return (
    <main>
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter leading-tight md:text-6xl mt-10 mb-6">
            隐私政策
          </h1>
          
          <BannerAd position="top" />
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">
              最后更新日期：2023年8月13日
            </p>
            
            <h2>引言</h2>
            <p>
              我们非常重视您的隐私。本隐私政策旨在向您说明我们如何收集、使用、披露和保护您的个人信息。请仔细阅读本政策，以了解我们对您的个人信息的处理方式。
            </p>
            
            <h2>信息收集</h2>
            <p>
              我们可能会收集以下类型的信息：
            </p>
            <ul>
              <li><strong>个人识别信息</strong>：如姓名、电子邮件地址、电话号码等，当您注册账户、订阅我们的通讯或与我们联系时。</li>
              <li><strong>使用数据</strong>：关于您如何访问和使用我们的网站的信息，包括您的IP地址、浏览器类型、访问时间、访问的页面等。</li>
              <li><strong>Cookie和类似技术</strong>：我们使用Cookie和类似技术来收集和存储有关您的设备和浏览活动的信息。</li>
            </ul>
            
            <h2>信息使用</h2>
            <p>
              我们可能会将收集到的信息用于以下目的：
            </p>
            <ul>
              <li>提供、维护和改进我们的服务</li>
              <li>处理和完成交易</li>
              <li>发送与我们的服务相关的通知</li>
              <li>发送营销和促销通讯（如果您已选择接收）</li>
              <li>分析网站使用情况和趋势</li>
              <li>保护我们的权利和财产</li>
            </ul>
            
            <h2>广告</h2>
            <p>
              我们的网站使用Google AdSense展示广告。Google AdSense使用Cookie来个性化向您展示的广告。Google的广告Cookie使Google及其合作伙伴能够根据您对我们网站和/或其他网站的访问情况向您展示广告。
            </p>
            <p>
              您可以通过访问<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google广告设置</a>选择退出个性化广告。
            </p>
            
            <h2>信息共享</h2>
            <p>
              我们不会出售或出租您的个人信息给第三方用于营销目的。我们可能会在以下情况下共享您的信息：
            </p>
            <ul>
              <li>与提供服务的第三方服务提供商</li>
              <li>为遵守法律义务</li>
              <li>保护我们的权利和财产</li>
              <li>在业务转让（如合并或收购）的情况下</li>
            </ul>
            
            <h2>数据安全</h2>
            <p>
              我们采取合理的安全措施来保护您的个人信息不被未经授权的访问、使用或披露。然而，没有任何互联网传输或电子存储方法是100%安全的。
            </p>
            
            <h2>您的权利</h2>
            <p>
              根据适用的数据保护法律，您可能有权：
            </p>
            <ul>
              <li>访问您的个人信息</li>
              <li>更正不准确的个人信息</li>
              <li>删除您的个人信息</li>
              <li>限制或反对处理您的个人信息</li>
              <li>数据可携带性</li>
              <li>撤回同意</li>
            </ul>
            
            <h2>儿童隐私</h2>
            <p>
              我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。
            </p>
            
            <h2>政策变更</h2>
            <p>
              我们可能会不时更新本隐私政策。我们会在网站上发布更新后的政策，并在重大变更时通知您。
            </p>
            
            <h2>联系我们</h2>
            <p>
              如果您对本隐私政策有任何问题或疑虑，请通过我们的<a href="/contact">联系页面</a>与我们联系。
            </p>
          </div>
          
          <BannerAd position="bottom" />
        </div>
      </Container>
    </main>
  );
}