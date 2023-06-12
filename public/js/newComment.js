async function newComment(event) {
  event.preventDefault();

  const comment_text = document.getElementById("comment").value.trim();
  const url = window.location.toString().split("/");
  const post_id = url[url.length - 1];

  if (comment_text) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById("comment-form").addEventListener("submit", newComment);
