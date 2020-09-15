const parseUrlForUserId = (url) => {
  const lastIndex = url.lastIndexOf("/");
  return parseInt(url.substring(lastIndex + 1), 10);
};

export default parseUrlForUserId;
