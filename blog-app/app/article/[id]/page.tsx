'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Article {
  title: string;
  keyword: string;
  description: string;
  content: string;
  date: string;
}

export default function ArticleDetail() {
  const { id } = useParams(); ///// Lấy id từ URL
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/v1/articles/${id}`);
        const data = await res.json();
        setArticle(data.data);            ////// Lấy dữ liệu bài viết từ response
      } catch (err) {
        console.error('Error fetching article:', err);
      }
    };
    if (id) fetchArticle();
  }, [id]);

  if (!article) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Keywords:</strong> {article.keyword}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Description:</strong> {article.description}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Content:</strong> {article.content}
      </p>
      <p className="text-gray-600">
        <strong>Date:</strong> {article.date}
      </p>
    </div>
  );
}