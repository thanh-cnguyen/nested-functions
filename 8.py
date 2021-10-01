#By Thanh Nguyen
#CS 4337

def sub1():
	#Current Ref
	x = 100
	print("x_lv1 =", x)

	def sub2():
		#Current Ref
		y = 10
		print("y_lv2 =", y)

		#Ancestor Ref
		print("x_ant1_lv2 =", x)
		
		def sub3():
			#Current Ref
			z = 1
			print("z_lv3 =", z)

			#Ancestor Ref
			print("x_ant1_lv3 = {} \ny_ant2_lv3 = {}".format(x, y)) 

		sub3()
		
	sub2()

sub1()
