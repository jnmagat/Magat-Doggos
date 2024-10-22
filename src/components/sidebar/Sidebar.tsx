// Define prop types
interface SidebarProps {
  onDogSelect: (dogName: string) => void;
}
const Sidebar = ({ onDogSelect }: SidebarProps) => {
  const dogs = ["Hunter", "Alpha", "Cooper"];
  return (
    <>
      <div>
        <a className="text-decoration-none ms-4  text-white d-flex align-items-center d-none d-sm-inline">
          <span className="fs-4">Doggos</span>
        </a>
        <hr className="text-white d-none d-sm-block" />
        <ul className="nav flex-column">
          {dogs.map((dog, index) => (
            <li key={index} className="nav-item">
              <button
                className="nav-link btn-link text-white"
                onClick={() => onDogSelect(dog)}
              >
                {dog}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
