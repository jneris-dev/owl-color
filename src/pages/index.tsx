import type { NextPage } from 'next'
import { DemoBox } from '../components/DemoBox'
import { Form } from '../components/Form'

const Home: NextPage = () => {
  return (
    <div className="app">
      <Form />
      <DemoBox />
    </div>
  )
}

export default Home
