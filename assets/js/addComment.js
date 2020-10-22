import axios from "axios";
const addCommentForm = document.getElementById("videoComments"),
  commentList = document.getElementById("commentList"),
  commentNumber = document.getElementById("videoCommentsNumber"),
  delBtn = commentList.getElementsByClassName("delBtn");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const textContent = document.createElement("p");
  const delBtn = document.createElement("span");

  delBtn.addEventListener("click", deleteComment);
  delBtn.innerHTML = "삭제";

  textContent.innerHTML = comment;

  li.appendChild(textContent);
  li.appendChild(delBtn);
  commentList.prepend(li);

  increaseNumber();
};

const deleteComment = async (e) => {
  const delLi = e.target.parentNode;
  delLi.parentNode.removeChild(delLi);
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  console.log(response);
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  Object.values(delBtn).map((e) => e.addEventListener("click", deleteComment));
}

if (addCommentForm) {
  init();
}
