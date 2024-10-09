export default (state) => (path, value) => {
  // --- Channels container ---

  const currentChannel = value[value.length - 1]; //  Take last added channel from array

  const channelCardTemplate = document.querySelector('#channel-card');
  const channelCard = channelCardTemplate.content.cloneNode(true);

  channelCard.querySelector('.card-title').textContent = currentChannel.title;
  channelCard.querySelector('.card-subtitle').textContent = currentChannel.description;

  const channelsContainer = document.querySelector('.channels');
  channelsContainer.prepend(channelCard);

  // --- Posts container ---

  const postCardTemplate = document.querySelector('#post-card');
  const postsContainer = document.querySelector('.posts');

  currentChannel.posts.forEach((post) => {
    const postCard = postCardTemplate.content.cloneNode(true);
    postCard.querySelector('.card-title').textContent = post.title;
    postCard.querySelector('.card-subtitle').textContent = post.publicationDate;
    postCard.querySelector('.original-post-link').setAttribute('href', post.originalPostLink);

    postsContainer.prepend(postCard);
  });

  const channelsAndPostsContainer = document.querySelector('.channels-and-posts');

  if (state.rssChannels.length > 0) {
    channelsAndPostsContainer.classList.remove('d-none');
  } else {
    channelsAndPostsContainer.classList.add('d-none');
  }
};
