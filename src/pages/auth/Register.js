import styles from "./Auth.module.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/register.png";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmP, setConfirmP] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmP) {
      toast.error("Passwords do not match.");
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        toast.success("Registration Successful!");
        setLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer />
      {loading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmP}
                onChange={(e) => setConfirmP(e.target.value)}
              />
              <button className="--btn --btn-primary --btn-block" type="submit">
                Register
              </button>
            </form>
            <span className={styles.register}>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="register-img" width="400" />
        </div>
      </section>
    </>
  );
};

export default Register;
