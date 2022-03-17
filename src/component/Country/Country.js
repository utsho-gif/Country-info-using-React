import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, population, name, flags} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <h4>Population: {population}</h4>
            <h5>Area: {area}</h5>
        </div>
    );
};

export default Country;