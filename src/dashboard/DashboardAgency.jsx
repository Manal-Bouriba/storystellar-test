
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { getAgenciesAll, getCategories} from '../utils/api'
import Link from 'next/link'
import TableAgency from '../table/TableAgency'
export default function DashboardAgency(props) {
  return (
    <ProSidebarProvider>
      <div className='height'>
        <Sidebar>
          <h5 className='text-center mt-4'>STORYSCOPE ADMIN</h5>
            <Menu>
              <MenuItem component={<Link href="/storyscope/admin/city" />}> Cities </MenuItem>
              <SubMenu label="Agencies">
              {props.props.categories.map((category, index) => {
                        return <MenuItem component={<Link href={"/storyscope/admin/agency/" + category.slug}/>} key={index}> {category.name}</MenuItem>})}
     
          </SubMenu>
              <MenuItem component={<Link href="/storyscope/admin/category" />}> Categories </MenuItem>
            </Menu>
        </Sidebar>
        <TableAgency data={props.props.agencies}/>
      </div>
    </ProSidebarProvider>
  )
}
