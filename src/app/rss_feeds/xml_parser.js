export default (xmlString) => {
  const parser = new DOMParser();
  const result = parser.parseFromString(xmlString, 'application/xml');

  return result;
};
