import { v4 as uuidv4 } from 'uuid';

export default (xmlString, channelUrl) => {
  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(xmlString, 'application/xml');

  const items = Array.from(xmlDocument.querySelectorAll('item'));
  const posts = items.map((item) => (
    {
      title: item.querySelector('title').textContent,
      description: item.querySelector('description').textContent,
      publicationDate: item.querySelector('pubDate').textContent,
      originalPostLink: item.querySelector('link').textContent,
      creator: item.querySelector('creator').textContent,

      id: uuidv4(),
      read: false,
    }));

  const result = {
    title: xmlDocument.querySelector('title').textContent,
    description: xmlDocument.querySelector('description').textContent,
    url: channelUrl,
    posts,
  };

  return result;
};
