import React, {Component, useEffect, useState} from 'react'
import axios from "axios";

var cheshire = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/matches.php";

const Matches = () => {

    const [state, setState] = useState({matches:[]})

    useEffect(() => {
        axios.get(cheshire)
        .then((response) => {
            setState({...state,matches:[response['data']]})
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

    console.log(state['matches'])

    const x = state['matches'].map((match) => 
        <div>{match}</div>
    );


    return (<div>{x}</div>)
}

export default Matches