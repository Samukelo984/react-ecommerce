import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";
import { FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/login.png";
import Card from "../../components/card/Card";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="login-img" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/reset">Forgot Password</Link>
            </div>
            <p>--or--</p>
          </form>
          <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" /> Login With Google
          </button>
          <span className={styles.register}>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
