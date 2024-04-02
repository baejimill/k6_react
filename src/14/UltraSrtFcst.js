import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import TailSelect from "../UI/TailSelect"
import getcode from "./getcode.json"

export default function UltraSrtFcst() {
    const dt = useParams().dt
    const area = useParams().area
    const x = useParams().x
    const y = useParams().y
    const gubun = '초단기예보';
    //slecte 박스 옵션
    const ops = getcode.filter(item=>item["예보구분"]===gubun)
                        .map(item =>`${item["항목명"]}(${item["항목값"]})`)

    const itemRef = useRef()
   
    //fetch data state 변수로 저장
    const [tdata, setTdata] = useState([]);

    //화면에 표시되느 테이블 tr저장
    const [trtags, setTrtags] = useState([]);

    //select 박스 선택값
    const [selitem, setSelItem] = useState()
    const [selitemName, setSelItemName] = useState()

    //select 박스 항목 선택
    const handleItem =()=>{
        if(itemRef.current.value === ''){
        alert('항목을 선택하세요.')
        itemRef.current.focus()
        }
        console.log(itemRef.current.value)
        selitemName(itemRef.current.value.split('(')[0])
        selitem(itemRef.current.value.split('(')[1].replace())
    }
   
        
       const getData = async(url) => {
        const resp = await fetch(url);
        const data = await resp.json()

        setTdata(data.response.body.items.item)
    }
    //데이터 가져오기 뒤에[]가 있으면 딱 한번만 실행
    useEffect(()=>{
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`
        
        // console.log(url)
        //fetch 함수
        getData(url);
       
    },[])

    //tdata가 저장되었을때
    useEffect(()=>{
        console.log(selitem)
        let tm = tdata.filter(item=>item["categoty"]===selitem)
            .map(item=>
            <tr key={item.fcstDate+item.fcstTime} className="bg-white border-b  hover:bg-gray-50 ">
            <td scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                {selitemName}
            </td>
            <td className="px-6 py-2">
                {`${item.fcstDate.substr(0, 3)}-${item.fcstDate.substr(4, 2)}-${item.fcstDate.substr(6, 2)}` }
            </td>
            <td className="px-6 py-2">
            {`${item.fcstTime.substr(0, 3)}`}
            </td>
            <td className="px-6 py-2">
            {item.fcstValue}
            </td>
            
        </tr>
            
            )
            setTrtags(tm)
    },[selitem])



  return (
    <div className="w-full h-full flex flex-col
                    justify-start items-center">
  
  <div className="justify-start w-full grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
    <div className="text-lg">
        {`${area}${gubun} (${dt.substring(0, 3)}-${dt.substring(4, 2)}-${dt.substring(6, 2)})`}
        <div>
        <TailSelect ops = {ops}
                  opDefault = "---항목선택---"
                  selRef = {itemRef}
                  handleSel = {handleItem}/>
        </div>
    </div>

    </div>
<div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    항목명
                </th>
                <th scope="col" class="px-6 py-3">
                    예측일자
                </th>
                <th scope="col" class="px-6 py-3">
                    예측시간
                </th>
                <th scope="col" class="px-6 py-3">
                    예측 값
                </th>
            </tr>
        </thead>
        <tbody>
           {trtags}
        </tbody>
    </table>
</div>
    
    </div>
  )
}
