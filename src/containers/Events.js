import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventsList} from '../actions';
import {bindActionCreators} from 'redux';

import EventsComp from '../components/EventsComp';

class Events extends Component{
    componentDidMount(){
        this.props.eventsList()
    }
    render(){
        return(
            <div>
                <EventsComp eventsData={this.props.events}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        events:state.events
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({eventsList},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Events);