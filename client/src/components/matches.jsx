import React, {Component, useEffect, useState} from 'react'
import axios from "axios";

var cheshire = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/matches.php";

const Matches = () => {

    const matchAccepted = (match, event) => {
		event.preventDefault();
        console.log(match);
        const user = document.getElementById("username").textContent;
		axios.post(cheshire, {
				accepter: user,
				accepted: match
			})
			.then((response) => {
				console.log(response);
				alert("friend request sent!");
			})
			.catch((error) => {
				console.log(error);
			});
	};

    const [state, setState] = useState({matches:[]})

    useEffect(() => {
        axios.get(cheshire)
        .then((response) => {
            setState({...state,matches:[response['data']]});
            //console.log(response['data']);
        })
        .catch((error) => {
            console.log(error);
        });
    },[])


    const x = state['matches'][0]?.map((match) => 
        <div>
            {match}
            <button style={{backgroundColor: "#FF3737", color: "red", width: "30px", height: "30px"}} 
            onClick={(event) => matchAccepted(match, event)}></button>
            <br></br>
        </div>
    );

    //console.log(x);

    return <div>{x}</div>
}

export default Matches