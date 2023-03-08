import connectDB from '@/utils/connectMongo';
const Post = require('@/utils/models/Post');
const User = require('@/utils/models/User');
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export default async function handler(req, res) {
  try {
    // connect to mongo
    connectDB();
    // chack current session and make sure user is admin
    const session = await getServerSession(req, res, authOptions);
    const user = await User.findOne({ email: session.user.email });
    let isAdmin;
    if (user) isAdmin = user.isAdmin;

    // new post
    if (req.method === 'POST' && isAdmin) {
      const newPost = await Post.create(req.body);
      console.log('posted new');
      res.status(200).json(newPost);
    }
    if (req.method === 'GET') {
      // get specific post
      const postId = req.query.id;
      if (postId) {
        const post = await Post.findById(postId);
        console.log('get post');
        res.status(200).json(post);
        // get all posts
      } else {
        const allPosts = await Post.find().sort({ createdAt: 'desc' });
        console.log('get posts');
        res.status(200).json(allPosts);
      }
    }
    // edit post
    if (req.method === 'PUT' && isAdmin) {
      const id = req.body.id;
      const keyToExclude = 'id';
      const update = {};
      for (const key in req.body) {
        if (key !== keyToExclude) {
          update[key] = req.body[key];
        }
      }
      const updatePost = await Post.findByIdAndUpdate(id, update);
      console.log('update post');
      res.status(200).json(updatePost);
    }
    // delete post
    if (req.method === 'DELETE' && isAdmin) {
      const postId = req.body.id;
      const deletedPost = await Post.findByIdAndDelete(postId);
      console.log('delete post');
      res.status(200).json(deletedPost);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}
