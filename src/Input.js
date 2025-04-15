import React, { useState } from 'react'
import './input.css'
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { GiSaveArrow } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Input() {
  const [val, setval] = useState('')              
  const [list, setlist] = useState([]) 
  const [edit, setedit] = useState('')
  const [editindex, seteditindex] = useState('')

  function add(a) {
    a.preventDefault()
    setlist([...list, val])
    setval('')
  }

  function rem(i) {
    const newlist = [...list]
    newlist.splice(i, 1)
    setlist(newlist)
  }

  function edithandler(i) {
    seteditindex(i)
  }

  function savhandler(i) {
    const newlist2 = [...list]
    newlist2[i] = edit
    setlist(newlist2)
    setedit('')
    seteditindex('')
  }

  return (
    <div className='form'>
      <div className='title'>
        <h1>Todo List</h1>
      </div>
      <form onSubmit={add}>
        <div className='innerinp'>
          <input type='text' placeholder='Type here...' onChange={(a) => { setval(a.target.value) }} value={val} />
          <button className='butt'><IoMdAdd className='icon' /></button>
        </div>
      </form>

      {
        list.map((data, index) => {
          return (
            <div className='repeat'>
              {
                editindex === index ?
                  (

                    <div className='map1'>

                      <input type='text' onChange={(e) => { setedit(e.target.value) }} />
                   
                      <div className='butt1'>
                      <button onClick={() => { savhandler(index) }}><GiSaveArrow className='icon' /></button>
                      <button onClick={() => { seteditindex('') }}><RxCross2 className='icon' /></button>
                      </div>
                    </div>
                  ) : (
                    <div className='map1'>

                      <li>{data}</li>
                      <div className='butt1'>
                        <button onClick={() => { rem(index) }}><MdDelete  className='icon'/></button>
                        <button onClick={() => { edithandler(index) }}><AiFillEdit className='icon' /></button>
                      </div>
                    </div>
                  )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Input
