import type { NextPage } from 'next';
import Head from 'next/head';

import { DemoBox } from '../components/DemoBox'
import { Form } from '../components/Form'
import { Toast } from '../components/Toast'

const Home: NextPage = () => {
    return (
        <div className="app">
            <Head>
                <title>Owl Color - Color Contrast Checker App</title>
            </Head>
            <Form />
            <DemoBox />
            <Toast />
        </div>
    )
}

export default Home
