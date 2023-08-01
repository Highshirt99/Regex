const fields = document.querySelectorAll("input");

const patterns = {
  firstname: /^.+$/i,
  lastname: /^.+$/i,
  phoneNumber: /^[\+?\d]{11,14}$/,
  email: /^([a-z\d\.-]+@[a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w\s@-]{6,}$/i,
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

fields.forEach((field) => {
  field.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.id]);
  });
});
