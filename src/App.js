import Album from "./components/album/album";
import AlbumList from "./components/albumlist/AlbumList";
import Form from "./components/form/form";
import Nav from "./components/nav/nav";
import styles from "./app.module.css";
import { useState } from "react";
import ImageViewer from "./components/imageView/imageView";
import db from "./firebase/firebaseInit";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [display, setDisplay] = useState("LIST");
  const [image, setImage] = useState("");
  const [album, setAlbum] = useState("");

  // Function to add image to database.
  async function addImage(e, title, url) {
    e.preventDefault();
    if (display === "ALBUM") {
      await addDoc(collection(db, album), { title: title, imageUrl: url });
    } else {
      await addDoc(collection(db, "Albums"), { name: title });
    }
  }

  // Function to selet an image.
  function selectImage(img) {
    setImage(img);
  }

  // function to get back to landing page
  function backButton() {
    setDisplay("LIST");
    setAlbum("");
  }

  // Function to choose an album.
  function chooseAlbum(title) {
    setDisplay("ALBUM");
    setAlbum(title);
    console.log(album);
  }

  // Function to delete an album.
  async function deleteAlbum(event, album) {
    event.stopPropagation();
    // const choice = confirm("Are you sure, you want to delete the album?");
    // if (!choice) return;
    await deleteDoc(doc(db, "Albums", album));
  }

  // Function to delete an image.
  async function removeImage(event, album, id) {
    event.stopPropagation();
    // const choice = confirm("Are you sure, you want to delete the album?");
    // if (!choice) return;
    await deleteDoc(doc(db, album, id));
  }

  return (
    <>
      <Nav album={album} />
      <div className={styles.container}>
        <div className={styles.left}>
          {display === "ALBUM" ? (
            <ImageViewer image={image} backButton={backButton} />
          ) : (
            <AlbumList chooseAlbum={chooseAlbum} deleteAlbum={deleteAlbum} />
          )}
        </div>
        <div className={styles.right}>
          <Form display={display} addImage={addImage} />
          {display === "ALBUM" ? (
            <Album
              selectImage={selectImage}
              album={album}
              removeImage={removeImage}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
