import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {
  const dname1 = 'div1'
  const dname2 = 'div2'
  const dname3 = 'div3'

  return (
    
    <div className='w-3/5 h-3/5 
                  flex-col flex justify-center items-center
                 bg-lime-800
                text-lime-50
                '>
  <p className="w-4/5 
                flex justify-start
                font-bold text-2xl
                my-5">
    {dname1}
    </p> 
  <MyDiv2 d1={dname1} d2={dname2} d3={dname3}/>
    </div>
    
  )
}
