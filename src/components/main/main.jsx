import React, { Component } from 'react';
import Loader from '../loader/loader';
import Sidebar from '../sidebar/sidebar';
import Map from '../map/map';
import  Header from '../header/header';

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            url: "https://api.pray.zone/v2/times/today.json?",
            isLoaded: true,
            prayersTime: {},
            error: null,
            isLocationAvailable: true,
            latitude: false,
            longitude: false,
        };
        
    }

    componentDidMount() {
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(position => {
                fetch("https://api.pray.zone/v2/times/today.json?latitude="+position.coords.latitude+"&longitude="+position.coords.longitude)
                .then(res => res.json())
                .then(({results}) => {
                        this.setState({
                            isLoaded: false,
                            prayersTime: results.datetime[0].times,
                            date: results.datetime[0].date
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: false,
                            error
                        });
                    }
                )
            });
        }
        
        

    }

    render() {
        return (
            (this.state.isLoaded)
            ?<Loader/>
            :<div className="gr-body">
                <Header />
                <Sidebar lat={this.state.latitude} long={this.state.longitude} prayersTime={this.state.prayersTime} date={this.state.date}/>
                <Map />
            </div>
        );
    }
}
 
export default Main;