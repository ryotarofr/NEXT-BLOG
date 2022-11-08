const router = require("express").Router();

const Post = require("../models/Post");
const User = require("../models/User");

// create Post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// update Post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json("投稿を編集しました");
    } else {
      return res.status(403).json("あなたは他のユーザーの投稿を編集できません");
    }
  } catch (error) {
    return res.status(403).json(error);
  }
});

// delete Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("投稿を削除しました");
    } else {
      return res.status(403).json("あなたは他のユーザーの投稿を削除できません");
    }
  } catch (error) {
    return res.status(403).json(error);
  }
});

// get a Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(403).json(error);
  }
});

// like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //まだいいねしていない投稿にいいねを押せる
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("投稿にいいねしました");
      // すでにいいねが押されていたら
    } else {
      // いいねしているユーザーIDを取り除く
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(403).json("投稿のいいねを取り消しました");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// タイムラインの投稿を取得
router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    //フォローした人の投稿内容を全て取得する
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
