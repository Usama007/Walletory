const emailValidate = require('./emailValidation');
test('check whether email is valid or not', () => {
    expect(emailValidate('usama@gmail.com')).toBe(true);
});

