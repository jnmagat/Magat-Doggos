import { useState } from "react";
import PhotoAlbum from "./components/sidebar/PhotoAlbum";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [selectedDog, setSelectedDog] = useState("");
  const handleDogSelection = (dogName) => {
    setSelectedDog(dogName);
  };

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row">
          <div className="bg-dark col-2 position-fixed d-flex justify-content-between flex-column min-vh-100">
            <Sidebar onDogSelect={handleDogSelection} />
          </div>
          <div className="col-10 p-3 overflow-auto offset-2">
            <PhotoAlbum selectedDog={selectedDog} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
