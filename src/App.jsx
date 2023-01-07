import {} from "react";
import Banner from "./components/Banner/Banner";
import { GlobalStyles } from "./styles/global";
import diabloMobileBanner from "./assets/mobile-diablo.jpg";

function App() {
  return (
    <div className="App">
      <Banner bannerImage={diabloMobileBanner}></Banner>
      <GlobalStyles />
    </div>
  );
}

export default App;
