import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {

}

interface State {
    count: number
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    protected addOne: React.MouseEventHandler<HTMLButtonElement> = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    protected minusOne: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!(this.state.count == 0)) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    protected changeStartingValue: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if (Number(event.target.value) < 0) {
            this.setState({
                count: 0
            })
        }
        else {
            this.setState({
                count: Number(event.target.value)
            })
        }
    }

    protected resetCounter: React.MouseEventHandler<HTMLButtonElement> = () => {
        this.setState({
            count: 0
        })
    }

    public render(): JSX.Element {
        return (
            <div>
                <div><input onChange={this.changeStartingValue} type="text" value={this.state.count} /></div>
                <div>
                    <button onClick={this.addOne}>+</button>
                    <button onClick={this.minusOne}>-</button>
                </div>
                <div><button onClick={this.resetCounter}>Reset to 0</button></div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
