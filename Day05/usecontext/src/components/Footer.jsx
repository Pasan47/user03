import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    const {phone} = useContext(AppContext)
  return (
    <div>
        <br />
        <hr></hr>
        <h3>Contact Us : {phone}</h3>
    </div>
  )
}

export default Footer