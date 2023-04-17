import ReactGA from 'react-ga4';
const router = 
          {/*<Route path='/storyscope/:slug/:city' element={<CategoryPage/>} loader={categoryLoader}/>
          <Route path='/storyscope/admin/city' element={<DashboardCity/>} loader={cityLoader}/>
          <Route path='/storyscope/admin/category' element={<DashboardCategory/>} loader={categoriesLoader}/>
          <Route path='/storyscope/admin/agency/:category' element={<DashboardAgency/>} loader={agenciesLoader}/>*/}

const TRACKING_ID = "G-L1X0Q5P47T"; 
ReactGA.initialize(TRACKING_ID); 

function App() {
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
