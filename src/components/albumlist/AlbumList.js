import { useEffect, useState } from "react";
import styles from "./AlbumList.module.css";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase/firebaseInit";

export default function AlbumList({ chooseAlbum, deleteAlbum }) {
  const [albums, setAlbums] = useState([]);

  // Useeffect for getting all album.
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Albums"), (snapshot) => {
      const albumList = [];
      snapshot.forEach((doc) => {
        albumList.push({ id: doc.id, ...doc.data() });
      });
      setAlbums(albumList);
    });
  }, []);

  return (
    <div className={styles.albumList}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Albums</h1>
      </div>

      {/* Render all albums */}
      <div className={styles.container}>
        {albums.map((album) => (
          <div
            key={album.id}
            onClick={() => chooseAlbum(album.name)}
            className={styles.album}
          >
            {/* Delete button */}
            <img
              onClick={(e) => deleteAlbum(e, album.id)}
              src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
              className={styles.delete}
            />
            {/* Image */}
            <div className={styles.img}>
              <img
                height={"100px"}
                width={"100px"}
                src="https://cdn-icons-png.flaticon.com/512/1375/1375106.png"
              />
            </div>
            <h4 className={styles.title}>{album.name}</h4>
          </div>
        ))}
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
