import React,{Component} from 'react';
// import Enquiries from '../containers/Enquiries';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import TopButtons from './topButtons';
import Slider from './slider';
import Movie from './movie';
import { Navigation } from './navigation';



class MainComponent extends Component{
    render(){
        // function bookNow(movie) {
        //     alert(`This country name is: ${country.name}.
        //           The currency is: ${country.currency}.
        //           The native is: ${country.native}.
        //           the languaje is: ${country.languages[0].name}
        //     `
            
        //     );
        //   }

        return(
            <div>


            <Navigation  />
             <TopButtons/>
             <div className="container">
             <Slider/>
            <h2>Recommended Movies</h2>
            <div className="row" style={{display:"flex" , justifyContent:"space-between"} }>
            <Movie className={"col-xs-6 col-md-3"} title={"Coco"} img={"https://image.ibb.co/dQwWSx/coco.jpg"}/>
            <Movie className={"col-xs-6 col-md-3"} title={"The Incredibles 2"} img={"https://lumiere-a.akamaihd.net/v1/images/image_8eba0e1a.jpeg?region=0%2C0%2C540%2C810"}/>
            <Movie className={"col-xs-6 col-md-3"} title={"Avengers"} img={"https://images-na.ssl-images-amazon.com/images/I/81rypQUyjFL._AC_SX425_.jpg"}/>
            </div>
             </div>

            

            </div>


            // <Movie/>
        )
    }
}

export default MainComponent;