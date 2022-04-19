import Index from "./theme/Index";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <div>
       <ScrollToTop smooth />
      <Header />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
