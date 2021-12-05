const emailValidate = (email) => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (reg.test(email) === false) {
        return false;
    } else {
        return true;
    }
}
module.exports = emailValidate;
