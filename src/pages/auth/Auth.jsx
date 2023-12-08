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

const Auth = () => {
  const [signinModal, setSigninModal] = useState(false);

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

                <button className="mt-10 button-bg-blue">Create account</button>
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
