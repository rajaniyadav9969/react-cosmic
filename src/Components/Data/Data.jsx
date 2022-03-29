import React, { Component } from 'react'
import axios from 'axios'

export class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    getData(){
        axios.get('data://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker').then(res => {
          console.table(res.data)
        })
      }
      componentDidMount(){
        this.getData()
      }
    render() {
        return (
            <div></div>
        )
    }
}

export default Data