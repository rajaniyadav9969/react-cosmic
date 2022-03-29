import React, { Component, useEffect, useState } from 'react';
// import Data from './Components/Data';v
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {

 
  // const [arr, setArr] = useState([]);


  // // const arr = [];
  // const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker');

  // // ws.onopen = () => {
  // //     console.log('WebSocket Client Connected');

  // // };
  // // const call = () => {
  // //   console.log("calledd");
  // // }

  // ws.onmessage = (event) => {
  //   let json = JSON.parse(event.data);
  //   // if (json.TradeSummary.length > 0) {
  //   //   var data1 = json.TradeSummary
  //   //   this.setState({ currentData: data1 },
  //   //     () => { call() })
  //   // }
  //   // console.log("arr3",json);

  //   if (arr.length === 0) {
  //     arr.push(json);
  //   }

  //   else {
  //     let a = arr.find((e) =>
  //       e.s === json.s
  //     )

  //     if (a) {
  //       a.b = json.b
  //       a.a = json.a
  //       a.B = json.B
  //       a.A = json.A
  //       a.u = json.u
  //     }

  //     else {
  //       arr.push(json);
  //     }
  //   }
  //   // console.log("arr1",arr);
  // }
  // useEffect(() => {
  //   console.log("arr4", arr)
  // }, [arr])

  // console.log("arrrrr", arr);
  return (
    <div className='App'>
 <div style={{ background: '#000' }}>
    <Dashboard />
  </div>
      {/* <Header /> */}
      {/* <ChangePwd /> */}
      {/* <Card num={arr} /> */}
      {/* <Data /> */}
      {/* <Login/> */}
      {/* <MainPage />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/login" element={<Login />} />

        </Route>

      </Routes> */}
      {/* <Login1/> */}
      {/* <Setting2/> */}
      {/* <MainPage/> */}

      {/* <BrowserRouter>
       
        <Routes>
          <Route path="/" element={ <Dashboard />} />
          <Route path="/login" element={<Login1 />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}


      {/* <Routes> */}
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route path="/" element={<MainPage />} >
            <Route path="/login" element={<Login1 />} />
            <Route path="/signup" element={<SignUp />} />
          </Route> */}

      {/* </Route> */}
      {/* </Routes> */}



      {/* <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider> */}

    </div >
  );
}


export default App;

