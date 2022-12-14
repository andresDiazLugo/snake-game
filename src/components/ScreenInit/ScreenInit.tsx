import sonidoIntro from '../../assets/sonidoIntro.mp3'
import {prop} from '../../types/types'
import GameSnake from '../GameSnake/GameSnake'
export default function ScreenInit({renderGame,setRenderGame, direction,moveSnake,prueba}:prop ) {
    if(!renderGame){
        return (    
            <div  className='bg-lime-500 w-60 h-60 sm:w-64 sm:h-64 mx-auto my-auto mb-7 flex flex-col items-center justify-center gap-3'>
               <audio autoPlay loop>
                <source src={sonidoIntro}/>
               </audio>
               <div className=' w-28 h-20'>
                 <img className='w-full' src='https://i.pinimg.com/originals/47/04/24/470424ded5acade0464f077f007f269b.png'/>
               </div>
                <h1 className='font-bold'>Snake Game 2.0</h1>
                <h3 className='font-bold animate-bounce' style={{ fontFamily:"Press Start" }}>PRESS START</h3>
            </div>
          )
    }
    return(
        <GameSnake prueba={prueba} moveSnake={moveSnake} direction={direction}/>
    )

}
