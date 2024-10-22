// Define prop types
interface PhotoAlbumProps {
  selectedDog: string;
}

const PhotoAlbum = ({ selectedDog }: PhotoAlbumProps) => {
  const allPhotos = [
    { name: "Hunter", url: "images/hunter_1.jpg" },
    { name: "Hunter", url: "images/hunter_2.jpg" },
    { name: "Hunter", url: "images/hunter_3.jpg" },
    { name: "Hunter", url: "images/hunter_1.jpg" },
    { name: "Hunter", url: "images/hunter_2.jpg" },
    { name: "Hunter", url: "images/hunter_3.jpg" },

    { name: "Alpha", url: "images/alpha_1.jpg" },
    { name: "Alpha", url: "images/alpha_2.jpg" },
    { name: "Alpha", url: "images/alpha_3.jpg" },
    { name: "Alpha", url: "images/alpha_1.jpg" },
    { name: "Alpha", url: "images/alpha_2.jpg" },
    { name: "Alpha", url: "images/alpha_3.jpg" },

    { name: "Cooper", url: "images/cooper_1.jpg" },
    { name: "Cooper", url: "images/cooper_2.jpg" },
    { name: "Cooper", url: "images/cooper_3.jpg" },
    { name: "Cooper", url: "images/cooper_1.jpg" },
    { name: "Cooper", url: "images/cooper_2.jpg" },
    { name: "Cooper", url: "images/cooper_3.jpg" },
  ];
  const filteredPhotos = allPhotos.filter(
    (photo) => photo.name === selectedDog
  );

  return (
    <div className="row">
      {filteredPhotos.map((photo, index) => (
        <div key={index} className="col-6 col-md-4 mb-3">
          <img
            src={photo.url}
            className="img-fluid"
            alt={`Photo ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoAlbum;
