import './App.css';
import { FaHome } from "react-icons/fa";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyClock from './01/01_1/MyClock';
// import HelloCss from './02/HelloCss';
// import MyDiv1 from './03_1/MyDiv1';
// import MyList from './04/MyList';
// import MyListMain from './04/MyListMain';
// import BoxOfficeTv from './05/BoxOfficeTv';
// import BoxOfficeTbody from './05/BoxOfficeTbody';
import Lotto from './06/Lotto';
import FoodMain from './07/FoodMain';
import MyClock from './08/MyClock';
// import TrafficMain from './09/TrafficMain';
// import RefVal from './10/RefVal';
// import RefInput from './10/RefInput';
import BoxOffice from './05/BoxOffice'
// import FoodCard from './07/FoodCard';
// import GalleryCard from './11/GalleryCard';
// import GalleryMain from './11/GalleryMain';
import Festival from './12/Festival';
import Frcst from './14/Frcst';
// import RouteMain from './13/RouteMain';


function App() {
  return (//자바스크립트에서 리턴은 하나만 가능
  // JSX 문법 사용
      <BrowserRouter>
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
      <div className='flex justify-end items-center'>
        <div className='mx-5 p-2 rounded-md
                       hover:bg-blue-900 hover:text-white'>
          <Link to='/lotto'>로또</Link>
        </div>
        <div className='mx-5 p-2 rounded-md
                       hover:bg-blue-900 hover:text-white'>
          <Link to='/box'>박스오피스</Link>
        </div>
        <div className='mx-5 p-2 rounded-md
                       hover:bg-blue-900 hover:text-white'>
          <Link to='/food'>푸드마켓</Link>
        </div>
        <div className='mx-5 p-2 rounded-md
                       hover:bg-blue-900 hover:text-white'>
          <Link to='/Festival'>축제</Link>
        </div>
        <div className='mx-5 p-2 rounded-md
                       hover:bg-blue-900 hover:text-white'>
          <Link to='/frcst'>예보</Link>
        </div>

          
      <div>
      <Link to='/'><FaHome className='text-2xl text-black' /></Link>
        </div>
      </div>
     </header>
     
     <main className='grow flex flex-col justify-center items-center'>
     <Routes>
      <Route path='/' element={<MyClock/>}/>
      <Route path='/lotto' element={<Lotto/>}/>
      <Route path='/box' element={<BoxOffice/>}/>
      <Route path='/food' element={<FoodMain/>}/>
      <Route path='/Festival' element={<Festival/>}/>
      <Route path='/frcst' element={<Frcst/>}/>
      </Routes>
      </main>
      <footer className='flex justify-center items-center
                         h-20 bg-slate-500
                         text-base text-white' >
        ⓒ2024 Baejimill. All right reserved.
      </footer>
     </div>
     </BrowserRouter>
  );
}

//화살표 함수로 작성가능
// const App =() =>{
//   return ();
// }


export default App;
