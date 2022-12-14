export const paintSnake = (snake:number[],setSnake:any ,arraySnake:NodeListOf<Element> | undefined)=>{
    if(arraySnake){
        snake?.forEach(e=>arraySnake[e].classList.add('snake'))
    }
}