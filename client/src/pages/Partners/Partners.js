import React from "react";
import { useNavigate } from "react-router-dom";

import WhiteBox from "./WhiteBox";

import DownArrow from "./DownArrow.png";

import HomeLogo from "./HomeLogo.png";

import PartnerLogo from "./PartnerLogo.png";

import WebsiteLogo from "./WebsiteLogo.png";

import MockPicture from "./MockPicture.png";


import StreakLogo from "./StreakLogo.png";

import MessagesLogo from "./MessagesLogo.png";

const Component = (props) => {

  const textboxStyles = {
    width: '1484px',
    height: '57px',
    position: 'absolute',
    top: '166px',
    left: '406px',
    border: 'none',
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: '25px',
    font: 'Inter',
    lineHeight: '60px',
    fontWeight: '200',
    fontSize: '28px'
  };

  const navigate = useNavigate();
  return (
    <div className="box-border block w-[1920px] h-[923px] relative overflow-hidden bg-[#fed99b]">
      <WhiteBox />
      <div className="box-border block w-[146px] h-[58px] absolute top-[233px] left-[1575px] overflow-hidden">
        <div className="w-[104px] h-10 absolute top-[7px] left-[30px] rounded-[20px] bg-white" />
        <p className="whitespace-pre-wrap absolute top-[18px] left-[45px] w-[58px] h-[17px] font-['Inter'] text-base leading-[normal] font-semibold text-left text-black">
          Sort By
        </p>
        <img className="absolute top-0.5 left-[99px]" src={DownArrow} alt ="" />
      
      </div>
      
      <p className="whitespace-pre-wrap absolute top-10 left-[57px] w-[909px] h-72 font-['Inter'] text-5xl leading-[normal] font-semibold text-left text-white"></p>
      <div className="w-[1484px] h-[57px] absolute top-[166px] left-[406px] rounded-[25px] bg-[#662c91]" />
      <textarea
        style={textboxStyles}>
      </textarea>
      <p className="whitespace-pre-wrap absolute top-[90px] left-[443px] w-[989px] font-['Inter'] text-[32px] leading-[normal] font-black text-center text-black">
        Let’s Help You Find an Accountability Partner
      </p>
      <div className="box-border block w-[180px] h-[52px] absolute top-[235px] left-[1710px] overflow-hidden">
        <div className="w-[173px] h-10 absolute top-1.5 left-[7px] rounded-[20px] bg-white" />
        <p className="whitespace-pre-wrap absolute top-[18px] left-[18px] w-36 h-[17px] font-['Inter'] text-base leading-[normal] font-semibold text-left text-black">
          Advanced Filters
        </p>
        <img className="absolute top-0 left-[142px]" src={DownArrow} alt =""/>
      </div>
      
      <div className="w-[254px] h-[924px]">
        <div className="w-[254px] h-[67px]">
          <p className="whitespace-pre-wrap absolute top-[50px] left-[97px] w-[184px] h-[54px] font-['Inter'] text-4xl leading-[normal] font-black text-left text-[#ff3737]">
            Oathopal
          </p>
          <img
            className="w-[58px] h-[67px] absolute top-[37px] left-[27px] object-cover"
            src={WebsiteLogo}
            alt = ""
          />
        </div>
        <div className="w-[246px] h-[251px]">
          <div className="w-[246px] h-[59px] absolute top-56 left-[27px] rounded-[10px] bg-[#fed99b]" />
          <div className="box-border flex justify-center items-center absolute top-[161px] left-[97px] gap-2.5 p-2.5">
            <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-xl leading-[normal] font-black text-left text-black button-hover">
              Home
            </p>
          </div>
          <button
            className="w-[30px] h-[30px] absolute top-[168px] left-[51px] p-0 border-none bg-transparent cursor-pointer"
            onClick={() => {
              navigate("/home");
            }}
          >
          
            <img
              className="w-[30px] h-[30px] object-cover button-hover"
              src={HomeLogo}
              alt =""
            />
          </button>
          <div className="box-border flex justify-center items-center absolute top-[368px] left-[97px] gap-2.5 p-2.5">
            <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-xl leading-[normal] font-black text-left text-black button-hover">
              Streak
            </p>
          </div>

          <button
            className="w-[30px] h-[30px] absolute top-[378px] left-[51px] p-0 border-none bg-transparent cursor-pointer"
            onClick={() => {
              navigate("/Checkin");
            }}
          >
            <img
              className="w-[30px] h-[30px] a object-cover"
              src={StreakLogo}
              alt =""
            />
          </button> 
          <div className="box-border flex justify-center items-center absolute top-[298px] left-[97px] gap-2.5 p-2.5">
            <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-xl leading-[normal] font-black text-left text-black button-hover">
              Messages
            </p>
          </div>
          <div className="box-border flex justify-center items-center absolute top-[229px] left-[97px] gap-2.5 p-2.5">
            <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Inter'] text-xl leading-[normal] font-black text-left text-black button-hover">
              Partner
            </p>
          </div>
          <img
            className="w-[30px] h-[30px] absolute top-[238px] left-[51px] object-cover"
            src={PartnerLogo}
            alt =""
          />
          <button
            className="w-[30px] h-[30px] absolute top-[308px] left-[51px] p-0 border-none bg-transparent cursor-pointer"
            onClick={() => {
              navigate("/Messages");
            }}
          >
            <img
              className="w-[30px] h-[30px]  object-cover"
              src={MessagesLogo}
              alt =""
            />
          </button>
        </div>
        <div className="w-[109px] h-[21px]">
          <p className="whitespace-pre-wrap absolute top-[840px] left-[102px] w-[109px] h-[21px] font-['Inter'] text-[15px] leading-[normal] font-black text-left text-black">
            Lindsey Dun
          </p>
        </div>
        <button
          className="w-12 h-12 absolute top-[840px] left-[38px] rounded-[5px] p-0 border-none bg-transparent cursor-pointer"
          onClick={() => {
            navigate("/Home");
          }}
        >   
          <img
            className="w-12 h-12 rounded-[5px] object-cover"
            src={MockPicture}
            alt = ""
          />
        </button> 
        <p className="whitespace-pre-wrap absolute top-[865px] left-[102px] w-[102px] h-[11px] font-['Inter'] text-[10px] leading-[normal] font-light text-left text-black">
          View Your Profile
        </p>
      </div>
      {props.children}
    </div>
  );
};

export default Component;
