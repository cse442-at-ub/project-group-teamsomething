import React, {Component, useEffect, useState} from 'react'
import axios from "axios";

import ProfileCard from '../pages/Matches/MatchesCard';

const cheshire = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/partners.php";

const Partners = () => {

    const [partners, setPartners] = useState([]);
    const [userTaken, setStatus] = useState(false);
    //const [user, setUser] = useState(document.getElementById("username").textContent);

	// friend request event (button click)
    const fr = (partner, event) => {
        const user = document.getElementById("username").textContent;
		event.preventDefault();
        console.log(partner);
        console.log("this is the partner!");
        console.log(user);
		axios.post(cheshire, {
				partner: partner,
				user: user,
                action: "fr"
			})
			.then((response) => {
				console.log(response);
                if (response['data'] == "good fr"){
                    alert("friend request sent!");
                    document.getElementById(partner).innerHTML = "user already has partner, go to matches page to talk with them";
                }
                else if (response['data'] == "user taken"){
                    alert("you or your match has been taken, please reload page to see updated matches");
                }
			})
			.catch((error) => {
				console.log(error);
			});
            
	};


    // onload get available users
    useEffect(() => {
        const user = document.getElementById("username").textContent;
        console.log(user);
        axios.post(cheshire, {user: user, action: "load"})
        .then((response) => {
            // user has partner so lock page
            if (response['data'] == "user taken"){
                setStatus(true);
            }
            // user's free load available partners into partners variable
            else {
                //console.log(response['data']);
                setPartners(response['data']);
                //console.log(typeof(partners));
                console.log("kobe");
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

    
    const x = partners.map((partner) => 
        <div>
            <ProfileCard
                name={partner['fname'] + ' ' + partner['lname']}
                username={partner['username']}
                buttonFunction={(event) => fr(partner['username'], event)}
                description=""
                />
            <br></br>
        </div>
    );
    
    console.log(partners);

    return <div>{x}</div> 
    

}

export default Partners
