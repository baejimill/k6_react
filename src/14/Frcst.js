import TailInput from "../UI/TailInput"
import TailSelect from "../UI/TailSelect"
import TailButton from "../UI/TailButton"
import getxy  from "./getxy.json"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Frcst() {
  const navigator = useNavigate();
  const ops = getxy.map(item=> item['1단계']);

  const [x, setX] = useState();
  const [y, setY] = useState();
  const [area, setArea] = useState()
  const [dt, setDt] = useState();
  
    
  const dRef = useRef();
  const sRef = useRef();

  const handleDate = ()=>{
    setDt(dRef.current.value.replaceAll('-', ''));
  }

//초단기 예보,단기예보 하나로 묶음
  const handleFrcst = (loc)=>{
    if (dt === '' || dt === undefined){
      alert('날짜를 선택하세요.');
      dRef.current.focus();
      return
    }
    if (area === '' || area === undefined){
      alert('지역을 선택하세요.');
      sRef.current.focus();
      return
    }

    // navigator(`/${loc}/${dt}/${area}/${x}/${y}`);
    let gubun ='';
    if (loc == 'ultra') gubun = '초단기예보';
    else gubun = '단기예보'; 

    navigator(`/frcstlist?dt=${dt}&area=${area}&x=${x}&y=${y}&gubun=${gubun}`);
  }

  const handleArea = ()=>{
    if(sRef.current.value === '' || sRef.current.value === undefined)return;

    let tm = getxy.filter(item => item['1단계'] === sRef.current.value)
    setArea(sRef.current.value);
    setX(tm[0]["격자 X"]);
    setY(tm[0]["격자 Y"]);
}  

useEffect(()=>{
  console.log(x,y)
},[x,y])
  
  return (
    <div className="justify-start w-full grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
      <div>
      <TailInput type = "date"
                  inputRef  = {dRef}
                  ph = "날짜선택"
                  handleChange = {handleDate}/>
    </div>
    <div>
      <TailSelect ops = {ops}
                  opDefault = "---지역선택---"
                  selRef = {sRef}
                  handleSel = {handleArea}/>
    </div>
    <div>
      <TailButton caption="초단기예보"
                  color = "blue"
                  handleClick = {()=> {handleFrcst('ultra')} }/>
    </div>
    <div>
      <TailButton caption="단기예보"
                  color = "blue"
                  handleClick =  {()=> {handleFrcst('village')} }/>
    </div>
    </div>
  )
}
