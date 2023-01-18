// grab inputs

const inputs = document.querySelectorAll('input');

// regex object

const patterns = {
  firstname: /^[a-z]+$/i,
  lastname: /^[a-z]+$/i,
  email: /^[a-z\d_\-\.]+@[a-z]+\.([a-z]{2,8})(\.?)([a-z]{1,8})?$/i,
  telephone: /^\(?\d{3}\)?\-?\s?\d{3}\-?\s?\d{4}$/,
  password: /^.{12,18}$/,
  passconfirm: /^.{12,18}$/,
}



//function to validate regex
function validate(field, regex) {
  if (field.name === "passconfirm" && passconfirm.value === password.value) {
    field.className = "valid";
  
  } else if (field.name === "passconfirm" && passconfirm.value !== password.value) {
    field.className = "invalid";
    
  } else if (regex.test(field.value) && field.name !== "passconfirm") {
    field.className = "valid";
    
  } else {
    field.className = 'invalid';
  };
};

// listen for keyup event, validate regex

inputs.forEach((input) => {
  input.addEventListener('keyup', (e)=> {
    validate(e.target, patterns[e.target.attributes.name.value])
  });
});