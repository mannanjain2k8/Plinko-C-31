class Plinko{
    constructor(x,y,radius){
        var options={
            'isStatic': true,
            'friction': 1.0,
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
        this.body.debug = true;
    }
    display(){
        var pos = this.body.position;
        fill("white")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}