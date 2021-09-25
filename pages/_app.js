import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import { useEffect } from "react"
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== "undefined" ? require('bootstrap/dist/js/bootstrap.bundle.min.js') : null;
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp;