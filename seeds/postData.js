const { Post } = require("../models");

const postData = [
  {
    title: "Lorem Ipsum",
    post_body:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    user_id: 1,
  },
  {
    title: "Dolor Sit Amet",
    post_body:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    user_id: 2,
  },
  {
    title: "Consectetur Adipiscing",
    post_body:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: 3,
  },
  {
    title: "Sed Do Eiusmod",
    post_body:
      "Fringilla est ullamcorper eget nulla facilisi etiam. Dignissim sodales ut eu sem. Scelerisque varius morbi enim nunc faucibus a. Et sollicitudin ac orci phasellus egestas tellus.",
    user_id: 4,
  },
  {
    title: "Tempor Incididunt",
    post_body:
      "Morbi tristique senectus et netus et malesuada. Amet consectetur adipiscing elit duis tristique. Id interdum velit laoreet id donec ultrices tincidunt. ",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
