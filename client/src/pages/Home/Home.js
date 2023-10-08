import React, { useState,useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Background from "./Background";

import MockPicture from "../../assets/MockPicture.png";
import WebsiteLogo from "../../assets/WebsiteLogo.png";
import Frame from "./Frame";
import HomeLogo from "../../assets/HomeLogo.png";
import PartnerLogo from "../../assets/PartnerLogo.png";
import MessagesLogo from "../../assets/MessagesLogo.png";
import StreakLogo from "../../assets/StreakLogo.png";



const Component = (props) => {

  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(true);
  const popupRef = useRef(null);

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      // Add event listener when the popup is shown
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the popup is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Clean up event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);
  return (
    <div
      className="box-border flex justify-start items-start w-[1920px] h-[923px] overflow-hidden gap-[474px] bg-[#fed99b]"
      onClick={props.onClick}
    >

    <div className="relative">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative w-[60%] h-[70%] bg-[#fed99b] rounded-lg p-6">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setShowPopup(false)}
            >
              <svg
                
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <div className="flex items-center justify-center mb-4">
              <button className="bg-[#662c91] text-white rounded-[5px] py-6 px-12 text-4xl"
                style={{ marginTop: "2rem" }} 
                onClick={() => {
                  navigate("/home");
                }}             
              >
                You have some new matches 
              </button>
            </div>

            
            
            <div className="flex items-center justify-center mb-4">
              <button className="bg-[#662c91] text-white rounded-[5px] py-6 px-12 text-4xl"
                style={{ marginTop: "6rem" }}
                onClick={() => {
                  navigate("/Partners");
                }}              
              >
                Profile 1 
              </button>
            </div>

            
            
            <div className="flex items-center justify-center mb-4">
              <button className="bg-[#662c91] text-white rounded-[5px] py-6 px-12 text-4xl"
                style={{ marginTop: "6rem" }}
                onClick={() => {
                  navigate("/Partners");
                }}              
              >
                Profile 2
              </button>
            </div>
            
          </div>
        </div>
      )}

      <div
        className="box-border flex justify-start items-start w-[1920px] h-[923px] overflow-hidden gap-[474px] bg-[#fed99b]"
        onClick={props.onClick}
      >
      <div className="box-border flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 h-[982px] w-[296px] relative overflow-hidden space-y-[-945px]">
        <Background />
        <div className="box-border flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 w-[281px] overflow-hidden">
          <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[980px] w-[254px] gap-[501px]">
            <div className="box-border flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 h-[375px] w-[254px] overflow-hidden gap-[50px]">
              <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 w-[254px] h-[67px] relative gap-3">
                <img
                  className="flex-grow-0 flex-shrink-0 w-[58px] h-[67px] object-cover"
                  src={WebsiteLogo}
                  alt = ""
                />
                <p className="whitespace-pre-wrap w-[184px] flex-grow-0 flex-shrink-0 h-[54px] font-['Inter'] text-4xl leading-[normal] font-black text-left text-[#ff3737]">
                  Oathopal
                </p>
              </div>
              <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[258px] w-[246px] gap-4">
                <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 w-[246px] h-[59px] relative overflow-hidden gap-4 px-6 pt-[7px] pb-2 rounded-[10px] bg-[#fed99b]">
                  
                  <img
                    className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] object-cover"
                    src={HomeLogo}
                    alt = "Home"
                  />
                  <button
                    className="absolute top-0 left-0 w-[55px] h-[35px] flex items-center justify-center"
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    
                  </button>
                  
                  <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
                    <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-xl leading-[normal] font-black text-left text-black">
                      Home
                    </p>
                  </div>
                </div>
                <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[183px] w-[194px] overflow-hidden gap-[25px]">
                  <div className="box-border flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 w-[166px] overflow-hidden">
                    <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 w-[142px] h-11 relative overflow-hidden gap-4">
                      
                    
                      
                      <img
                        className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] object-cover"
                        src={PartnerLogo}
                        alt = ""
                      />
                      
                      <button
                        className="absolute top-0 left-0 w-[55px] h-[35px] flex items-center justify-center"
                        onClick={() => {
                          navigate("/Partners");
                        }}
                      >
                    
                  </button>
                    
                      <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
                        <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-xl leading-[normal] font-black text-left text-black">
                          Partner
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 w-[194px] overflow-hidden">
                    <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 w-[170px] h-11 relative overflow-hidden gap-4">
                      <img
                        className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] object-cover"
                        src={MessagesLogo}
                        alt = ""
                      />

                  <button
                    className="absolute top-0 left-0 w-[55px] h-[35px] flex items-center justify-center"
                    onClick={() => {
                      navigate("/Messages");
                    }}
                  >
                    
                  </button>
                      <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
                        <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-xl leading-[normal] font-black text-left text-black">
                          Messages
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="box-border flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 w-[156px] overflow-hidden"
                    onClick={props.onFrameClick}
                  >
                    <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 w-[132px] h-11 relative overflow-hidden gap-4">
                      <img
                        className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] object-cover"
                        src={StreakLogo}
                        alt = ""
                      />

                  <button
                    className="absolute top-0 left-0 w-[55px] h-[35px] flex items-center justify-center"
                    onClick={() => {
                      navigate("/Check-in");
                    }}
                  >
                    
                  </button>
                      <div className="box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
                        <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-xl leading-[normal] font-black text-left text-black">
                          Streak
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex justify-start items-start flex-grow-0 flex-shrink-0 w-[173px] h-12 relative overflow-hidden gap-4">
              <img
                className="flex-grow-0 flex-shrink-0 w-12 h-12 rounded-[5px] object-cover"
                src={MockPicture}
                alt = ""
              />
              <div className="box-border flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[5px] w-[109px] relative overflow-hidden gap-[3px]">
                <p className="whitespace-pre-wrap h-[21px] flex-grow-0 flex-shrink-0 w-[109px] font-['Inter'] text-[15px] leading-[normal] font-black text-left text-black">
                  Lindsey Dun
                </p>
                <p className="whitespace-pre-wrap h-[11px] flex-grow-0 flex-shrink-0 w-[102px] font-['Inter'] text-[10px] leading-[normal] font-light text-left text-black">
                  View Your Profile
                </p>
              </div>
            </div>
            <div className="box-border flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 w-[184px] h-12 overflow-hidden" />
          </div>
        </div>
      </div>
      <div className="box-border flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 h-[1010px] w-[1500px] overflow-hidden">
        <div className="box-border flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 h-[664px] w-[664px] relative overflow-hidden gap-[78px]">
          
          <div className="box-border flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 h-[333px] w-[800px] overflow-hidden gap-[37px]">
            <div className="box-border flex justify-end items-center flex-grow-0 flex-shrink-0 w-[410px] h-[110px] relative space-x-[-410px] pl-[15px] pt-[38px] pb-9">
              <div className="flex-grow-0 flex-shrink-0 w-[395px] h-[110px] rounded-[35px] bg-[#ff3737]" />
              
              <button
                className="flex-grow-0 flex-shrink-0 w-[410px] h-[110px] rounded-[35px] bg-[#ff3737] text-white"
                onClick={() => {
                  navigate("/check-in");
                }}
              >
              <p className="whitespace-pre-wrap w-[410px] flex-grow-0 flex-shrink-0 font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                Check in for the day!
              </p>

              </button>
            </div>
            <div className="box-border flex justify-end items-center w-[664px] h-[186px] space-x-[-563px]">
              <div className="box-border flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[186px] w-[664px] overflow-hidden rounded-[35px] bg-[#662c91]">
                <div className="box-border flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 h-36 w-[484px] overflow-hidden">
                  <div className="box-border flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[72px] w-[484px] relative gap-4">
                    <Frame />
                    <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 w-[484px] h-[41px] relative overflow-hidden gap-[115px]">
                      <p className="whitespace-pre-wrap w-[46px] flex-grow-0 flex-shrink-0 h-[41px] font-['Inter'] text-3xl leading-[normal] font-bold text-left text-white">
                        1w
                      </p>
                      <div className="box-border flex justify-start items-center flex-grow-0 flex-shrink-0 w-[323px] h-[41px] relative overflow-hidden gap-56">
                        <p className="whitespace-pre-wrap w-[46px] flex-grow-0 flex-shrink-0 h-[41px] font-['Inter'] text-3xl leading-[normal] font-bold text-left text-[#53ff37]">
                          1m
                        </p>
                        <p className="whitespace-pre-wrap w-[53px] flex-grow-0 flex-shrink-0 h-[41px] font-['Inter'] text-3xl leading-[normal] font-bold text-left text-white">
                          6m
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[148px] w-[410px] relative overflow-hidden">
                <p className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    P
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    r
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    o
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    g
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    r
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    e
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    s
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    s
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    {" "}
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    T
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    o
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    w
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    a
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    r
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    d
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    s
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    {" "}
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    G
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    o
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    a
                  </span>
                  <span className="whitespace-pre-wrap h-[110px] flex-grow-0 flex-shrink-0 w-[410px] font-['Inter'] text-3xl leading-[normal] font-bold text-center text-white">
                    l
                  </span>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};


export default Component;