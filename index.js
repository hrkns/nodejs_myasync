"use strict";

/*
	implementacion personal de un "secuenciador" para operaciones asincronas
	POR IMPLEMENTAR: metodo 'go' que permitiria ir de manera selectiva a cualquier funcion de la secuencia dada
*/

module.exports = {
	async : function (parms) {
		var __POS__ = 0;
		var n = parms.length;

		function f(){
			if(__POS__ < n){
				parms[__POS__++].apply(null, arguments);
			}
		}

		this.next = this.start = function(t){
			f.apply(null, arguments);
			return T;
		}

		var T = this;
	}
}