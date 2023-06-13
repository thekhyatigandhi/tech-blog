const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "In iaculis nunc sed augue lacus viverra vitae congue.",
    post_id: 1,
    user_id: 5,
  },
  {
    comment_text: "Neque convallis a cras semper.",
    post_id: 2,
    user_id: 3,
  },
  {
    comment_text: "Tristique senectus et netus et malesuada fames ac turpis.",
    post_id: 3,
    user_id: 4,
  },
  {
    comment_text: "Ut ornare lectus sit amet est placerat in egestas.",
    post_id: 4,
    user_id: 2,
  },
  {
    comment_text:
      "Iaculis nunc sed augue lacus. Varius duis at consectetur lorem donec.",
    post_id: 5,
    user_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
