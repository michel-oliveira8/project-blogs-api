const jwt = require('jsonwebtoken');
const { Category, User, BlogPost } = require('../models');
const { BAD_REQUEST, categoryIdsNotFound } = require('../schemas/validations');

const create = async (title, categoryIds, content, authorization) => {
    const findCategoryIds = await Category.findOne({ where: { id: categoryIds } });
    if (!findCategoryIds) {
        return { code: BAD_REQUEST, message: categoryIdsNotFound }; 
    }
    const token = jwt.decode(authorization, 'JWT_key');
    const { dataValues } = await User.findOne({ where: { email: token.data.email } });
    const createPost = await BlogPost
        .create({
             title, content, userId: dataValues.id, published: new Date(), updated: new Date() });
    return createPost;
};

module.exports = {
    create,
};