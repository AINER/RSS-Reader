export default {
  translation: {
    currentLanguage: 'Русский',
    heroSection: {
      title: 'RSS-агрегатор',
      description: 'Весь контент на кончиках ваших пальцев. Начните читать уже сегодня!',
    },
    rssUrlForm: {
      label: 'Ссылка RSS',
      button: 'Добавить',
      statusFeedback: {
        success: 'RSS-канал добавлен',
        errors: {
          emptyInput: 'Введите ссылку',
          incorrectLink: 'Это не ссылка',
          duplicatedLink: 'Эта ссылка уже добавлена',
          unsuccessfulRSSParsing: 'Не удалось загрузить RSS-канал. Проверьте ссылку.',
        },
      },
      example: 'Пример:',
    },
    channelsAndPosts: {
      postsTitle: 'Посты',
      originalPostButton: '🌐 Открыть источник',
      // markAsReadButton: '🔖 Пометить прочитанным',
      channelsTitle: 'Каналы',
      modalCloseButton: 'Закрыть',
    },
    footer: {
      madeBy: 'Накодил AINER',
    },
  },
};
