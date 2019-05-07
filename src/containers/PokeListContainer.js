// a smart container has 3 jobs
// grab stuff from redux
// grab stuff from component
// smash them together

import {connect} from 'react-redux'
import PokeList from '../components/PokeList'

mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

mapDispatchToProps = ({}) => {

}

const SmartPokeList = connect(mapStateToProps)(PokeList);

export default SmartPokeList

