import React from 'react'

function ShowData(props) {
    return (
        <div>
            {
                props.orders.bids.map((el, index) => {
                    <tr key={index}>
                        <td> {el[0]} </td>
                        <td> {el[1]} </td>
                    </tr>
                })
            }



        </div>
    )
}

export default ShowData