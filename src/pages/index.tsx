import type { NextPage } from 'next';

import { DemoBox } from '../components/DemoBox'
import { Form } from '../components/Form'
import { Toast } from '../components/Toast'

const Home: NextPage = () => {
    return (
        <div className="app">
            <Form />
            <DemoBox />
            <Toast />
        </div>
    )
}

export default Home
