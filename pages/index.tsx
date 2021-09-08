import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Demo from './DemoApp/DemoApp';
import Rounter from './DemoApp/RoutingDemo/Routing';
import Greet from '../components/Greet';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <h1>NextTitle</h1>
        <Rounter />
      <Greet name = "Shakeel" />
      <Greet name = "Ahamd" />
      </Head>
      <Rounter />
    </div>
  )
}

export default Home
