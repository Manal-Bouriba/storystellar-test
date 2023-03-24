import './dashboard.css'
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { getAgenciesAll, getCategories} from '../utils/api'
import { useLoaderData, Link } from 'react-router-dom'
import TableAgency from '../table/TableAgency'
export default function DashboardAgency() {
  const loaderData = useLoaderData()
  return (
    <ProSidebarProvider>
      <div className='height'>
        <Sidebar>
          <h5 className='text-center mt-4'>STORYSCOPE ADMIN</h5>
            <Menu>
              <MenuItem component={<Link to="/storyscope/admin/city" />}> Cities </MenuItem>
              <SubMenu label="Agencies">
              {loaderData.categories.map((category, index) => {
                        return <MenuItem component={<Link to={"/storyscope/admin/agency/" + category.slug}/>} key={index}> {category.name}</MenuItem>})}
     
          </SubMenu>
              <MenuItem component={<Link to="/storyscope/admin/category" />}> Categories </MenuItem>
            </Menu>
        </Sidebar>
        <TableAgency data={loaderData.agencies}/>
      </div>
    </ProSidebarProvider>
  )
}

export async function agenciesLoader({params}) {
  let agencies = await getAgenciesAll(params.category)
  let categories = await getCategories()
  let res = {
    agencies: agencies,
    categories: categories.categories
  }
  return res
}