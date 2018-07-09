import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random: null,
            timer: null,
        }
    }

    //timer
    componentDidMount() {
        let timer = setInterval(this.random, 2500);
        this.setState({timer});
    }

    buttonStop(data) {
        clearInterval(data);
    }
    min = 1;
    max = 100;

    random = () => {
        this.setState({random: this.min + (Math.random() * (this.max - this.min))});
    };

    render() {
        console.log("render",this.state.timer)
        return (
            <div className="App">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 vote-button">
                        <p>Left button</p>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 vacancy-summary">
                        <h2>Main page</h2>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 vote-button">
                        <p>Right button</p>
                    </div>
                </div>
                <header className="App-header">
                </header>
                <p className="App-intro">
                    <button onClick={this.random.bind()}>Force Rand</button>
                    <button onClick={this.buttonStop.bind(this,this.state.timer)}>Стоп</button>
                    {this.state.random}
                </p>


            </div>
        );
    }
}

export default App;
