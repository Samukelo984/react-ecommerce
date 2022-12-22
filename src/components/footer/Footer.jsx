import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>&copy;{year} All Rights Reserved</footer>
  );
};

export default Footer;
