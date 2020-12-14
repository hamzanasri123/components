import "./App.css";
import Adresse from "./component/profile/Adresse";
import ProfilePhoto from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName";
import NavBar from "./component/profile/NavBar";
function App() {
  const image = "./images.png";
  const adresse = "Tunis";
  const first = "Hamza";
  const bio = "Bonjour ,je suis nasri hamza ..";
  const Prof = "Developpeur full-stack js";
  const last = "Nasri";
  const fullName = `${first} ${last}`;
  const tab = [{ name: "home" }, { name: "contact" }, { name: "about" }];

  return (
    <div className="App">
      <NavBar arr={tab} FullName={fullName} />
      <Adresse adrs={adresse} />
      <ProfilePhoto FullName={fullName} Bio={bio} Prof={Prof}>
        <img src="./images.png" alt="images" />
      </ProfilePhoto>
      <FullName FullName={fullName} />
    </div>
  );
}

export default App;
