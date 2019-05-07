// a smart container has 3 jobs
// grab stuff from redux
// grab stuff from component
// smash them together

import {connect} from 'react-redux'
import PokeList from '../components/PokeList'
import {catchCard} from '../actions-reducers';

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick : (id) => {
            dispatch(catchCard(id))
        }
    }
}


const WireItUp = connect(mapStateToProps, mapDispatchToProps)
const SmartPokeList = WireItUp(PokeList);

export default SmartPokeList

