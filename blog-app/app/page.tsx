'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Article {
  _id: string;
  title: string;
  description: string;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/v1/articles');
        const data = await res.json();
        setArticles(data.data);
      } catch (err) {
        console.error('Error fetching articles:', err);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Articles</h1>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article._id} className="border p-4 rounded shadow">
              <Link href={`/article/${article._id}`} className="text-blue-500 hover:underline">
                <h2 className="text-xl font-semibold">{article.title}</h2>
              </Link>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}