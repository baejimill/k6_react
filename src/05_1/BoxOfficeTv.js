import BoxOfficeData from "./BoxOffice.json"
import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeinfo from "./BoxOfficeinfo";

export default function BoxOfficeTv() {
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
  console.log("boxList=", boxList)

  //state변수
  const [selMv, setSelMv] = useState();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border">
      <BoxOfficeThead />
        <BoxOfficeTbody boxList={boxList} setSelMv={setSelMv} />
      </table>
     <BoxOfficeinfo selMv={selMv}/>
    </div>
  )
}
