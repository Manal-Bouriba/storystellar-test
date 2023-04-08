import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import CategoryPage from "./categoryPage/CategoryPage";
import HomePage, { loader as categoriesLoader } from "./homePage/HomePage";
import { categoryLoader } from "./categoryPage/CategoryPage";
import ErrorElement from "./error/ErrorElement";
import { cityLoader } from "./dashboard/DashboardCity";
import DashboardCategory from "./dashboard/DashboardCategory";
import DashboardCity from "./dashboard/DashboardCity";
import { agenciesLoader } from "./dashboard/DashboardAgency";
import DashboardAgency from "./dashboard/DashboardAgency";
import ReactGA from 'react-ga4';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route index path="/storyscope" element={<HomePage/>} loader={categoriesLoader}/>
          <Route path='/storyscope/:slug/:city' element={<CategoryPage/>} loader={categoryLoader}/>
          <Route path='/storyscope/admin/city' element={<DashboardCity/>} loader={cityLoader}/>
          <Route path='/storyscope/admin/category' element={<DashboardCategory/>} loader={categoriesLoader}/>
          <Route path='/storyscope/admin/agency/:category' element={<DashboardAgency/>} loader={agenciesLoader}/>

    </Route>
  )
);
let setGA = () => {
  ReactGA.initialize('G-L1X0Q5P47T');
  ReactGA.pageview('Init page view');
};
function App() {
  setGA();
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
