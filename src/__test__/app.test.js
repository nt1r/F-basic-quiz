import parseUrlForUserId from "../util/url";
/* import { getUserInfo } from "../app";
import { makeHttpRequest } from "../util/http"; */

jest.mock("../util/http");

describe("quiz front end test", () => {
  test("should parse user id from url", () => {
    // Arrange
    const url = "http://localhost:1234/users/234";
    // Act
    const userId = parseUrlForUserId(url);
    // Assert
    const expectedUserId = 234;
    expect(userId).toEqual(expectedUserId);
  });

  /* test("should get user info correctly", () => {
    // Arrange
    const userId = 234;
    // Act
    getUserInfo(userId);
    // Assert
    return expect(makeHttpRequest).toHaveBeenCalled();
  }); */
});
