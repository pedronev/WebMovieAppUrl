import React,{Component} from 'react'
import {connect} from 'react-redux';
import {latestList} from '../actions';
import {bindActionCreators} from 'redux';

import LatestComp from '../components/LatestComp';

class Latest extends Component{
    componentDidMount(){

        this.props.latestList()
    }
    render(){

        return(
            <div>
                <LatestComp latestData={this.props.latest}/>
            </div>
        )
    }
}

function mapStateToProps(state){

    return{
        latest:state.latest
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({latestList},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Latest);