import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import  Link  from 'next/link'
import TableCategory from '../table/TableCategory'
export default function DashboardCategory(props) {

  return (
    <ProSidebarProvider>
      <div className='height'>
        <Sidebar>
          <h5 className='text-center mt-4'>STORYSCOPE ADMIN</h5>
            <Menu>
              <MenuItem component={<Link href="/admin/city" />}> Cities </MenuItem>
              <SubMenu label="Agencies">
              {props.props.categories.categories.map((category, index) => {
                        return <MenuItem component={<Link href={"/admin/agency/" + category.slug}/>} key={index}> {category.name}</MenuItem>})}
     
    </SubMenu>
              <MenuItem component={<Link href="/admin/category" />}> Categories </MenuItem>
            </Menu>
        </Sidebar>
        <TableCategory data={props.props.categories.categories}/>
      </div>
    </ProSidebarProvider>
  )
}
