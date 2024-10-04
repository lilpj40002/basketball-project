const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');
const ratingEmojis = document.querySelectorAll('.rating-emojis');
const ratingMessage = document.getElementById('rating-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    responseDiv.innerHTML = `Thank you, ${name}! Your message has been sent.`;
});

ratingEmojis.forEach((emoji) => {
    emoji.addEventListener('click', () => {
        ratingEmojis.forEach((e) => e.classList.remove('selected'));
        emoji.classList.add('selected');
        ratingMessage.innerHTML = `You rated us ${emoji.dataset.rating} out of 5!`;
    });
});
