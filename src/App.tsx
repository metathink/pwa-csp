import { useState } from 'react'

import MainContainer from './components/MainContainer'
import SelectContainer from './components/SelectContainer'
import Title from './components/Title'
import { initializeTab } from './util/initialStates'

function App() {
  const [tab, setTab] = useState(initializeTab)

  return (
    <div className='main' style={{ textAlign: "center", margin: 4, padding: 4 }}>
      <Title />
      <SelectContainer tab={tab} setTab={setTab} />
      <MainContainer tab={tab} />
    </div>
  )
}

export default App
