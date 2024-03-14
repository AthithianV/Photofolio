import styles from "./nav.module.css";
// Component for Navigation.
export default function Nav({ album }) {
  return (
    <div className={styles.nav}>
      {/* Logo */}
      <div className={styles.logo}>
        <img
          className={styles.img}
          src="https://cdn-icons-png.flaticon.com/128/2983/2983067.png"
        />
        <h3 className={styles.m0}>PhotoFolio</h3>
      </div>
      {/* Album name shown only when an album is selected. */}
      <h1 className={styles.heading}>{album ? "Album: " + album : ""}</h1>
    </div>
  );
}
