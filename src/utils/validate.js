const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const namePattern = /^[a-zA-Z]*$/;
const valEmail = (email)=>{
    //check username length
    if(email.length <1) return false;
    if(!emailPattern.test(email.toLowerCase())) return false;
    return true;
}
const valPassword = (password)=>{
    //check password length
    if(password.length <8 ||password.length >64) return false;
    return true
}
const valName = (name)=>{
    if (!namePattern.test(name)) return false;
    if(name.length <1) return false;
    return true;
}
const valSurname = (surname)=>{
    if (!namePattern.test(surname)) return false;
    if(surname.length <1) return false;
    return true;
}

  
  export { valEmail, valPassword,valName, valSurname};