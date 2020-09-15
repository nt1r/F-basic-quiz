const parseUrlForUserId = () => {
  const lastIndex = window.location.href.lastIndexOf("/");
  return window.location.href.substring(lastIndex + 1);
};

export default parseUrlForUserId;
