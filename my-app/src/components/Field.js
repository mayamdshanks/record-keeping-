import React from 'react'

const Field = ({name,email,index}) => {
  return (
    <div className="style-change" >
          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>Remove</h1>
          </div>
  )
}

export default Field