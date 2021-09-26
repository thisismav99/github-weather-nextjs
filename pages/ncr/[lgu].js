import axios from "axios";
import styles from "../../styles/Lgu.module.css"
import Head from "next/head"
import Weather from "../../components/Weather";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
    const ncr = [
        { name: "MANILA", url: "philippines-manila", id: 1 },
        { name: "MANDALUYONG", url: "philippines-mandaluyong", id: 2 },
        { name: "PASIG", url: "philippines-pasig", id: 3 },
        { name: "SAN JUAN", url: "philippines-san-juan", id: 4 },
        { name: "MAKATI", url: "philippines-makati", id: 5 },
        { name: "TAGUIG", url: "philippines-taguig", id: 6 },
        { name: "PATEROS", url: "philippines-pateros", id: 7 },
        { name: "PASAY", url: "philippines-pasay", id: 8 },
        { name: "PARANAQUE", url: "philippines-paranaque", id: 9 },
        { name: "LAS PINAS", url: "philippines-las-pinas", id: 10 },
        { name: "MUNTINLUPA", url: "philippines-muntinlupa", id: 11 },
        { name: "CALOOCAN", url: "philippines-caloocan", id: 12 },
        { name: "VALENZUELA", url: "philippines-valenzuela", id: 13 },
        { name: "MALABON", url: "philippines-malabon", id: 14 },
        { name: "QUEZON CITY", url: "philippines-quezon-city", id: 15 },
        { name: "MARIKINA", url: "philippines-marikina", id: 16 },
        { name: "NAVOTAS", url: "philippines-navotas", id: 17 },
    ];

    const paths = ncr.map(data => {
        return{
            params: { lgu: data.url.toString() }
        }
    });

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const url = context.params.lgu;

    try{
        const response = await axios.get(`https://goweather.herokuapp.com/weather/${url}`);
    
        return {
            props: { data: response.data, url: url }
        }
    }catch(error){
        console.log(error);
    }
}

const Lgu = ({ data, url }) => {
    const router = useRouter();

    return (
        <div className={styles.lguContainer}>
            <Head>
                <title>WEATHER | {url}</title>
            </Head>
            <div className="container">
                <Weather data={data} url={url} />

                <div className="text-center mt-3">
                    <button onClick={() => router.push("/ncr")} className="btn btn-primary"><i className="bi bi-arrow-left"></i> GO BACK</button>
                </div>
            </div>
        </div>
    )
}

export default Lgu;
