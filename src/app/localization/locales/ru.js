export default {
  translation: {
    currentLanguage: 'Русский',
    heroSection: {
      title: 'RSS-агрегатор',
      description: 'Начните читать новости уже сегодня! Весь контент на кончиках ваших пальцев.',
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
      originalPostButton: 'Открыть источник',
      markAsReadButton: 'Пометить прочитанным',
      channelsTitle: 'Каналы',
    },
    footer: {
      madeBy: 'Накодил AINER',
    },
  },
};
