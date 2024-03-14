import { useRef } from "react";
import styles from "./form.module.css";
export default function Form(props) {
  const { display, addImage } = props;
  const nameRef = useRef(null);
  const imageurlRef = useRef(null);

  // To clear form input field.
  function clear() {
    nameRef.current.value = "";
    if (display === "ALBUM") imageurlRef.current.value = "";
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        addImage(
          e,
          nameRef.current.value,
          display === "ALBUM" ? imageurlRef.current.value : ""
        );
        clear();
      }}
    >
      <h2 className={styles.title}>
        {display === "ALBUM" ? "Add Image" : "Create New Album"}
      </h2>
      <input
        ref={nameRef}
        className={styles.input}
        placeholder="Title"
        type="text"
      />
      {/* If display is album, the imageUrl field is shown else hide. */}
      {display === "ALBUM" ? (
        <input
          ref={imageurlRef}
          className={styles.input}
          placeholder="Image URL"
          type="text"
        />
      ) : (
        <></>
      )}
      <div className={styles.btnDiv}>
        <button onClick={clear} type="button" className={styles.btn}>
          <img
            className={styles.icon}
            src="https://cdn-icons-png.flaticon.com/128/9068/9068699.png"
          />
        </button>
        <button type="submit" className={styles.btn}>
          <img
            className={styles.icon}
            src="https://cdn-icons-png.flaticon.com/128/14035/14035576.png"
          />
        </button>
      </div>
    </form>
  );
}
