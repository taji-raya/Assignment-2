import React from 'react'
const searchFunction = () =>{
  alert('Hi')
}
function SubmitButton({onPress}) {
  return (
    <div>
      <input type='submit' value='Search' className='submitBtn' onClick={onPress}/>
    </div>
  )
}

export default SubmitButton
