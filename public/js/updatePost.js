const showUpdateForm = (event) => {
    event.preventDefault();

    const originalTitle = document.getElementById(`title-text`).textContent;
    const originalText = document.getElementById(`body-text`).textContent.trim();
    const updateCard = document.getElementById(`card`);
    updateCard.innerHTML = `
        <form #update-post-form">
            <label for="update-post-title">Title</label> <br>
            <input type="text" id="update-post-title" value=${originalTitle}> <br>

            <label for="update-post-body">Body</label> <br>
            <textarea id="update-post-body">${originalText}</textarea> <br>

            <div class="btn-container">
                <button type="submit" class="submit-btn" id="send-update-btn">Update</button>
            </div>
        </form>
    `;

    const updatePost = async (event) => {
        event.preventDefault();
    
        const title = document.getElementById('update-post-title').value.trim();
        const post_body = document.getElementById('update-post-body').value.trim();
        const url = window.location.toString().split('/');
        const post_id = url[url.length - 1];
    
        const response = await fetch(`/api/post/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                post_body,
            }),
            headers: {
                'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                document.location.reload();
            } else {
                alert(response.statusText);
            }
        
    };
    
    document.getElementById('send-update-btn').addEventListener('click', updatePost);
};

document.getElementById('update-btn').addEventListener('click', showUpdateForm);