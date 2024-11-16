import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import LostPassword from "../LostPassword/LostPassword";
import MyModal from "../Modal/ShowModal";
import "../Modal/Modal.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import Privacymodal from "../Privacymodal/Privacymodal";

// import { Modal } from "../Modal/Modal";

const LoginSignup = ({ onUserUpdate, user }) => {
  const [action, setAction] = useState("Sign Up");
  const [view, setView] = useState("form");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);

  //Modal for signup
  const [setshowModal, setSetshowModal] = useState(false);
  const closeModal = () => setSetshowModal(false);

  const navigate = useNavigate();

  const handleActionChange = (newAction) => {
    setAction(newAction);
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAddress("");
    setPhoneNumber("");
    setErrors({});
    setServerError("");
    setAcceptedPrivacyPolicy(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (action === "Sign Up") {
      if (!firstName) newErrors.firstName = "First Name is required";
      if (!lastName) newErrors.lastName = "Last Name is required";
      if (!userName) newErrors.userName = "Username is required";
      if (!address) newErrors.address = "Address is required";
      if (!phone) {
        newErrors.phone = "Phone Number is required";
      } else if (!/^\d{10}$/.test(phone)) {
        newErrors.phone = "Phone Number must be exactly 10 digits";
      }
      if (!email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Email is invalid";
      }
      if (!password) {
        newErrors.password = "Password is required";
      } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
      if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      if (!acceptedPrivacyPolicy) {
        newErrors.acceptedPrivacyPolicy = "You must accept the privacy policy";
      }
    } else if (action === "Login") {
      if (!userName) newErrors.userName = "Username is required";
      if (!password) {
        newErrors.password = "Password is required";
      } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
      if (!acceptedPrivacyPolicy) {
        newErrors.acceptedPrivacyPolicy = "You must accept the privacy policy";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setServerError("");

      // const url =
      //   action === "Sign Up"
      //     ? "http://localhost:8085/signup"
      //     : "http://localhost:8085/login";
      // const payload =
      //   action === "Sign Up"
      //     ? {
      //         firstName,
      //         lastName,
      //         userName,
      //         email,
      //         password,
      //         address,
      //         phone,
      //       }
      //     : { userName, password };

      // try {
      //   const response = await fetch(url, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(payload),
      //     credentials: "include",
      //   });

      //   if (!response.ok) {
      //     const errorData = await response.json();
      //     setServerError(errorData.message || "An error occurred");
      //     throw new Error("Network response was not ok");
      //   }

      //   const data = await response.json();
      //   console.log(
      //     action === "Sign Up" ? "Sign Up Success:" : "Login Success:",
      //     data
      //   );

      //   onUserUpdate(data);
      //   navigate(action === "Sign Up" ? "/profile" : "/");
      //   setFirstName("");
      //   setLastName("");
      //   setUserName("");
      //   setEmail("");
      //   setPassword("");
      //   setConfirmPassword("");
      //   setAddress("");
      //   setPhoneNumber("");
      //   setErrors({});
      //   setLoading(false);
      //   setAcceptedPrivacyPolicy(false);
      // } catch (error) {
      //   console.error("Error during submission:", error);
      setLoading(false);
      // }

      // alert("Hurrey!! SignUp Sucessfully ");
      // setSetshowModal(true);

      // setshowModal && <MyModal closeModal={closeModal} />;
    }
  };
  const hello = () => {
    setSetshowModal(true);

    setshowModal && <MyModal closeModal={closeModal} />;
    
    console.log(firstName, lastName, userName, email, password, address, phone);
  };
  const hellos = () => {
    setSetshowModal(true);
    setshowModal && <Privacymodal closeModal={closeModal} />;
  }
    

  return (
    <div className="container">
      {view === "form" ? (
        <>
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          {serverError && <div className="server-error">{serverError}</div>}
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              {action === "Sign Up" && (
                <>
                  <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    {errors.firstName && (
                      <span className="error">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    {errors.lastName && (
                      <span className="error">{errors.lastName}</span>
                    )}
                  </div>
                  <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input
                      type="text"
                      placeholder="Username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    {errors.userName && (
                      <span className="error">{errors.userName}</span>
                    )}
                  </div>
                  <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    {errors.address && (
                      <span className="error">{errors.address}</span>
                    )}
                  </div>
                  <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    {errors.phone && (
                      <span className="error">{errors.phone}</span>
                    )}
                  </div>
                  <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input
                      type="email"
                      placeholder="Email Id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
                  <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {errors.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>
                  <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    {errors.confirmPassword && (
                      <span className="error">{errors.confirmPassword}</span>
                    )}
                  </div>
                  <div className="input checkbox">
                    <input
                      type="checkbox"
                      checked={acceptedPrivacyPolicy}
                      onChange={(e) =>
                        setAcceptedPrivacyPolicy(e.target.checked)
                      }
                      required
                    />
                    <label onClick={hellos}>I accept the privacy policy</label>
                    {errors.acceptedPrivacyPolicy && (
                      <span className="error">
                        {errors.acceptedPrivacyPolicy}
                      </span>
                    )}
                  </div>
                </>
              )}
              {action === "Login" && (
                <>
                  <div className="input">
                    <img src={user_icon} alt="User Icon" />
                    <input
                      type="text"
                      placeholder="Username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    {errors.userName && (
                      <span className="error">{errors.userName}</span>
                    )}
                  </div>
                  <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {errors.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>
                  <div className="input checkbox">
                    <input
                      type="checkbox"
                      checked={acceptedPrivacyPolicy}
                      onChange={(e) =>
                        setAcceptedPrivacyPolicy(e.target.checked)
                      }
                      required
                    />
                    <label onClick={hellos}>I accept the privacy policy</label>
                    {errors.acceptedPrivacyPolicy && (
                      <span className="error">
                        {errors.acceptedPrivacyPolicy}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="forgot-password">
              Forget Password?
              <span onClick={() => setView("lostPassword")}>Click Here</span>
            </div>
            <div className="submit-container">
              <button
                type="submit"
                className="submit "
                disabled={loading}
                onClick={hello}
              >
                {loading
                  ? "Loading..."
                  : action === "Sign Up"
                  ? "Sign Up"
                  : "Login"}
              </button>
              {setshowModal && <MyModal closeModal={closeModal} />}
              {setshowModal && <Privacymodal closeModal={closeModal} />}
              <button
                type="button"
                className="submit gray"
                onClick={() =>
                  handleActionChange(action === "Sign Up" ? "Login" : "Sign Up")
                }
              >
                {action === "Sign Up" ? "Login" : "Sign Up"}
              </button>
            </div>
          </form>
        </>
      ) : (
        <LostPassword onBack={() => setView("form")} />
      )}
    </div>
  );
};

export default LoginSignup;
