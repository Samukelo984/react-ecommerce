import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";
import { auth } from "../../firebase/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check email for reset link");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(true);
        toast.error(error.message);
      });
  };
  return (
    <>
      {loading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={resetImg} alt="reset-img" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Reset</h2>
            <form onSubmit={handleReset}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="--btn --btn-primary --btn-block"
                button="submit"
              >
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
    </>
  );
};

export default Reset;
