import React, { Component } from 'react';
import store from '../redux/store'
import './confirmp.css'
class ConfirmPage extends Component {
    state = {
        matched: [],
        flag: false
    }
    myClick(storeValue) {
        const match = [];
        let i = 0;
        storeValue.customerName.map(() => {
            if (i < storeValue.customerName.length) {
                match.push({ name: storeValue.customerName[i] })
                i = i + 4;
            }
        })
        console.log("match")
        this.setState({
            matched: match,
            flag: true
        }, () => console.log(this.state.matched))



    }
    render() {
        const storeValue = store.getState();
        return (
            <div id="conf">
                <center>
                    <h2 style={{ "color": "white" }}><b>Thank you for booking with us</b></h2>
                    <br></br>
                    <h2 style={{ "color": "white" }}><b>Please take a screenshot of ticket</b></h2>
                </center>

                {this.state.flag == false ? <div id="conff">
                    <button onClick={() => this.myClick(storeValue)}>Print Ticket</button></div>
                    : this.state.matched.map((data) =>
                        <div id="confi">
                            <h4 style={{ color: 'red' }}>Name={data.name}</h4>
                            <h4 style={{ color: 'red' }}>Bus No={storeValue.BUS_NO}</h4>
                            <h4 style={{ color: 'red' }}>Departure Time={storeValue.TIME}</h4>
                            <h4 style={{ color: 'red' }}>Destination={storeValue.To}</h4>
                            <h4 style={{ color: 'red' }}>Source={storeValue.From}</h4>
                        </div>
                    )}

            </div>);
    }
}

export default ConfirmPage;