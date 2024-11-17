export default (state, feeds) => {
  // --- Channels container ---

  const currentFeed = feeds[feeds.length - 1]; //  Take last added channel from array

  const channelCardTemplate = document.querySelector('#channel-card');
  const channelCard = channelCardTemplate.content.cloneNode(true);

  channelCard.querySelector('.card-title').textContent = currentFeed.title;
  channelCard.querySelector('.card-subtitle').textContent = currentFeed.description;

  const channelsContainer = document.querySelector('.channels');
  channelsContainer.prepend(channelCard);

  const channelsAndPostsContainer = document.querySelector('.channels-and-posts');
  if (state.feeds.length > 0) {
    channelsAndPostsContainer.classList.remove('d-none');
  } else {
    channelsAndPostsContainer.classList.add('d-none');
  }
};
