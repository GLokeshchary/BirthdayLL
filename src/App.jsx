import "./App.css";
import Audiopost from "./components/Audiopost";
import Birthdaymessage from "./components/Birthdaymessage";
import Videopost from "./components/Videopost";
import Videopostt from "./components/Videopostt";
import Photoalbum from "./components/Photoalbum";
function App() {
  document.title = "Happy Birthday";
  return (
    <>
      <Birthdaymessage />
      <Photoalbum album="a1" header="SPORTS" slideperview="3" />
      <Photoalbum album="a2" header="FESTIVE" slideperview="2" />
      <Videopost vname="videos/v1" />
      <Audiopost />
      <Videopostt vname="v3" />
      <Photoalbum album="a3" header="RANDOM" slideperview="2" />
    </>
  );
}

export default App;
