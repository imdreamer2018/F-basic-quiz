import "./style/index.scss";
import { getUserInfo, getUserEducations } from "./_services/users.service";

const path = window.location.pathname.split("/");
const userId = path.pop();
const fetchUrl = path.pop();
const UserIdRegExp = /\d+/;
if (fetchUrl !== "users" || !UserIdRegExp.test(userId)) {
  alert("404");
  window.location.replace("/users/1");
}
export const RenderUserInfo = (id) => {
  getUserInfo(id)
    .then((data) => {
      document
        .getElementById("header-user-avatar")
        .setAttribute("src", data.avatar);
      document.getElementById("header-user-name").innerText = data.name;
      document.getElementById("header-user-age").innerText = data.age;
      document.getElementById("user-about-me-description").innerText =
        data.description;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const renderUserEducations = (id) => {
  getUserEducations(id).then((data) => {
    const userEducationList = document.getElementById("user-education-list");
    data.forEach((education) => {
      const educationItem = document.createElement("li");
      educationItem.innerHTML = `
      <div class="education-item">
        <h2 class="education-item-year">${education.year}</h2>
        <div class="education-item-content">
          <h2 class="education-item-title">${education.title}</h2>
          <p class="education-item-desc">${education.description}</p>
        </div>
      </div>
    `;
      userEducationList.appendChild(educationItem);
    });
  });
};

RenderUserInfo(userId);
renderUserEducations(userId);
