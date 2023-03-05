import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from "./categoryPage/CategoryPage";
import HomePage from "./homePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/storyscope" element={<HomePage/>}/>
          <Route path='/storyscope/category' element={<CategoryPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
