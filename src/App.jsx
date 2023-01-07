import {} from "react";
import Banner from "./components/Banner/Banner";
import { GlobalStyles } from "./styles/global";
import diabloMobileBanner from "./assets/mobile-diablo.jpg";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Banner bannerImage={diabloMobileBanner}></Banner>
      <h1>Body</h1>
    </div>
  );
}

export default App;
