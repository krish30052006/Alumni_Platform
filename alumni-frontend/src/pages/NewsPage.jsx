import React from 'react';

const NewsPage = () => {
  // Mock data for news articles
  const news = [
    {
      id: 1,
      title: 'Alumni Success Story: John Doe',
      date: '2024-03-15',
      category: 'Success Stories',
      excerpt: 'John Doe (Class of 2015) shares his journey from student to successful entrepreneur.',
      image: 'https://via.placeholder.com/400x250',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'New Research Center Opens on Campus',
      date: '2024-03-10',
      category: 'Campus News',
      excerpt: 'The university opens a state-of-the-art research center focusing on sustainable technology.',
      image: 'https://via.placeholder.com/400x250',
      readTime: '3 min read',
    },
    {
      id: 3,
      title: 'Alumni Association Announces New Initiatives',
      date: '2024-03-05',
      category: 'Announcements',
      excerpt: 'The Alumni Association launches new programs to strengthen the alumni network.',
      image: 'https://via.placeholder.com/400x250',
      readTime: '4 min read',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((article) => (
          <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-primary font-medium">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{article.date}</span>
                <button className="text-primary hover:underline">
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest news and updates.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsPage; 