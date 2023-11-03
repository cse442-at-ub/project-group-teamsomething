import React, {Component, useEffect, useState} from 'react'
import axios from "axios";

var cheshire = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/matches.php";

const Matches = () => {

    const [state, setState] = useState({matches:[]});
    const [userTaken, setStatus] = useState(false);

    const matchAccepted = (match, event) => {
        const user = document.getElementById("username").textContent;
		event.preventDefault();
		axios.post(cheshire, {
				accepter: user,
				accepted: match,
                action: "accept"
			})
			.then((response) => {
				console.log(response);
                if (response['data'] == "fr accepted"){
                    alert("friend request sent!");
                }
                else if (response['data'] == "partner taken"){
                    alert("match has already found a partner, please reload page to see current matches");
                }
			})
			.catch((error) => {
				console.log(error);
			});
	};

    useEffect(() => {
        const user = document.getElementById("username").textContent;
        axios.post(cheshire, {accepter: user, action: "load"})
        .then((response) => {
            console.log(response['data']);
            if (response['data'] == "user has partner"){
                console.log("steph");
                setStatus(true);
            }
            else {
                setState({...state,matches:[response['data']]});
            }
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

    console.log(userTaken);
    if (userTaken) { 
        console.log("lebron");
        //document.getElementById("yourMatches").innerHTML = "user already has partner, go to matches page to talk with them";
        return <div> user already has partner, go to matches page to talk with them </div>
    }

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