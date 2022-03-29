import React from 'react'

function Card(props) {

    const num = props.num;
    // console.log(num);

    let numArray = Object.entries(num);
    // console.log(numArray);
    const h1stItems = num.map((e, i) =>
        <h1 key={i}>
            {num}
        </h1>
    );


    return (
        <>
            {/* <h1>{num[0].a}</h1> */}
            <h1>jwoiewruehrfufgu</h1>
            <div>
                {
                    num !== [] ? num.map((index) => {
                        return (
                            <h1 key={index.s}>{num[0].s}<br />
                                {num[1].a}<br />
                                {num[2].b}
                            </h1>
                        )

                    }
                    ) : ''
                }
            </div>


        </>)
}

export default Card