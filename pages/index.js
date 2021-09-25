import Head from "next/head"
import Link from "next/link"
import Weather from "../components/Weather"
import styles from '../styles/Home.module.css'
import axios from "axios"

export const getStaticProps = async () => {
  try{
    const response = await axios.get("https://goweather.herokuapp.com/weather/Philippines");

    return {
      props: { data: response.data }
    }
  }catch(error){
    console.log(error);
  }
}

const Home = ({data}) => {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>WEATHER | HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
          <p className="display-3">
            This Web App uses weather-api by&nbsp;
            <Link href="https://github.com/robertoduessmann/weather-api">
              <a target="_blank">
                <small>robertoduessmann</small>
              </a>
            </Link> <br/>
            huge thanks to him for making this app possible!
          </p>

          <p className="fs-3">
            The weather information are exclusive only to NCR, Philippines. 🤙🤙🤙
          </p>

          <div className="mt-3">
            <Weather data={data} />
          </div>
      </div> 
    </div>
  )
}

export default Home;