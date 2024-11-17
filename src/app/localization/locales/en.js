export default {
  translation: {
    currentLanguage: 'English',
    heroSection: {
      title: 'RSS Aggregator',
      description: 'All content at your fingertips. Start reading today!',
    },
    rssUrlForm: {
      label: 'RSS link',
      button: 'Add',
      statusFeedback: {
        success: 'RSS feed added',
        errors: {
          emptyInput: 'Enter a link',
          incorrectLink: 'This is not a link',
          duplicatedLink: 'This link is already added',
          unsuccessfulRSSParsing: 'Failed to load RSS feed. Check the link.',
        },
      },
      example: 'Example:',
    },
    channelsAndPosts: {
      postsTitle: 'Posts',
      originalPostButton: '🌐 Open source',
      // markAsReadButton: '🔖 Mark as read',
      channelsTitle: 'Feeds',
      modalCloseButton: 'Close',
    },
    footer: {
      madeBy: 'Made by AINER',
    },
  },
};
