import React from 'react'
import IMG from '../assets/P1.png'
const Card = ({ Title, Desc }) => {

    // console.log(props)

    // const { Title, Desc } = props
 

    return (
        <div className="card">
            <div className="profile">
                <img src={IMG} alt="" />
            </div>
            <div className="text">

                <h2>{Title}</h2>
                <p>{Desc}</p>
            </div>
            <button>Click Me</button>
        </div>
    )
}

export default Card
// import React from 'react'
// import IMG from '../assets/P1.png'
// const Card = (props) => {

//     console.log(props)

//     return (
//         <div className="card">
//             <div className="profile">
//                 <img src={IMG} alt="" />
//             </div>
//             <div className="text">

//                 <h2>{props.Title}</h2>
//                 <p>{props.Desc}</p>
//             </div>
//             <button>Click Me</button>
//         </div>
//     )
// }

// export default Card
