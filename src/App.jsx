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
  Intro_section,
} from "./components";

function App() {
  return (
    <main>
      {/* navbar section  */}
      <NavBar_section />

      {/* home section */}
      <Home />

      {/* Intro section */}
      <Intro_section />

      {/* About book section  */}
      <About_book_section />

      {/* About athur */}
      <Authur_section />

      {/* Testimonial section  */}
      <Reviews_section />

      {/* second book section */}
      <SecondBookSection />

      {/* buy book section */}
      <Get_book_section />

      {/* footer section */}
      <Footer_section />
    </main>
  );
}

export default App;
