function MyClockTime (){
    const currentTime = new Date();
    return(
      
       <h1>
        현재시간 : {currentTime.toLocaleTimeString()}

       </h1>
    );
};

export default MyClockTime ;