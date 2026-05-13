import React from 'react'

import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <hr />

      <div className="main">
        <Card Title="Card Title1" Desc="Card1 content goes here." arr={[1, 2, 34, 4]} >
          Hello Users
        </Card>
        <Card Title="Card Title2" Desc="Card2 content goes here." arr={[1, 2, 34, 4]} />
        <Card Title="Card Title3" Desc="Card3 content goes here." arr={[1, 2, 34, 4]} />
        <Card Title="Card Title4" Desc="Card4 content goes here." arr={[1, 2, 34, 4]} />
        <Card Title="Card Title5" Desc="Card5 content goes here." arr={[1, 2, 34, 4]} />
        <Card Title="Card Title6" Desc="Card6 content goes here." arr={[1, 2, 34, 4]} />

      </div>
    </div>
  )
}

export default App
