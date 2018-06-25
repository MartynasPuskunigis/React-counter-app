import * as React from "react";
import * as ReactDOM from "react-dom";

interface propscontracts { 
    counter?: number
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

    public render(): JSX.Element {
        return(
         <div>
             <div>0</div>
             <div>
                 <button onClick={() => this.addOne()}>+</button>
                 <button onClick={() => this.minusOne}>-</button>
             </div>
         </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
