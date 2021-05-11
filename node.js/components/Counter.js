import React, { Component } from "react";

class Counter extends Component {
    state = {
        result: "",
        num: 0
    };
    throwFunc = () => {
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(Math.floor(Math.random() * 256));
        }
        this.setState({ result: arr.join(",") });

    };

    addFunc = () => {
        if (this.state.num === 10) {
            console.log("max 10");
        } else {
            this.setState({ num: this.state.num + 1 });
            this.throwFunc();
        }
    };

    subtractFunc = () => {
        if (this.state.num === -10) {
            console.log("min -10");
        } else {
            this.setState({ num: this.state.num - 1 });
            this.throwFunc();
        }
    };
    render() {
        return (
            <div className="shapka" style={{ backgroundColor: `rgb(${this.state.result})` }}>
                <div className="container">
                    <button className="but del" onClick={this.subtractFunc}>
                        -
            </button>
                    <p className="numbe">{this.state.num}</p>
                    <button className="but" onClick={this.addFunc}>
                        +
            </button>
                </div>
            </div>

        );
    }
}

export default Counter;
