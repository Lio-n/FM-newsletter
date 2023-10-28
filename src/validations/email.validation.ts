const validateEmail = (email: string): boolean => {
  const REG_EXR_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const Regex = new RegExp(REG_EXR_EMAIL);

  return Regex.test(email);
};

export default validateEmail;
