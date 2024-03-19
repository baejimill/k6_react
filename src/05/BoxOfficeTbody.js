import mydata from "./BoxOffice.json"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";

export default function BoxOfficeTbody({boxList,setSelMv}) {

    const handleClick = (mv) => {
        console.log(mv)
        //할당 연산자로 state 변수 변경불가 => 업데이트 함수 변경
        // selMv = Mv;
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
    <tbody>
    {trs}
    </tbody>
  )
}
