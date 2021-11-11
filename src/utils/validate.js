import toast from 'react-hot-toast';
const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const namePattern = /^[a-zA-Z]*$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const valEmail = (email) => {
  //check username length
  if (email.length < 1) return false;
  if (!emailPattern.test(email.toLowerCase())) return false;
  return true;
};
const valPassword = (password) => {
  //check password length
  if (password.length < 8 || password.length > 64) return false;
  if (!passwordPattern.test(password)) return false;
  return true;
};
const valName = (name) => {
  //   if (!namePattern.test(name)) return false;
  if (name.length < 1) return false;
  return true;
};
const valSurname = (surname) => {
  if (!namePattern.test(surname)) return false;
  if (surname.length < 1) return false;
  return true;
};

const valImage = (files) => {
  const file = files[0];
  const fileType = file['type'];
  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
  if (!validImageTypes.includes(fileType)) {
    toast.error('please input image file jpg or png');
    return;
  }
};
export { valEmail, valPassword, valName, valSurname, valImage };
