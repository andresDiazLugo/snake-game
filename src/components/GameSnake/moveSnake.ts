export const moveSnake = (snake:number[],setSnake:any,direction:number,squares:NodeListOf<Element>|undefined)=>{
    if(squares){
        const tail:number = snake.pop() as number
        squares[tail].classList.remove('snake')
        snake.unshift(snake[0]+direction)
        squares[snake[0]].classList.add('snake')
    }
}