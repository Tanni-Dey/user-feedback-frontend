/* eslint-disable react/prop-types */
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import formImg from "../../assets/images/form.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../utils/firebase";
import { auth } from "../../utils/firebase";
import { axiosNonSecureInstance } from "../../utils/axios";

const CustomForm = ({
  apiMethod,
  userAuth,
  firebaseError,
  url,
  loading,
  formTitle,
  buttonText,
}) => {
  const [cPassError, setCPassError] = useState("");
  const [weakPassError, setWeakPassError] = useState("");
  const [usedEmailError, setUsedEmailError] = useState("");
  const [networkError, setNetworkError] = useState("");
  const [invalidUserOrPass, setInvalidUserOrPass] = useState("");

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // rhf form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // after signup navigation
  if (user) {
    navigate("/");
  }

  // const handleDeleteAccount = async () => {
  //   try {
  //     // if (!user) {
  //     //   // Handle the case where the user is not authenticated
  //     //   console.log("not auth");
  //     //   return;
  //     // }

  //     // Delete user data from Firestore (assuming 'users' collection)
  //     await db.collection("users").doc(user.uid).delete();

  //     // Delete the user from Firebase Authentication
  //     await auth.currentUser.delete();

  //     // Now, you might navigate or perform other actions as needed
  //   } catch (error) {
  //     console.error("Error deleting account:", error);
  //     // setError("Error deleting account");
  //   }
  // };

  //firebase error handling

  useEffect(() => {
    if (firebaseError) {
      if (firebaseError.message.includes("weak-password")) {
        setWeakPassError("Give 6 character for password");
        setNetworkError("");
        setUsedEmailError("");
        setInvalidUserOrPass("");
      } else if (firebaseError.message.includes("email-already-in-use")) {
        setUsedEmailError("This email already used");
        setWeakPassError("");
        setNetworkError("");
        setInvalidUserOrPass("");
      } else if (firebaseError.message.includes("invalid-credential")) {
        setInvalidUserOrPass("Wrong user or password");
        setNetworkError("");
        setWeakPassError("");
        setUsedEmailError("");
      } else if (firebaseError.message.includes("network-request-failed")) {
        setNetworkError("Check your network conection");
        setWeakPassError("");
        setUsedEmailError("");
        setInvalidUserOrPass("");
      } else {
        setNetworkError("");
        setWeakPassError("");
        setUsedEmailError("");
        setInvalidUserOrPass("");
      }
    }
  }, [firebaseError]);

  //rhf submit form
  const onSubmit = async (data) => {
    if (location.pathname === "/signup" && data.cPassword !== data.password) {
      setCPassError("Password and confirm password not matched");
    } else {
      setCPassError("");
      const res = await userAuth(data.email, data.password);

      // create user api
      if (location.pathname === "/signup" && res.user) {
        try {
          const response = await axiosNonSecureInstance[apiMethod](url, data);
          // const res2 = await handleDeleteAccount();
          // console.log(res2);
          return response.data;
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className=" bg-white container mx-auto">
      <div className="flex justify-between items-center rounded-2xl shadow-2xl my-10 mx-20">
        <div className="w-1/2 bg-green-100 rounded-l-2xl">
          <img className="max-w-full" src={formImg} alt="img" />
        </div>
        <div className="card sm:w-96 w-60 glass mx-auto">
          <div className="card-body">
            <h2 className="card-title text-2xl text-teal-700 mb-5 uppercase">
              {formTitle}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.name && (
                <p className="text-error text-xs">Enter your name</p>
              )}
              {location.pathname === "/signup" && (
                <CustomInput
                  type="text"
                  register={register}
                  fieldName="name"
                  placeholder="Name"
                />
              )}
              {/* {errors.status && (
                <p className="text-error text-xs">Status is required</p>
              )} */}
              {/* <select
                defaultValue={singleTask?.status}
                type="select"
                {...register("status", { required: true })}
                placeholder="Enter Task Status"
                className="select select-bordered select-md w-full max-w-xs mb-3"
              >
                <option value="">Select an option</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select> */}
              {/* {errors.dueDate && <p className="text-error text-xs">Date is required</p>}
              <CustomInput
                type="date"
                register={register}
                fieldName="dueDate"
                placeholder="Date"
                defaultValue={singleTask?.dueDate}
              /> */}

              {errors.email && (
                <p className="text-error text-xs">Enter your Email</p>
              )}
              <CustomInput
                type="email"
                register={register}
                fieldName="email"
                placeholder="Email"
              />

              {errors.password && (
                <p className="text-error text-xs">Enter your Password</p>
              )}
              <CustomInput
                type="password"
                register={register}
                fieldName="password"
                placeholder="Password"
              />
              {(errors.cPassword && (
                <p className="text-error text-xs">Enter Confirm Password</p>
              )) || <p className="text-error text-xs">{cPassError}</p>}

              {location.pathname === "/signup" && (
                <CustomInput
                  type="password"
                  register={register}
                  fieldName="cPassword"
                  placeholder="Confirm Password"
                />
              )}

              {/* {isLoading?} */}

              {/* --firebase error-- */}
              <p className="text-error mb-3">
                {weakPassError ||
                  networkError ||
                  usedEmailError ||
                  invalidUserOrPass}
              </p>

              {loading ? (
                <span className="loading loading-spinner text-primary"></span>
              ) : (
                <input
                  type="submit"
                  value={buttonText}
                  className="btn w-full hover:bg-teal-600 text-white bg-teal-700 border-0"
                />
              )}
            </form>
            {location.pathname === "/login" ? (
              <p className="text-md">
                Create an new Account? Please
                <Link className="btn btn-link text-teal-700" to="/signup">
                  Sign Up
                </Link>
              </p>
            ) : (
              <p className="text-md">
                Already Have An Account? Please
                <Link className="btn btn-link text-teal-700" to="/login">
                  Login
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
