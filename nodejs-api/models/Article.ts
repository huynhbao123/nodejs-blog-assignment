import mongoose, { Schema, Document } from 'mongoose';

interface IArticle extends Document {
  title: string;
  keyword: string;
  description: string;
  content: string;
  date: string;
}

const articleSchema: Schema = new Schema({
  title: { type: String, required: true },
  keyword: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true }
});

export default mongoose.model<IArticle>('Article', articleSchema);