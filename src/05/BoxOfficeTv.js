import BoxOfficeData from "./BoxOffice.json"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import { useState } from "react";

export default function BoxOfficeTv() {
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
  console.log("boxList=", boxList)

  //state변수
  const [selMv, setSelMv] = useState();

const handleClick = (mv) => {
  console.log(mv)
  setSelMv(mv);
}

  const trs = boxList.map(item =>
    <tr key={item.movieCd} 
        onClick={() =>{handleClick(item)}}
         className="h-10 p-1
                     hover:bg-cyan-200 hover:font-bold">
      <td className="text-center inline-flex w-11/12
                   justify-center items-center">
          {item.rank}
      </td>
      <td>
        {item.movieNm}
      </td>
      <td className="text-right">
        {parseInt(item.salesAmt).toLocaleString()}원
      </td>
      <td className="text-right">
        {parseInt(item.audiAcc).toLocaleString()}명
      </td>
      <td className="pt-3 flex justify-center items-center">
        {parseInt(item.rankInten) === 0 ? <CgLoadbar />
          : parseInt(item.rankInten) > 0 ? <FaArrowUp className="text-red-500"/>
            : <FaArrowDown className="text-blue-500"/>
        }
        {parseInt(item.rankInten) !==0 && Math.abs(item.rankInten)}
      </td>
    </tr>
  );

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border">
        <thead>
          <tr className=" h-10
                        text-center
                         bg-slate-600 text-white" >
            <th className="w-5">순위</th>
            <th className="w-1/5">영화명</th>
            <th className="w-1/5"> 매출액</th>
            <th className="w-1/5">관객수</th>
            <th className="w-10">증감율</th>
          </tr>
        </thead>
        <tbody>

          {trs}

        </tbody>
      </table>
      <div className="w-4/5 h-10 text-center p-2
                        justify-center items-center
                       bg-slate-600 text-white">
      {selMv === undefined && '영화를 선택해 주십시오.'}
       {selMv &&
        `[${selMv.movieCd}] ${selMv.movieNm} -
          누적관객수 : ${parseInt(selMv.salesAcc).toLocaleString()}명
          누적매출액 : ${parseInt(selMv.audiAcc).toLocaleString()}원`
       }
      </div>
    </div>
  )
}
