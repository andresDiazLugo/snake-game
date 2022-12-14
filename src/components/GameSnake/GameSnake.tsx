import {useState,useEffect} from 'react'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {moveSnake} from './moveSnake'
import { generateSquares } from './generateScuares'
import {paintSnake} from './paintSnake'
import {prop} from '../../types/types'
export default function GameSnake({direction}:prop) {
    
    const lives:number[] = [1,2,3]
    // const [snake,setSnake] = useState<number[]>([55,54,53])
    // const [arraySnakeSquares, setArraySnake] = useState<NodeListOf<Element>>()
    // const colXrow = 13
    const squares = generateSquares()
    
  return (
    <div style={{width:"13rem", height:"fit-content"}} className="bg-lime-500 w-3/5 sm:w-64 sm:h-64 mx-auto my-auto mb-7">
    <div className=' flex justify-between bg-gray-900 items-center'>
        <h4 className='font-bold  text-white' style={{fontFamily:"Press Start"}}>Score: 0</h4>
        <div className='flex gap-1'>
            {lives.map(e=><BsFillSuitHeartFill key={e} color='red'/>)}
        </div>
     </div>
    <div>
    </div>
    <div id='grid' className='flex flex-wrap justify-center'>
        {squares.map(element=><section key={String(element)}></section>)}
    </div>
    </div>
    
  )
}
