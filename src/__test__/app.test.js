import fetchMock from "fetch-mock";
import { RenderUserInfo } from "../app";

fetchMock.get("http://127.0.0.1:8080/users/1", {
  id: 1,
  name: "mock name",
  age: 18,
  avatar: "mock avatar",
  description: "mock description",
});

describe("users", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
        <img
            id="header-user-avatar"
            alt="header-logo"
          />
        <span id="header-user-name">
        <span id="header-user-age"></span>
        <p id="user-about-me-description"></p>
        <ul id="user-education-list"></ul>
    </div>
  `;
  });

  test("should return user info when fetch users by id success", async () => {
    RenderUserInfo(1);
    expect(document.getElementById("header-user-avatar").src).toEqual(
      "mock avatar"
    );
    expect(document.getElementById("header-user-name").innerText).toEqual(
      "mock name"
    );
    expect(document.getElementById("header-user-age").innerText).toEqual(18);
    expect(
      document.getElementById("user-about-me-description").innerText
    ).toEqual("mock description");
  });
});
