import './dashboard.css'
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import TableCity from '../table/TableCity'
import { getCategories, getCities } from '../utils/api'
import { useLoaderData, Link } from 'react-router-dom'
export default function DashboardCity() {
  const loaderData = useLoaderData()
  return (
    <ProSidebarProvider>
      <div className='height'>
        <Sidebar>
          <h5 className='text-center mt-4'>STORYSCOPE ADMIN</h5>
            <Menu>
              <MenuItem component={<Link to="/admin/city" />}> Cities </MenuItem>
              <SubMenu label="Agencies">
              {loaderData.categories.map((category, index) => {
                        return <MenuItem component={<Link to={"/admin/agency/" + category.slug}/>} key={index}> {category.name}</MenuItem>})}
     
              </SubMenu>
              <MenuItem component={<Link to="/admin/category" />}> Categories </MenuItem>
            </Menu>
        </Sidebar>
        <TableCity data={loaderData}/>
      </div>
    </ProSidebarProvider>
  )
}

export async function cityLoader() {
  let categories = await getCategories()
  let cities = await getCities()
  let res = {type: Object.keys(cities)[0], data: cities.cities, categories: categories.categories}
  return res
}