import React,{Component} from 'react'
import {connect} from 'react-redux';
import {upcomingMoviesList} from '../actions';
import {bindActionCreators} from 'redux';

import UpcomingList from '../components/UpcomingComp';

class Upcoming extends Component{
    componentDidMount(){
        this.props.upcomingMoviesList()
    }
    render(){
        debugger
        return(
            <div>
                <UpcomingList UpcomingData={this.props.upcomingMovies}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        upcomingMovies:state.upcomingMovies
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({upcomingMoviesList},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Upcoming);