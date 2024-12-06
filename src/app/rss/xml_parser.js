import { v4 as uuidv4 } from 'uuid';

export default (xmlString, channelUrl) => {
  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(xmlString, 'application/xml');

  // --- Posts parsing ---

  let items;
  if (xmlDocument.querySelectorAll('item') !== null && xmlDocument.querySelectorAll('item').length !== 0) {
    items = Array.from(xmlDocument.querySelectorAll('item'));
  } else if (xmlDocument.querySelectorAll('entry') !== null) {
    items = Array.from(xmlDocument.querySelectorAll('entry'));
  }

  const posts = items.map((item) => {
    const title = item.querySelector('title').textContent;
    let description;
    if (item.querySelector('description') !== null) {
      description = item.querySelector('description').textContent;
    } else if (item.querySelector('content') !== null) {
      description = item.querySelector('content').textContent;
    } else {
      throw new Error('Author not parsed');
    }
    let publicationDate;
    if (item.querySelector('pubDate') !== null) {
      publicationDate = item.querySelector('pubDate').textContent;
    } else if (item.querySelector('published') !== null) {
      publicationDate = item.querySelector('published').textContent;
    } else {
      throw new Error('Publication date not parsed');
    }
    const originalPostLink = item.querySelector('link').textContent;
    let creator;
    if (item.querySelector('author') !== null) {
      creator = item.querySelector('author').textContent;
    } else if (item.querySelector('creator') !== null) {
      creator = item.querySelector('creator').textContent;
    } else {
      throw new Error('Author not parsed');
    }

    return {
      title,
      description,
      publicationDate,
      originalPostLink,
      creator,

      id: uuidv4(),
      read: false,
    };
  });

  // --- Feed parsing ---
  let description;

  if (xmlDocument.querySelector('description') !== null) {
    description = xmlDocument.querySelector('description').textContent;
  } else {
    description = '';
  }

  const result = {
    title: xmlDocument.querySelector('title').textContent,
    description,
    url: channelUrl,
    posts,
  };

  return result;
};
