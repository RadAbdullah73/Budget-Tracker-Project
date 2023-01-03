import { navigate } from '@reach/router'
import React from 'react'

const Suggested = () => {

    var data = JSON.parse(sessionStorage.getItem('user'))
const homePage=()=>{
    navigate("/home")
}
  return (
    <div>
        <h3>{data.user.firstName}</h3>
        <button onClick={homePage}>Home Page </button>
    </div>
  )
}

export default Suggested