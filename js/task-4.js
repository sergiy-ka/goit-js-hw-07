const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const formObj = {};

  if (!email.value || !password.value) {
    return alert("All form fields must be filled in");
  }

  formObj[email.name] = email.value.trim();
  formObj[password.name] = password.value.trim();

  console.log(formObj);
  form.reset();
});
