import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Rounter from './DemoApp/RoutingDemo/Routing';
import App from './App';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <App  />
      
    </div>
  )
  

}
export default MyApp;
