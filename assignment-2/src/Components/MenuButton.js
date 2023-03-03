import React from 'react'
import { useState } from 'react'
const MenuButton = () => {
  const Menus = ['Favorite', 'Watchlist']

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
                <div key={menu}>
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
