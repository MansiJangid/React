import React from 'react'

const Button = ({name, changeColor}) => {
  return (
    <button 
    onClick={() => changeColor(name)}
    className={"rounded-2xl p-2 text-white-600 hover:border-transparent hover:red hover:text-white active:bg-red-700 ..."}
    style={{backgroundColor: name}}>
        {name}
    </button>
  )
}

export default Button