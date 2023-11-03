import React, {Component, useEffect, useState} from 'react'
import axios from "axios";

var cheshire = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/matches.php";

const Matches = () => {

    const matchAccepted = (match, event) => {
		event.preventDefault();
        const user = document.getElementById("username").textContent;
		axios.post(cheshire, {
				accepter: user,
				accepted: match
			})
			.then((response) => {
				console.log(response);
                if (response['data'] == "fr accepted"){
                    alert("friend request sent!");
                }
                else if (response['data'] == "user has partner"){
                    document.getElementById("yourMatches").innerHTML = "user already has partner, go to matches page to talk with them";
                }
                else if (response['data'] == "partner taken"){
                    alert("match has already found a partner, please reload page to see current matches");
                }
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
            console.log(response['data']);
        })
        .catch((error) => {
            console.log(error);
        });
    },[])


    const x = state['matches'][0]?.map((match) => 
        <div>
            {match[0]}
            <button style={{backgroundColor: "#FF3737", color: "red", width: "30px", height: "30px"}} 
            onClick={(event) => matchAccepted(match[0], event)}></button>
            <br></br>
        </div>
    );

    return <div>{x}</div>
}

export default Matches