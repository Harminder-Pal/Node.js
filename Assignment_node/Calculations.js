const Calculations = {
	val1: 6,
	val2: 3,
	add(){
		console.log(parseInt(this.val1) + parseInt(this.val2));
	},
	subtract(){
		console.log(parseInt(this.val1) - parseInt(this.val2));
	},
	multiply(){
		console.log(parseInt(this.val1) * parseInt(this.val2));
	},
	divide(){
		console.log(parseInt(this.val1) / parseInt(this.val2));
	}
};
Calculations.add();
Calculations.subtract();
Calculations.multiply();
Calculations.divide();
	