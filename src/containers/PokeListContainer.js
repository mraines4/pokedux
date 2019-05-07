// a smart container has 3 jobs
// grab stuff from redux
// grab stuff from component
// smash them together

import {connect} from 'react-redux'
import PokeList from '../components/PokeList'

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}


const WireItUp = connect(mapStateToProps)
const SmartPokeList = WireItUp(PokeList);

export default SmartPokeList

