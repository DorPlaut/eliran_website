import connectDB from '@/utils/connectMongo';
const User = require('@/utils/models/User');

export default async function handler(req, res) {
  try {
    connectDB();
    if (req.method === 'POST') {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        console.log('user exist. get user');
        res.status(200).json(user);
      } else {
        const newUser = await User.create(req.body);
        console.log('new user');
        res.status(200).json(newUser);
      }
    }
    if (req.method === 'GET') {
      const user = await Post.find();
      console.log('get users');
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
