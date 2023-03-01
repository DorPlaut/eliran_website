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
      res.status(200).json(newPost);
    }
    if (req.method === 'GET') {
      const postId = req.query.id;
      console.log(postId);
      if (postId) {
        const post = await Post.findById(postId);
        console.log('get post');

        res.status(200).json(post);
      } else {
        const allPosts = await Post.find();
        console.log('get posts');
        res.status(200).json(allPosts);
      }
    }
    if (req.method === 'DELETE') {
      const postId = req.body.id;
      const deletedPost = await Post.findByIdAndDelete(postId);
      console.log('delete post');
      res.status(200).json(deletedPost);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
