import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
                <header className="App-header">
                    <button onClick="">hide</button>
                    <h1 className="App-title">Random</h1>
                </header>

                <div className="conteiner">
                    <div className="row clas" >

                        <div className="col-md-3 menu">
                            <div className="row"> <h1>Menu</h1></div>
                        </div>
                        <div className="col-md-9 view">
                            <h1>Number {this.state.random}</h1>
                            <p className="App-intro">
                                <button onClick={this.random.bind()}>Force Rand</button>
                                <button onClick={this.buttonStop.bind(this,this.state.timer)}>Стоп</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
