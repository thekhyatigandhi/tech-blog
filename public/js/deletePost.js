const deletePost = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const response = await fetch(`/api/post/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dash");
  } else {
    alert(response.statusText);
  }
};

const deleteBtn = document.querySelectorAll("#delete-btn");

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deletePost);
}
