import {connect} from 'react-redux'
import Home from '../components/Home'
import {fetchMakes, removeBus, addBus} from '../redux/action'

const mapStateToProps = state => {
  return {
    user: state.user,
    cars: state.cars
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchMakes: index => dispatch(fetchMakes(index)),
    removeBus: index => dispatch(removeBus(index)),
    addBus: () => dispatch(addBus())    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)