const openPost = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  window.location.href = `/api/post/${event.currentTarget.dataset.id}`;
};

const postLinks = document.querySelectorAll("#post-link");
for (let i = 0; i < postLinks.length; i++) {
  postLinks[i].addEventListener("click", openPost);
}
