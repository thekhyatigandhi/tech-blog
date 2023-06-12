const showUpdateForm = (event) => {
    event.preventDefault();

    const originalTitle = document.getElementById(`title-text`).textContent;
    const originalText = document.getElementById(`body-text`).textContent.trim();
    const updateCard = document.getElementById(`card`);