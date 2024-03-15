import MyDiv3 from "./MyDiv3"
export default function MyDiv2({d1,d2,d3}) {
  // console.log(probs)
  return (
    <div className='w-4/5 h-2/3 
                    flex flex-col justify-center items-center
                   bg-lime-600
                  text-lime-50'>
<p className="w-4/5 
           flex justify-start
            font-bold text-2xl
            m-5
            ">
  {`${d1} > ${d2}`}
</p> 
<MyDiv3  d1={d1} d2={d2} d3={d3}  />
</div>
  )
}
