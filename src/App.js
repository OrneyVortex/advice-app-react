
import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state={advice:''};

    componentDidMount(){
        console.log('Comp did mount');
        this.fetchAdvice();
    }
    
    fetchAdvice =()=>{
        axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                const {advice}= response.data.slip;
                this.setState({advice});
                console.log(advice);

            })
            .catch((error)=>{
                console.log(error);
            });
    }


    render(){
        return(
            <div className="app">
                <div className="card">
                <h1 className='heading'>{this.state.advice}</h1>
                <button className='button' onClick={this.fetchAdvice}>
                    <span>CLICK FOR ADIVCE!</span>
                </button>
                </div>
            </div>
        );
    }
}

export default App;