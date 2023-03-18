import './dashboard.css'
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import Table from '../table/TableCity'
import { useLoaderData, Link } from 'react-router-dom'
import TableCategory from '../table/TableCategory'
export default function DashboardCategory() {
  const loaderData = useLoaderData()
  return (
    <ProSidebarProvider>
      <div className='height'>
        <Sidebar>
          <h5 className='text-center mt-4'>STORYSCOPE ADMIN</h5>
            <Menu>
              <MenuItem component={<Link to="/admin/city" />}> Cities </MenuItem>
              <SubMenu label="Agencies">
              {loaderData.categories.categories.map((category, index) => {
                        return <MenuItem component={<Link to={"/admin/agency/" + category.slug}/>} key={index}> {category.name}</MenuItem>})}
     
    </SubMenu>
              <MenuItem component={<Link to="/admin/category" />}> Categories </MenuItem>
            </Menu>
        </Sidebar>
        <TableCategory data={loaderData.categories.categories}/>
      </div>
    </ProSidebarProvider>
  )
}
