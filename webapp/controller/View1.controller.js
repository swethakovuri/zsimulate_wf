sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function(Controller,t) {
	"use strict";
    var o,t;
	return Controller.extend("simulate.wfzsimulate_wf.controller.View1", {
		
		onInit : function(){
			
			var e = {
				SelectedType: " ",
				DocumentType: [{
					DocType: "Prdid",
					Name: "Productid" },
					{
					DocType: "Sord",
					Name: "Salesorder"	
					}]
			};
			
			var s = this.getView();
			var o = new t(e);
			s.setModel(o, "doctype");
		}
		
	});
});
