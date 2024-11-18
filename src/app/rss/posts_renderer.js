import renderModal from './modal_renderer';

export default (state, posts) => {
  const postCardTemplate = document.querySelector('#post-card');
  const postsContainer = document.querySelector('.posts');

  posts.forEach((post) => {
    const postCard = postCardTemplate.content.cloneNode(true);

    postCard.querySelector('.card-title').textContent = post.title;
    postCard.querySelector('.card-subtitle').textContent = post.publicationDate;
    postCard.querySelector('.original-post-link').setAttribute('href', post.originalPostLink);

    const card = postCard.querySelector('.card');
    card.setAttribute('data-post-id', post.id);
    card.addEventListener('click', (event) => {
      const currentPostId = event.currentTarget.dataset.postId;
      renderModal(state, currentPostId);

      event.currentTarget.classList.add('post-read');

      const postCardTitle = event.currentTarget.querySelector('.card-title');
      postCardTitle.classList.remove('fw-bold');
      postCardTitle.classList.add('fw-normal');

      card.classList.remove('bg-light');
    });

    postsContainer.prepend(postCard);
  });
};
