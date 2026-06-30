import Navbar from './Navbar.jsx'
import sum from './server.js';

function App() {
  let name = "Username"
  return (<>
    <h1>Hello React Js {2 * 3} {name} {sum(12, 4)}</h1>
    <Navbar name="value" age={20} />

    <p>{sum(12, 8)}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vitae error dolorum! Distinctio blanditiis neque quas ad quo? Tenetur magni voluptatem dolorum nesciunt eius eligendi corporis sed? Necessitatibus, vitae nemo?</p>
    <Navbar name="Easyskill" age={67} />
  </>)
}


export default App;


