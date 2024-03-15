export default function MyDiv3(d1,d2,d3) {
   
  return (
    <div className='w-4/5 h-2/3 
                    flex flex-col justify-center items-start
                   bg-lime-400
                  text-lime-50'>
<p className="w-4/5 
           flex justify-start
            font-bold text-2xl
            m-5
            ">
{`${d1} > ${d2} >${d3}`}
</p> 

</div>
  )
}
