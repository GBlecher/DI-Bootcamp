const { db } = require("../config/data.js");

const getAllPostsFromDB = () => {
  return db("posts").select("id", "title", "content").orderBy("id");
};

const createPostInDB = (newPost) => {
  return db("posts").insert(newPost).returning('*')
}
const updatePostInDB = (id,updatedFields)=> {
   return db("posts").where({id}).update(updatedFields).returning('*')
}

const deletePostFromDB = (id) => {
  return db("posts").where({ id }).del();
};

const getPostByIdFromDB = (id) => {
  return db("posts").where({ id }).first();
};

module.exports = {
  getAllPostsFromDB,
  createPostInDB,
  updatePostInDB,
  deletePostFromDB,
  getPostByIdFromDB,
};