import { useNavigate } from "react-router-dom";
import login from "../UI_Images/Login.jpg";
import login_svg from "../UI_Images/login.svg";
import { loginSchema } from "..";
import { useFormik } from "formik";
import Axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  async function onSubmit(values, actions) {
    await new Promise((resolve) => {
      Axios.post("http://localhost:8000/login", {
        email: values.email,
        password: values.password,
      })
        .then((response) => {
          if(response.data.message == "No user"){
            toast.error("Please signup first", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }else{
            toast.success("Welcome back!", {
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
          }
        })
        .catch((error) => {
          toast.error("Error", {
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
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
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
        <img src={login} alt="Sign Up Image" />
      </div>
      <div className="h-full w-1/2 bg-[#0054C6] flex justify-center items-center rounded-l-lg">
        <form
          onSubmit={handleSubmit}
          className="h-3/5 w-3/5 flex flex-col justify-evenly"
        >
          <div className="w-full h-20 flex flex-col justify-between items-center">
            <button className="rounded-full h-10 w-10 bg-purple-400 flex items-center justify-center">
              <img className="h-7 w-7 pr-1" src={login_svg} alt="Register" />
            </button>
            <h1 className="text-2xl text-white text-center">LOGIN</h1>
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
              autocomplete="off"
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-10 bg-[#57cc99] text-white text-center w-full rounded-md disabled:opacity-50 disabled:pointer-events-none"
            >
              LOGIN
            </button>
          </div>
          <div className="text-right text-white underline text-sm hover:cursor-pointer hover:text-blue-300">
            <p
              onClick={() => {
                navigate("/signup");
              }}
            >
              Don't have an account? Sign Up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
