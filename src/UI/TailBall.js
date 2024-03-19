
export default function TailBall({n}) {
    const bColor = [
        'bg-red-800',
        'bg-orange-700',
        'bg-lime-700',
        'bg-blue-800',
        'bg-purple-800'
    ]

    const ballColor = `w-16 h-16 m-3
                     flex justify-center items-center
                      ${bColor[parseInt(n/10)]} text-white 
                     font-bold text-xl
                     rounded-full`

  return (
    <div className={ballColor}>
      {n}
    </div>
  )
}
