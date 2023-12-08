import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="link">
          <ul>
            <li>
              <Link to="">Meta</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Jobs</Link>
            </li>
            <li>
              <Link to="">Help</Link>
            </li>
            <li>
              <Link to="">API</Link>
            </li>
            <li>
              <Link to="">Privacy</Link>
            </li>
            <li>
              <Link to="">Terms</Link>
            </li>
            <li>
              <Link to="">Locations</Link>
            </li>
            <li>
              <Link to="">Instagram Lite</Link>
            </li>
            <li>
              <Link to="">Threads</Link>
            </li>
            <li>
              <Link to="">Contact uploading and non-users</Link>
            </li>
            <li>
              <Link to="">Meta Verified</Link>
            </li>
          </ul>
        </div>
        <div className="copy-right">
          <p>&copy; 2023 Instagram from Meta</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
