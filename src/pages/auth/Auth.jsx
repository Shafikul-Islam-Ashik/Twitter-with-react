import Footer from "../../footer/Footer";
import Twit from "../../component/twit/Twit";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { Link } from "react-router-dom";
import Modal from "../../component/modal/Modal";
import { useState } from "react";
import CreateAccountModal from "../../component/createAccountModal/CreateAccountModal";
import { day, month } from "../../faker/dmy";

// import Swal from "sweetalert2";

import "./Auth.scss";
import { createToast, isValidMobile } from "../../helpers/helpers";

const Auth = () => {
  const [signinModal, setSigninModal] = useState(false);
  const [createAccountModal, setcreateAccountModal] = useState(false);

  // user register form management
  const [input, setInput] = useState({
    name: "",
    phone: "",
    day: "",
    month: "",
    year: "",
  });

  // handle input
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle UserRegister (create account) form
  const handleUserRegister = (e) => {
    e.preventDefault();

    if (
      !input.name ||
      !input.phone ||
      !input.day ||
      !input.month ||
      !input.year
    ) {
      createToast("All fields are required");
    } else if (!isValidMobile(input.phone)) {
      createToast("Invalid phone number");
    } else {
      createToast("Data stable", "success");
      // Swal.fire("ok");

      // clear form
      setInput({
        name: "",
        phone: "",
        day: "",
        month: "",
        year: "",
      });
    }
  };

  // sign in form management
  const [signinInput, setSigninInput] = useState({
    phone_email_username: "",
  });

  // handle Signin Form
  const handleSigninForm = (e) => {
    e.preventDefault();

    if (!signinInput.phone_email_username) {
      createToast("Please enter mobile, email or username");
    } else {
      createToast("Form submitted", "success");

      // clear form
      setSigninInput({ phone_email_username: "" });
    }
  };

  // get facebook years
  const years = Array.from(
    {
      length: new Date().getFullYear() - 1900,
    },
    (_, i) => 1901 + i
  ).reverse();

  return (
    <>
      <Twit title="X. It's what's happening / X" />

      {/* sign in modal starts */}
      {signinModal && (
        <Modal hide={setSigninModal}>
          <div className="signin-conatiner">
            <h3 className="signin-heading">Sign in to X</h3>

            <button className="button-with-icon btn">
              <FcGoogle />
              <span style={{ color: "#3c4055", fontWeight: "500" }}>
                Sign up with Google
              </span>
            </button>

            <button className=" button-with-icon btn">
              <IoLogoApple />
              <span>Sign up with Apple</span>
            </button>

            <div className="devider text-center">or</div>

            <form onSubmit={handleSigninForm}>
              <input
                type="text"
                placeholder="Phone, email address or username"
                name="phone_email_username"
                value={signinInput.phone_email_username}
                onChange={(e) =>
                  setSigninInput((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />

              <button type="submit" className="mt-20 next-btn btn">
                Next
              </button>
            </form>

            <button className="btn">Forgot password?</button>

            <p>
              Don’t have an account? <Link>Sign up</Link>
            </p>
          </div>
        </Modal>
      )}
      {/* sign in modal ends here */}

      {/* create account (user register) modal starts */}
      {createAccountModal && (
        <CreateAccountModal hide={setcreateAccountModal}>
          <form onSubmit={handleUserRegister}>
            <div className="create-account-container">
              <h2>Create your account</h2>

              <input
                type="text"
                placeholder="Name"
                name="name"
                value={input.name}
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={input.phone}
                onChange={handleInput}
              />

              <Link>Use email instead</Link>

              <h4>Date of birth</h4>

              <p>
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>

              <div className="input-select">
                <select
                  className="s-month"
                  id=""
                  name="month"
                  value={input.month}
                  onChange={handleInput}
                >
                  <option value="">Month</option>
                  {month?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      // selected={new Date().getMonth() == index ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  className="s-day"
                  id=""
                  name="day"
                  value={input.day}
                  onChange={handleInput}
                >
                  <option value="">Day</option>
                  {day?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      // selected={new Date().getDate() == item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  className="s-year"
                  id=""
                  name="year"
                  value={input.year}
                  onChange={handleInput}
                >
                  <option value="">Year</option>
                  {years?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      // selected={new Date().getFullYear() == item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <button className="btn" type="submit">
                Next
              </button>
            </div>
          </form>
        </CreateAccountModal>
      )}
      {/* create account modal ends here */}

      <div className="wrapper">
        <div className="container">
          <div className="left">
            <div className="twitter-icon">
              <BsTwitterX />
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h1 className="mt-20">Happening now</h1>
              <h2 className="mt-20">Join today.</h2>

              <div className="button-group">
                <button className="mt-20 button-with-icon btn">
                  <FcGoogle />
                  <span style={{ color: "#3c4055", fontWeight: "500" }}>
                    Sign up with Google
                  </span>
                </button>
                <button className="mt-10 button-with-icon btn">
                  <IoLogoApple />
                  <span>Sign up with Apple</span>
                </button>

                <div className="devider text-center">or</div>

                <button
                  onClick={() => setcreateAccountModal(true)}
                  className="mt-10 button-bg-blue btn"
                >
                  Create account
                </button>
              </div>

              <p className="text-muted mt-10">
                By signing up, you agree to the <Link>Terms of Service</Link>{" "}
                and <Link>Privacy Policy</Link>, including{" "}
                <Link>Cookie Use.</Link>
              </p>

              <h4 className="mt-30">Already have an account?</h4>

              <button
                onClick={() => setSigninModal(true)}
                className="mt-10 button-with-icon text-blue btn"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Auth;
