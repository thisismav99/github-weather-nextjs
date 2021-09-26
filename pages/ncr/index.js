import { useRouter } from "next/router"
import Link from "next/link" 
import Head from "next/head"
import styles from "../../styles/Home.module.css"

const Home = () => {
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
    ]

    const router = useRouter();

    return (
        <div className={styles.homeContainer}>
            <Head>
                <title>WEATHER | NCR</title>
            </Head>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <p className="fs-1">NCR LGU/S</p>

                    <div>
                        <button onClick={() => router.push("/")} className="btn btn-primary"><i className="bi bi-arrow-left"></i> GO BACK</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-2">

                    </div>
                    <div className="col-xl-8">
                        <div className="card">
                            <div className={`card-body ${styles.cardBody}`}>
                                {
                                    ncr.map(data => (
                                        <ul className="list-group" key={data.id}>
                                            <li className="list-group-item">
                                                <Link href={`/ncr/${data.url}`}>
                                                    <a>
                                                        {data.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
