import express from 'express';
import Article from '../models/Article';

const router = express.Router();

// GET: Lấy tất cả articles
router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json({ message: 'Success', data: articles });
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err });
  }
});

// GET: Lấy chi tiết article theo ID
router.get('/articles/:id', async (req: any, res: any) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json({ message: 'Success', data: article });
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err });
  }
});

// POST: Tạo article mới
router.post('/articles', async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).json({ message: 'Success', data: newArticle });
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err });
  }
});

export default router;