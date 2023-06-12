async function newPost(event) {
  event.preventDefault();

  const title = document.querySelector("#new-post-title").value.trim();
  const post_body = document.querySelector("#new-post-body").value.trim();

  if (title && post_body) {
    const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_body,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
