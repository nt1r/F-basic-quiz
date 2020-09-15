const makeHttpRequest = jest.fn().mockImplementation(() => {
  return new Promise((resolve) => {
    resolve({
      data: "data",
    });
  });
});

export { makeHttpRequest };
