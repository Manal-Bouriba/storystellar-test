import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import TableCity from '../table/TableCity'
import { getCategories, getCities } from '../utils/api'
import Link from 'next/link'
export default function DashboardCity(props) {
  console.log(props)
  return (
    <ProSidebarProvider>
      <div className='height'>
        <Sidebar>
          <h5 className='text-center mt-4'>STORYSCOPE ADMIN</h5>
            <Menu>
              <MenuItem component={<Link href="/storyscope/admin/city" />}> Cities </MenuItem>
              <SubMenu label="Agencies">
              {props.props?.categories.map((category, index) => {
                        return <MenuItem component={<Link href={"/storyscope/admin/agency/" + category.slug}/>} key={index}> {category.name}</MenuItem>})}
     
              </SubMenu>
              <MenuItem component={<Link href="/storyscope/admin/category" />}> Categories </MenuItem>
            </Menu>
        </Sidebar>
        <TableCity data={props.props}/>
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