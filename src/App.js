// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyClock from './01/01_1/MyClock';
import './App.css';
import HelloCss from './02/HelloCss';
import { FaHome } from "react-icons/fa";
// import MyDiv1 from './03_1/MyDiv1';
// import MyList from './04/MyList';
// import MyListMain from './04/MyListMain';
// import BoxOfficeTv from './05/BoxOfficeTv';
// import BoxOfficeTbody from './05/BoxOfficeTbody';
// import Lotto from './06/Lotto';
import FoodCard from './07/FoodCard';
import FoodMain from './07/FoodMain';
import MyClock from './08/MyClock';
import TrafficMain from './09/TrafficMain';

function App() {
  return (//자바스크립트에서 리턴은 하나만 가능
  // JSX 문법 사용
      // {/* <MainHeader />
      // <Hello />
      // <Hello />
      // <Hello /> */}
      // {/* <MyClock /> */}
      <div className='flex flex-col
                       w-full max-w-screen-xl
                       h-screen
                       mx-auto
                       overscroll-y-auto
                       '>
     <header className='flex justify-between items-center
                        h-20  p-10
                        text-xl font-bold text-sky-700
                        bg-slate-200
                       
                        '>
      <div>리액트실습</div>
      <div><FaHome className='text-2xl text-black' /></div>
     </header>
     <main className='grow flex flex-col justify-center items-center'>
        {/* <HelloCss /> */}
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <MyListMain />/ */}
        {/* <BoxOfficeTv /> */}
        {/* <Lotto /> */}
        {/* <FoodCard/> */}
        {/* <FoodMain /> */}
        {/* <MyClock /> */}
        <TrafficMain />
      
      </main>
      <footer className='flex justify-center items-center
                         h-20 bg-slate-500
                         text-base text-white' >
        ⓒ2024 Baejimill. All right reserved.
      </footer>
     </div>
  );
}

//화살표 함수로 작성가능
// const App =() =>{
//   return ();
// }


export default App;
