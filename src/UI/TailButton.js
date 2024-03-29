export default function TailButton({caption, color, handleClick}) {
    // console.log(color)
    const colorObj = {
      'blue' : 'bg-blue-700' ,
      'red'  : 'bg-red-700' ,
      'orange' : 'bg-orange-700'
    }
    const hoverObj = {
      'blue' : 'hover:bg-blue-900' ,
      'red'  : 'hover:bg-red-900' ,
      'orange' : 'hover:bg-orange-900'
    }
    const bColor = `px-4 py-2 m-2 rounded-md w-full
                    ${colorObj[color]}
                    ${hoverObj[color]} text-white`;
    

    return (
      <button className= {bColor}
      // <button className="hover:bg-slate-600"
              onClick={handleClick}>
        {caption}
      </button>
    )
  }
