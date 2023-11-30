import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


export const signUpSchema = yup.object().shape({
    username: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(6).max(10).matches(passwordRules, {message: "Please create a stronger password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match").required("Required")
})


export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(6).max(10).matches(passwordRules,{message: "Please create a stronger password"}).required("Required")
})