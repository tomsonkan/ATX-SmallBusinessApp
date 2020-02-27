// import React from 'react'
// import { Container, 
//          Table, 
//          TableHead, 
//          TableBody,
//          TableRow, 
//          TableCell, 
//           } from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom'
// import AddBus from "../containers/AddBus"

// const useStyles = makeStyles(theme => ({
//   button: {
//     marginTop: theme.spacing(10),
//   },
// }));

// const HomeSecure = (props) => {
//   const classes = useStyles();

//   return (
//     <Container maxWidth="lg" className="car-container" style={{marginTop:"70px", marginBottom:"150px"}}>
//             <h4>Welcome {props.user.username}</h4>
//             <div className = "flex-container">
//             <AddBus busTotal={props.cars.length} />
//             </div>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>NameSSS</TableCell>
//                         <TableCell>Description</TableCell>
//                         <TableCell>Hours</TableCell>
//                         <TableCell>Address</TableCell>
//                         <TableCell>Delete</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {props.cars.map((bus, idx) => (
//                     <TableRow key={bus.Name}>
//                         <TableCell component="th" scope="row"><Link to ={`/Restaurant/${bus.Name}`}>
//                                    {bus["Name"]}</Link>
//                         </TableCell>
//                         <TableCell>{bus["Description"]}</TableCell>
//                         <TableCell>{bus["Hours"]}</TableCell>
//                         <TableCell>{bus["Address"]}</TableCell>
//                         <TableCell>
//                             <DeleteIcon onClick = {() => props.removeBus(idx)}
//                                 className="icon text-red" />
//                         </TableCell>
//                     </TableRow>
//                 ))}
//                 </TableBody>
//             </Table>
//         </Container>
//   )
// }

// export default HomeSecure
