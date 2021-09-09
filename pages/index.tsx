import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Rounter from '../components/Index/Routing';
import Greet from '../components/Greet';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <Rounter />
      <Greet name = "Shakeel" />
      </Head>
    </div>
  )
}

export default Home
