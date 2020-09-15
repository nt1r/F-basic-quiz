import "./style/index.scss";
import {
  GET_EDUCATION_LIST_URL,
  GET_USER_URL,
  makeHttpRequest,
} from "./util/http";
import parseUrlForUserId from "./util/url";

$(document).ready(() => {
  const userId = parseUrlForUserId();
  makeHttpRequest("get", GET_USER_URL(userId))
    .then((response) => {
      const { name, age, avatar, description } = response.data;
      $("#avatar").attr("src", avatar);
      $("#introduction-h2").html(
        `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`
      );
      $("#description-p").html(description);
    })
    .catch((error) => {
      console.log(error);
    });
  makeHttpRequest("get", GET_EDUCATION_LIST_URL(userId))
    .then((response) => {
      const educationList = response.data;
      $("#education-div").append(
        educationList.map((education) => {
          return `<div class="experience-div" id="experience-div">
                    <span>${education.year}</span>
                    <div class="experience-description-div">
                      <h4>${education.title}</h4>
                      <p>${education.description}</p>
                    </div>
                  </div>`;
        })
      );
    })
    .catch((error) => {
      console.log(error);
    });
});
