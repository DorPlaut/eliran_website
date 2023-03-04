import connectDB from '@/utils/connectMongo';
const User = require('@/utils/models/User');

export default async function handler(req, res) {
  try {
    connectDB();
    // create user. if exist, return the user
    if (req.method === 'POST') {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        console.log('user exist. get user');
        res.status(200).json(user);
      } else {
        console.log(req.body);
        const newUser = await User.create(req.body);
        console.log('new user');
        res.status(200).json(newUser);
      }
    }
    if (req.method === 'PUT') {
      const id = req.body.id;
      const keyToExclude = 'id';
      const update = {};
      for (const key in req.body) {
        if (key !== keyToExclude) {
          update[key] = req.body[key];
        }
      }
      console.log(update);

      const updateUser = await User.findByIdAndUpdate(id, update);
      console.log('update user');
      res.status(200).json(updateUser);
    }
    if (req.method === 'GET') {
      console.log('get user');
      const user = await User.findOne({ isAdmin: true });
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
