import connectDB from '@/utils/connectMongo';
const Post = require('@/utils/models/Post');
// import User from '@/utils/models/User';

export default async function handler(req, res) {
  try {
    connectDB();
    if (req.method === 'POST') {
      console.log(req.body);
      const newPost = await Post.create(req.body);
      console.log('posted new');
      res.status(200).json({ name: 'John Doe' });
    }
    if (req.method === 'GET') {
      const allPosts = await Post.find();
      console.log('get posts');
      res.status(200).json(allPosts);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}