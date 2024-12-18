const { posts } = require("../config/data.js");
const { 
  getAllPostsFromDB, 
  createPostInDB,
  updatePostInDB,
  getPostByIdFromDB,
  deletePostFromDB
} = require("../models/postsModel.js");

const getAllPosts = (req, res) => {
  getAllPostsFromDB()
    .then((posts) => {
      if (!posts || posts.length === 0) {
        return res.status(404).json({ msg: "No posts found" });
      }
      res.status(200).json(posts);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({ msg: "not found" });
    });
};

const createPost = (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ msg: "Title and content are required" });
  }
  createPostInDB({ title, content })
  .then((posts) => {
    res.status(200).json(posts)
  })
  .catch((error)=> {
    console.log(error);
  })
};

const updatePost =(req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  updatePostInDB(id, { title, content })
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch((error)=> {
    console.log(error);
    
  })

}

const getPostById = (req, res) => {
const { id } = req.params

getPostByIdFromDB(id) 
  .then(posts => {
    if (!posts) {
        return res.status(404).json({ error: "Post not found" })
    }
    res.status(200).json(posts)
  })
  .catch (error => {
      console.log(error);
  })
}
 
const deletePost = (req, res) => {
  const { id } = req.params;
  deletePostFromDB(id) 
  .then((result) => {
      if (result === 0) { 
          return res.status(404).json({ message: "Post not found to delete" });
      }
      res.status(200).json({ status: "deleted" }); 
  })
  .catch((error) => {
      console.log(error);
      
  });

}



module.exports = { 
  getAllPosts,
  deletePost,
  updatePost,
  createPost,
  getPostById,

};
