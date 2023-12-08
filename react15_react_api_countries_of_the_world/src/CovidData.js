import React, { useEffect, useState } from "react";

const CovidData = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        getCovidData();
    }, []);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            setInfo(data);
        } catch (err) {
            console.log(`The error is ${err}`);
        }
    };

    console.log(info);

    return (
        <div className="table">
            <h1>COUNTRIES OF THE WORLD</h1>
            {info ? (
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Continent</th>
                            <th>Capital</th>
                            <th>Area</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                    {info.map((val, index) => {
                        return (
                            <tr>
                            <td>{val[index]?.name?.common}</td>
                            <td>{val[index]?.continents[0]}</td>
                            <td>{val[index]?.capital[0]}</td>
                            <td>{val[index]?.area}</td>
                            <td>{val[index]?.population}</td>
                        </tr>  
                        )
                    })}
                        
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CovidData;
