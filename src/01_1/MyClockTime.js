function MyClockTime (){
    const currentTime = new Date();
    return(
      
       <h1 className="font-bold text-2xl">
        현재시간 : {currentTime.toLocaleTimeString()}

       </h1>
    );
};

export default MyClockTime ;