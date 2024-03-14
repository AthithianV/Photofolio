import styles from "./imageView.module.css";

export default function ImageViewer({ image, backButton }) {
  return (
    // Image viewer component.
    <div className={styles.view}>
      <img
        onClick={backButton}
        className={styles.back}
        src="https://cdn-icons-png.flaticon.com/128/4518/4518043.png"
      />
      <img className={styles.img} src={image.imageUrl} />
      <h2 className={styles.title}>{image.title}</h2>
    </div>
  );
}
