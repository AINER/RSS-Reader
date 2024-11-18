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
        success: 'RSS успешно загружен',
        errors: {
          emptyInput: 'Введите ссылку',
          incorrectLink: 'Это не ссылка',
          duplicatedLink: 'RSS уже существует',
          unsuccessfulRSSParsing: 'Ресурс не содержит валидный RSS',
        },
      },
      example: 'Пример:',
    },
    channelsAndPosts: {
      postsTitle: 'Посты',
      postPreviewButton: 'Просмотр',
      originalPostButton: 'Читать полностью',
      // markAsReadButton: '🔖 Пометить прочитанным',
      channelsTitle: 'Каналы',
      modalCloseButton: 'Закрыть',
    },
    footer: {
      madeBy: 'Накодил AINER',
    },
  },
};
