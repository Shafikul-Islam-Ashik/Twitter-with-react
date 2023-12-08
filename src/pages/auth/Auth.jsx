import "./Auth.scss";
// import { Link } from "react-router-dom";

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

const Auth = () => {
  const [signinModal, setSigninModal] = useState(false);
  const [createAccountModal, setcreateAccountModal] = useState(false);

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

            <button className="button-with-icon">
              <FcGoogle />
              <span style={{ color: "#3c4055", fontWeight: "500" }}>
                Sign up with Google
              </span>
            </button>

            <button className=" button-with-icon">
              <IoLogoApple />
              <span>Sign up with Apple</span>
            </button>

            <div className="devider text-center">or</div>

            <input type="text" placeholder="Phone, email address or username" />

            <button className="next-btn">Next</button>
            <button className="">Forgot password?</button>

            <p>
              Don’t have an account? <Link>Sign up</Link>
            </p>
          </div>
        </Modal>
      )}
      {/* sign in modal ends here */}

      {/* create account modal starts */}
      {createAccountModal && (
        <CreateAccountModal hide={setcreateAccountModal}>
          <div className="create-account-container">
            <h2>Create your account</h2>

            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />

            <Link>Use email instead</Link>

            <h4>Date of birth</h4>

            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>

            <div className="input-select">
              <select className="s-month" name="" id="">
                <option value="">Month</option>
                {month?.map((item, index) => (
                  <option
                    value={item}
                    key={index}
                    selected={new Date().getMonth() == index ? true : false}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <select className="s-day" name="" id="">
                <option value="">Day</option>
                {day?.map((item, index) => (
                  <option
                    value={item}
                    key={index}
                    selected={new Date().getDate() == item ? true : false}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <select className="s-year" name="" id="">
                <option value="">Year</option>
                {years?.map((item, index) => (
                  <option
                    value={item}
                    key={index}
                    selected={new Date().getFullYear() == item ? true : false}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button>Next</button>
          </div>
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
                <button className="mt-20 button-with-icon">
                  <FcGoogle />
                  <span style={{ color: "#3c4055", fontWeight: "500" }}>
                    Sign up with Google
                  </span>
                </button>
                <button className="mt-10 button-with-icon">
                  <IoLogoApple />
                  <span>Sign up with Apple</span>
                </button>

                <div className="devider text-center">or</div>

                <button
                  onClick={() => setcreateAccountModal(true)}
                  className="mt-10 button-bg-blue"
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
                className="mt-10 button-with-icon text-blue"
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
