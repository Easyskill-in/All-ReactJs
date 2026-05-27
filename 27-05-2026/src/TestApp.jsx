import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get("https://fakestoreapi.com/products")
                console.log(data.data)
                setData(data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    function handleDelete(id) {
        console.log(id)
        const newArray = Data.filter((v, i) => {
            return v.id !== id
        })
        setData(newArray)
    }
    return (
        <div className='main'>
            {Data ? Data.map((value, index) => (
                <div key={value.id}>
                    <img src={value.image} alt="" />
                    <br />
                    <h1>{value.title}</h1>
                    <br />
                    <button onClick={() => { handleDelete(value.id) }}>Delete</button>
                </div>
            )) : <h1>No Data Yet</h1>}
        </div>
    )
}

export default App
