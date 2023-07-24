const password = document.querySelector('#txtPassword');
const checkBox = document.querySelector('#show');

checkBox.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type)
})

