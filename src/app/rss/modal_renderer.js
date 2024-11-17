export default (state, postId) => {
  const currentPost = state.posts.find((element) => element.id === postId);

  const modalTitle = document.querySelector('.modal-title');
  modalTitle.textContent = currentPost.title;

  const modalContent = document.querySelector('.modal__content');
  const postText = document.createElement('p');
  postText.textContent = currentPost.description;
  modalContent.replaceChildren(postText);

  const modalPostAuthor = document.querySelector('.modal__post-author');
  modalPostAuthor.textContent = currentPost.creator;

  const modalPostDate = document.querySelector('.modal__post-date');
  modalPostDate.textContent = currentPost.publicationDate;

  const openSourceButton = document.querySelector('.modal__open-original-post-button');
  openSourceButton.href = currentPost.originalPostLink;
};
