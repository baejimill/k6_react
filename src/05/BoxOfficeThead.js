import MyData from "./BoxOffice.json"


export default function BoxOfficeThead() {
  return (
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
  )
}
