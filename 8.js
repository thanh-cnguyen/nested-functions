//By Thanh Nguyen
//CS 4337

function sub1() {
	//Current Ref
	var x = 100
	console.log("x_lv1 =", x)

	function sub2() {	
		//Current Ref
		var y = 10
		console.log("y_lv2 =", y)

		//Ancestor Ref
		console.log("x_ant1_lv2 =", x)
		
		function sub3() {
			//Current Ref
			z = 1
			console.log("z_lv3 = %d", z)
			
			//Ancestor Ref
			console.log("x_ant1_lv3 = %d \ny_ant2_lv3 = %d", x, y)
			
		}
		sub3()
		
	}
	sub2()
	
}
sub1()