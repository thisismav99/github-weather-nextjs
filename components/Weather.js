import { useState, useEffect, useRef } from "react"

const Weather = ({ data }) => {
    const icons = ["bi bi-brightness-high-fill", "bi bi-cloud-fill", "bi bi-cloud-lightning-rain-fill", "bi bi-cloud-rain-fill"]
    const [weatherIcon, setWeatherIcon] = useState(null);
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;
        
        if(data.description.includes("sun")){
            subscribe.current ? setWeatherIcon(icons[0]) : setWeatherIcon(null)
        }
        else if(data.description.includes("cloud")){
            subscribe.current ? setWeatherIcon(icons[1]) : setWeatherIcon(null)
        }
        else if(data.description.includes("thunder")){
            subscribe.current ? setWeatherIcon(icons[2]) : setWeatherIcon(null)
        }
        else if(data.description.includes("rain")){
            subscribe.current ? setWeatherIcon(icons[3]) : setWeatherIcon(null)
        }

        return () => subscribe.current = false;
    }, [data.description])

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4">

                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>WEATHER TODAY <i className="bi bi-thermometer"></i></h3>
                        </div>
                        <div className="card-body">
                            <p className="fs-1 text-center">PHILIPPINES <i className={weatherIcon}></i></p>
                            <div className="row">
                                <div className="col-xl-6">
                                    <p className="fs-3">
                                        <span className="text-decoration-underline">TEMPERATURE:</span> 
                                        <br/> {data.temperature}</p>
                                </div>
                                <div className="col-xl-6">
                                    <p className="fs-3">
                                        <span className="text-decoration-underline">DESCRIPTION:</span> 
                                        <br/> {data.description}  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">

                </div>
            </div>
        </div>
    )
}

export default Weather;