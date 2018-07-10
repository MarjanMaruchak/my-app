import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            random: null,
            timer: null,
            min: 1,
            max: 100,
            hidden:false,
            configBoostrap: 'col-md-9 view',
        }
        this.random = this.random.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        console.log(this.state);
    }

    //timer
    componentWillMount(){
        let timer = setInterval(this.random, 2500);
        this.setState({timer});

    }

    handleBtnClick(){
        this.setState({ hidden: !this.state.hidden});
        if (this.state.hidden === true ) {
            this.setState({configBoostrap: 'col-md-9 view'});
        }
        else {
            this.setState({configBoostrap: 'col-md-12 view'});
            console.log(this.state.configBoostrap);
        }
    }

    buttonStop(data) {
        clearInterval(data);
    }

    random (){
        console.log(this.state);
        this.setState({random: this.state.min + (Math.random() * ( this.state.max -  this.state.min))});
    };

    render() {
        console.log("render",this.state.timer)
        return (

            <div className="App">
                <header className="App-header">
                    <button className="hideCollumButton" onClick={this.handleBtnClick.bind()}>hide</button>
                    <h1 className="App-title">Random</h1>
                </header>

                <div className="conteiner">
                    <div className="row clas" >

                        <div className="col-md-3 menu" hidden={this.state.hidden}>
                            <div className="row"> <h1>Menu</h1></div>
                        </div>
                        <div className={this.state.configBoostrap} >
                            <h1>Number {this.state.random}</h1>
                            <p className="App-intro">
                                <button onClick={this.random.bind()}>Force Rand</button>
                                <button onClick={this.buttonStop.bind(this,this.state.timer)}>Stop</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
