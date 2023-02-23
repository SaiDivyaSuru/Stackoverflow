import React from 'react'

const Avatar = ({children, backgroundColor,borderRadius,px,py,color,fontSize,cursor}) => {
  const style = {
    backgroundColor,
    borderRadius,
    padding:`${px} ${py}`,
    color:color || 'black',
    fontSize,
    textAlign:"center",
    cursor: cursor || null
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
