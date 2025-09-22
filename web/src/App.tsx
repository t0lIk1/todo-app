import { Button } from 'antd'
import { useEffect } from 'react'
function App() {

  useEffect(() => {
    console.log('App mounted')
  }, [])

  return (
    <>
      <Button type="primary">Antd Button</Button>
    </>
  )
}

export default App
