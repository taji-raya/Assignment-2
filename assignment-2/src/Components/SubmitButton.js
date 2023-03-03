import React from 'react'
function SubmitButton({ onPress }) {

  return (
    <div>
      <input type='submit' value='Search' className='submitBtn' onClick={onPress} />
    </div>
  )
}

export default SubmitButton
