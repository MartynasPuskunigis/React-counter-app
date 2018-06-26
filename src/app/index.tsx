import * as React from "react";
import * as ReactDOM from "react-dom";

interface propscontracts { 
    
 }

 interface statecontracts {
    count: number
 }

class App extends React.Component<propscontracts, statecontracts> {
    constructor(props :propscontracts) {
        super(props);
        this.state = {
            count: 0
        }
    }

    addOne() {
        this.setState({
            count: this.state.count + 1
        })
    }

    minusOne() {
        this.setState({
            count: this.state.count - 1
        })
    }

    changeStartingValue(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            count: Number(event.target.value)
        })
    }

    resetCounter() {
        this.setState({
            count: 0
        })
    }

    public render(): JSX.Element {
        return(
         <div>
             <div><input onChange= {(event: React.ChangeEvent<HTMLInputElement>) => this.changeStartingValue(event)} type="text" value={this.state.count}/></div>
             <div>
                 <button onClick={() => this.addOne()}>+</button>
                 <button onClick={() => this.minusOne()}>-</button>
             </div>
             <div><button onClick={() => this.resetCounter()}>Reset</button></div>
         </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
