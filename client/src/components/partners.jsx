import React, {Component, useEffect, useState} from 'react'
import axios from "axios";

var cheshire1 = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/partners.php";

const Partners = () => {

    const [partners, setPartners] = useState({partners:[]});
    const [userTaken, setStatus] = useState(false);

	/* friend request event (button click)
    const fr = (match, event) => {
        const user = document.getElementById("username").textContent;
		event.preventDefault();
		axios.post(cheshire, {
				accepter: user,
				accepted: match,
                action: "fr"
			})
			.then((response) => {
				console.log(response);
                if (response['data'] == "fr accepted"){
                    alert("friend request sent!");
                    document.getElementById("yourMatches").innerHTML = "user already has partner, go to matches page to talk with them";
                }
                else if (response['data'] == "user taken"){
                    alert("match has already found a partner, please reload page to see current matches");
                }
			})
			.catch((error) => {
				console.log(error);
			});
	};
    */

    // onload get available users
    useEffect(() => {
        const user = document.getElementById("username").textContent;
        axios.post(cheshire1, {accepter: user, action: "load"})
        .then((response) => {
            console.log(response['data']);
            // user has partner so lock page
            if (response['data'] == "user taken"){
                setStatus(true);
            }
            // user's free load available partners into partners variable
            else {
                setPartners({...partners,partners:[response['data']]});
            }
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

    if (userTaken) { 
        //document.getElementById("yourMatches").innerHTML = "user already has partner, go to matches page to talk with them";
        return <div> user already has partner, go to matches page to talk with them </div>
    }

    /*
    const x = partners['matches'][0]?.map((match) => 
        <div>
            {match[0]}
            <button style={{backgroundColor: "#FF3737", color: "red", width: "30px", height: "30px"}} 
            onClick={(event) => matchAccepted(match[0], event)}></button>
            <br></br>
        </div>
    );
    */

    return <div>erik</div> 

}

export default Partners
