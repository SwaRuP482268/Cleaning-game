class PAPER{
	constructor(x,y)
	{
	var options = {
		isStatic:false,
        density:1.2,
		friction: 0,
		restitution:0.3


	}
		
        
		this.body=Bodies.rectangle(500,600,100,100,options);
        this.height=100;
        this.width=100;
        this.image=loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
				
			push()
			imageMode(CENTER)
			image(this.image,300,627,100,100);
			pop()
	}

}