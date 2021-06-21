class Rubber{
	constructor(x,y,r)
	{
		var options={			
			restitution:1.5,
			friction:7,
			density:5}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        this.rubberImage = loadImage("ru-removebg-preview.png");

		World.add(world, this.body);
	}
	display(){			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);			
			image(this.rubberImage,0,0,this.r,this.r);
			pop()	}
}