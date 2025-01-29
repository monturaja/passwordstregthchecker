const passwordInput = document.querySelector("#password");
const togglepassword = document.querySelector("#togglepassword");
const submitbtn = document.querySelector("#submitbtn");
const criteriaList = document.querySelector("#criteriaList");
const togglepasswordconfirm = document.querySelector("#togglepasswordconfirm");
const confirmpassowrd = document.querySelector("#confirmpassowrd");

const letterCriteria = document.querySelector("#letter");

const capitalCritera = document.querySelector("#capital");
const numberCritera = document.querySelector("#number");
const symbolCritera = document.querySelector("#symbol");
const lengthCritera = document.querySelector("#length");

const letterRegex = /[a-z]/;
const capitalRegex = /[A-Z]/;
const numberRegex = /[0-9 ]/;
const symbolRegex = /[@$!%*?&#]/;
// const lengthRegex=[]

togglepassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  togglepassword.textContent = type === "password" ? "👁️" : "🙈";
});

togglepasswordconfirm.addEventListener("click", () => {
  const type = confirmpassowrd.type === "password" ? "text" : "password";
  confirmpassowrd.type = type;
  togglepasswordconfirm.textContent = type === "password" ? "👁️" : "🙈";
});

passwordInput.addEventListener("input", (e) => {
  // console.log(e.target.value);
  const value = passwordInput.value;


  if (letterRegex.test(value)) {
    letterCriteria.classList.remove("invalid");
    letterCriteria.classList.add("valid");
  } else {
    letterCriteria.classList.remove("valid");
    letterCriteria.classList.add("invalid");
  }

  if (capitalRegex.test(value)) {
    capitalCritera.classList.remove("invalid");
    capitalCritera.classList.add("valid");
  } else {
    capitalCritera.classList.remove("valid");
    capitalCritera.classList.add("invalid");
  }

  if (numberRegex.test(value)) {
    numberCritera.classList.remove("invalid");
    numberCritera.classList.add("valid");
  } else {
    numberCritera.classList.remove("valid");
    numberCritera.classList.add("invalid");
  }
  if (symbolRegex.test(value)) {
    symbolCritera.classList.remove("invalid");
    symbolCritera.classList.add("valid");
  } else {
    symbolCritera.classList.remove("valid");
    symbolCritera.classList.add("invalid");
  }

  if (value.length >= 8) {
    lengthCritera.classList.remove("invalid");
    lengthCritera.classList.add("valid");
  } else {
    lengthCritera.classList.remove("valid");
    lengthCritera.classList.add("invalid");
  }
});

submitbtn.addEventListener("click", () => {
  criteriaList.style.display = "none";
  alert("Data submitted successfully");
});