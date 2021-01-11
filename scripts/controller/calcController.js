class CalcController {
	
	constructor(){
		this._displayCalc = "0"; //underline para indicar atributo privado
		this._currentDate;
	} 

	get displayCalc(){
		return this._displayCalc;
	}

	set displayCalc(value){
		this._displayCalc = valor;
	}

	get currentDate(){
		return this._currentDate;
	}

	set currentDate(someDate){
		this._currentDate = someDate;
	}
}