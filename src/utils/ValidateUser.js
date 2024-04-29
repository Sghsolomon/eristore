export const ValidateUser = (values) => {
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 3) {
    errors.username = "Username must be at least three chatacters";
  } else if (values.username.length > 15) {
    errors.username = "Username must be less than 15 characters";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password < 5) {
    errors.password = "Password must be greater than five characters";
  } else if (!regularExpression.test(values.password)) {
    errors.password =
      "Password should contain atleast one number and one special character";
  }
  return errors;
};
