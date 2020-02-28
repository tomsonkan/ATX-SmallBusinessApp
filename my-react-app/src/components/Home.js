import React from 'react'
import { Container, 
         Table, 
         TableHead, 
         TableBody,
         TableRow, 
         TableCell, 
          } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddBus from "../containers/AddBus"

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(10),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  console.log(props.user.username)
  return (

    
    <Container maxWidth="lg" className="car-container" style={{marginTop:"70px", marginBottom:"70px"}}>
            {document.cookie == "loggedIn=true" ? ( 
            <Container>
            <h4>Welcome, {props.user.username}</h4>
            <div className = "flex-container">
            <AddBus busTotal={props.cars.length} />
            </div>
            </Container>
            )
            : null
            }
            <Table>
            
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        {document.cookie == "loggedIn=true" ? (
                        <TableCell>Delete</TableCell>
                        ) : null
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.cars.map((bus, idx) => (
                    <TableRow key={bus.id}>
                        <TableCell component="th" scope="row"><Link to ={`/Restaurant/${bus.Name}`}>
                            {bus["Name"]}</Link>
                        </TableCell>
                        <TableCell>{bus["Description"]}</TableCell>
                        <TableCell>{bus["Hours"]}</TableCell>
                        <TableCell>{bus["Address"]}</TableCell>
                        {document.cookie =="loggedIn=true" ? (
                        <TableCell>
                        <DeleteIcon onClick = {() => props.removeBus(idx)}
                            className="icon text-red" />
                    </TableCell>    
                        ): null
                        }
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
  )
}

export default Home
