// This function adds new articles to localStorage
export function addArticleToLocalStorage() {
  // Ensure code runs on client-side only
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    // Get existing articles
    let articlesData = localStorage.getItem('articles') || localStorage.getItem('blog_articles');
    let articles = [];
    
    if (articlesData) {
      articles = JSON.parse(articlesData);
    }
    
    // New article data
    const newArticles = [
      {
        id: Date.now() + 1,
        title: 'Massage Chair Buying Guide 2025: Best 4D SL-Track Chairs for Home Use',
        slug: 'massage-chair-buying-guide-2025-best-4d-sl-track-chairs-for-home-use',
        category: 'buying-guide',
        date: '2025-01-01',
        excerpt: 'Discover the best 4D SL-Track massage chairs for home use in 2025. Our comprehensive guide helps you make an informed decision.',
        featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        status: 'Published',
        content: '<p>With technological advancements constantly evolving, the massage chair market in 2025 has transformed dramatically. This guide will help you understand the latest 4D SL-Track massage chair technology and how to choose the best product for your home.</p>',
        views: 0,
        tags: ['massage chairs', '4D', 'SL-Track', '2025', 'buying guide']
      },
      {
        id: Date.now() + 2,
        title: 'The Unlikely Peacemaker in the Corner of the Room',
        slug: 'the-unlikely-peacemaker-in-the-corner-of-the-room',
        category: 'buying-guide',
        date: '2025-08-16',
        excerpt: 'Discover how a massage chair can become the unexpected mediator in your home, bringing relaxation and harmony to your living space.',
        featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        status: 'Published',
        content: '<p>In the hustle and bustle of modern life, finding moments of peace can be challenging. Learn how a massage chair can transform your home environment.</p>',
        views: 0,
        tags: ['massage chairs', 'relaxation', 'home', 'wellness']
      },
      {
        id: Date.now() + 3,
        title: 'Top-Rated Massage Chairs: A Smart Investment in Your Well-being',
        slug: 'top-rated-massage-chairs-a-smart-investment-in-your-well-being',
        category: 'buying-guide',
        date: '2025-08-16',
        excerpt: 'Explore why investing in a high-quality massage chair is one of the best decisions you can make for your long-term health and wellness.',
        featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        status: 'Published',
        content: '<p>When it comes to health investments, massage chairs offer exceptional returns in terms of physical and mental wellbeing. This article explores the top-rated options on the market.</p>',
        views: 0,
        tags: ['massage chairs', 'investment', 'well-being', 'health']
      },
      {
        id: Date.now() + 4,
        title: 'Why High-End Massage Chairs Are Worth Considering in 2025',
        slug: 'why-high-end-massage-chairs-are-worth-considering-in-2025-lets-face-it-life-in-2025-isnt',
        category: 'buying-guide',
        date: '2025-08-14',
        excerpt: 'Let\'s face it — life in 2025 isn\'t getting any less stressful. Here\'s why a premium massage chair might be the wellness solution you need.',
        featuredImage: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
        status: 'Published',
        content: '<p>As we navigate the complexities of modern life, investing in self-care has never been more important. High-end massage chairs offer therapeutic benefits that can transform your daily routine.</p>',
        views: 0,
        tags: ['massage chairs', 'high-end', 'premium', '2025', 'stress relief']
      }
    ];
    
    // Add new articles (if they don't exist)
    let articlesAdded = false;
    
    newArticles.forEach(newArticle => {
      const articleExists = articles.some(article => article.slug === newArticle.slug);
      if (!articleExists) {
        articles.push(newArticle);
        articlesAdded = true;
      }
    });
    
    // If new articles were added, save back to localStorage
    if (articlesAdded) {
      localStorage.setItem('articles', JSON.stringify(articles));
      localStorage.setItem('blog_articles', JSON.stringify(articles));
      console.log('New articles added to localStorage');
    }
  } catch (error) {
    console.error('Error adding articles to localStorage:', error);
  }
}
