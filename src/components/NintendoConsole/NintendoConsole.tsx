import {useState} from 'react'
import { render } from 'react-dom';
import {AiOutlineArrowUp,AiOutlineArrowRight,AiOutlineArrowLeft,AiOutlineArrowDown} from 'react-icons/ai' 
import SonidoTecla from '../../assets/boton.mp3'
import ScreenInit from '../ScreenInit/ScreenInit';
export default function NintendoConsole() {
    const [renderInitGame, setRenderInitGame] = useState<boolean>(false)
    const [renderGame, setRenderGame] = useState<boolean>(false)
    const sound = new Audio(SonidoTecla);
    const start = ()=>{
        if(renderInitGame){
            sound.play();
            setRenderGame(true)
        }
    }
  return (
    <div className='bg-slate-300  w-screen  sm:w-2/4 h-screen rounded-xl sm:m-auto' style={{borderBottomRightRadius:"6rem"}}>
        <div className=' h-6 m-auto w-2/3 border-b-2   border-b-slate-200 '></div>
        <div className=' bg-slate-500 rounded w-5/6  mt-4 sm:w-96 sm:h-80 m-auto flex flex-col' style={{borderBottomRightRadius:"4rem"}}>
            <div className='  flex items-center justify-between'><span className='ml-3 w-12 sm:w-28 h-3 border-y-2 border-b-blue-700 border-t-rose-500'></span><p className=' text-xs text-white pt-2 pb-2'>DOT MATRIX WITH STEREO SOUND</p><span className=' w-7 sm:w-12 h-3 border-y-2 border-b-blue-700 border-t-rose-500 mr-3'></span></div>
              {!renderInitGame ? <div className='bg-lime-500 w-60 h-60 sm:w-64 sm:h-64 mx-auto my-auto mb-7' >
                    <h1  className='bg-black text-lime-500 text-center'>snake Game 2.0</h1>            
                </div>
            :
             <ScreenInit renderGame={renderGame} setRenderGame={setRenderGame}/> 
            }
        </div>
        <div className='w-5/6 m-auto pt-4'>
            <h3 className='font-bold  text-blue-700 '> <span className='text-lg'> Nintendo </span><span className='text-2xl' style={{fontFamily:"Orbitron"}}>GAME BOY</span><span className='text-xs'>TM</span></h3>
        </div>
        <div className=' flex justify-between items-center mt-4'>
            <div className=' relative ml-4 w-40 h-40  rounded-full'>
                <button  className=' absolute right-14 top-0  bg-black w-11 h-14 flex items-center justify-center rounded-t-2xl'><AiOutlineArrowUp color='white'/></button>
                <button  className=' absolute right-2 bottom-14 rotate-90  bg-black w-11 h-14 flex items-center justify-center rounded-t-2xl'><AiOutlineArrowUp color='white'/></button>
                <button  className=' absolute left-3 bottom-14 -rotate-90  bg-black w-11 h-14 flex items-center justify-center rounded-t-2xl'><AiOutlineArrowUp color='white'/></button>
                <button  className=' absolute right-14 bottom-2 rotate-180  bg-black w-11 h-14 flex items-center justify-center rounded-t-2xl'><AiOutlineArrowUp color='white'/></button>                
            </div>
            <div className='mr-2 w-36 h-20 bg-slate-200 origin-center -rotate-45 rounded-full  flex items-center justify-evenly'>
                <button className=' bg-red-900 w-14 h-14 border-2 border-gray-900 rounded-full font-bold text-white'>B</button>
                <button className=' bg-red-900 w-14 h-14 border-2 border-gray-900 rounded-full font-bold text-white'>A</button>
            </div>
        </div>
        <div className='flex items-center justify-center mt-6 gap-7'>
            <div className='h-10 w-14 origin-center -rotate-45'>
                <div onClick={()=> {sound.play(),setRenderInitGame(!renderInitGame),setRenderGame(false)}} className='h-4 bg-slate-700 rounded-full  '></div>
                <h2 className='font-semibold'>SELECT</h2>
            </div>
            <div className='h-10 w-14 origin-center -rotate-45'>
                <div onClick={start} className='h-4 bg-slate-700 rounded-full  ' ></div>
                <h2 className='font-semibold'>START</h2>
            </div>
        </div>
    </div>
  )
}
