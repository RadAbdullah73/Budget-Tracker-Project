import React from 'react'
import {Link} from "@reach/router"

const Header = () => {
  return (
    <div>
        <h1><Link to="players/list">List</Link>|<Link to="status/game/1">status</Link></h1>
      
    </div>
  )
}

export default Header
