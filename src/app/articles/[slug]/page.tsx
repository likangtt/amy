// 文章页面组件的props类型
interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// 文章数据接口
interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  tags: string[];
  publishedAt: string;
  slug: string;
  status: string;
}

// 获取文章数据的函数
function getArticleData(slug: string): Article | null {
  if (slug === "luxury-4d-sl-track-massage-chair-review-2025-affordable-full-body-relaxation") {
    return {
      id: 1,
      title: "Luxury 4D SL-Track Massage Chair Review 2025 – Affordable Full-Body Relaxation?",
      excerpt: "We reviewed the Luxury 4D SL-Track Massage Chair with 18 auto programs, heat therapy, foot rollers, and body scan. Is it worth the $1,600 price tag in 2025?",
      featuredImage: "/images/luxury-4d-massage-chair.jpg",
      category: "buying-guide",
      tags: ["massage-chair", "4d", "sl-track", "2025", "luxury", "review"],
      publishedAt: "2025-01-20",
      slug: "luxury-4d-sl-track-massage-chair-review-2025-affordable-full-body-relaxation",
      status: "Published",
      content: `<h1>Luxury 4D SL-Track Massage Chair Review 2025</h1>
<p><em>Full-body massage at home without draining your wallet? Let's find out.</em></p>

<hr>

<p><img src="/images/luxury-4d-massage-chair.jpg" alt="Luxury 4D Massage Chair Amazon" title="Luxury 4D Massage Chair with SL-track and zero gravity" style="width: 100%; height: auto;"></p>

<h2>Quick Overview</h2>
<p>This <strong>Luxury 4D Massage Chair</strong> (available on Amazon around $1,600) promises premium features at a mid-range price:</p>

<ul>
<li><strong>4D Massage Mechanism</strong> – adjustable speed, depth, and rhythm</li>
<li><strong>SL-Track</strong> – covers neck to glutes</li>
<li><strong>18 Auto Massage Programs</strong></li>
<li><strong>6 Professional Massage Techniques</strong> (kneading, knocking, shiatsu, etc.)</li>
<li><strong>Heat Therapy</strong> – waist + calves</li>
<li><strong>Zero Gravity Recline</strong> – 3 levels</li>
<li><strong>Foot Rollers + Extended Calf Massage</strong></li>
<li><strong>Wireless Charging + LCD Touchscreen</strong></li>
<li><strong>Body Scan for personalized fit</strong></li>
</ul>

<hr>

<h2>What Customers Love 👍</h2>

<ul>
<li><strong>Great value for money</strong> – Buyers mention this chair delivers features usually found in $3,000+ models.</li>
<li><strong>Strong massage intensity</strong> – Deep kneading and shiatsu modes actually relieve tension, not just "vibration."</li>
<li><strong>Full-body coverage</strong> – SL-track + airbags cover shoulders, arms, waist, calves, and feet.</li>
<li><strong>Comfortable heat therapy</strong> – Calf and waist heating functions are especially popular in winter.</li>
<li><strong>User-friendly</strong> – Touchscreen + one-touch programs make it simple, even for older adults.</li>
<li><strong>Stylish design</strong> – Futuristic look, fits modern living rooms.</li>
</ul>

<hr>

<h2>Where It Falls Short 👎</h2>

<ul>
<li><strong>Bulky size</strong> – At over 350 lbs, it requires at least 31" (80cm) door clearance.</li>
<li><strong>Massage can feel intense</strong> – Some users found the pressure too strong, especially for seniors.</li>
<li><strong>Noise levels</strong> – A few buyers mention the rollers aren't the quietest.</li>
<li><strong>Customer support</strong> – Mixed reviews: some received quick service, others reported slow responses.</li>
<li><strong>Assembly</strong> – White-glove delivery is recommended; self-assembly can be tough.</li>
</ul>

<hr>

<h2>Who Should Buy This Massage Chair?</h2>

<ul>
<li><strong>Office workers</strong> – Strong back & neck massage programs help after long desk hours.</li>
<li><strong>Fitness enthusiasts</strong> – Stretching + shiatsu functions help recovery.</li>
<li><strong>Families</strong> – Multiple auto programs + adjustable intensity suit different members.</li>
<li><strong>Budget-conscious buyers</strong> – Mid-range price for high-end features.</li>
</ul>

<p>⚠️ Not ideal for: very elderly users or those needing extra-gentle massage.</p>

<hr>

<h2>Specs at a Glance</h2>

<table>
<thead>
<tr>
<th>Feature</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mechanism</td>
<td>4D, 6 massage techniques</td>
</tr>
<tr>
<td>Track</td>
<td>SL-track (neck to glutes)</td>
</tr>
<tr>
<td>Auto Programs</td>
<td>18 modes</td>
</tr>
<tr>
<td>Heat</td>
<td>Waist + calf</td>
</tr>
<tr>
<td>Recline</td>
<td>3-level zero gravity</td>
</tr>
<tr>
<td>Airbags</td>
<td>Shoulders, arms, hips, calves</td>
</tr>
<tr>
<td>Foot Massage</td>
<td>Rollers + airbags</td>
</tr>
<tr>
<td>Controls</td>
<td>LCD touchscreen + wireless charging</td>
</tr>
<tr>
<td>Weight Capacity</td>
<td>Up to 330 lbs</td>
</tr>
</tbody>
</table>

<hr>

<h2>FAQ</h2>

<p><strong>Q: Is this chair really "4D"?</strong><br>
A: Yes, it adjusts depth, speed, and rhythm — though not quite as refined as $5,000+ Japanese chairs.</p>

<p><strong>Q: Can seniors use it?</strong><br>
A: Yes, but the intensity may be too strong. Start on low settings.</p>

<p><strong>Q: How much space do I need?</strong><br>
A: Door clearance at least 31" (80cm). It's heavy (350 lbs), so white-glove delivery is recommended.</p>

<p><strong>Q: How does it compare to Panasonic or Inada?</strong><br>
A: It offers similar <em>features</em> at half the price, but Japanese chairs still lead in durability and whisper-quiet operation.</p>

<hr>

<h2>Final Verdict</h2>

<p>The <strong>Luxury 4D SL-Track Massage Chair</strong> is a solid pick for buyers who want <strong>premium features without a $5,000 price tag</strong>.</p>

<p>It won't beat Panasonic or Inada in long-term reliability, but for <strong>$1,600</strong>, it's one of the best value massage chairs on Amazon in 2025.</p>

<p>👉 <em>Best for younger professionals, families, and anyone wanting a full-body massage chair without breaking the bank.</em></p>

<hr>`
    };
  }
  
  return null;
}

export default function ArticlePage({ params, searchParams }: PageProps) {
  const article = getArticleData(params.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600">The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        
        <div className="flex items-center text-gray-600 text-sm mb-6">
          <time dateTime={article.publishedAt}>
            January 20, 2025
          </time>
        </div>
      </header>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      
      {article.tags && article.tags.length > 0 && (
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}

// 生成静态路径
export function generateStaticParams() {
  // 静态文章列表
  const articles = [
    { slug: 'luxury-4d-sl-track-massage-chair-review-2025-affordable-full-body-relaxation' },
    { slug: 'best-massage-chairs-home-use' },
    { slug: 'massage-chair-maintenance' },
    { slug: 'massage-chair-buying-guide-2025-best-4d-sl-track-chairs-for-home-use' },
    { slug: 'how-to-choose-massage-chair' },
    { slug: 'best-massage-chairs-2023' },
    { slug: 'massage-chair-types-comparison' },
    { slug: 'massage-chair-budget-guide' },
    { slug: 'proper-massage-chair-usage' },
    { slug: 'massage-chair-health-benefits' }
  ];
  
  return articles;
}