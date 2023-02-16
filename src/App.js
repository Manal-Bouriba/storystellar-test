import Categories from "./categories/Categories";
import NavBar from "./navBar/NavBar";
import Featured from "./featured/Featured";
import About from "./about/About";
function App() {
  return (
    <div>
      <NavBar/>
      <Categories/>
      <Featured/>
      <About/>
    </div>
  );
}

export default App;
