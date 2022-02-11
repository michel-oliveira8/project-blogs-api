const { CREATED } = require('../schemas/validations');
const blogpostService = require('../services/blogpostServices');

const createBlogPost = async (req, res) => {
    const { title, categoryIds, content } = req.body;
    const { authorization } = req.headers;
    const getByName = await blogpostService.create(title, categoryIds, content, authorization);
    if (getByName.message) return res.status(getByName.code).json({ message: getByName.message });

    return res.status(CREATED).json(getByName);
  };

module.exports = {
    createBlogPost,
};