const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "Great article! I never knew about these hidden features in the latest iOS update. Can't wait to try them out! ",
    post_id: 1,
    user_id: 5,
  },
  {
    comment_text:
      "This technology has immense potential. I wonder how it will impact various industries in the coming years",
    post_id: 2,
    user_id: 3,
  },
  {
    comment_text:
      "Wow, this tutorial was a lifesaver! I was struggling with that coding problem for hours, and your explanation made it so clear.",
    post_id: 3,
    user_id: 4,
  },
  {
    comment_text:
      "As a cybersecurity enthusiast, I appreciate the emphasis on best practices and staying vigilant. Security should always be a top priority.",
    post_id: 4,
    user_id: 2,
  },
  {
    comment_text:
      "I'm always excited to read your blog posts. The way you simplify complex concepts is truly impressive. Keep up the fantastic work!",
    post_id: 5,
    user_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
