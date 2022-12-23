import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="reset-img" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
