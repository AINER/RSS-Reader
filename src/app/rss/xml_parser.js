import { v4 as uuidv4 } from 'uuid';

export default (xmlString, channelUrl) => {
  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(xmlString, 'application/xml');

  const items = Array.from(xmlDocument.querySelectorAll('item'));

  const posts = items.map((item) => {
    const title = item.querySelector('title').textContent;
    const description = item.querySelector('description').textContent;
    const publicationDate = item.querySelector('pubDate').textContent;
    const originalPostLink = item.querySelector('link').textContent;
    let creator;
    if (item.querySelector('author') !== null) {
      creator = item.querySelector('author').textContent;
    } else if (item.querySelector('creator') !== null) {
      creator = item.querySelector('creator').textContent;
    } else {
      creator = '';
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

  const result = {
    title: xmlDocument.querySelector('title').textContent,
    description: xmlDocument.querySelector('description').textContent,
    url: channelUrl,
    posts,
  };

  return result;
};
