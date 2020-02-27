import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Container, Paper, Chip} from '@material-ui/core';

const AnyReactComponent = ({ text }) => <div className = "Mark">{text}</div>



const Restaurant = (props) => {
  const name = props.match.params.name
  const rest = props.cars.find(c => c.Name == name)

  const defaultProps = {
    center: {
      lat: Number(rest.latitude),
      lng: Number(rest.longitude),
    },
    zoom: 17
  };

  return (
    <>
    {rest.latitude ?
    <Container maxWidth="sm" className="restaurant-container" >
            <Paper className="car-paper">
                <h2>{rest.Name}</h2>
                {
                    Object.keys(rest).map((key, idx) => {
                        return <Chip label={`${key}: ${rest[key]}`}></Chip>
                    })
                }
                </Paper>
                 <h2> My Google map</h2>
                 <Container style={{ height: "600px", width: "550px", paddingBottom: "80px" }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_NOT_SECRET_CODE }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    >
                    <AnyReactComponent lat={rest.latitude} lng={rest.longitude} text={rest.Name} />
                    <Marker lat={rest.latitude} lng={rest.longitude} />
            </GoogleMapReact>
      </Container>
    </Container>
    :
    <Container maxWidth="sm" className="restaurant-container" >
             <Paper className="car-paper">
             <h2>{rest.Name}</h2>
                {
                    Object.keys(rest).map((key, idx) => {
                        return <Chip label={`${key}: ${rest[key]}`}></Chip>
                    })
                }
            </Paper>
            <Container style={{paddingTop: "80px", alignItems:"center", justify:"center" }}>
            <div><h2>Geocoding in the works!</h2></div>
            </Container>
    </Container>
    }
    </>
    
  )
}

const Marker = props => {
    return <div className="SuperAwesomePin"></div>
  }



export default Restaurant


//****Attempt at Geocoding below. As disucssed, I was unable to see if this worked as 
//I would have needed to upgrade my google cloud platform in order to fetch the coordinates.****

// import React, {Component} from 'react'
// import GoogleMapReact from 'google-map-react';
// import {Container, Paper, Chip} from '@material-ui/core';

// const AnyReactComponent = ({ text }) => <div className = "Mark">{text}</div>


//class Restaurant extends Component  {
//   constructor(props) {
//     super (props) 
//       this.state = {
//         isLoaded: false,
//         latitude: [],
//         longitude: [],
//         Name:"",
        
//       }
//   }

//   componentDidMount(props) {
//     let name = this.props.match.params.name
//     let rest = this.props.cars.find(c => c.Name == name)
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.address}&key={process.env.REACT_APP_NOT_SECRET_CODE}`)
//     .then(res => res.json())
//     .then(json => {
//       console.log(json)
//         this.setState({
//           isLoaded: true,
//           latitude: json.results.geometry.location.lat,
//           longitude: json.results.geometry.location.lng,
//           Name:"",
//           address:""
//         })
//     })
//     .catch(error => console.log('parsing failed'. error))
//   }

  
//   render(props) {
//   let name = this.props.match.params.name
//   let rest = this.props.cars.find(c => c.Name == name)
//   console.log(this.state.Name)

//   // const defaultProps = {
//   //   center: {
//   //     lat: Number(rest.latitude),
//   //     lng: Number(rest.longitude),
//   //   },
//   //   zoom: 17
//   // };

//   return (
//     <>
//     <Container maxWidth="sm" className="restaurant-container" >
//             <Paper className="car-paper">
//                 <h2>{this.state.Name}</h2>
//                 {/* {
//                     Object.keys(rest).map((key, idx) => {
//                         return <Chip label={`${key}: ${rest[key]}`}></Chip>
//                     })
//                 } */}
//                 </Paper>
//                  <h2> My Google map</h2>
//                  <Container style={{ height: "600px", width: "550px", paddingBottom: "80px" }}>
//                     <GoogleMapReact
//                     bootstrapURLKeys={{ key: process.env.REACT_APP_NOT_SECRET_CODE }}
//                     // defaultCenter={defaultProps.center}
//                     // defaultZoom={defaultProps.zoom}
//                     yesIWantToUseGoogleMapApiInternals
//                     >
//                     <AnyReactComponent lat={this.state.latitude} lng={this.state.longitude} text={this.state.Name} />
//                     <Marker lat={this.state.latitude} lng={this.state.longitude} />
//             </GoogleMapReact>
//       </Container>
//     </Container>
//     }
//     </>
//   )
// }

// }
// const Marker = props => {
//     return <div className="SuperAwesomePin"></div>
//   }



// export default Restaurant
