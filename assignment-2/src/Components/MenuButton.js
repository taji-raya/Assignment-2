import React from 'react'
import { useState } from 'react'

const MenuButton = () => {
  const Menus = ['Add to list', 'Favorite', 'Watchlist', 'Your Rating']
  // const Addtolist = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-28c7c34a7fef8b646f2f0c4c610f4a93bdce0b6cc24deea49674eb30f9961109.svg';
  // const Icons = [
  //   Addtolist,
  // ]
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
              <li>
                {Menus.map((menu, icon) => (
                  <div>
                    {/* <img myIcon={Icons[icon]} /> */}
                    <li key={menu}
                      onClick={() => setOpen(false)}> {menu} </li>
                  </div>

                ))
                }
              </li>
            </ul>

          </div>
        )
      }


    </>
  )
}

export default MenuButton
