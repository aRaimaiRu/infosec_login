const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
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
    if(name.length <1) return false;
}
const valSurname = (surname)=>{
    if(surname.length <1) return false;
}
  
  export { valEmail, valPassword,valName, valSurname};