const deleteComment = async (event) => {
  event.preventDefault();

  const comment_id = event.target.dataset.id;

  const response = await fetch(`/api/comment/${comment_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace(`/api/post/${post_id}`);
  } else {
    alert(response.statusText);
  }
};

const commentDeleteBtn = document.querySelectorAll("#comment-delete-btn");

for (let i = 0; i < commentDeleteBtn.length; i++) {
  commentDeleteBtn[i].addEventListener("click", deleteComment);
}
