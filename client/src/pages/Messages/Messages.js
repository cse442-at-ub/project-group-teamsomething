import React from "react";


const Msg = (props) => {
    document.body.style = 'background: #FED99B;';
    const textboxStyles = {
        width: '1791px',
        height: '75px',
        position: 'absolute',
        top: '825px',
        left: '55px',
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        borderRadius: '25px',
        font: 'Inter',
        lineHeight: '75px',
        fontWeight: '200',
        fontSize: '28px'
      };
    
  return (
    <div className="box-border block w-[1920px] h-[923px] relative overflow-hidden">
      <div className="w-[1920px] h-[125px] absolute top-[798px] left-0 bg-[#662c91]" />
      <div className="w-[1800px] h-[75px] absolute top-[825px] left-[46px] rounded-[25px] bg-[#412555]" />
      
      <textarea
        style={textboxStyles}>
       </textarea>
      <p className="whitespace-pre-wrap absolute top-10 left-[57px] w-[909px] h-72 font-['Inter'] text-5xl leading-[normal] font-semibold text-left text-white">
        Let your partner know what you’ve been up to
      </p>
    </div>
  );
};




export default Msg;