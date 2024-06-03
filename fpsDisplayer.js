class FPS{
    #textSize;
    #textXpos;
    #textYpos;
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.#textSize = 25;


        this.#textXpos = this.x - (this.#textSize/2) 
        this.#textYpos =this.y - (this.#textSize + (this.#textSize/2)) 
    }

    show(){
        fill(250,100,50)
        rect(this.#textXpos,this.#textYpos,this.#textSize*2)
        
        textSize(this.#textSize)
        fill(0,100,100)
        text(frameRate().toFixed(0), this.x, this.y);
    }
}