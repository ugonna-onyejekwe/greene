import "./App.scss";

import {
  About_book_section,
  Authur_section,
  Footer_section,
  Get_book_section,
  Home,
  NavBar_section,
  Reviews_section,
  SecondBookSection,
} from "./components";

function App() {
  return (
    <main>
      {/* navbar section  */}
      <NavBar_section />

      {/* home section */}
      <Home />

      {/* About book section  */}
      <About_book_section />

      {/* About athur */}
      <Authur_section />

      {/* Testimonial section  */}
      <Reviews_section />

      {/* buy book section */}
      <Get_book_section />

      {/* second book section */}
      <SecondBookSection />

      {/* footer section */}
      <Footer_section />
    </main>
  );
}

export default App;
