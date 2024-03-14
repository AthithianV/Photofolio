import { useEffect, useState } from "react";
import styles from "./album.module.css";
import db from "../../firebase/firebaseInit";
import { collection, onSnapshot } from "firebase/firestore";

export default function Album({ selectImage, album, removeImage}) {
  const [images, setImages] = useState([]);

  // UseEffect for getting all albums from the database.
  useEffect(() => {
    const unsub = onSnapshot(collection(db, album), (snapshot) => {
      const imageList = [];
      snapshot.forEach((doc) => {
        imageList.push({ id: doc.id, ...doc.data() });
      });
      setImages(imageList);
      selectImage(imageList.length > 0 ? imageList[0] : "");
    });
  }, []);

  return (
    <div className={styles.album}>
      {/* Container for all images */}
      <div className={styles.images}>
        {images.length > 0 ? (
          images.map((img) => (
            // Container for single image.
            <div className={styles.imageContainer}>
              <img
                className={styles.delete}
                onClick={(e) => removeImage(e, album, img.id)}
                src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
              />
              <img
                key={img.id}
                onClick={() => selectImage(img)}
                className={styles.thumbnail}
                src={img.imageUrl}
              />
            </div>
          ))
        ) : (
          <h1>No Images</h1>
        )}
      </div>
    </div>
  );
}
