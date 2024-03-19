import TailButton from "../UI/TailButton"
import TailBall from "../UI/TailBall"
import { useState } from "react"
export default function Lotto() {
    const [ballTags, setBallTags] = useState();

  const handleLottoClick = () => {
   let nums = [];

   while(nums.length <7){
    let n = Math.floor(Math.random() * 45 + 1);
    if (!nums.includes(n)) nums.push(n)
   }

console.log(nums)
nums.splice(6,0,'+');

const tm = nums.map((item, idx) =>
        idx === 6 ? <span key={`ball${item}`}
                className="text-3xl font-bold mx-2">    
                {item} 
                </span>
        : <TailBall n={item} key={`ball${item}`}/>
//     if (idx === 5) 
//         return<>
//                 <TailBall n={item} key={`ball${item}`}/>    
//                 <div className="font-bold text-2xl">+</div>
//                 </>
//     else
//         return  <TailBall n={item} key={`ball${item}`}/> 
// })
)
    setBallTags(tm);
  }
 

  return (
    <div className="flex flex-col
                    justify-center items-center 
                    w-full h-full">
       <div className="flex justify-center items-center
                       m-5">
                        {ballTags}
      
       </div>
       <div >
      <TailButton caption='로또번호생성' 
                  color='red'
                  handleClick={handleLottoClick}/>
     </div>
    </div>
  )
}