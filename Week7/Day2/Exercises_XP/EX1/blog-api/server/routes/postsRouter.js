const { Router } = require("express");
const { 
    getAllPosts,
    deletePost,
    updatePost,
    createPost,
    getPostById,
  }= require("../controllers/postsControllers.js")

  const router = Router()

router.get("/posts", getAllPosts);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);
router.put("/posts/:id", updatePost);
router.get("/posts/:id", getPostById);



module.exports = {
    postsRouter: router,
  };
  