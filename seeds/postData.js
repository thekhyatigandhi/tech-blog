const { Post } = require("../models");

const postData = [
  {
    title: "Hidden Gems: Unveiling the Latest iOS Update Features",
    post_body:
      "Discover the hidden treasures within the latest iOS update! From enhanced privacy settings to productivity-boosting shortcuts, this article unveils the exciting new features that will revolutionize your iPhone experience. Get ready to unlock a whole new level of functionality!",
    user_id: 1,
  },
  {
    title: "The Promising Future of Emerging Technologies",
    post_body:
      "The future is here, and it's powered by groundbreaking technologies. From artificial intelligence to blockchain and beyond, these innovations are reshaping industries and creating new possibilities. Join us as we explore the potential and impact of these game-changing technologies.",
    user_id: 2,
  },
  {
    title: "Mastering Coding Challenges: A Step-by-Step Guide",
    post_body:
      "Struggling with coding challenges? Fear not! In this comprehensive guide, we break down the art of solving coding problems. Learn proven strategies, common pitfalls, and essential techniques that will sharpen your problem-solving skills and help you tackle coding challenges like a pro.",
    user_id: 3,
  },
  {
    title: "Prioritizing Cybersecurity: Safeguarding Your Digital World",
    post_body:
      "In the era of increasing digital threats, cybersecurity is paramount. This post sheds light on the importance of adopting robust security measures to protect your sensitive data. Explore best practices, practical tips, and the latest trends in cybersecurity to stay one step ahead of cybercriminals",
    user_id: 4,
  },
  {
    title: "Demystifying Complex Concepts: Tech Simplified",
    post_body:
      "Understanding complex tech concepts shouldn't be a daunting task. In this series, we break down intricate topics into digestible bites. Dive into the world of machine learning, cloud computing, or quantum computing, and embark on a journey where complexity meets simplicity. ",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
