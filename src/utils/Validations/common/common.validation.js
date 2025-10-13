export const checkNumber = (value) => {
  if (value === undefined || value === null) {
    return false;
  }
  // value = PersianToEnglish(value);
  var patt = new RegExp(`^09[0-9]{2}[0-9]{7}$`);
  return patt.test(value);
};
