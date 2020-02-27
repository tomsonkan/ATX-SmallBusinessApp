import {connect} from 'react-redux';
import AddBus from '../components/AddBus';
import {addBus} from "../redux/action";

const mapDispatchToProps = dispatch => {
  return{
    addBus: (bus) => { dispatch(addBus(bus))}
  }
}

export default connect(null, mapDispatchToProps) (AddBus)