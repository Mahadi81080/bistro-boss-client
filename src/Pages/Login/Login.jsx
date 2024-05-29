import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { useEffect, useState } from "react";
 
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { singIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    singIn(email, password)
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
        toast.success("Loging Successfully");
      })
      .catch((error) => {
        console.log("sing In error", error);
        toast.error("An error occurred during SingIn.");
      });
  };

  // const handleValidateCaptcha = (e) => {
  //   const user_captcha_value = e.target.value;
  //   if (validateCaptcha(user_captcha_value)) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SingIn</title>
      </Helmet>
      <div className="flex justify-between items-center my-6 mx-10">
        <div>
          <img src={loginImg} alt="" className="" />
        </div>
        <div className="flex flex-col max-w-md p-6 sm:p-10 dark:text-gray-800 w-2/3">
          <div className="mb-6 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* <div>
                <label htmlFor="captcha" className="block mb-2 text-sm">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  id="captcha"
                  placeholder="Type the captcha above"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div> */}
            </div>
            <div className="space-y-2">
              <div>
                <input
                  type="submit"
                  // disabled={disabled}
                  className={`w-full px-8 py-3 font-semibold rounded-md ${
                    disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#dbb883]"
                  } dark:text-gray-50`}
                />
              </div>
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">
                  Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
              </div>
               <SocialLogin></SocialLogin>
              <p className="px-6 text-sm text-center dark:text-gray-600">
                Do not have an account yet?
                <Link
                  to="/singUp"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#ff3811]"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Login;
