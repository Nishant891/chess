import { useNavigate } from "react-router-dom";
import Signup from "../UI_Images/SignUp.jpg";
import { useFormik } from "formik";
import { signUpSchema } from "..";
import register from "../UI_Images/register.svg";
import Axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

function SignUp() {
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  async function onSubmit(values, actions) {
    await new Promise((resolve) => {
      Axios.post("http://localhost:8000/signup", {
        username: values.username,
        email: values.email,
        password: values.password,
      })
        .then((response) => {
          toast.success(`Hello ${values.username}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/dashboard");
        })
        .catch((error) => {
          toast.error("Sorry please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  useEffect(() => {
    Axios.get("http://localhost:8000/").then((response) => {
      if(response.data.loggedIn == true){
        navigate('/dashboard');
      }
    })
  },[])

  return (
    <div className="w-screen h-screen flex flex-row justify-between items-center overflow-hidden">
      <div className="h-full w-1/2">
        <img src={Signup} alt="Sign Up Image" />
      </div>
      <div className="h-full w-1/2 bg-[#0054C6] flex justify-center items-center rounded-l-lg">
        <form
          onSubmit={handleSubmit}
          className="h-4/5 w-3/5 flex flex-col justify-evenly"
        >
          <div className="w-full h-20 flex flex-col justify-between items-center">
            <button className="rounded-full h-10 w-10 bg-purple-400 flex items-center justify-center">
              <img className="h-7 w-7 pl-1" src={register} alt="Register" />
            </button>
            <h1 className="text-2xl text-white text-center">SIGN UP</h1>
          </div>
          <div>
            <input
              id="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.username && touched.username
                  ? "border-2 border-red-500 h-14 w-full rounded-xl px-4 text-lg outline-none"
                  : "border-0 h-14 w-full rounded-xl px-4 text-lg outline-none placeholder:text-slate-700"
              }
              placeholder="Username"
            ></input>
            {errors.username && touched.username ? (
              <p className="pl-2 text-red-500 text-sm">{errors.username}</p>
            ) : null}
          </div>
          <div>
            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "border-2 border-red-500 h-14 w-full rounded-xl px-4 text-lg outline-none"
                  : "border-0 h-14 w-full rounded-xl px-4 text-lg outline-none placeholder:text-slate-700"
              }
              placeholder="Email"
            ></input>
            {errors.email && touched.email ? (
              <p className="pl-2 text-red-500 text-sm">{errors.email}</p>
            ) : null}
          </div>
          <div>
            <input
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? "border-2 border-red-500 h-14 w-full rounded-xl px-4 text-lg outline-none"
                  : "border-0 h-14 w-full rounded-xl px-4 text-lg outline-none placeholder:text-slate-700"
              }
              placeholder="Password"
            ></input>
            {errors.password && touched.password ? (
              <p className="pl-2 text-red-500 text-sm">{errors.password}</p>
            ) : null}
          </div>
          <div>
            <input
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "border-2 border-red-500 h-14 w-full rounded-xl px-4 text-lg outline-none"
                  : "border-0 h-14 w-full rounded-xl px-4 text-lg outline-none placeholder:text-slate-700"
              }
              placeholder="Confirm Password"
            ></input>
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="pl-2 text-red-500 text-sm">
                {errors.confirmPassword}
              </p>
            ) : null}
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 bg-[#57cc99] text-white text-center w-full rounded-md disabled:opacity-50 disabled:pointer-events-none"
            >
              SIGN UP
            </button>
          </div>
          <div className="text-right text-white underline text-sm hover:cursor-pointer hover:text-blue-300">
            <p
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an account? Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
