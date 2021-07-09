import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent';
import LatestComp from './components/LatestComp';
import Latest from './containers/Latest';
import Events from './containers/Events';
import Upcoming from './containers/UpcomingMovies';
import UpcomingComp from './components/UpcomingComp';
import EventsComp from './components/EventsComp';
import {Routes,Route} from "react-router-dom";
import TicketBooking from './components/TicketBooking';
function App() {
  return (
    <div className="App">

      {/* <MainComponent> */}
      <Routes>
                <Route exact path='/'  element={<MainComponent/>}/>
                <Route exact path='/latest'  element={<Latest/>}/>
                <Route exact path='/upcoming'  element={<Upcoming/>}/>
                <Route exact path='/events'  element={<Events/>}/>
                <Route exact path='/booking'  element={<TicketBooking/>}/>
                
                {/* <Route path='/latest' component={LatestComp}></Route>
                <Route path='/upcoming' component={UpcomingComp}></Route>
                <Route path='/events' component={EventsComp}></Route> */}
            </Routes>
      {/* </MainComponent> */}

    </div>
  );
}

export default App;
