import MyData from "./BoxOffice.json"

export default function BoxOfficeinfo({selMv}) {
  return (
    <div className="w-4/5 h-10 flex text-center p-2
    justify-center items-center
   bg-slate-600 text-white">
{selMv === undefined && '영화를 선택해 주십시오.'}
{selMv &&
`[${selMv.movieCd}] ${selMv.movieNm} -
누적관객수 : ${parseInt(selMv.salesAcc).toLocaleString()}명
누적매출액 : ${parseInt(selMv.audiAcc).toLocaleString()}원`
}
</div>
  )
}
