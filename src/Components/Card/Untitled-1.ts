
// function App() {
//   let arr = [];
//   // console.log(asrr.length);

//   let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker');
//   ws.onmessage = (event) => {
//     let json = JSON.parse(event.data);
//     //console.log(json);

//     if (arr.length === 0) {
//       arr.push(json);
//     }
//     else {
//       let a = arr.find((e) => 
//         e.s === json.s
//       )
//       if (a) {
//         a.b = json.b
//         a.a = json.a
//         a.B = json.B
//         a.A = json.A
//         a.u = json.u

//       }
//       else {
//         arr.push(json);
//       }
//     }

//   }

//   console.log(arr);

//   return (
//     <>
//       <div className="App">
//         {/* <Card num={arr}/> */}
//         <Card num={arr} />
//       </div>
//     </>

//   );
// }

// export default App;







import React, { Component } from 'react';
import Card from './Components/Card/Card'


const App = () => {
    let arr = [];
    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker');

    ws.onopen = () => {
        console.log('WebSocket Client Connected');

    };
    ws.onmessage = (event) => {
        let json = JSON.parse(event.data);

        // console.log(json);

        if (arr.length == 0) {
            arr.push(JSON.parse(event.data));
        }
        else {
            let a = arr.find((e) =>
                e.s === JSON.parse(event.data).s
            )

            if (a) {
                a.b = JSON.parse(event.data).b
                a.a = JSON.parse(event.data).a
                a.B = JSON.parse(event.data).B
                a.A = JSON.parse(event.data).A
                a.u = JSON.parse(event.data).u

            }

            else {
                arr.push(JSON.parse(event.data));
            }
            console.log("data2", a.b)
        }
        // console.log(arr);
    };
    ws.onclose = () => {
        console.log('Closed Connection!')
    };

    return (
        <div>
            <Card num={arr} />
        </div>
    );
}


export default App;











import React from 'react'

function Card(props) {

    const num = props.num;
    // console.log(num);

    // let numArray = Object.entries(num);
    // console.log(numArray);
    const h1stItems = num.map((e, i) =>
        <h1 key={i}>
            {num}
        </h1>
    );
    // console.log("h1stItems",h1stItems)


    return (
        <>
            {/* <h1>{num[0].a}</h1> */}

            {/* {num.map((n, index) => (
                <h1 key={index}>{num[0].s}<br />
                    {num[0].a}<br />
                    {num[0].b}</h1>
            ))} */}

            {/* {
                num.map((index) => {
                    <h1 key={index}>{num[0].s}<br />
                        {num[0].a}<br />
                        {num[0].b}</h1>
                })
            } */}


            <h2>
                {
                    num.map((index) => {
                        return (
                            <h1 key={index.s}>
                                {num[0].s}<br />
                                {num[1].a}<br />
                                {num[2].b}<br />
                            </h1>

                        )
                    })
                }
            </h2>




        </>)
}

export default Card








// import React, { Component } from 'react';
// let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker');

// class App extends Component {
//   componentWillMount() {
//     ws.onopen = () => {
//       console.log('WebSocket Client Connected');
//     };
//     ws.onmessage = (message) => {
//       console.log(message);
//     };
//   }

//   render() {
//     return (
//       <div>
//         Sample code for WebSockets.
//       </div>
//     );
//   }
// }

// export default App;








// import React, { Component } from 'react';
// import Card from './Components/Card/Card'

// let arr = [];
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker');

//   }
//   render() {

//     this.ws.onopen = () => {
//       console.log('WebSocket Client Connected');

//     };
//     this.ws.onmessage = (event) => {
//       let json = JSON.parse(event.data);

//       // console.log(json);

//       if (arr.length == 0) {
//         arr.push(JSON.parse(event.data));
//       }
//       else {
//         let a = arr.find((e) =>
//           e.s === JSON.parse(event.data).s
//         )
        
//         if (a) {
//           a.b = JSON.parse(event.data).b
//           a.a = JSON.parse(event.data).a
//           a.B = JSON.parse(event.data).B
//           a.A = JSON.parse(event.data).A
//           a.u = JSON.parse(event.data).u

//         }
       
//         else {
//           arr.push(JSON.parse(event.data));
//         }
//         console.log("data2", a.b)
//       }
//       // console.log(arr);
//     };
//     this.ws.onclose = () => {
//       console.log('Closed Connection!')
//   };
    
//     return (
//       <div>
//         <Card num={arr} />
//       </div>
//     );
//   }
// }

// export default App;








// last

// import React, { Component } from 'react';
// import Card from './Components/Card/Card'


// function App() {
//   const arr = [];
//   const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker');

//   // ws.onopen = () => {
//   //     console.log('WebSocket Client Connected');

//   // };
//   ws.onmessage = (event) => {
//     let json = JSON.parse(event.data);

//     // console.log(json);

//     if (arr.length === 0) {
//       arr.push(json);
//     }
//     else {
//       let a = arr.find((e) => {
//         return e.s === json.s ? e: ''
//       })

//       if (a) {
//         a.b = json.b
//         a.a = json.a
//         a.B = json.B
//         a.A = json.A
//         a.u = json.u

//       }

//       else {
//         arr.push(json);
//       }
//     }
//     // console.log(arr);
//   };
//   console.log("arrrrr", arr);
//   return (
//     <div>
//       <Card num={arr} />
//     </div>
//   );
// }


// export default App;




import React, { Component, useState, useEffect } from 'react';
import Card from './Components/Card/Card'
import ShowData from './Components/ShowData';
// import Data from './Components/Data';v

function App() {

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [subscription, setSubscription] = useState({
    event: 'bts:subscribe',
    arr: {
      channel: 'order_book_btcusd'
    }
  });
  const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker');
  const initWebsocket = () => {
    // ws.onopen = () => {
    //   ws.send(JSON.stringify(subscription));
    // };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      switch (response.event) {
        case 'data':
          setOrders(response.data);
          setLoading(false);
          break;
        case 'bts:request_reconnect':
          initWebsocket();
          break;
        default:
          break;
      }
    };
    // ws.onclose = () => {
    //   initWebsocket();
    // };
  };

  useEffect(() => {
    initWebsocket();
  }, [orders, subscription]);

  console.log(orders);

  return (
    <>
      {
        orders.bids.map((el, index) => {
          <tr key={index}>
            <td> {el[0]} </td>
            <td> {el[1]} </td>
          </tr>
        })
      }

    </>
  )
}
export default App;
