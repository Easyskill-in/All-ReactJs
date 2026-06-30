function Navbar({ name, age }) {
    // const { name, age } = props;
    return <>
        <nav>
            <ul>
                <li><a href="#">{name}</a></li>
                <li><a href="#">{age}</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>
}

export default Navbar
// function Navbar(props) {

//     console.log(props)
//     return <>
//         <nav>
//             <ul>
//                 <li><a href="#">{props.name}</a></li>
//                 <li><a href="#">{props.age}</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </nav>
//     </>
// }

// export default Navbar