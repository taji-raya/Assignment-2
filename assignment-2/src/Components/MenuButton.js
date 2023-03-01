import React from 'react'
import { useState } from 'react'
import { FaHeart, FaList } from 'react-icons/fa';
const MenuButton = () => {
  const Menus = ['Favorite', 'Watchlist']
  const Icons = [
    <FaHeart />,
    <FaList />
  ]
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='menuBtn'>
        <button onClick={() => setOpen(!open)} />
      </div>
      {
        open && (
          <div className='dropdownMenu'>
            <ul>
              {Menus.map((menu, icon) => (
                <div>
                  <li key={menu} className='listItem'
                    onClick={() => setOpen(false)}> {menu} </li>
                  <br />
                </div>
              ))
              }
            </ul>

          </div>
        )
      }


    </>
  )
}

export default MenuButton
