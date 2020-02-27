import React from 'react'
import { AppBar, 
    Toolbar, 
    IconButton, 
    Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'




const Navigation = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();
        document.cookie = "loggedIn=false;max-age=60*1000"
        window.location.replace("/")
      }

  return (
      <AppBar position="relative" color="primary">
          <Toolbar>
              <IconButton color="inherit">
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: "1" }}>
                  Austin Small Business ATX
              </Typography>
              <ul className="nav-list" color="textPrimary">
                  <li className="nav-list-item" >
                      <Link to="/" className = "lnk">Home</Link>
                  </li>
                 
                {document.cookie == "loggedIn=true" ? (
                <>
                <li className="nav-list-item"
                    onClick={handleLogout}>
                    <Link to="/" className = "lnk" >Logout</Link>
                </li>
                </>
                ):(
                <li className="nav-list-item">
                <Link to="/login" className = "lnk">Login</Link>
                </li>
            )}
              </ul>
          </Toolbar>
      </AppBar>
  )
}

export default Navigation
