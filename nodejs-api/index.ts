import express from 'express';
import mongoose from 'mongoose';
import articleRoutes from './routes/articleRoutes';
import cors from 'cors'; 

const app = express();
const PORT = 8080;

app.use(cors());    //// Thêm middleware CORS
app.use(express.json());

app.use('/api/v1', articleRoutes);

mongoose.connect('mongodb://localhost:27017/blog_db', {})
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });