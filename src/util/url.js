const parseUrlForUserId = (url) => {
  const lastIndex = url.lastIndexOf("/");
  // TODO feedback: 逻辑有漏洞，如果URL是/any/1，也是可以通过的
  return parseInt(url.substring(lastIndex + 1), 10);
};

export default parseUrlForUserId;
