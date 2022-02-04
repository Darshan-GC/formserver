import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({}, { strict: false });

var Entry = mongoose.model('brokerDetails', formSchema);

export const getForm = async (req, res) => {
  try {
    const postMessages = await data.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const findData = async (req, res) => {
  const post = req.query;
  try {
    const postMessages = await Entry.find(post);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createForm = async (req, res) => {
  const post = req.body;

  const newPost = new Entry({
    ...post,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
export default Entry;
