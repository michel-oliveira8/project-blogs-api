const { CREATED, OK } = require('../schemas/validations');
const blogpostService = require('../services/blogpostServices');

const createBlogPost = async (req, res) => {
    const { title, categoryIds, content } = req.body;
    const { authorization } = req.headers;
    const getByName = await blogpostService.create(title, categoryIds, content, authorization);
    if (getByName.message) return res.status(getByName.code).json({ message: getByName.message });

    return res.status(CREATED).json(getByName);
  };

const getAllPosts = async (_req, res) => {
    const allPosts = await blogpostService.getAllPost();

    return res.status(OK).json(allPosts);
};

const getPostsById = async (req, res) => {
    const { id } = req.params;
    const getPostId = await blogpostService.getById(id);
    if (getPostId.message) {
      return res.status(getPostId.code)
      .json({ message: getPostId.message });
    }
    return res.status(OK).json(getPostId);
  };

module.exports = {
    createBlogPost,
    getAllPosts,
    getPostsById,
};