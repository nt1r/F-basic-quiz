import "./style/index.scss";
import $ from "jquery";
import {
  GET_EDUCATION_LIST_URL,
  GET_USER_URL,
  makeHttpRequest,
} from "./util/http";
import parseUrlForUserId from "./util/url";

function replaceUserElements(response) {
  const { name, age, avatar, description } = response.data;
  $("#avatar").attr("src", avatar);
  $("#introduction-h2").html(
    `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`
  );
  $("#description-p").html(description);
}

export const getUserInfo = (userId) => {
  makeHttpRequest("get", GET_USER_URL(userId))
    .then((response) => {
      replaceUserElements(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

function appendEducationElements(response) {
  const educationList = response.data;
  $("#education-div").append(
    educationList.map((education) => {
      return `<div class="experience-div">
                    <span class="year-span">${education.year}</span>
                    <div class="experience-description-div">
                      <h4 class="education-title-h4">${education.title}</h4>
                      <p>${education.description}</p>
                    </div>
                  </div>`;
    })
  );
}

export const getEducationList = (userId) => {
  makeHttpRequest("get", GET_EDUCATION_LIST_URL(userId))
    .then((response) => {
      appendEducationElements(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

$(document).ready(() => {
  const userId = parseUrlForUserId(window.location.href);
  getUserInfo(userId);
  getEducationList(userId);
});
