import React, {Component, useEffect, useState} from 'react'
import axios from "axios";

var cheshire1 = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/partners.php";

const Partners = () => {

    const [partners, setPartners] = useState([]);
    const [userTaken, setStatus] = useState(false);

	/*friend request event (button click)
    const fr = (partner, event) => {
        const user = document.getElementById("username").textContent;
		event.preventDefault();
        console.log(partner);
        console.log("this is the partner!");
        /*
		axios.post(cheshire, {
				accepter: partner,
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
            {partner['username']}            <br></br>
            {partner['fname']}             <br></br>
            {partner['lname']}             <br></br>
        </div>
    );
    
    console.log(partners);

    return <div>{x}</div> 
    

}

export default Partners
