class Box {
    constructor(x,y,width,height){
     var stop = {
         isStatic:true
     }
     this.body = Bodies.rectangle(x,y,width,height,stop);
     this.width = width;
     this.height = height;
     
    }
display(color){
     var pos = this.body.position;
    
     push();
     rectMode(CENTER);
     fill(color);
     rect(pos.x,pos.y,this.width,this.height);
     pop();
}




};
