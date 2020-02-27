import { connect } from 'react-redux'
import Restaurant from '../components/Restaurant'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Restaurant)
