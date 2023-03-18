import React, {useState} from 'react'
import {BsFillPencilFill, BsFillTrashFill, BsFillPlusCircleFill, BsWindowStack} from 'react-icons/bs'
import { IconContext } from "react-icons";
import { slugifyCategories, deleteCategory } from '../utils/api'
import CategoryModal from '../Modal/CategoryModal';
import CategoryModalUpdate from '../Modal/CategoryModalUpdate';
export default function TableCategory(props) {
    const [idCategory, setIdCategory] = useState(0)
    const [nameCategory, setNameCategory] = useState('')
    const [imageCategory, setImageCategory] = useState('')
    const [displayNameCategory, setdisplayNameCategory] = useState('')

    let data = props.data
    async function onClick(e) {
        e.preventDefault()
        let response = await deleteCategory(e.currentTarget.id)
        if (response.ok) {
            window.location.reload(false)
        }
        }
    async function sluggify(e) {
        e.preventDefault()
        let response = await slugifyCategories()
        if (response.response = 'slugified!') {
            window.location.reload(false)
        }
        }
  return (
    <div className='mt-2 w-100'>
        <CategoryModal idModal="exampleModal"/>
        <CategoryModalUpdate idModal="exampleModal2" categoryId={idCategory} categoryName={nameCategory}  categoryImage={imageCategory} categoryDisplayName={displayNameCategory} />
        <IconContext.Provider value={{ size: "1.5em" }}>
            <div className='mx-auto w-75 text-end d-inline-block'>  <a href='#'role='button' data-bs-toggle="modal" data-bs-target="#exampleModal"> <BsFillPlusCircleFill/> Add </a> </div>
            <div className='mx-5 w-75 text-end d-inline'>  <a href='#'role='button' onClick={sluggify}> <BsWindowStack/> Sluggify </a> </div>
        </IconContext.Provider>
        <div className='w-100 height'>

            <table className="table table-hover w-75 mx-auto table-striped">

                <thead>
                    <tr>
                        {Object.keys(data[0]).map((title, index) => (
                        <th key={index}>{title}</th>              
                        ))}
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return <tr key={index}>
                            {Object.values(row).map((column, inde) => {
                                return <td key={inde}>{column}</td>
                        })}
                    <td><a role='button' onClick={onClick} href='#' className='button' id={row.id}> <BsFillTrashFill /></a>
                        <a id={row.id} href='#' role='button' className='button' data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={(e)=> {
                            setIdCategory(e.currentTarget.id)
                            setNameCategory(row.name)
                            setImageCategory(row.image)
                            setdisplayNameCategory(row.display_name)
                        }}> <BsFillPencilFill/></a>
                    </td>
            </tr>
              }
            )}
            </tbody>
        </table>
    </div>
    </div>
  )
}
