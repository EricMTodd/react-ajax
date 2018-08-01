import React from "react";

// Functional component
// Stateless dumb component

const CrimesList = (props) => {
    console.log(props)

    // .map creates a new array of all our jsx list items inside the new array.
    const crimesList = props.crimes.map((crime, i) => {
        return (
            <div>
            <li key={i}>{crime.description}
            <button onClick={props.deleteCrime.bind(null, i)}>Delete</button>
            </li>
            </div>
        )
    });

    return (
        <div>
        <h4>Crimes</h4>
        <ul>
            {crimesList}
        </ul>
        </div>
    )
}


export default CrimesList