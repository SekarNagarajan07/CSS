const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success : This is a success toast.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error : This is a error toast.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning : This is a warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Info : This is a information toast.",
  },
};
