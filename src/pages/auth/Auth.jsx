import "./Auth.scss";
// import { Link } from "react-router-dom";

import Footer from "../../footer/Footer";
import Twit from "../../component/twit/Twit";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <Twit title="X. It's what's happening / X" />

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
                <button className="mt-20 button-bg-white">
                  <FcGoogle />
                  <span style={{ color: "#3c4055", fontWeight: "500" }}>
                    Sign up with Google
                  </span>
                </button>
                <button className="mt-10 button-bg-white">
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

              <button className="mt-10 button-bg-white text-blue">
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
