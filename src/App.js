import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import CategoryPage from "./categoryPage/CategoryPage";
import HomePage, { loader as categoriesLoader } from "./homePage/HomePage";
import { loader as categoryLoader } from "./categoryPage/CategoryPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route path="/" element={<HomePage/>} loader={categoriesLoader} />
          <Route path='/:slug' element={<CategoryPage/>} loader={categoryLoader} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
