var five = require("johnny-five"),
  board, potentiometer;

board = new five.Board();

board.on("ready", function() {
	L1 = new five.Pin(3);
	L2 = new five.Pin(4);
	L3 = new five.Pin(5);
	L4 = new five.Pin(6);
	L5 = new five.Pin(7);
  // Create a new `potentiometer` hardware instance.
  potentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: potentiometer
  });

  // "data" get the current reading from the potentiometer
  potentiometer.on("data", function() {
    console.log(this.value, this.raw);

     if(this.value > 700)
		{
			L1.high();
		}
	else
	{
		L1.low();
	}

     if(this.value > 500)
		{
			L2.high();
		}
	else
	{
		L2.low();
	}

     if(this.value > 300)
		{
			L3.high();
		}
	else
	{
		L3.low();
	}

     if(this.value > 200)
		{
			L4.high();
		}
	else
	{
		L4.low();
	}

     if(this.value > 0)
		{
			L5.high();
		}
	else
	{
		L5.low();
	}
  });
});
