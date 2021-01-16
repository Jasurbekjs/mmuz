(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/contracts.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/contracts.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" [routerLink]=\"'/dashboard'\">\n      <img src=\"../../assets/log1.png\" style=\"border-radius: 0 0 0 0; height: 50px; size: 50px\"  alt=\"\">\n  </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\"  [routerLink]=\"'/dashboard'\">Активные перевозки</a>\n        <a class=\"nav-item nav-link active\"  [routerLink]=\"'/contracts'\">Договоры</a>\n      </div>\n    </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <br/>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-lg-1\"></div>\n\t<div class=\"col-lg-5\">\n\t\t<h3>Договоры</h3>\n\t</div>\n\t<div class=\"col-lg-5\">\n\t\t\n\t</div>\n\t<div class=\"col-lg-1\"></div>\n</div>\n<br/>\n<div class=\"row\">\n  \t<div class=\"col-lg-1\"></div>\n  \t<div class=\"col-lg-5\">\n    \t<button \n    \t  type=\"button\" \n    \t  class=\"btn btn-outline-primary\" \n    \t  routerLink=\"tsclient\" \n    \t  routerLinkActive=\"active\" \n    \t  tabindex=\"-1\"\n    \t  >\n    \t  TS Client\n    \t</button>\n    \t<button \n    \t  type=\"button\" \n    \t  class=\"btn btn-outline-primary\" \n    \t  routerLink=\"tsforwarder\" \n    \t  routerLinkActive=\"active\" \n    \t  tabindex=\"-1\"\n    \t  >\n    \t  TS Forwarder\n    \t</button>\n    \t<button \n    \t  type=\"button\" \n    \t  class=\"btn btn-outline-primary\" \n    \t  routerLink=\"mmclient\" \n    \t  routerLinkActive=\"active\" \n    \t  tabindex=\"-1\"\n    \t  >\n    \t  MM Client\n    \t</button>\n    \t<button \n    \t  type=\"button\" \n    \t  class=\"btn btn-outline-primary\" \n    \t  routerLink=\"mmforwarder\" \n    \t  routerLinkActive=\"active\" \n    \t  tabindex=\"-1\"\n    \t  >\n    \t  MM Forwarder\n    \t</button>\n  \t</div>\n  \t<div class=\"col-lg-5\">\n  \t</div>\n  \t<div class=\"col-lg-1\">\n  \t</div>\n</div>\n<br/>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/edit/edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/edit/edit.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-1\"></div>\n  <div class=\"col-lg-10\">\n    <h4>Договор с {{client.value}} {{name_company.value}} ({{contract_type.value}})</h4>\n    <br/>\n    <div class=\"card\">\n      <div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n          <h5>Реквизиты</h5>\n        </div>\n        <div class=\"card-body text-dark\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <label for=\"name_client\">Название органицации</label>\n              <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"company\" [formControl]=\"name_company\">\n              <mat-autocomplete autoActiveFirstOption #company=\"matAutocomplete\" (optionSelected)=\"selectedname_company($event)\">\n                <mat-option *ngIf=\"isLoadingname_company\" class=\"is-loading\">Загрузка...</mat-option>\n                <ng-container *ngIf=\"!isLoadingname_company\">\n                  <mat-option *ngFor=\"let company of filteredname_company\" [value]=\"company\">\n                    {{company}}\n                  </mat-option>\n                </ng-container>\n              </mat-autocomplete>\n            </div>\n            <div class=\"col-lg-6\">\n              <label for=\"name_client\">Name of the organization</label>\n              <input type=\"text\" class=\"form-control\"  [formControl]=\"name_company_eng\">\n            </div>\n          </div>        \n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"input-group mt-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 150px;\">Директор</span>\n                </div>\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"director_company\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 150px;\">Контактное лицо</span>\n                </div>\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"contact_person\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 150px;\">Телефон</span>\n                </div>\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"contact_number\">\n              </div>\n              <div class=\"input-group mt-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Страна</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"country_company\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Регион</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"region_company\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Индекс</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"index_city_company\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Город</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"city_company\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Улица</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"street_company\">\n              </div>\n            </div>\n            <!---English-->\n            <div class=\"col-lg-6\">\n              <div class=\"input-group mt-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 150px;\">Director</span>\n                </div>\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"director_company_eng\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 150px;\">Сontact person</span>\n                </div>\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"contact_person_eng\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 150px;\">Telephone</span>\n                </div>\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"contact_number_eng\">\n              </div>\n              <div class=\"input-group mt-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Сountry</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"country_company_eng\" >\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Region</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"region_company_eng\">\n                <div class=\"input-group-prepend \">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Index</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"index_city_company_eng\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">City</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"city_company_eng\">\n              </div>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" style=\"width: 80px;\">Street</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"street_company_eng\">\n              </div>\n            </div>\n          </div>\n          <hr/>\n          <textarea style=\"width: 100%;\" rows=\"4\" [formControl]=\"comment_company\" placeholder=\"Комментарий...\"></textarea>\n        <hr/>\n          <button \n            class=\"btn btn-block btn-success\"\n            (click)=\"SaveCompany()\"\n            [disabled]=\"saveButton\"\n            >Сохранить\n          </button>\n        <hr/>\n      </div>\n    </div>\n  </div> \n</div>\n<br/>\n<div class=\"row\">\n  <div class=\"col-lg-1\"></div>\n  <div class=\"col-lg-10\">\n    <div class=\"card\">\n      <div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n        <h5>Договор</h5>\n      </div>\n      <div class=\"card-body text-dark\">\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <label>Номер договора</label>\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"contract_number\">  \n              </div>\n              <div class=\"col-lg-6\">\n                <label>Дата договора</label>\n                <input type=\"date\" class=\"form-control\"  [formControl]=\"contract_date\">\n              </div>\n            </div> \n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <label>Валюта</label>\n                <input type=\"text\" class=\"form-control\"  [formControl]=\"contract_currency\">  \n              </div>\n              <div class=\"col-lg-6\">\n                <label>На сумму</label>\n                <input type=\"number\" class=\"form-control\"  [formControl]=\"contract_amount\">\n              </div>\n            </div> \n            <hr/>\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <button class=\"btn btn-success btn-block\" (click)=\"SaveContract()\">Сохранить</button>\n              </div>\n            </div> \n            <hr/>\n          </div>\n          <div class=\"col-lg-6\">\n            <label>Загрузка файла Договора</label>\n            <div class=\"row\">\n\n              <div class=\"col-md-12 mt-3\" *ngIf=\"!loaded\">      \n                <div class=\"form-group\">\n                  <input type=\"file\" name=\"image\" (change)=\"fileProgress($event)\" />\n                </div>\n                <div class=\"form-group\">\n                  <button class=\"btn btn-primary btn-block \"  (click)=\"onSubmit()\">Загрузить</button>\n                </div>\n              </div>\n              <div class=\"col-lg-12 mt-3\" *ngIf=\"loaded\">\n                <button class=\"btn btn-block btn-success\" (click)=\"downContract()\">Скачать Договор</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> \n    </div>\n  </div>\n</div>\n<br/><br/><br/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/mmclient/mmclient.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/mmclient/mmclient.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t<div class=\"row\">\n\t\t<div class=\"col-lg-1\"></div>\n\t\t<div class=\"col-lg-10\">\n\t\t\t<button class=\"btn btn-block btn-success\" (click)=\"createMMC()\">\n\t\t\t\t<fa-icon [icon]=\"faPlusSquare\" size=\"lg\"></fa-icon> \n\t\t\t\tДобавить новый договор\n\t\t\t</button>\n\t\t\t<br/>\n\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead style=\"background-color: #0e91e3\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t№\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tForwarder\n\t\t\t\t\t</th>\n\t\t\t\t\t<th colspan=\"2\">\n\t\t\t\t\t\tContract\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tCurrency\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tAmount\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tОператор\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tПодробно\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let mmc of MMClient; index as i;\" style=\"background-color: white;\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmc.name_company}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width=\"100px\">\n\t\t\t\t\t\t{{mmc.contract_number}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmc.contract_date}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmc.currency}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmc.amount}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmc.operator}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td align=\"center\">\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', mmc.id]\">\n\t\t\t\t\t\t\t<fa-icon [icon]=\"faEdit\" size=\"lg\"></fa-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\n\t</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/mmforwarder/mmforwarder.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/mmforwarder/mmforwarder.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-1\"></div>\n\t\t<div class=\"col-lg-10\">\n\t\t\t<button class=\"btn btn-block btn-success\" (click)=\"createMMF()\">\n\t\t\t\t<fa-icon [icon]=\"faPlusSquare\" size=\"lg\"></fa-icon> \n\t\t\t\tДобавить новый договор\n\t\t\t</button>\n\t\t\t<br/>\n\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead style=\"background-color: #0e91e3\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t№\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tClient\n\t\t\t\t\t</th>\n\t\t\t\t\t<th colspan=\"2\">\n\t\t\t\t\t\tContract\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tCurrency\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tAmount\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tОператор\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tПодробно\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let mmf of MMForwarder; index as i;\" style=\"background-color: white;\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmf.name_company}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width=\"100px\">\n\t\t\t\t\t\t{{mmf.contract_number}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmf.contract_date}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmf.currency}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmf.amount}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{mmf.operator}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td align=\"center\">\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', mmf.id]\">\n\t\t\t\t\t\t\t<fa-icon [icon]=\"faEdit\" size=\"lg\"></fa-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\t\t\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-1\"></div>\t\t\n\t<div class=\"col-lg-10\">\n\t\t<button (click)=\"getSelectedRows()\">Get Selected Rows</button>\n\n\t</div>\t\t\n\t<div class=\"col-lg-1\"></div>\t\t\n\t\n</div>\n<br/><br/><br/><br/><br/><br/><br/><br/><br/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/tsclient/tsclient.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/tsclient/tsclient.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-1\"></div>\n\t\t<div class=\"col-lg-10\">\n\t\t\t<button class=\"btn btn-block btn-success\" (click)=\"createTSC()\">\n\t\t\t\t<fa-icon [icon]=\"faPlusSquare\" size=\"lg\"></fa-icon> \n\t\t\t\tДобавить новый договор\n\t\t\t</button>\n\t\t\t<br/>\n\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead style=\"background-color: #0e91e3\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t№\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tForwarder\n\t\t\t\t\t</th>\n\t\t\t\t\t<th colspan=\"2\">\n\t\t\t\t\t\tContract\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tCurrency\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tAmount\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tОператор\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tПодробно\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let tsc of TSClient; index as i;\" style=\"background-color: white;\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsc.name_company}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width=\"100px\">\n\t\t\t\t\t\t{{tsc.contract_number}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsc.contract_date}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsc.currency}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsc.amount}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsc.operator}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td align=\"center\">\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', tsc.id]\">\n\t\t\t\t\t\t\t<fa-icon [icon]=\"faEdit\" size=\"lg\"></fa-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\t\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/tsforwarder/tsforwarder.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/tsforwarder/tsforwarder.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-1\"></div>\t\n\t\t<div class=\"col-lg-10\">\t\n\t\t\t<button class=\"btn btn-block btn-success\" (click)=\"createTSF()\">\n\t\t\t\t<fa-icon [icon]=\"faPlusSquare\" size=\"lg\"></fa-icon> \n\t\t\t\tДобавить новый договор\n\t\t\t</button>\n\t\t\t<br/>\n\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead style=\"background-color: #0e91e3\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>\n\t\t\t\t\t\t№\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tClient\n\t\t\t\t\t</th>\n\t\t\t\t\t<th colspan=\"2\">\n\t\t\t\t\t\tContract\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tCurrency\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tAmount\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tОператор\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tПодробно\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let tsf of TSForwarder; index as i;\" style=\"background-color: white;\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsf.name_company}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td width=\"100px\">\n\t\t\t\t\t\t{{tsf.contract_number}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsf.contract_date}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsf.currency}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsf.amount}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{tsf.operator}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td align=\"center\">\n\t\t\t\t\t\t<a [routerLink]=\"['../edit', tsf.id]\">\n\t\t\t\t\t\t\t<fa-icon [icon]=\"faEdit\" size=\"lg\"></fa-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\t\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  \t<a class=\"navbar-brand\" [routerLink]=\"'/dashboard'\">\n  \t\t<img src=\"../../assets/log1.png\" style=\"border-radius: 0 0 0 0; height: 50px; size: 50px\"  alt=\"\">\n\t</a>\n  \t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \t\t<span class=\"navbar-toggler-icon\"></span>\n  \t</button>\n  \t<div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    \t<div class=\"navbar-nav\">\n    \t  <a class=\"nav-item nav-link active\"  [routerLink]=\"'/dashboard'\">Активные перевозки</a>\n    \t  <a class=\"nav-item nav-link\"  [routerLink]=\"'/contracts'\">Договоры</a>\n    \t</div>\n  \t</div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <br/>\n  </div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-1\"></div>\n\t<div class=\"col-lg-5\">\n\t\t<h3>Активные перевозки</h3>\n\t</div>\n\t<div class=\"col-lg-5\">\n\t\t<button class=\"btn btn-block btn-success\" (click)=\"createShipping()\">\n\t\t\t<fa-icon [icon]=\"faPlusSquare\" size=\"lg\"></fa-icon> \n\t\t\tДобавить новую перевозку\n\t\t</button>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <br/>\n  </div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-lg-1\"></div>\n\t<div class=\"col-lg-10\">\n\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead style=\"background-color: #0e91e3\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th colspan=\"2\">\n\t\t\t\t\t\t№\n\t\t\t\t\t</th>\n\t\t\t\t\t<th colspan=\"2\">\n\t\t\t\t\t\tТип\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tМаршрут\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tСтатус\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tДата создания\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tКомментарий\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>\n\t\t\t\t\t\tПодробно\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"let shipping of Logistics; index as i;\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{shipping.id}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td *ngIf=\"shipping.type_transportation==1;\" align=\"center\"> \n\t\t\t\t\t\t<img src=\"../../assets/load.png\" width=\"100px\" height=\"40px\">\n\t\t\t\t\t</td>\n\t\t\t\t\t<td *ngIf=\"shipping.type_transportation==1;\">\n\t\t\t\t\t\t{{shipping.load_transportation}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td *ngIf=\"shipping.type_transportation==0;\" colspan=\"2\" align=\"center\">\n\t\t\t\t\t\t<img src=\"../../assets/air.png\" style=\"width: 100px; height: 40px;\">\n\t\t\t\t\t</td>\t\t\t\t\t\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-5\" style=\"text-align: right;\">\n\t\t\t\t\t\t\t\t{{shipping.from_country}}<br/>\n\t\t\t\t\t\t\t\t{{shipping.from_city}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-5\" style=\"text-align: left;\">\n\t\t\t\t\t\t\t\t{{shipping.to_country}}<br/>\n\t\t\t\t\t\t\t\t{{shipping.to_city}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{shipping.status}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{shipping.created_date}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{shipping.comments}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td align=\"center\">\n\t\t\t\t\t\t<a [routerLink]=\"['../shipping', shipping.id,'general']\">\n\t\t\t\t\t\t\t<fa-icon [icon]=\"faEdit\" size=\"lg\"></fa-icon>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</td>\n\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t\t<tfoot style=\"background-color: #0e91e3\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"10\"></td>\n\t\t\t\t</tr>\n\t\t\t</tfoot>\n\t\t</table>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main content container -->\n<div class=\"jumbotron\" style=\"margin: 0; height: 100vh; overflow: hidden\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4\">\n\n                <div class=\"container\">\n                    <div class=\"card card-container\">\n                        <img id=\"profile-img\" class=\"profile-img-card\" src=\"../../assets/log1.png\" style=\"border-radius: 0 0 0 0; height: 100%; size: 100%\" />\n                        <p id=\"profile-name\" class=\"profile-name-card\"></p>\n                        <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\">\n                            <span id=\"reauth-email\" class=\"reauth-email\"></span>\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" \n                            [(ngModel)]=\"user.email\"\n                            [ngModelOptions]=\"{standalone: true}\"\n                            (ngModelChange)=\"email_change()\" \n                            required autofocus>\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\"\n                            [(ngModel)]=\"user.password\"\n                            [ngModelOptions]=\"{standalone: true}\"\n                            (ngModelChange)=\"password_change()\"\n                            required>\n                            <button class=\"btn btn-lg btn-primary btn-block btn-signin\" \n                            type=\"submit\"\n                            >Войти</button>\n                        </form><!-- /form -->\n                        <div *ngIf=\"error\">Content to render when condition is true.</div>\n                    </div><!-- /card-container -->\n                </div><!-- /container -->\n            \n            </div>\n            <div class=\"col-sm-4\"></div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/cmr/cmr.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/cmr/cmr.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br/>\n<div class=\"row\">\n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-10\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n\t\t\t\t<h5>Загрузка CMR</h5>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let truck of tractor; let i=index; let last=last\"> \n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\"> \n\t\t    \t\t\t    <div class=\"col-lg-12\">  \n\t\t    \t\t\t     \t<div class=\"row\">\n\t\t    \t\t\t     \t\t<div class=\"col-lg-6\">\n\t\t    \t\t\t     \t\t\t<label for=\"carrier\">Номер Т/С</label>   \n\t\t    \t\t\t     \t\t</div>\n\t\t    \t\t\t     \t\t<div class=\"col-lg-6\">\n\t\t    \t\t\t     \t\t\t<h5>{{tractor[i]}} / {{trailer[i]}}</h5>\n\t\t    \t\t\t     \t\t</div>\n\t\t    \t\t\t     \t</div>\n\t\t    \t\t\t    </div>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\t\t\t\t\t<div class=\"container\">\n\t\t    \t\t\t<div class=\"row\">\n\t\t    \t\t\t\t<div class=\"col-lg-6\">  \n\t\t    \t\t\t\t   \t<label for=\"num_agreement\">Водитель</label>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<div class=\"col-lg-6\">  \n\t\t    \t\t\t\t\t{{driver_first_name[i]}} {{driver_last_name[i]}}\n\t\t    \t\t\t\t</div>\n\t\t  \t\t\t\t</div>\n\t\t  \t\t\t</div>\n\t\t  \t\t\t<br/>\n\t\t  \t\t</div>\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\"> \n\t\t    \t    \t  \t<div class=\"col-lg-6\">  \n\t\t\t\t\t\t\t\t<label for=\"num_order\">Номер CMR</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"cmr_number[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t    \t    \t  \t<div class=\"col-lg-6\">  \n\t\t\t\t\t\t\t\t<label for=\"date_order\">Дата CMR</label>\n\t\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"cmr_date[i]\">\n\t\t    \t    \t  \t</div>\n\t\t    \t    \t</div>\n\t\t    \t    \t<br/>\n\t\t    \t    \t<div class=\"row\">\n\t\t    \t\t\t\t<div class=\"col-lg-12\">  \n\t\t    \t\t\t\t   <button class=\"btn btn-success btn-block\" (click)=\"onSubmit(i)\">Сохранить</button>\n\t\t    \t\t\t\t</div>\n\t\t  \t\t\t\t</div>\n\t\t    \t    \t<div class=\"row\">\n\t\t\t\t\t\t    <div class=\"col-lg-12 mt-3\" *ngIf=\"!loaded[i]\">      \n\t\t\t\t\t\t        <input type=\"file\" name=\"image\" (change)=\"fileProgress($event)\" />\n\t\t\t\t\t\t        <br/><br/>\n\t\t\t\t\t\t        <button class=\"btn btn-primary btn-block\"  (click)=\"onSubmitFile(i)\">Загрузить</button>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"col-lg-12 mt-3\" *ngIf=\"loaded[i]\">\n\t\t\t\t\t\t    \t<button class=\"btn btn-block btn-success\" (click)=\"downCMR(i)\">Скачать CMR</button>\n\t\t\t\t\t\t    </div>\n\t\t    \t    \t</div>\n\t\t    \t    </div>\n\t\t    \t    <br/>\n\t\t    \t</div>\n\t\t    \t<div class=\"col-lg-12\" *ngIf=\"!last\">\n\t\t    \t\t<div class=\"card-footer bg-transparent border-secondary\">\n\t\t    \t\t\t\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\n</div>\n<br/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/document/client-order/client-order.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/document/client-order/client-order.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br/>\n<div class=\"row\">\n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-10\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n\t\t\t\t<h5>Клиент</h5>\n\t\t\t</div>\n\t\t\t<div class=\"row\"> \n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\"> \n\t\t    \t\t\t    <div class=\"col-lg-12\">  \n\t\t    \t\t\t     \t<div class=\"row\">\n\t\t    \t\t\t     \t\t<div class=\"col-lg-6\">\n\t\t    \t\t\t     \t\t\t<label for=\"carrier\">Наименование компании</label>   \n\t\t    \t\t\t     \t\t</div>\n\t\t    \t\t\t     \t\t<div class=\"col-lg-6\">\n\t\t    \t\t\t     \t\t\t<h5>{{client_name}}</h5>\n\t\t    \t\t\t     \t\t</div>\n\t\t    \t\t\t     \t</div>\n\t\t    \t\t\t    </div>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\t\t\t\t\t<div class=\"container\">\n\t\t    \t\t\t<div class=\"row\">\n\t\t    \t\t\t\t<div class=\"col-lg-6\">  \n\t\t    \t\t\t\t   \t<label for=\"num_agreement\">Номер договора №</label>\n\t\t    \t\t\t\t   \t<select class=\"form-control\"  [(ngModel)]=\"contract_number_client\" (change)=\"selectclient($event.target.value)\">\n            \t\t\t\t\t  <option [value]=\"j\" *ngFor=\"let j of contracts_number_client\">{{j}}</option>\n            \t\t\t\t\t</select>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<div class=\"col-lg-6\">  \n\t\t    \t\t\t\t \t<label for=\"num_agreement\">Дата договора</label>\n\t\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"contract_date_client\">\n\t\t    \t\t\t\t</div>\n\t\t  \t\t\t\t</div>\n\t\t  \t\t\t</div>\n\t\t  \t\t\t<br/>\n\t\t  \t\t</div>\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\"> \n\t\t    \t    \t  \t<div class=\"col-lg-6\">  \n\t\t\t\t\t\t\t\t<label for=\"num_order\">Номер Заявки</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"order_number_client\">\n\t\t\t\t\t\t\t</div>\n\t\t    \t    \t  \t<div class=\"col-lg-6\">  \n\t\t\t\t\t\t\t\t<label for=\"date_order\">Дата Заявки</label>\n\t\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"order_date_client\">\n\t\t    \t    \t  \t</div>\n\t\t    \t    \t</div>\n\t\t    \t    \t<br/>\n\t\t    \t    \t<div class=\"row\">\n\t\t    \t\t\t\t<div class=\"col-lg-12\">  \n\t\t    \t\t\t\t   <button class=\"btn btn-success btn-block\" (click)=\"onSubmitClient(i)\">Сохранить</button>\n\t\t    \t\t\t\t</div>\n\t\t  \t\t\t\t</div>\n\t\t    \t    \t<div class=\"row\">\n\t\t\t\t\t\t    <div class=\"col-md-12 mt-3\" *ngIf=\"!loadedClient\">      \n\t\t\t\t\t\t        <div class=\"form-group\">\n\t\t\t\t\t\t            <input type=\"file\" name=\"image\" (change)=\"fileProgress($event)\" />\n\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t        <div class=\"form-group\">\n\t\t\t\t\t\t            <button class=\"btn btn-primary btn-block\"  (click)=\"onSubmitClientFile()\">Загрузить</button>\n\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"col-lg-12 mt-3\" *ngIf=\"loadedClient\">\n\t\t\t\t\t\t    \t<button class=\"btn btn-block btn-success\" (click)=\"downOrderClient()\">Скачать Заявку</button>\n\t\t\t\t\t\t    </div>\n\t\t    \t    \t</div>\n\t\t    \t    </div>\n\t\t    \t    <br/>\n\t\t    \t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\n</div>\n<br/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/document/document.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/document/document.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-client-order></app-client-order>\n<br/>\n<div class=\"row\">\n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-10\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n\t\t\t\t<h5>Перевозчик</h5>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let carrier of Carriers; let i=index; let last=last\"> \n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\"> \n\t\t    \t\t\t    <div class=\"col-lg-12\">  \n\t\t    \t\t\t     \t<div class=\"row\">\n\t\t    \t\t\t     \t\t<div class=\"col-lg-6\">\n\t\t    \t\t\t     \t\t\t<label for=\"carrier\">Наименование компании</label>   \n\t\t    \t\t\t     \t\t</div>\n\t\t    \t\t\t     \t\t<div class=\"col-lg-6\">\n\t\t    \t\t\t     \t\t\t<h5>{{carrier}}</h5>\n\t\t    \t\t\t     \t\t</div>\n\t\t    \t\t\t     \t</div>\n\t\t    \t\t\t    </div>\n\t\t    \t\t\t</div>\n\t\t    \t\t</div>\n\t\t\t\t\t<div class=\"container\">\n\t\t    \t\t\t<div class=\"row\">\n\t\t    \t\t\t\t<div class=\"col-lg-6\">  \n\t\t    \t\t\t\t   \t<label for=\"num_agreement\">Номер договора №</label>\n\t\t    \t\t\t\t   \t<select class=\"form-control\"  [(ngModel)]=\"contract_number[i]\" (change)=\"selectcarrier($event.target.value,i)\">\n            \t\t\t\t\t  <option [value]=\"j\" *ngFor=\"let j of contract_numbers[i]\">{{j}}</option>\n            \t\t\t\t\t</select>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<div class=\"col-lg-6\">  \n\t\t    \t\t\t\t \t<label for=\"num_agreement\">Дата договора</label>\n\t\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"contract_date[i]\">\n\t\t    \t\t\t\t</div>\n\t\t  \t\t\t\t</div>\n\t\t  \t\t\t</div>\n\t\t  \t\t\t<br/>\n\t\t  \t\t</div>\n\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\"> \n\t\t    \t    \t  \t<div class=\"col-lg-6\">  \n\t\t\t\t\t\t\t\t<label for=\"num_order\">Номер Заявки</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"order_number[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t    \t    \t  \t<div class=\"col-lg-6\">  \n\t\t\t\t\t\t\t\t<label for=\"date_order\">Дата Заявки</label>\n\t\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" [(ngModel)]=\"order_date[i]\">\n\t\t    \t    \t  \t</div>\n\t\t    \t    \t</div>\n\t\t    \t    \t<br/>\n\t\t    \t    \t<div class=\"row\">\n\t\t    \t\t\t\t<div class=\"col-lg-12\">  \n\t\t    \t\t\t\t   <button class=\"btn btn-success btn-block\" (click)=\"onSubmit(i)\">Сохранить</button>\n\t\t    \t\t\t\t</div>\n\t\t  \t\t\t\t</div>\n\t\t    \t    \t<div class=\"row\">\n\t\t\t\t\t\t    <div class=\"col-lg-12 mt-3\" *ngIf=\"!loaded[i]\">      \n\t\t\t\t\t\t        <input type=\"file\" name=\"image\" (change)=\"fileProgress($event)\" />\n\t\t\t\t\t\t        <br/><br/>\n\t\t\t\t\t\t        <button class=\"btn btn-primary btn-block\"  (click)=\"onSubmitFile(i)\">Загрузить</button>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"col-lg-12 mt-3\" *ngIf=\"loaded[i]\">\n\t\t\t\t\t\t    \t<button class=\"btn btn-block btn-success\" (click)=\"downOrder(i)\">Скачать Заявку</button>\n\t\t\t\t\t\t    </div>\n\t\t    \t    \t</div>\n\t\t    \t    </div>\n\t\t    \t    <br/>\n\t\t    \t</div>\n\t\t    \t<div class=\"col-lg-12\" *ngIf=\"!last\">\n\t\t    \t\t<div class=\"card-footer bg-transparent border-secondary\">\n\t\t    \t\t\t\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\n</div>\n<br/>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/general/general.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/general/general.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br/>\n<div class=\"row\">\n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-5\">\n\t\t<div class=\"card\">\n\t\t  \t<div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n\t\t  \t\t<h5>Общие сведения</h5>\n\t\t  \t</div>\n  \t\t\t<div class=\"card-body text-dark\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3\"><label for=\"type_transportation\">Тип</label></div>\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t  <label class=\"btn btn-primary\" (click)=\"Autoswitch()\" btnRadio=\"Left\" tabindex=\"0\" role=\"button\">\n\t\t\t\t\t\t  \tАвто\n\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t  <label class=\"btn btn-primary\" (click)=\"Aviaswitch()\" btnRadio=\"Right\" tabindex=\"0\" role=\"button\">\n\t\t\t\t\t\t  \tАвиа\n\t\t\t\t\t\t  </label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-5\" *ngIf=\"Auto.value\">\n\t\t\t\t\t\t<img src=\"../../../assets/load.png\" alt=\"\" style=\"width: 100px; height: 40px;\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-5\" *ngIf=\"!Auto.value\">\n\t\t\t\t\t\t<img src=\"../../../assets/air.png\" alt=\"\" style=\"width: 100px; height: 40px;\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" *ngIf=\"Auto.value\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"input-group\">\n  \t\t\t\t\t  \t\t<div class=\"input-group-prepend\">\n  \t\t\t\t\t  \t\t  <span class=\"input-group-text\" style=\"width: 200px;\">Сервис</span>\n  \t\t\t\t\t  \t\t</div>\n  \t\t\t\t\t  \t\t<select class=\"form-control\" id=\"client\" [formControl]=\"service\">\n     \t\t\t\t  \t\t\t<option [value]=\"i\" *ngFor=\"let i of services\">{{i}}</option>\n     \t\t\t\t\t\t</select>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n  \t\t\t</div>\n  \t\t\t<div class=\"card-footer bg-transparent border-secondary\">\n    \t\t\t<div class=\"row\">\n    \t\t  \t\t<div class=\"col-12\" style=\"text-align: center;\">\n    \t\t  \t\t\t<div class=\"col-12\" style=\"border-bottom: 1px dashed black;\">\n    \t\t  \t\t\t\tМаршрут перевозки\n    \t\t  \t\t\t</div>\n    \t\t  \t\t\t<div class=\"row\">\n    \t\t  \t\t\t\t<div class=\"col-lg-6\" style=\"text-align: center; border-right: 1px dashed black;\">\n    \t\t  \t\t\t\t\tОт куда\n    \t\t  \t\t\t\t\t<input type=\"text\" class=\"form-control\" [matAutocomplete]=\"country_begin_transportation\" [formControl]=\"country_begin\" placeholder=\"из Страны\">\n          \t\t\t\t\t\t<mat-autocomplete autoActiveFirstOption #country_begin_transportation=\"matAutocomplete\" (optionSelected)=\"selectedcountry_begin($event)\">\n         \t\t\t\t\t\t   <mat-option *ngIf=\"isLoadingcountry_begin\" class=\"is-loading\">Загрузка...</mat-option>\n         \t\t\t\t\t\t   <ng-container *ngIf=\"!isLoadingcountry_begin\">\n         \t\t\t\t\t\t     <mat-option *ngFor=\"let country of filteredcountry_begin\" [value]=\"country\">\n         \t\t\t\t\t\t       {{country}}\n         \t\t\t\t\t\t     </mat-option>\n         \t\t\t\t\t\t   </ng-container>\n         \t\t\t\t\t\t </mat-autocomplete>\n                     <input type=\"text\" class=\"form-control\" [formControl]=\"city_begin\" placeholder=\"из Города\">\n    \t\t  \t\t\t\t</div>\n    \t\t  \t\t\t\t<div class=\"col-lg-6\" style=\"text-align: center;\">\n    \t\t  \t\t\t\t\tКуда\n    \t\t  \t\t\t\t\t<input type=\"text\" class=\"form-control\" [matAutocomplete]=\"country_end_transportation\" [formControl]=\"country_end\" placeholder=\"в Страну\">\n          \t\t\t\t\t\t<mat-autocomplete autoActiveFirstOption #country_end_transportation=\"matAutocomplete\" (optionSelected)=\"selectedcountry_end($event)\">\n         \t\t\t\t\t\t  <mat-option *ngIf=\"isLoadingcountry_end\" class=\"is-loading\">Загрузка...</mat-option>\n         \t\t\t\t\t\t  <ng-container *ngIf=\"!isLoadingcountry_end\">\n         \t\t\t\t\t\t    <mat-option *ngFor=\"let country of filteredcountry_end\" [value]=\"country\">\n         \t\t\t\t\t\t      {{country}}\n         \t\t\t\t\t\t    </mat-option>\n         \t\t\t\t\t\t  </ng-container>\n         \t\t\t\t\t\t</mat-autocomplete>\n                    <input type=\"text\" class=\"form-control\" [formControl]=\"city_end\" placeholder=\"в Город\">\n    \t\t  \t\t\t\t</div>\n    \t\t  \t\t\t</div>\n    \t\t  \t\t\t<div class=\"row\">\n    \t\t  \t\t\t\t<div class=\"col-lg-6\" style=\"text-align: center; border-right: 1px dashed black;\">\n    \t\t  \t\t\t\t\t<!--<input type=\"text\" class=\"form-control\" [formControl]=\"city_begin\" style=\"margin-top: 5px;\" placeholder=\"из Города\">-->\n    \t\t  \t\t\t\t</div>\n    \t\t  \t\t\t\t<div class=\"col-lg-6\">\n    \t\t  \t\t\t\t\t<!--<input type=\"text\" class=\"form-control\" [formControl]=\"city_end\" style=\"margin-top: 5px;\" placeholder=\"в Город\">-->\n    \t\t  \t\t\t\t</div>\n    \t\t  \t\t\t</div>\n    \t\t  \t\t</div>\n  \t\t\t\t</div>\n \t\t\t</div>\n \t\t\t<div class=\"card-footer bg-transparent border-secondary\">\n    \t\t\t<div class=\"row\">\n    \t\t\t  \t<div class=\"col-12\" style=\"text-align: center;\">\n    \t\t\t  \t\t<div class=\"input-group\">\n  \t\t\t\t\t\t  \t<div class=\"input-group-prepend\">\n  \t\t\t\t\t\t  \t  <span class=\"input-group-text\" style=\"width: 200px;\">Условия поставки</span>\n  \t\t\t\t\t\t  \t</div>\n  \t\t\t\t\t\t  \t<select class=\"form-control\" id=\"client\" [formControl]=\"incoterm\">\n     \t\t\t\t  \t\t\t<option [value]=\"i\" *ngFor=\"let i of incoterms\">{{i}}</option>\n     \t\t\t\t\t\t</select>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"container\" *ngIf=\"incoterm_description_state\">\n  \t\t\t\t\t<br/>\n  \t\t\t\t\t<div class=\"row\">\t\t\n  \t\t\t\t\t\t<div class=\"col-lg-12\" style=\"text-align: justify; background-color: #dfe4ea; border-radius: 5px;\">\n  \t\t\t\t\t\t\t{{incoterm_description_text}}\n  \t\t\t\t\t\t</div>\t\t\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-5\">\n\t\t<div class=\"card\">\n        <div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n          <h5>Статус и Примечания</h5>\n        </div>\n        <div class=\"card-body text-dark\">\n          <div class=\"row\">\n            <div class=\"form-group\">\n             <label for=\"status\">Статус перевозки</label>\n             <textarea class=\"form-control\" id=\"status\" rows=\"3\" cols=\"100%\" [formControl]=\"status\"></textarea>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"form-group\">\n             <label for=\"comments\">Примечания</label>\n             <textarea class=\"form-control\" id=\"status\" rows=\"3\" cols=\"100%\" [formControl]=\"comments\"></textarea>\n            </div>\n          </div>\n        </div>\n    </div>\n\t</div>\n  <div class=\"col-lg-5\"></div>\t\n</div>\n<br/>\n<div class=\"row\">\n  <div class=\"col-lg-1\"></div>\n  <div class=\"col-lg-10\">\n    <div class=\"card\">\n      <div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n          <h5>Клиент</h5>\n        </div>\n        <div class=\"card-body text-dark\">\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <label for=\"name_client\">Название органицации</label>\n              <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"company\" [formControl]=\"name_company\">\n                      <mat-autocomplete autoActiveFirstOption #company=\"matAutocomplete\" (optionSelected)=\"selectedname_company($event)\">\n                       <mat-option *ngIf=\"isLoadingname_company\" class=\"is-loading\">Загрузка...</mat-option>\n                       <ng-container *ngIf=\"!isLoadingname_company\">\n                         <mat-option *ngFor=\"let company of filteredname_company\" [value]=\"company\">\n                           {{company}}\n                         </mat-option>\n                       </ng-container>\n                     </mat-autocomplete>\n          </div>\n          <div class=\"col-lg-6\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <label for=\"rate_client\">Ставка Клиенту</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"rate_for_client\" placeholder=\"\">\n              </div>\n              <div class=\"col-lg-6\">\n                <label for=\"rate_client\">Валюта</label>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"rate_for_client_currency\" placeholder=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr/>\n          <button \n            class=\"btn btn-block btn-success\"\n            (click)=\"SaveGeneral()\"\n            [disabled]=\"saveButton\"\n            >Сохранить\n          </button>\n        <hr/>\n      </div>\n    </div>\n  </div> \n  <div class=\"col-lg-1\"></div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/notes/notes.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/notes/notes.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br/>\n<div class=\"row\">\n\t<div class=\"col-lg-1\"></div>\n\t<div class=\"col-lg-10\">\n\t\t<div class=\"input-group\">\n\t\t  <div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\">Комментарии и примечания</span>\n\t\t  </div>\n\t\t  <textarea class=\"form-control\" [formControl]=\"notes\" placeholder=\"Пусто...\" aria-label=\"With textarea\" style=\"width: 75%; height: 100px;\"></textarea>\n\t\t</div>\n\t\t<br/>\n\t\t<div class=\"offset-md-10\">\n\t\t\t<button class=\"btn btn-success btn-block\" (click)=\"saveNotes();\"> Сохранить </button>\n\t\t</div>\n\t\t<br/>\n\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>#</th>\n\t\t\t\t\t<th>Комментарий</th>\n\t\t\t\t\t<th>Оператор</th>\n\t\t\t\t\t<th>Дата и время</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\t\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let note of notesTable; index as i\" style=\"border-top: 2px solid #0e91e3; \">\n\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t<td [innerHTML]=\"note.notes | nl2br\"></td>\n\t\t\t\t\t<td>{{note.operator}}</td>\n\t\t\t\t\t<td>{{note.created_date}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"col-lg-1\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/payment/payment.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/payment/payment.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br/>\n<div class=\"row\">\n  <div class=\"col-lg-1\"></div>\n  <div class=\"col-lg-5\">\n\t\t<div class=\"card\">\n\t\t  <div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n\t\t  \t<h5>Invoice Out</h5>\n\t\t  </div>\n  \t\t<div class=\"card-body text-dark\">\n\t\t\t\t<div class=\"row\"> \n          <label>Наименование</label>\n          <input type=\"text\" class=\"form-control\" [formControl]=\"name_payment_io\">\n        </div>\n        <div class=\"row\"> \n          <div class=\"col-lg-6\">\n          \t<label>Ставка</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"rate_payment_io\">\n          </div>\n          <div class=\"col-lg-6\">\n          \t<label>Валюта</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"currency_payment_io\">\n          </div>\n        </div>\n        <div class=\"row\"> \n          <div class=\"col-lg-6\">\n            <label>Номер Инвойса</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"invoice_number_io\">\n          </div>\n          <div class=\"col-lg-6\">\n\t\t\t\t\t\t<label>Дата платежа</label>\n            <input type=\"date\" class=\"form-control\" [formControl]=\"date_payment_io\">\n          </div>\n        </div>\n        <div class=\"row\"> \n          <label>Статус</label>\n          <textarea type=\"text\" class=\"form-control\" [formControl]=\"status_payment_io\"></textarea>\n        </div>\n        <br/>\n        <div class=\"row\" *ngIf=\"IO_edit\" style=\"background-color: #0e91e3 !important;\">\n          <div class=\"col-lg-1\"></div>\n          <div class=\"col-lg-4\">\n            <button class=\"btn btn-light btn-block\" (click)=\"cancel_IO()\">Отмена</button>\n          </div>\n          <div class=\"col-lg-2\"></div>\n          <div class=\"col-lg-4\">\n            <button class=\"btn btn-success btn-block\" (click)=Editing_IO()>Изменить</button>\n          </div>\n          <div class=\"col-lg-1\"></div>\n        </div>\n        <div class=\"row\" *ngIf=\"!IO_edit\" style=\"background-color: #0e91e3 !important;\">\n          <button class=\"btn btn-success btn-block\" (click)=\"SaveIO()\">Добавить</button>\n      \t</div>\n      </div>\n \t\t\t<div class=\"card-footer bg-transparent border-secondary\">\n \t\t\t\t<div class=\"row\">  \n          <table class=\"table table-sm table-bordered table-hover\">\n            <thead>\n              <tr>\n                <td>#</td>\n                <td>Наименование</td>\n                <td>Ставка</td>\n                <td>Валюта</td>\n                <td colspan=\"2\">Действие</td>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let payment of Payments; let i=index;\">\n                <td>{{i+1}}</td>\n                <td>{{payment.name_payment}}</td>\n                <td>{{payment.rate_payment}}</td>\n                <td>{{payment.currency_payment}}</td>\n                <td>\n                  <fa-icon [icon]=\"faEdit\" size=\"lg\" (click)=\"edit_IO(i)\" style=\"color: green;\"></fa-icon> \n                </td>\n                <td>\n                  <fa-icon [icon]=\"faTrash\" size=\"lg\" (click)=\"Delete_IO(i)\" style=\"color: red;\"></fa-icon>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n   \t</div>\n\t</div>\n\t<div class=\"col-lg-5\">\n\t\t<div class=\"card\">\n      <div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n        <h5>Invoice In</h5>\n      </div>\n      <div class=\"card-body text-dark\">\n        <div class=\"row\">\n          <label>Наименование</label>\n          <input type=\"text\" class=\"form-control\" [formControl]=\"name_payment_ii\">\n        </div>\n        <div class=\"row\"> \n          <div class=\"col-lg-6\">\n            <label>Ставка</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"rate_payment_ii\">\n          </div>\n          <div class=\"col-lg-6\">\n            <label>Валюта</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"currency_payment_ii\">\n          </div>\n        </div>\n        <div class=\"row\"> \n          <div class=\"col-lg-6\">\n            <label>Номер Инвойса</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"invoice_number_ii\">\n          </div>\n          <div class=\"col-lg-6\">\n            <label>Дата платежа</label>\n            <input type=\"date\" class=\"form-control\" [formControl]=\"date_payment_ii\">\n          </div>\n        </div>\n        <div class=\"row\"> \n          <label>Статус</label>\n          <textarea class=\"form-control\" [formControl]=\"status_payment_ii\"></textarea>\n        </div>\n        <br/>\n        <div class=\"row\" *ngIf=\"II_edit\" style=\"background-color: #0e91e3 !important;\">\n          <div class=\"col-lg-1\"></div>\n          <div class=\"col-lg-4\">\n            <button class=\"btn btn-light btn-block\" (click)=\"cancel_II()\">Отмена</button>\n          </div>\n          <div class=\"col-lg-2\"></div>\n          <div class=\"col-lg-4\">\n            <button class=\"btn btn-success btn-block\" (click)=\"Editing_II()\">Изменить</button>\n          </div>\n          <div class=\"col-lg-1\"></div>\n        </div>\n        <div class=\"row\" *ngIf=\"!II_edit\" style=\"background-color: #0e91e3 !important;\">\n          <button class=\"btn btn-success btn-block\" (click)=\"SaveII()\">Добавить</button>\n        </div>\n      </div>\n      <div class=\"card-footer bg-transparent border-secondary\">\n        <div class=\"row\">  \n          <table class=\"table table-sm table-bordered table-hover\">\n            <thead>\n              <tr>\n                <td>#</td>\n                <td>Наименование</td>\n                <td>Ставка</td>\n                <td>Валюта</td>\n                <td colspan=\"2\">Действие</td>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let payment of Payments_II; let i=index;\">\n                <td>{{i+1}}</td>\n                <td>{{payment.name_payment}}</td>\n                <td>{{payment.rate_payment}}</td>\n                <td>{{payment.currency_payment}}</td>\n                <td>\n                  <fa-icon [icon]=\"faEdit\" size=\"lg\" (click)=\"edit_II(i)\" style=\"color: green;\"></fa-icon> \n                </td>\n                <td>\n                  <fa-icon [icon]=\"faTrash\" size=\"lg\" (click)=\"Delete_II(i)\" style=\"color: red;\"></fa-icon>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\t</div>\t\n  <div class=\"col-lg-1\"></div>\n</div>\n<br/>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/shipping.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/shipping.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" [routerLink]=\"'/dashboard'\">\n      <img src=\"../../assets/log1.png\" style=\"border-radius: 0 0 0 0; height: 50px; size: 50px\"  alt=\"\">\n  </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\"  [routerLink]=\"'/dashboard'\">Активные перевозки</a>\n        <a class=\"nav-item nav-link\"  [routerLink]=\"'/contracts'\">Договоры</a>\n      </div>\n    </div>\n</nav>\n  <br/>\n  <div class=\"row\">  \n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-10\">\n      <h3>Перевозка # {{id}}</h3>\n    </div>\n    <div class=\"col-lg-1\"></div>\n  </div>\n  <br/>\n\t<div class=\"row\">\n\t\t<br/>\n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-8\">\n\t\t\n      <button \n        type=\"button\" \n        class=\"btn btn-outline-primary\" \n        routerLink=\"general\" \n        routerLinkActive=\"active\" \n        tabindex=\"-1\"\n        >\n        Общая Информация\n      </button>\n      <button \n        type=\"button\" \n        class=\"btn btn-outline-primary\" \n        routerLink=\"transports\" \n        routerLinkActive=\"active\" \n        tabindex=\"-1\"\n        >\n        Транспорт\n      </button>\n      <button \n        type=\"button\" \n        class=\"btn btn-outline-primary\" \n        routerLink=\"documents\" \n        routerLinkActive=\"active\" \n        tabindex=\"-1\"\n        >\n        Заявки\n      </button>\n      <button \n        type=\"button\" \n        class=\"btn btn-outline-primary\" \n        routerLink=\"payments\" \n        routerLinkActive=\"active\" \n        tabindex=\"-1\"\n        >\n        Позиция\n      </button>\n      <button \n        type=\"button\" \n        class=\"btn btn-outline-primary\" \n        routerLink=\"notes\" \n        routerLinkActive=\"active\" \n        tabindex=\"-1\"\n        >\n        Примечания\n      </button>\n      <button \n        type=\"button\" \n        class=\"btn btn-outline-primary\" \n        routerLink=\"cmr\" \n        routerLinkActive=\"active\" \n        tabindex=\"-1\"\n        >\n        CMR\n      </button>\n\n\n    </div>\n    <div class=\"col-lg-4\"></div>\n\t</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/transport/transport.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/transport/transport.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br/>\n<div class=\"row\">\n    <div class=\"col-lg-1\"></div>\n    <div class=\"col-lg-5\">\n\t\t<div class=\"card\">\n\t\t  \t<div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n\t\t  \t\t<h5>Сведения о транспорте</h5>\n\t\t  \t</div>\n  \t\t\t<div class=\"card-body text-dark\">\n\t\t\t\t  <div class=\"row\"> \n            <div class=\"col-lg-6\">  \n              <label for=\"tractor\">Государственный номер</label>        \n              <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"auto\" [formControl]=\"searchTractor\" maxlength=\"17\">\n              <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"selectedTractor($event)\">\n                <mat-option *ngIf=\"isLoadingTractor\" class=\"is-loading\">Загрузка...</mat-option>\n                <ng-container *ngIf=\"!isLoadingTractor\">\n                  <mat-option *ngFor=\"let truck of filteredTractor\" [value]=\"truck\">\n                    {{truck}}\n                  </mat-option>\n                </ng-container>\n              </mat-autocomplete>\n            </div>\n            <div class=\"col-lg-6\">  \n              <label for=\"trailer\">Гос. номер прицепа</label>\n              <input type=\"text\" class=\"form-control\"  [formControl]=\"trailer\" maxlength=\"10\">\n            </div>\n          </div>\n  \t\t\t\n    \t\t<div class=\"row\">\n          <div class=\"col-lg-6\">  \n          \n            <label for=\"country\">Страна регистрации</label>\n            <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"countries\" [formControl]=\"searchCountry_truck\">\n            <mat-autocomplete autoActiveFirstOption #countries=\"matAutocomplete\" (optionSelected)=\"selectedCountry_truck($event)\">\n              <mat-option *ngIf=\"isLoadingCountry_truck\" class=\"is-loading\">Загрузка...</mat-option>\n              <ng-container *ngIf=\"!isLoadingCountry_truck\">\n                <mat-option *ngFor=\"let country of filteredCountry_truck\" [value]=\"country\">\n                  {{country}}\n                </mat-option>\n              </ng-container>\n            </mat-autocomplete>\n          </div>\n          <div class=\"col-lg-6\">\n            <label for=\"mark\">Марка и модель</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"mark_truck\" maxlength=\"100\">\n          </div>\n  \t\t\t</div>\n      </div>\n \t\t\t<div class=\"card-footer bg-transparent border-secondary\">\n \t\t\t\t<div class=\"row\">  \n          <div class=\"col-lg-2\">  \n            <label for=\"driver_seria_pass\">Серия</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"driver_seria_pass\" maxlength=\"2\">\n          </div>\n          <div class=\"col-lg-5\">  \n            <label for=\"driver_number_pass\">Номер паспорта</label>\n            <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"driver\" [formControl]=\"searchDriver_number_pass\" maxlength=\"13\">\n                <mat-autocomplete autoActiveFirstOption #driver=\"matAutocomplete\" (optionSelected)=\"selectedDriver_number_pass($event)\"   >\n                  <mat-option *ngIf=\"isLoadingDriver_number_pass\" class=\"is-loading\">Загрузка...</mat-option>\n                  <ng-container *ngIf=\"!isLoadingDriver_number_pass\">\n                    <mat-option *ngFor=\"let name of filteredDriver_number_pass\" [value]=\"name\">\n                      {{name}}\n                    </mat-option>\n                  </ng-container>\n                </mat-autocomplete>\n          </div>\n          <div class=\"col-lg-5\">  \n            <label for=\"driver_last_name\">Фамилия водителя</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"driver_last_name\" maxlength=\"32\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <label for=\"driver_last_name\">Имя водителя</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"driver_first_name\" maxlength=\"32\">\n          </div>\n          <div class=\"col-lg-6\">\n            <label for=\"driver_country\">Страна водителя</label>\n            <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"driver_country\" [formControl]=\"searchDriver_country\">\n            <mat-autocomplete autoActiveFirstOption #driver_country=\"matAutocomplete\" (optionSelected)=\"selectedDriver_country($event)\">\n              <mat-option *ngIf=\"isLoadingDriver_country\" class=\"is-loading\">Загрузка...</mat-option>\n              <ng-container *ngIf=\"!isLoadingDriver_country\">\n                <mat-option *ngFor=\"let country of filteredDriver_country\" [value]=\"country\">\n                  {{country}}\n                </mat-option>\n              </ng-container>\n            </mat-autocomplete>\n          </div>          \n        </div>\n        <div class=\"row\" *ngIf=\"uzbek\">\n          <div class=\"col-lg-12\">\n            <label for=\"driver_text\">Кем был выдан</label>\n            <textarea class=\"form-control\" [formControl]=\"driver_text\" maxlength=\"50\"></textarea>\n          </div>\n        </div>\n  \t\t</div>\n      <div class=\"card-footer bg-transparent border-secondary\">\n        <label for=\"driver_country\">Наименование Перевозчика</label>\n        <input type=\"text\" class=\"form-control\" [matAutocomplete]=\"country\" [formControl]=\"searchCarrier_name\">\n        <mat-autocomplete autoActiveFirstOption #country=\"matAutocomplete\" (optionSelected)=\"selectedCarrier_name($event)\">\n          <mat-option *ngIf=\"isLoadingCarrier_name\" class=\"is-loading\">Загрузка...</mat-option>\n          <ng-container *ngIf=\"!isLoadingCarrier_name\">\n            <mat-option *ngFor=\"let carrier of filteredCarrier_name\" [value]=\"carrier\">\n              {{carrier}}\n            </mat-option>\n          </ng-container>\n        </mat-autocomplete>\n        <label for=\"driver_country\">Ставка Исполнителю</label>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <input type=\"number\" class=\"form-control\" [formControl]=\"rate\">\n          </div>\n          <div class=\"col-lg-6\">\n            <input type=\"text\" class=\"form-control\" [formControl]=\"rate_currency\">\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer bg-transparent\" style=\"background-color: #0e91e3 !important;\">\n        <div class=\"offset-md-8\" *ngIf=\"!editing\">\n            <button \n                class=\"btn btn-block btn-success\" \n                [disabled]=\"disaable\"\n                (click)=\"SaveTransport()\"\n                >\n                Сохранить\n            </button>\n        </div>\n        <div class=\"offset-md-6\" *ngIf=\"editing\">\n          <div class=\"row\">\n            <div class=\"col-lg-5\">\n              <button \n                  class=\"btn btn-light\"\n                  (click)=\"CancelEditing()\"\n                  >\n                  Отмена\n              </button>\n            </div>\n            <div class=\"col-lg-2\"></div>\n            <div class=\"col-lg-5\">\n              <button \n                  class=\"btn btn-success\"\n                  (click)=\"EditTransport()\"\n                  >\n                  Измениить\n              </button>\n            </div>\n          </div>\n        </div>\n        \n    </div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-5\">\n\t\t<div class=\"card\" *ngIf=\"editing\">\n        <div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n          <h5>Статус машины</h5>\n        </div>\n        <div class=\"card-body text-dark\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"input-group\">\n                <textarea name=\"status\" class=\"form-control\" [formControl]=\"status\" placeholder=\"Введите новый статус машины...\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"input-group\">\n                <input type=\"date\" class=\"form-control\" [formControl]=\"date\">\n              </div>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"input-group\">\n                <button class=\"btn btn-success btn-block\" (click)=\"addStatus()\">Добавить статус</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer bg-transparent border-secondary\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <table class=\"table table-bordered table-hover\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>История статусов</th>\n                    <th>Дата</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let status of Statuses; let i=index;\">\n                    <td>{{i+1}}</td>\n                    <td>{{status.status}}</td>\n                    <td>{{status.status_date}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n    </div>\n\t</div>\t\n  <div class=\"col-lg-1\"></div>\n</div>\n<br/>\n<div class=\"row\">\n  <div class=\"col-lg-1\"></div>\n  <div class=\"col-lg-10\">\n    <div class=\"card\">\n        <div class=\"card-header bg-transparent\" style=\"background-color: #0e91e3 !important; color: white;\">\n          <h5>Общяя информация</h5>\n        </div>\n        <div class=\"card-body text-dark\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <table class=\"table table-bordered table-hover text-center\">\n                  <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>Номер А/С</th>\n                          <th>Водитель</th>\n                          <th>Перевозчик</th>\n                          <th>Ставка</th>\n                          <th>Валюта</th>\n                          <th>Статус</th>\n                          <th>Дата</th>\n                          <th colspan=\"2\">Действие</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let transport of Transports; let i=index;let last=last\">\n                          <td>{{i+1}}</td>\n                          <td>{{transport.tractor}}/{{transport.trailer}}</td>\n                          <td>{{transport.driver_first_name}} {{transport.driver_last_name}}</td>\n                          <td>{{transport.carrier_name_company}}</td>\n                          <td>{{transport.rate}}</td>\n                          <td>{{transport.rate_currency}}</td>\n                          <td>{{Stat_Us[i].status}}</td>\n                          <td>{{Stat_Us[i].status_date}}</td>\n                          <td align=\"center\">\n                            <fa-icon [icon]=\"faEdit\" size=\"lg\" (click)=\"edit_transport(i)\" style=\"color: green;\"></fa-icon> \n                          </td>\n                          <td>\n                            <fa-icon [icon]=\"faTrash\" size=\"lg\" (click)=\"delete(i)\" style=\"color: red;\"></fa-icon>\n                          </td>\n                        </tr>\n                      </tbody>\n                </table>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <table class=\"table table-hover table-bordered text-center\">\n                <tr>\n                  <td>Общая ставка</td>\n                  <td>{{total_rate}}</td>\n                  <td>{{total_currency}}</td>\n                </tr>\n                <tr>\n                  <td>Количество перевозчиков</td>\n                  <td colspan=\"2\">{{count_carriers}}</td>\n\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"col-lg-1\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'mmuz';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var nl2br_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nl2br-pipe */ "./node_modules/nl2br-pipe/fesm2015/nl2br-pipe.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _shipping_general_general_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shipping/general/general.component */ "./src/app/shipping/general/general.component.ts");
/* harmony import */ var _shipping_document_document_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shipping/document/document.component */ "./src/app/shipping/document/document.component.ts");
/* harmony import */ var _shipping_payment_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shipping/payment/payment.component */ "./src/app/shipping/payment/payment.component.ts");
/* harmony import */ var _shipping_notes_notes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shipping/notes/notes.component */ "./src/app/shipping/notes/notes.component.ts");
/* harmony import */ var _shipping_transport_transport_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shipping/transport/transport.component */ "./src/app/shipping/transport/transport.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _contracts_tsclient_tsclient_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contracts/tsclient/tsclient.component */ "./src/app/contracts/tsclient/tsclient.component.ts");
/* harmony import */ var _contracts_tsforwarder_tsforwarder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contracts/tsforwarder/tsforwarder.component */ "./src/app/contracts/tsforwarder/tsforwarder.component.ts");
/* harmony import */ var _contracts_mmclient_mmclient_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contracts/mmclient/mmclient.component */ "./src/app/contracts/mmclient/mmclient.component.ts");
/* harmony import */ var _contracts_mmforwarder_mmforwarder_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contracts/mmforwarder/mmforwarder.component */ "./src/app/contracts/mmforwarder/mmforwarder.component.ts");
/* harmony import */ var _contracts_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contracts/edit/edit.component */ "./src/app/contracts/edit/edit.component.ts");
/* harmony import */ var _shipping_document_client_order_client_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shipping/document/client-order/client-order.component */ "./src/app/shipping/document/client-order/client-order.component.ts");
/* harmony import */ var _shipping_cmr_cmr_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shipping/cmr/cmr.component */ "./src/app/shipping/cmr/cmr.component.ts");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_15__["ShippingComponent"],
            _shipping_general_general_component__WEBPACK_IMPORTED_MODULE_16__["GeneralComponent"],
            _shipping_document_document_component__WEBPACK_IMPORTED_MODULE_17__["DocumentComponent"],
            _shipping_payment_payment_component__WEBPACK_IMPORTED_MODULE_18__["PaymentComponent"],
            _shipping_notes_notes_component__WEBPACK_IMPORTED_MODULE_19__["NotesComponent"],
            _shipping_transport_transport_component__WEBPACK_IMPORTED_MODULE_20__["TransportComponent"],
            _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_21__["ContractsComponent"],
            _contracts_tsclient_tsclient_component__WEBPACK_IMPORTED_MODULE_22__["TsclientComponent"],
            _contracts_tsforwarder_tsforwarder_component__WEBPACK_IMPORTED_MODULE_23__["TsforwarderComponent"],
            _contracts_mmclient_mmclient_component__WEBPACK_IMPORTED_MODULE_24__["MmclientComponent"],
            _contracts_mmforwarder_mmforwarder_component__WEBPACK_IMPORTED_MODULE_25__["MmforwarderComponent"],
            _contracts_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__["EditComponent"],
            _shipping_document_client_order_client_order_component__WEBPACK_IMPORTED_MODULE_27__["ClientOrderComponent"],
            _shipping_cmr_cmr_component__WEBPACK_IMPORTED_MODULE_28__["CmrComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_14__["appRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            nl2br_pipe__WEBPACK_IMPORTED_MODULE_9__["Nl2BrPipeModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _shipping_general_general_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipping/general/general.component */ "./src/app/shipping/general/general.component.ts");
/* harmony import */ var _shipping_document_document_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping/document/document.component */ "./src/app/shipping/document/document.component.ts");
/* harmony import */ var _shipping_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipping/payment/payment.component */ "./src/app/shipping/payment/payment.component.ts");
/* harmony import */ var _shipping_cmr_cmr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shipping/cmr/cmr.component */ "./src/app/shipping/cmr/cmr.component.ts");
/* harmony import */ var _shipping_notes_notes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shipping/notes/notes.component */ "./src/app/shipping/notes/notes.component.ts");
/* harmony import */ var _shipping_transport_transport_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shipping/transport/transport.component */ "./src/app/shipping/transport/transport.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _contracts_tsclient_tsclient_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contracts/tsclient/tsclient.component */ "./src/app/contracts/tsclient/tsclient.component.ts");
/* harmony import */ var _contracts_tsforwarder_tsforwarder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contracts/tsforwarder/tsforwarder.component */ "./src/app/contracts/tsforwarder/tsforwarder.component.ts");
/* harmony import */ var _contracts_mmclient_mmclient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contracts/mmclient/mmclient.component */ "./src/app/contracts/mmclient/mmclient.component.ts");
/* harmony import */ var _contracts_mmforwarder_mmforwarder_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contracts/mmforwarder/mmforwarder.component */ "./src/app/contracts/mmforwarder/mmforwarder.component.ts");
/* harmony import */ var _contracts_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contracts/edit/edit.component */ "./src/app/contracts/edit/edit.component.ts");

















const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'contracts', component: _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_11__["ContractsComponent"], children: [
            { path: 'tsclient', component: _contracts_tsclient_tsclient_component__WEBPACK_IMPORTED_MODULE_12__["TsclientComponent"] },
            { path: 'tsforwarder', component: _contracts_tsforwarder_tsforwarder_component__WEBPACK_IMPORTED_MODULE_13__["TsforwarderComponent"] },
            { path: 'mmclient', component: _contracts_mmclient_mmclient_component__WEBPACK_IMPORTED_MODULE_14__["MmclientComponent"] },
            { path: 'mmforwarder', component: _contracts_mmforwarder_mmforwarder_component__WEBPACK_IMPORTED_MODULE_15__["MmforwarderComponent"] },
            { path: 'edit/:id', component: _contracts_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__["EditComponent"] }
        ] },
    { path: 'shipping/:id', component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__["ShippingComponent"], children: [
            { path: 'general', component: _shipping_general_general_component__WEBPACK_IMPORTED_MODULE_5__["GeneralComponent"] },
            { path: 'transports', component: _shipping_transport_transport_component__WEBPACK_IMPORTED_MODULE_10__["TransportComponent"] },
            { path: 'documents', component: _shipping_document_document_component__WEBPACK_IMPORTED_MODULE_6__["DocumentComponent"] },
            { path: 'payments', component: _shipping_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"] },
            { path: 'cmr', component: _shipping_cmr_cmr_component__WEBPACK_IMPORTED_MODULE_8__["CmrComponent"] },
            { path: 'notes', component: _shipping_notes_notes_component__WEBPACK_IMPORTED_MODULE_9__["NotesComponent"] }
        ] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.server_ip = 'mmuz';
    }
    getAuth(email, pass) {
        return this.http.get('http://' + this.server_ip + '/auth/auth.php?email=' + email + '&pass=' + pass);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/contracts/contract.service.ts":
/*!***********************************************!*\
  !*** ./src/app/contracts/contract.service.ts ***!
  \***********************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




let ContractService = class ContractService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getContracts(contract) {
        const formData = new FormData();
        formData.append('contract', String(contract));
        return this.http.post('http://' + this.auth.server_ip + '/contracts/get_contracts.php', formData, { responseType: 'json' });
    }
    createMMC() {
        const formData = new FormData();
        formData.append('contract_type', 'mmclient');
        formData.append('user', localStorage.getItem('email'));
        return this.http.post('http://' + this.auth.server_ip + '/contracts/create_contract.php', formData, { responseType: 'json' });
    }
    createMMF() {
        const formData = new FormData();
        formData.append('contract_type', 'mmforwarder');
        formData.append('user', localStorage.getItem('email'));
        return this.http.post('http://' + this.auth.server_ip + '/contracts/create_contract.php', formData, { responseType: 'json' });
    }
    createTSC() {
        const formData = new FormData();
        formData.append('contract_type', 'tsclient');
        formData.append('user', localStorage.getItem('email'));
        return this.http.post('http://' + this.auth.server_ip + '/contracts/create_contract.php', formData, { responseType: 'json' });
    }
    createTSF() {
        const formData = new FormData();
        formData.append('contract_type', 'tsforwarder');
        formData.append('user', localStorage.getItem('email'));
        return this.http.post('http://' + this.auth.server_ip + '/contracts/create_contract.php', formData, { responseType: 'json' });
    }
};
ContractService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContractService);



/***/ }),

/***/ "./src/app/contracts/contracts.component.css":
/*!***************************************************!*\
  !*** ./src/app/contracts/contracts.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar\r\n{\r\n\tbackground-image: url('banner.jpg'); \r\n\tpadding: 0px 15px 0px 5px;\r\n}\r\n.table\r\n{\r\n\tbackground-color: white\r\n}\r\n.footer\r\n{\r\n\twidth: 100%;\r\n\theight: 100px;\r\n\tbackground-image: url('banner.jpg');\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tvertical-align: center;\r\n\tpadding-top: 25px;\r\n}\r\nth\r\n{\r\n\ttext-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3RzL2NvbnRyYWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLG1DQUE4QztDQUM5Qyx5QkFBeUI7QUFDMUI7QUFDQTs7Q0FFQztBQUNEO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7Q0FDYixtQ0FBOEM7Q0FDOUMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLGlCQUFpQjtBQUNsQjtBQUNBOztDQUVDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0cy9jb250cmFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJcclxue1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmFubmVyLmpwZyk7IFxyXG5cdHBhZGRpbmc6IDBweCAxNXB4IDBweCA1cHg7XHJcbn1cclxuLnRhYmxlXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcbi5mb290ZXJcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYW5uZXIuanBnKTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcbnRoXHJcbntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/contracts/contracts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contracts/contracts.component.ts ***!
  \**************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let ContractsComponent = class ContractsComponent {
    constructor() {
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusSquare"];
    }
    ngOnInit() {
    }
};
ContractsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contracts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contracts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/contracts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contracts.component.css */ "./src/app/contracts/contracts.component.css")).default]
    })
], ContractsComponent);



/***/ }),

/***/ "./src/app/contracts/edit/edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/contracts/edit/edit.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card\r\n{\r\n\tborder-color: #0e91e3;\r\n}\r\n.mat-option\r\n{\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n.mat-active\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n.mat-option:hover\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3RzL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7QUFDQTs7Q0FFQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiO0FBQ0E7O0NBRUMseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0cy9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkXHJcbntcclxuXHRib3JkZXItY29sb3I6ICMwZTkxZTM7XHJcbn1cclxuLm1hdC1vcHRpb25cclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG4ubWF0LWFjdGl2ZVxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1vcHRpb246aG92ZXJcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/contracts/edit/edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contracts/edit/edit.component.ts ***!
  \**************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");







let EditComponent = class EditComponent {
    constructor(activateRoute, http, auth) {
        this.activateRoute = activateRoute;
        this.http = http;
        this.auth = auth;
        this.client = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contract_type = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        //////////////////////////////Material Autocomlete
        this.name_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.isLoadingname_company = false;
        //////////////////////////////Material Autocomlete
        this.name_company_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contact_person = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.director_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.country_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.region_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.index_city_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.city_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.street_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contact_number = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.comment_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.director_company_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.country_company_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.region_company_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.index_city_company_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.city_company_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.street_company_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contact_person_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contact_number_eng = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contract_number = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contract_date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contract_currency = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contract_amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contract_comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.fileData = null;
        this.loaded = false;
        this.path = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.http.get("http://" + this.auth.server_ip + "/contracts/get_contract.php?id=" + this.id).subscribe((response) => {
            this.contract_type.setValue(response['0'].contract_type);
            if (response['0'].contract_type == 'mmforwarder' || response['0'].contract_type == 'tsforwarder') {
                this.client.setValue("клиентом");
            }
            if (response['0'].contract_type == 'mmclient' || response['0'].contract_type == 'tsclient') {
                this.client.setValue("перевозчиком");
            }
            if (response['0'].name_company != null) {
                this.name_company.setValue(response['0'].name_company);
            }
            if (response['0'].name_company_eng != null) {
                this.name_company_eng.setValue(response['0'].name_company_eng);
            }
            if (response['0'].contact_person != null) {
                this.contact_person.setValue(response['0'].contact_person);
            }
            if (response['0'].director_company != null) {
                this.director_company.setValue(response['0'].director_company);
            }
            if (response['0'].country_company != null) {
                this.country_company.setValue(response['0'].country_company);
            }
            if (response['0'].region_company != null) {
                this.region_company.setValue(response['0'].region_company);
            }
            if (response['0'].index_city_company != null) {
                this.index_city_company.setValue(response['0'].index_city_company);
            }
            if (response['0'].city_company != null) {
                this.city_company.setValue(response['0'].city_company);
            }
            if (response['0'].street_company != null) {
                this.street_company.setValue(response['0'].street_company);
            }
            if (response['0'].contact_number != null) {
                this.contact_number.setValue(response['0'].contact_number);
            }
            if (response['0'].comment_company != null) {
                this.comment_company.setValue(response['0'].comment_company);
            }
            if (response['0'].director_company_eng != null) {
                this.director_company_eng.setValue(response['0'].director_company_eng);
            }
            if (response['0'].country_company_eng != null) {
                this.country_company_eng.setValue(response['0'].country_company_eng);
            }
            if (response['0'].region_company_eng != null) {
                this.region_company_eng.setValue(response['0'].region_company_eng);
            }
            if (response['0'].index_city_company_eng != null) {
                this.index_city_company_eng.setValue(response['0'].index_city_company_eng);
            }
            if (response['0'].city_company_eng != null) {
                this.city_company_eng.setValue(response['0'].city_company_eng);
            }
            if (response['0'].street_company_eng != null) {
                this.street_company_eng.setValue(response['0'].street_company_eng);
            }
            if (response['0'].contact_person_eng != null) {
                this.contact_person_eng.setValue(response['0'].contact_person_eng);
            }
            if (response['0'].contact_number_eng != null) {
                this.contact_number_eng.setValue(response['0'].contact_number_eng);
            }
            console.log(this.contract_type.value);
            if (this.contract_type.value == 'mmforwarder' || this.contract_type.value == 'tsforwarder') {
                //////////////////////////////Material Autocomlete OnInit 
                this.name_company.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
                    this.filteredname_company = [];
                    this.isLoadingname_company = true;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.auth.server_ip + "/search/search_companies.php?company=" + value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                    this.isLoadingname_company = false;
                }))))
                    .subscribe(data => {
                    if (data['company'] == null) {
                        this.filteredname_company = [];
                    }
                    else {
                        this.filteredname_company = data["company"];
                    }
                });
                //////////////////////////////Material Autocomlete OnInit 
            }
            else {
                //////////////////////////////Material Autocomlete OnInit Carrier
                this.name_company.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
                    this.filteredname_company = [];
                    this.isLoadingname_company = true;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.auth.server_ip + "/search/search_carrier.php?carrier=" + value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                    this.isLoadingname_company = false;
                }))))
                    .subscribe(data => {
                    if (data['carrier'] == null) {
                        this.filteredname_company = [];
                    }
                    else {
                        this.filteredname_company = data["carrier"];
                    }
                });
                //////////////////////////////Material Autocomlete OnInit Carrier
            }
        });
        this.http.get("http://" + this.auth.server_ip + "/contracts/get_contract_document.php?id=" + this.id).subscribe((response) => {
            this.contract_number.setValue(response['0'].contract_number);
            this.contract_date.setValue(response['0'].contract_date);
            this.contract_currency.setValue(response['0'].contract_currency);
            this.contract_amount.setValue(response['0'].contract_amount);
            this.contract_comment.setValue(response['0'].contract_comment);
            this.path.setValue(response['0'].contract_path);
            if (response['0'].contract_path != '') {
                console.log(response['0']['contract_path']);
                console.log(response['0']);
                this.loaded = true;
            }
            else {
                this.loaded = false;
            }
        });
    }
    selectedname_company(item) {
        this.name_company.setValue(item.option.value);
    }
    SaveCompany() {
        const formData = new FormData();
        formData.append('id', String(this.id));
        formData.append('name_company', String(this.name_company.value));
        formData.append('name_company_eng', String(this.name_company_eng.value));
        formData.append('contact_person', String(this.contact_person.value));
        formData.append('director_company', String(this.director_company.value));
        formData.append('country_company', String(this.country_company.value));
        formData.append('region_company', String(this.region_company.value));
        formData.append('index_city_company', String(this.index_city_company.value));
        formData.append('city_company', String(this.city_company.value));
        formData.append('street_company', String(this.street_company.value));
        formData.append('contact_number', String(this.contact_number.value));
        formData.append('comment_company', String(this.comment_company.value));
        formData.append('director_company_eng', String(this.director_company_eng.value));
        formData.append('country_company_eng', String(this.country_company_eng.value));
        formData.append('region_company_eng', String(this.region_company_eng.value));
        formData.append('city_company_eng', String(this.city_company_eng.value));
        formData.append('street_company_eng', String(this.street_company_eng.value));
        formData.append('contact_person_eng', String(this.contact_person_eng.value));
        formData.append('user', String(localStorage.getItem('email')));
        return this.http.post('http://' + this.auth.server_ip + '/contracts/edit_contract.php', formData, { responseType: 'json' })
            .subscribe((SaveContractResponse) => {
            console.log(SaveContractResponse);
        });
    }
    SaveContract() {
        const formDataContract = new FormData();
        formDataContract.append('id', String(this.id));
        formDataContract.append('company_name', this.name_company.value);
        formDataContract.append('contract_number', String(this.contract_number.value));
        formDataContract.append('contract_date', String(this.contract_date.value));
        formDataContract.append('contract_currency', String(this.contract_currency.value));
        formDataContract.append('contract_amount', String(this.contract_amount.value));
        formDataContract.append('contract_comment', String(this.contract_comment.value));
        formDataContract.append('user', String(localStorage.getItem('email')));
        return this.http.post('http://' + this.auth.server_ip + '/contracts/set_contract.php', formDataContract, { responseType: 'json' })
            .subscribe((SaveContractResponse) => {
            console.log(SaveContractResponse);
            this.path.setValue(SaveContractResponse['path']);
        });
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
    }
    onSubmit() {
        const formDataContract = new FormData();
        formDataContract.append('id', String(this.id));
        formDataContract.append('file', this.fileData);
        formDataContract.append('user', String(localStorage.getItem('email')));
        return this.http.post('http://' + this.auth.server_ip + '/contracts/set_file.php', formDataContract, { responseType: 'json' })
            .subscribe((SaveContractResponse) => {
            console.log(SaveContractResponse);
            this.loaded = true;
            this.path.setValue(SaveContractResponse['path']);
        });
    }
    downContract() {
        window.open('http://' + this.auth.server_ip + '/files/down_contract.php?id=' + this.id);
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.css */ "./src/app/contracts/edit/edit.component.css")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/contracts/mmclient/mmclient.component.css":
/*!***********************************************************!*\
  !*** ./src/app/contracts/mmclient/mmclient.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0cy9tbWNsaWVudC9tbWNsaWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contracts/mmclient/mmclient.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contracts/mmclient/mmclient.component.ts ***!
  \**********************************************************/
/*! exports provided: MmclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MmclientComponent", function() { return MmclientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contract.service */ "./src/app/contracts/contract.service.ts");






let MmclientComponent = class MmclientComponent {
    constructor(contract, route) {
        this.contract = contract;
        this.route = route;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusSquare"];
    }
    ngOnInit() {
        this.contract.getContracts('mmclient').subscribe((response) => {
            this.MMClient = response['contract'];
            console.log(this.MMClient);
        });
    }
    createMMC() {
        this.contract.createMMC().subscribe((response) => {
            this.route.navigate(['/contracts/edit/' + response['id']]);
        });
    }
};
MmclientComponent.ctorParameters = () => [
    { type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MmclientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mmclient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mmclient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/mmclient/mmclient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mmclient.component.css */ "./src/app/contracts/mmclient/mmclient.component.css")).default]
    })
], MmclientComponent);



/***/ }),

/***/ "./src/app/contracts/mmforwarder/mmforwarder.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contracts/mmforwarder/mmforwarder.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0cy9tbWZvcndhcmRlci9tbWZvcndhcmRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contracts/mmforwarder/mmforwarder.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contracts/mmforwarder/mmforwarder.component.ts ***!
  \****************************************************************/
/*! exports provided: MmforwarderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MmforwarderComponent", function() { return MmforwarderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contract.service */ "./src/app/contracts/contract.service.ts");







let MmforwarderComponent = class MmforwarderComponent {
    constructor(contract, route, http) {
        this.contract = contract;
        this.route = route;
        this.http = http;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusSquare"];
    }
    ngOnInit() {
        this.contract.getContracts('mmforwarder').subscribe((response) => {
            this.MMForwarder = response['contract'];
        });
    }
    createMMF() {
        this.contract.createMMF().subscribe((response) => {
            this.route.navigate(['/contracts/edit/' + response['id']]);
        });
    }
};
MmforwarderComponent.ctorParameters = () => [
    { type: _contract_service__WEBPACK_IMPORTED_MODULE_5__["ContractService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
MmforwarderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mmforwarder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mmforwarder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/mmforwarder/mmforwarder.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mmforwarder.component.css */ "./src/app/contracts/mmforwarder/mmforwarder.component.css")).default]
    })
], MmforwarderComponent);



/***/ }),

/***/ "./src/app/contracts/tsclient/tsclient.component.css":
/*!***********************************************************!*\
  !*** ./src/app/contracts/tsclient/tsclient.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0cy90c2NsaWVudC90c2NsaWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contracts/tsclient/tsclient.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contracts/tsclient/tsclient.component.ts ***!
  \**********************************************************/
/*! exports provided: TsclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsclientComponent", function() { return TsclientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contract.service */ "./src/app/contracts/contract.service.ts");






let TsclientComponent = class TsclientComponent {
    constructor(contract, route) {
        this.contract = contract;
        this.route = route;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusSquare"];
    }
    ngOnInit() {
        this.contract.getContracts('tsclient').subscribe((response) => {
            this.TSClient = response['contract'];
        });
    }
    createTSC() {
        this.contract.createTSC().subscribe((response) => {
            this.route.navigate(['/contracts/edit/' + response['id']]);
        });
    }
};
TsclientComponent.ctorParameters = () => [
    { type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TsclientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tsclient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tsclient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/tsclient/tsclient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tsclient.component.css */ "./src/app/contracts/tsclient/tsclient.component.css")).default]
    })
], TsclientComponent);



/***/ }),

/***/ "./src/app/contracts/tsforwarder/tsforwarder.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contracts/tsforwarder/tsforwarder.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0cy90c2ZvcndhcmRlci90c2ZvcndhcmRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contracts/tsforwarder/tsforwarder.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contracts/tsforwarder/tsforwarder.component.ts ***!
  \****************************************************************/
/*! exports provided: TsforwarderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TsforwarderComponent", function() { return TsforwarderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contract.service */ "./src/app/contracts/contract.service.ts");






let TsforwarderComponent = class TsforwarderComponent {
    constructor(contract, route) {
        this.contract = contract;
        this.route = route;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusSquare"];
    }
    ngOnInit() {
        this.contract.getContracts('tsforwarder').subscribe((response) => {
            this.TSForwarder = response['contract'];
        });
    }
    createTSF() {
        this.contract.createTSF().subscribe((response) => {
            this.route.navigate(['/contracts/edit/' + response['id']]);
        });
    }
};
TsforwarderComponent.ctorParameters = () => [
    { type: _contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TsforwarderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tsforwarder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tsforwarder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contracts/tsforwarder/tsforwarder.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tsforwarder.component.css */ "./src/app/contracts/tsforwarder/tsforwarder.component.css")).default]
    })
], TsforwarderComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar\r\n{\r\n\tbackground-image: url('banner.jpg'); \r\n\tpadding: 0px 15px 0px 5px;\r\n}\r\n.table\r\n{\r\n\tbackground-color: white\r\n}\r\n.footer\r\n{\r\n\twidth: 100%;\r\n\theight: 100px;\r\n\tbackground-image: url('banner.jpg');\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tvertical-align: center;\r\n\tpadding-top: 25px;\r\n}\r\nth\r\n{\r\n\ttext-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLG1DQUE4QztDQUM5Qyx5QkFBeUI7QUFDMUI7QUFDQTs7Q0FFQztBQUNEO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7Q0FDYixtQ0FBOEM7Q0FDOUMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLGlCQUFpQjtBQUNsQjtBQUNBOztDQUVDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJcclxue1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmFubmVyLmpwZyk7IFxyXG5cdHBhZGRpbmc6IDBweCAxNXB4IDBweCA1cHg7XHJcbn1cclxuLnRhYmxlXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcbi5mb290ZXJcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYW5uZXIuanBnKTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcbnRoXHJcbntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/services/dashboard.service.ts");






let DashboardComponent = class DashboardComponent {
    constructor(router, dashboard) {
        this.router = router;
        this.dashboard = dashboard;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEdit"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusSquare"];
        this.email = localStorage.getItem('email');
        this.name = localStorage.getItem('name');
    }
    ngOnInit() {
        if (localStorage.getItem('role') == null) {
            console.log(localStorage.getItem('role'));
            this.router.navigate(['/login']);
        }
        else {
            this.dashboard.getLogistics(this.email).subscribe((ResponseLogistics) => {
                this.Logistics = ResponseLogistics['logistic'];
                console.log(this.Logistics);
            });
        }
    }
    createShipping() {
        this.dashboard.createShipping(localStorage.getItem('email')).subscribe((response) => {
            console.log(response);
            this.router.navigate(['/shipping/' + response['id'] + '/general']);
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n}\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n    width: 150px;\r\n    height: 150px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGOztFQUVFO0FBQ0Y7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHNFQUFzRTtBQUMxRTtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFpQjtRQUFqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBOztFQUVFO0FBQ0Y7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUdoQyxrQkFBa0I7SUFHbEIsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBR2Qsa0JBQWtCO0FBQ3RCO0FBRUE7O0VBRUU7QUFDRjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUduQixzQkFBc0I7QUFDMUI7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFHbEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUVWLHVFQUF1RTtBQUMzRTtBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQywyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUdaLGtCQUFrQjtJQUNsQixZQUFZO0lBSVosc0JBQXNCO0FBQzFCO0FBRUE7OztJQUdJLGlDQUFpQztBQUNyQztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBTcGVjaWZpYyBzdHlsZXMgb2Ygc2lnbmluIGNvbXBvbmVudFxyXG4gKi9cclxuLypcclxuICogR2VuZXJhbCBzdHlsZXNcclxuICovXHJcbmJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMTA0LCAxNDUsIDE2MiksIHJnYigxMiwgOTcsIDMzKSk7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi8qXHJcbiAqIENhcmQgY29tcG9uZW50XHJcbiAqL1xyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgLyoganVzdCBpbiBjYXNlIHRoZXJlIG5vIGNvbnRlbnQqL1xyXG4gICAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIC8qIHNoYWRvd3MgYW5kIHJvdW5kZWQgYm9yZGVycyAqL1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltZy1jYXJkIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBGb3JtIHN0eWxlc1xyXG4gKi9cclxuLnByb2ZpbGUtbmFtZS1jYXJkIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgIG1pbi1oZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnJlYXV0aC1lbWFpbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAjaW5wdXRFbWFpbCxcclxuLmZvcm0tc2lnbmluICNpbnB1dFBhc3N3b3JkIHtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1lbWFpbF0sXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSxcclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9dGV4dF0sXHJcbi5mb3JtLXNpZ25pbiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTA0LCAxNDUsIDE2Mik7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zaWduaW4ge1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ5MGZlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHJnYigxMDQsIDE0NSwgMTYyKSwgcmdiKDEyLCA5NywgMzMpKTsqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcclxufVxyXG5cclxuLmJ0bi5idG4tc2lnbmluOmhvdmVyLFxyXG4uYnRuLmJ0bi1zaWduaW46YWN0aXZlLFxyXG4uYnRuLmJ0bi1zaWduaW46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA5NywgMzMpO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCAxNDUsIDE2Mik7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIsXHJcbi5mb3Jnb3QtcGFzc3dvcmQ6YWN0aXZlLFxyXG4uZm9yZ290LXBhc3N3b3JkOmZvY3Vze1xyXG4gICAgY29sb3I6IHJnYigxMiwgOTcsIDMzKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.error = false;
        this.user = {
            email: '',
            password: '',
            role: 'guest',
            name: 'Guest'
        };
    }
    email_change() {
    }
    password_change() {
    }
    onSubmit() {
        this.authservice.getAuth(this.user.email, this.user.password).subscribe((Users) => {
            this.user = Users;
            if (this.user.role) {
                localStorage.setItem('email', this.user.email);
                localStorage.setItem('name', this.user.name);
                localStorage.setItem('role', this.user.role);
                this.router.navigate(['/dashboard']);
            }
            else {
                this.error = true;
            }
        });
        this.user.email = '';
        this.user.password = '';
    }
    ngOnInit() {
        localStorage.clear();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




let DashboardService = class DashboardService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getLogistics(email) {
        const formData = new FormData();
        formData.append('email', String(email));
        return this.http.post('http://' + this.auth.server_ip + '/dashboard/logistics.php', formData, { responseType: 'json' });
    }
    createShipping(email) {
        const formData = new FormData();
        formData.append('email', String(email));
        return this.http.post('http://' + this.auth.server_ip + '/dashboard/create_shipping.php', formData, { responseType: 'json' });
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/shipping/cmr/cmr.component.css":
/*!************************************************!*\
  !*** ./src/app/shipping/cmr/cmr.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card\r\n{\r\n\tborder-color: #0e91e3;\r\n}\r\n.mat-option\r\n{\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n.mat-active\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n.mat-option:hover\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvY21yL2Ntci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7QUFDQTs7Q0FFQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiO0FBQ0E7O0NBRUMseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nL2Ntci9jbXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkXHJcbntcclxuXHRib3JkZXItY29sb3I6ICMwZTkxZTM7XHJcbn1cclxuLm1hdC1vcHRpb25cclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG4ubWF0LWFjdGl2ZVxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1vcHRpb246aG92ZXJcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shipping/cmr/cmr.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shipping/cmr/cmr.component.ts ***!
  \***********************************************/
/*! exports provided: CmrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmrComponent", function() { return CmrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _service_shipping_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/shipping.service */ "./src/app/shipping/service/shipping.service.ts");







let CmrComponent = class CmrComponent {
    constructor(shipservice, activateRoute, http, auth) {
        this.shipservice = shipservice;
        this.activateRoute = activateRoute;
        this.http = http;
        this.auth = auth;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.tractor = new Array();
        this.trailer = new Array();
        this.truck_id = new Array();
        this.driver_first_name = new Array();
        this.driver_last_name = new Array();
        this.name_company = new Array();
        this.cmr_number = new Array();
        this.cmr_date = new Array();
        this.path = new Array();
        this.loaded = new Array();
        this.fileData = null;
    }
    ngOnInit() {
        this.shipservice.getTrucks().subscribe((response) => {
            this.tractor = response['tractor'];
            this.trailer = response['trailer'];
            this.truck_id = response['trac_id'];
            this.driver_first_name = response['driver_first_name'];
            this.driver_last_name = response['driver_last_name'];
            this.name_company = response['name_company'];
            this.cmr_number = response['cmr_number'];
            this.cmr_date = response['cmr_date'];
            this.path = response['path'];
            for (let i = 0; i < response['tractor'].length; i++) {
                if (response['path'][i] != undefined && response['path'][i] != null && response['path'][i] != '') {
                    this.loaded[i] = true;
                }
            }
        });
    }
    onSubmit(index) {
        console.log(this.truck_id[index]);
        const formData = new FormData();
        formData.append('id', String(this.shipservice.id));
        formData.append('truck_id', String(this.truck_id[index]));
        formData.append('cmr_number', this.cmr_number[index]);
        formData.append('cmr_date', this.cmr_date[index]);
        this.http.post('http://' + this.auth.server_ip + '/cmr/set_cmr.php', formData)
            .subscribe(res => {
            console.log(res);
        });
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
    }
    onSubmitFile(index) {
        const formData = new FormData();
        formData.append('file', this.fileData);
        formData.append('id', String(this.shipservice.id));
        formData.append('truck_id', this.truck_id[index]);
        this.http.post('http://' + this.auth.server_ip + '/cmr/upload_cmr_file.php', formData)
            .subscribe(res => {
            console.log(res);
            this.shipservice.getTrucks().subscribe((response) => {
                this.path = response['path'];
                for (let i = 0; i < response['tractor'].length; i++) {
                    if (response['path'][i] != undefined && response['path'][i] != null && response['path'][i] != '') {
                        this.loaded[i] = true;
                    }
                }
            });
        });
    }
    downCMR(i) {
        console.log(i);
        console.log(this.path);
        window.open('http://' + this.auth.server_ip + '/files/down_cmr.php?folder=cmrs&logistics_id=' + this.shipservice.id + '&truck_id=' + this.truck_id[i] + '&path=' + this.path[i]);
    }
};
CmrComponent.ctorParameters = () => [
    { type: _service_shipping_service__WEBPACK_IMPORTED_MODULE_6__["ShippingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
CmrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cmr',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cmr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/cmr/cmr.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cmr.component.css */ "./src/app/shipping/cmr/cmr.component.css")).default]
    })
], CmrComponent);



/***/ }),

/***/ "./src/app/shipping/document/client-order/client-order.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shipping/document/client-order/client-order.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card\r\n{\r\n\tborder-color: #0e91e3;\r\n}\r\n.mat-option\r\n{\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n.mat-active\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n.mat-option:hover\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvZG9jdW1lbnQvY2xpZW50LW9yZGVyL2NsaWVudC1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7QUFDQTs7Q0FFQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiO0FBQ0E7O0NBRUMseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nL2RvY3VtZW50L2NsaWVudC1vcmRlci9jbGllbnQtb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkXHJcbntcclxuXHRib3JkZXItY29sb3I6ICMwZTkxZTM7XHJcbn1cclxuLm1hdC1vcHRpb25cclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG4ubWF0LWFjdGl2ZVxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1vcHRpb246aG92ZXJcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shipping/document/client-order/client-order.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shipping/document/client-order/client-order.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClientOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientOrderComponent", function() { return ClientOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _service_shipping_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/shipping.service */ "./src/app/shipping/service/shipping.service.ts");






let ClientOrderComponent = class ClientOrderComponent {
    constructor(shipservice, activateRoute, http, auth) {
        this.shipservice = shipservice;
        this.activateRoute = activateRoute;
        this.http = http;
        this.auth = auth;
        this.contracts_number_client = new Array();
        this.contracts_date_client = new Array();
        this.contracts_ids_client = new Array();
        this.fileData = null;
        this.loadedClient = false;
    }
    ngOnInit() {
        this.shipservice.getAgreementClient().subscribe((response) => {
            this.client_name = response['response']['name_company'];
            this.client_id = response['response']['company_id'];
            this.contracts_number_client = response['response']['contracts_number_client'];
            this.contracts_date_client = response['response']['contracts_date_client'];
            this.contracts_ids_client = response['response']['contracts_ids_client'];
            for (let h = 0; h < this.contracts_number_client.length; h++) {
                if (h == this.contracts_number_client.length - 1) {
                    this.contract_number_client = this.contracts_number_client[h];
                    this.contract_date_client = response['response']['contracts_date_client'][h];
                    this.contract_id_client = response['response']['contracts_id_client'][h];
                }
            }
            if (response['response']['order_number_client'] != null) {
                this.order_number_client = response['response'].order_number_client;
                this.order_date_client = response['response'].order_date_client;
                if (response['response'].order_path_client != undefined && response['response'].order_path_client != '') {
                    this.order_path_client = response['response'].order_path_client;
                    this.loadedClient = true;
                }
            }
        });
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
    }
    selectclient(index) {
        for (let i = 0; i < this.contract_number_client.length; i++) {
            if (this.contracts_number_client[i] == index) {
                this.contract_id_client = i;
            }
        }
    }
    onSubmitClient() {
        const formDataClient = new FormData();
        formDataClient.append('id', String(this.shipservice.id));
        formDataClient.append('client_name', this.client_name);
        formDataClient.append('client_id', this.client_id);
        formDataClient.append('order_number_client', this.order_number_client);
        formDataClient.append('order_date_client', this.order_date_client);
        formDataClient.append('contract_id_client', this.contract_id_client);
        this.http.post('http://' + this.auth.server_ip + '/documents/upload_order_client.php', formDataClient)
            .subscribe(res => {
            console.log(res);
        });
    }
    onSubmitClientFile() {
        const formDataClient = new FormData();
        formDataClient.append('file', this.fileData);
        formDataClient.append('id', String(this.shipservice.id));
        formDataClient.append('client_id', this.client_id);
        this.http.post('http://' + this.auth.server_ip + '/documents/upload_order_client_file.php', formDataClient)
            .subscribe(res => {
            console.log(res);
            this.shipservice.getAgreementClient().subscribe((response) => {
                for (let i = 0; i < response['response'].contracts_number_client.length; i++) {
                    if (response["response"].order_path_client != null) {
                        this.shipservice.getAgreementClient().subscribe((response) => {
                            if (response['response']['order_number_client'] != null) {
                                this.order_number_client = response['response'].order_number_client;
                                this.order_date_client = response['response'].order_date_client;
                                this.order_path_client = response['response'].order_path_client;
                                this.loadedClient = true;
                            }
                        });
                    }
                }
            });
        });
    }
    downOrderClient() {
        window.open('http://' + this.auth.server_ip + '/files/down_order.php?folder=orders_client&order_number=' + this.order_number_client +
            '&client_name=' + this.client_name +
            '&logistics_id=' + this.shipservice.id +
            '&client_id=' + this.client_id +
            '&path=' + this.order_path_client);
    }
};
ClientOrderComponent.ctorParameters = () => [
    { type: _service_shipping_service__WEBPACK_IMPORTED_MODULE_5__["ShippingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ClientOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/document/client-order/client-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-order.component.css */ "./src/app/shipping/document/client-order/client-order.component.css")).default]
    })
], ClientOrderComponent);



/***/ }),

/***/ "./src/app/shipping/document/document.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shipping/document/document.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card\r\n{\r\n\tborder-color: #0e91e3;\r\n}\r\n.mat-option\r\n{\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n.mat-active\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n.mat-option:hover\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyx1QkFBdUI7Q0FDdkIsWUFBWTtBQUNiO0FBQ0E7O0NBRUMseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjtBQUNBOztDQUVDLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zaGlwcGluZy9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRcclxue1xyXG5cdGJvcmRlci1jb2xvcjogIzBlOTFlMztcclxufVxyXG4ubWF0LW9wdGlvblxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcbi5tYXQtYWN0aXZlXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LW9wdGlvbjpob3ZlclxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shipping/document/document.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shipping/document/document.component.ts ***!
  \*********************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _service_shipping_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/shipping.service */ "./src/app/shipping/service/shipping.service.ts");








let DocumentComponent = class DocumentComponent {
    constructor(shipservice, activateRoute, http, auth) {
        this.shipservice = shipservice;
        this.activateRoute = activateRoute;
        this.http = http;
        this.auth = auth;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"];
        /////////////////////////////////////Agreement
        this.carrier = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.director = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contract_number = new Array();
        this.contract_date = new Array();
        this.contract_id = new Array();
        this.contract_numbers = new Array();
        this.contract_dates = new Array();
        /////////////////////////////////////Agreement
        /////////////////////////////////////Order
        this.order_number = new Array();
        this.order_date = new Array();
        this.order_path = new Array();
        /////////////////////////////////////File
        this.fileData = null;
        this.loaded = new Array();
    }
    ngOnInit() {
        this.shipservice.getAgreement().subscribe((response) => {
            this.Carriers = response['response']['name'];
            this.Carriers_id = response['response']['id'];
            for (let i = 0; i < response['response'].contract_number.length; i++) {
                this.contract_numbers[i] = response["response"].contract_number[i];
                this.contract_dates[i] = response["response"].contract_date[i];
                this.contract_id[i] = response["response"].contract_id[i];
                this.order_number[i] = response["response"].orders_number[i];
                this.order_date[i] = response["response"].orders_date[i];
                console.log(response['response']);
                if (response["response"].order_path[i] != undefined && response["response"].order_path[i] != '') {
                    console.log(response["response"].order_path[i]);
                    this.order_path[i] = response["response"].order_path[i];
                    this.loaded[i] = true;
                }
            }
            console.log(this.loaded);
            for (let i = 0; i < this.contract_numbers.length; i++) {
                for (let j = 0; j < this.contract_numbers[i].length; j++) {
                    if (j == this.contract_numbers[i].length - 1) {
                        this.contract_number[i] = this.contract_numbers[i][j];
                        this.contract_date[i] = response["response"].contract_date[i][j];
                        this.indx_number = j;
                    }
                }
            }
        });
    }
    /////////////////////////////////////Order	
    downOrder(i) {
        console.log(i);
        console.log(this.order_path);
        window.open('http://' + this.auth.server_ip + '/files/down_order.php?folder=orders&order_number=' + this.order_number[i] + '&&carrier_name=' + this.Carriers[i] + '&logistics_id=' + this.shipservice.id + '&carrier_id=' + this.Carriers_id[i] + '&path=' + this.order_path[i]);
    }
    selectcarrier(indx, i) {
        for (let j = 0; j < this.contract_numbers.length; j++) {
            for (let k = 0; k < this.contract_numbers[j].length; k++) {
                if (this.contract_numbers[j][k] == indx) {
                    this.indx_number = k;
                }
            }
        }
        this.contract_date[i] = this.contract_dates[i][this.indx_number];
    }
    fileProgress(fileInput) {
        this.fileData = fileInput.target.files[0];
    }
    onSubmit(index) {
        const formData = new FormData();
        formData.append('id', String(this.shipservice.id));
        formData.append('carrier_name', this.Carriers[index]);
        formData.append('carrier_id', this.Carriers_id[index]);
        formData.append('order_number', this.order_number[index]);
        formData.append('order_date', this.order_date[index]);
        formData.append('contract_id', this.contract_id[index][this.indx_number]);
        this.http.post('http://' + this.auth.server_ip + '/documents/upload_order.php', formData)
            .subscribe(res => {
            console.log(res);
        });
    }
    onSubmitFile(index) {
        const formData = new FormData();
        formData.append('file', this.fileData);
        formData.append('id', String(this.shipservice.id));
        formData.append('carrier_id', this.Carriers_id[index]);
        formData.append('contract_id', this.contract_id[index][this.indx_number]);
        this.http.post('http://' + this.auth.server_ip + '/documents/upload_order_file.php', formData)
            .subscribe(res => {
            console.log(res);
            this.shipservice.getAgreement().subscribe((response) => {
                for (let i = 0; i < response['response'].contract_number.length; i++) {
                    if (response["response"].order_path[i] != undefined) {
                        console.log(response["response"].order_path[i]);
                        this.order_path[i] = response["response"].order_path[i];
                        this.loaded[i] = true;
                    }
                }
            });
        });
    }
};
DocumentComponent.ctorParameters = () => [
    { type: _service_shipping_service__WEBPACK_IMPORTED_MODULE_7__["ShippingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./document.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/document/document.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./document.component.css */ "./src/app/shipping/document/document.component.css")).default]
    })
], DocumentComponent);



/***/ }),

/***/ "./src/app/shipping/general/general.component.css":
/*!********************************************************!*\
  !*** ./src/app/shipping/general/general.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card\r\n{\r\n\tborder-color: #0e91e3;\r\n}\r\n.mat-option\r\n{\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n.mat-active\r\n{\r\n\tbackground-color: #0e91e3;\r\n\tcolor: white;\r\n}\r\n.mat-option:hover\r\n{\r\n\tbackground-color: #0e91e3;\r\n\tcolor: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvZ2VuZXJhbC9nZW5lcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMscUJBQXFCO0FBQ3RCO0FBQ0E7O0NBRUMsdUJBQXVCO0NBQ3ZCLFlBQVk7QUFDYjtBQUNBOztDQUVDLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7QUFDQTs7Q0FFQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hpcHBpbmcvZ2VuZXJhbC9nZW5lcmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxyXG57XHJcblx0Ym9yZGVyLWNvbG9yOiAjMGU5MWUzO1xyXG59XHJcbi5tYXQtb3B0aW9uXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1hdC1hY3RpdmVcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwZTkxZTM7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXQtb3B0aW9uOmhvdmVyXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGU5MWUzO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shipping/general/general.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shipping/general/general.component.ts ***!
  \*******************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _service_shipping_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/shipping.service */ "./src/app/shipping/service/shipping.service.ts");










let GeneralComponent = class GeneralComponent {
    constructor(activateRoute, authservice, http, formBuilder, shipservice) {
        this.activateRoute = activateRoute;
        this.authservice = authservice;
        this.http = http;
        this.formBuilder = formBuilder;
        this.shipservice = shipservice;
        this.faTruckMoving = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTruckMoving"];
        this.faPlane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlane"];
        this.saveButton = false;
        this.Auto = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true);
        this.service = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.services = ['FTL', 'LTL', 'FCL', 'LCL'];
        //////////////////////////////Material Autocomlete
        this.country_begin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.isLoadingcountry_begin = false;
        //////////////////////////////Material Autocomlete
        //////////////////////////////Material Autocomlete
        this.country_end = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.isLoadingcountry_end = false;
        //////////////////////////////Material Autocomlete
        this.city_begin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.city_end = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.incoterm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.incoterms = ['CIP', 'DAP', 'FCA', 'EXW'];
        this.incoterm_description_state = false;
        this.incoterms_description = [
            'Товар доставляется основному перевозчику заказчика, основную перевозку до указанного в договоре терминала прибытия оплачивает продавец, расходы по страховке несёт продавец, импортную растаможку и доставку с терминала прибытия основного перевозчика осуществляет покупатель.',
            'Поставка в место назначения, указанное в договоре, импортные пошлины и местные налоги оплачиваются покупателем.',
            'Товар доставляется основному перевозчику заказчика к указанному в договоре терминалу отправления, экспортные пошлины уплачивает продавец.',
            'Товар забирается покупателем с указанного в договоре склада продавца, оплата экспортных пошлин вменяется в обязанность покупателю.'
        ];
        this.rate_for_client = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.rate_for_client_currency = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.comments = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.id = this.shipservice.id;
        this.type_transportation = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.types_of_transportation = ["Авияперевозка", "Автоперевозка"];
        //////////////////////////////Material Autocomlete
        this.name_company = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.isLoadingname_company = false;
    }
    selectedcountry_begin(item) {
        this.country_begin.setValue(item.option.value);
    }
    selectedcountry_end(item) {
        this.country_end.setValue(item.option.value);
    }
    selectedname_company(item) {
        this.name_company.setValue(item.option.value);
    }
    //////////////////////////////Material Autocomlete
    ngOnInit() {
        console.log(this.shipservice.id);
        //////////////////////////////ngOnInit
        this.shipservice.getShipping(this.shipservice.id).subscribe((shipping) => {
            this.Auto.setValue(Boolean(Number(shipping['type_transportation'])));
            this.service.setValue(shipping['load_transportation']);
            this.incoterm.setValue(shipping['incoterm']);
            this.country_begin.setValue(shipping['from_country']);
            this.country_end.setValue(shipping['to_country']);
            this.city_begin.setValue(shipping['from_city']);
            this.city_end.setValue(shipping['to_city']);
            this.status.setValue(shipping['status']);
            this.comments.setValue(shipping['comments']);
            this.rate_for_client.setValue(shipping['rate_for_client']);
            this.rate_for_client_currency.setValue(shipping['rate_for_client_currency']);
            this.name_company.setValue(shipping['name_company']);
        });
        //////////////////////////////ngOnInit
        //////////////////////////////Material Autocomlete OnInit
        this.name_company.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.filteredname_company = [];
            this.isLoadingname_company = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.authservice.server_ip + "/search/search_companies_contract.php?company=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoadingname_company = false;
        }))))
            .subscribe(data => {
            if (data['company'] == null) {
                this.filteredname_company = [];
            }
            else {
                this.filteredname_company = data["company"];
            }
        });
        //////////////////////////////Material Autocomlete OnInit
        //////////////////////////////Material Autocomlete OnInit
        this.country_begin.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.filteredcountry_begin = [];
            this.isLoadingcountry_begin = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.authservice.server_ip + "/search/search_countries.php?countries=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoadingcountry_begin = false;
        }))))
            .subscribe(data => {
            if (data['countries'] == null) {
                this.filteredcountry_begin = [];
            }
            else {
                this.filteredcountry_begin = data["countries"];
            }
        });
        //////////////////////////////Material Autocomlete OnInit
        //////////////////////////////Material Autocomlete OnInit
        this.country_end.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.filteredcountry_end = [];
            this.isLoadingcountry_end = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.authservice.server_ip + "/search/search_countries.php?countries=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoadingcountry_end = false;
        }))))
            .subscribe(data => {
            if (data['countries'] == null) {
                this.filteredcountry_end = [];
            }
            else {
                this.filteredcountry_end = data["countries"];
            }
        });
        //////////////////////////////Material Autocomlete OnInit
        this.Auto.valueChanges.subscribe((value) => {
        });
        ///////////////////////////////ValueChanges
        this.city_begin.valueChanges.subscribe((value) => {
            console.log(value);
        });
        this.city_end.valueChanges.subscribe((value) => {
            console.log(value);
        });
        this.incoterm.valueChanges.subscribe((value) => {
            console.log(value);
            if (value == 'CIP') {
                this.incoterm_description_state = true;
                this.incoterm_description_text = this.incoterms_description[0];
            }
            if (value == 'DAP') {
                this.incoterm_description_state = true;
                this.incoterm_description_text = this.incoterms_description[1];
            }
            if (value == 'FCA') {
                this.incoterm_description_state = true;
                this.incoterm_description_text = this.incoterms_description[2];
            }
            if (value == 'EXW') {
                this.incoterm_description_state = true;
                this.incoterm_description_text = this.incoterms_description[3];
            }
        });
        ///////////////////////////////ValueChanges
    }
    Autoswitch() {
        this.Auto.setValue(true);
    }
    Aviaswitch() {
        this.Auto.setValue(false);
    }
    SaveGeneral() {
        this.saveButton = true;
        const formData = new FormData();
        formData.append('logistic_id', String(this.shipservice.id));
        formData.append('operator', String(localStorage.getItem('email')));
        formData.append('Auto', String(Number(this.Auto.value)));
        formData.append('service', String(this.service.value));
        formData.append('incoterm', String(this.incoterm.value));
        formData.append('country_begin', String(this.country_begin.value));
        formData.append('country_end', String(this.country_end.value));
        formData.append('city_begin', String(this.city_begin.value));
        formData.append('city_end', String(this.city_end.value));
        formData.append('status', String(this.status.value));
        formData.append('comments', String(this.comments.value));
        formData.append('rate_for_client', String(this.rate_for_client.value));
        formData.append('rate_for_client_currency', String(this.rate_for_client_currency.value));
        formData.append('name_company', String(this.name_company.value));
        return this.http.post('http://' + this.authservice.server_ip + '/shipping/set_shipping.php', formData, { responseType: 'json' }).subscribe((response) => {
            console.log(response);
            this.saveButton = false;
        });
    }
};
GeneralComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_shipping_service__WEBPACK_IMPORTED_MODULE_8__["ShippingService"] }
];
GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/general/general.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general.component.css */ "./src/app/shipping/general/general.component.css")).default]
    })
], GeneralComponent);



/***/ }),

/***/ "./src/app/shipping/notes/notes.component.css":
/*!****************************************************!*\
  !*** ./src/app/shipping/notes/notes.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shipping/notes/notes.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shipping/notes/notes.component.ts ***!
  \***************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_shipping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/shipping.service */ "./src/app/shipping/service/shipping.service.ts");





let NotesComponent = class NotesComponent {
    constructor(shipservice, activateRoute) {
        this.shipservice = shipservice;
        this.activateRoute = activateRoute;
        this.notes = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.shipservice.getNotes(this.shipservice.id).subscribe((Note) => {
            console.log(Note['response'].length);
            this.notesTable = Note['response'];
        });
    }
    saveNotes() {
        let email = localStorage.getItem('email');
        var today = new Date();
        var dd = String(today.getDate());
        var mm = String(today.getMonth() + 1); //January is 0!
        var yyyy = today.getFullYear();
        if (Number(dd) < 10) {
            dd = '0' + dd;
        }
        if (Number(mm) < 10) {
            mm = '0' + mm;
        }
        var toBaseDate = yyyy + '-' + mm + '-' + dd;
        this.shipservice.saveNote(this.shipservice.id, email, this.notes.value, toBaseDate).subscribe((response) => {
            console.log(response);
            this.shipservice.getNotes(this.shipservice.id).subscribe((Note) => {
                this.notesTable = Note['response'];
            });
        });
        console.log(toBaseDate);
        this.notes.setValue("");
    }
};
NotesComponent.ctorParameters = () => [
    { type: _service_shipping_service__WEBPACK_IMPORTED_MODULE_4__["ShippingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/notes/notes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.component.css */ "./src/app/shipping/notes/notes.component.css")).default]
    })
], NotesComponent);



/***/ }),

/***/ "./src/app/shipping/payment/payment.component.css":
/*!********************************************************!*\
  !*** ./src/app/shipping/payment/payment.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card\r\n{\r\n\tborder-color: #0e91e3;\r\n}\r\n.mat-option\r\n{\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n.mat-active\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n.mat-option:hover\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMscUJBQXFCO0FBQ3RCO0FBQ0E7O0NBRUMsdUJBQXVCO0NBQ3ZCLFlBQVk7QUFDYjtBQUNBOztDQUVDLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7QUFDQTs7Q0FFQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hpcHBpbmcvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxyXG57XHJcblx0Ym9yZGVyLWNvbG9yOiAjMGU5MWUzO1xyXG59XHJcbi5tYXQtb3B0aW9uXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1hdC1hY3RpdmVcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXQtb3B0aW9uOmhvdmVyXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shipping/payment/payment.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shipping/payment/payment.component.ts ***!
  \*******************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _service_shipping_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/shipping.service */ "./src/app/shipping/service/shipping.service.ts");








let PaymentComponent = class PaymentComponent {
    constructor(shipservice, activateRoute, http, authservice) {
        this.shipservice = shipservice;
        this.activateRoute = activateRoute;
        this.http = http;
        this.authservice = authservice;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"];
        this.name_payment_io = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.rate_payment_io = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.currency_payment_io = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.invoice_number_io = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.date_payment_io = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.status_payment_io = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.name_payment_ii = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.rate_payment_ii = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.currency_payment_ii = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.invoice_number_ii = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.date_payment_ii = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.status_payment_ii = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.IO_edit = false;
        this.II_edit = false;
    }
    ngOnInit() {
        this.shipservice.getIOs().subscribe((response) => {
            this.Payments = response['response'];
        });
        this.shipservice.getIIs().subscribe((response) => {
            this.Payments_II = response['response'];
            console.log(response);
        });
    }
    SaveIO() {
        const formData = new FormData();
        formData.append('logistics_id', String(this.shipservice.id));
        formData.append('invoice_type', String(0));
        formData.append('name_payment', String(this.name_payment_io.value));
        formData.append('rate_payment', String(this.rate_payment_io.value));
        formData.append('currency_payment', String(this.currency_payment_io.value));
        formData.append('invoice_number', String(this.invoice_number_io.value));
        formData.append('date_payment', String(this.date_payment_io.value));
        formData.append('status_payment', String(this.status_payment_io.value));
        this.http.post('http://' + this.authservice.server_ip + '/payments/set_io.php', formData)
            .subscribe((response) => {
            this.shipservice.getIOs().subscribe((response) => {
                this.Payments = response['response'];
                this.name_payment_io.setValue("");
                this.rate_payment_io.setValue("");
                this.currency_payment_io.setValue("");
                this.invoice_number_io.setValue("");
                this.date_payment_io.setValue("");
                this.status_payment_io.setValue("");
            });
        });
    }
    edit_IO(index) {
        this.IO_edit = true;
        this.IO_editing = index;
        console.log(this.IO_editing);
        this.name_payment_io.setValue(this.Payments[index]['name_payment']);
        this.rate_payment_io.setValue(this.Payments[index]['rate_payment']);
        this.currency_payment_io.setValue(this.Payments[index]['currency_payment']);
        this.invoice_number_io.setValue(this.Payments[index]['invoice_number']);
        this.date_payment_io.setValue(this.Payments[index]['date_payment']);
        this.status_payment_io.setValue(this.Payments[index]['status_payment']);
    }
    cancel_IO() {
        this.name_payment_io.setValue("");
        this.rate_payment_io.setValue("");
        this.currency_payment_io.setValue("");
        this.invoice_number_io.setValue("");
        this.date_payment_io.setValue("");
        this.status_payment_io.setValue("");
        this.IO_edit = false;
    }
    Editing_IO() {
        const formData = new FormData();
        formData.append('logistics_id', String(this.shipservice.id));
        formData.append('editing_id', String(this.Payments[this.IO_editing]['id']));
        formData.append('invoice_type', String(0));
        formData.append('name_payment', String(this.name_payment_io.value));
        formData.append('rate_payment', String(this.rate_payment_io.value));
        formData.append('currency_payment', String(this.currency_payment_io.value));
        formData.append('invoice_number', String(this.invoice_number_io.value));
        formData.append('date_payment', String(this.date_payment_io.value));
        formData.append('status_payment', String(this.status_payment_io.value));
        this.http.post('http://' + this.authservice.server_ip + '/payments/edit_io.php', formData)
            .subscribe((response) => {
            this.shipservice.getIOs().subscribe((response) => {
                this.Payments = response['response'];
                this.name_payment_io.setValue("");
                this.rate_payment_io.setValue("");
                this.currency_payment_io.setValue("");
                this.invoice_number_io.setValue("");
                this.date_payment_io.setValue("");
                this.status_payment_io.setValue("");
                this.IO_edit = false;
            });
        });
    }
    Delete_IO(index) {
        const formData = new FormData();
        formData.append('logistics_id', String(this.shipservice.id));
        formData.append('del_id', String(this.Payments[index]['id']));
        this.http.post('http://' + this.authservice.server_ip + '/payments/del_payment.php', formData)
            .subscribe((response) => {
            this.shipservice.getIOs().subscribe((response) => {
                this.Payments = response['response'];
            });
        });
    }
    SaveII() {
        const formData = new FormData();
        formData.append('logistics_id', String(this.shipservice.id));
        formData.append('invoice_type', String(1));
        formData.append('name_payment', String(this.name_payment_ii.value));
        formData.append('rate_payment', String(this.rate_payment_ii.value));
        formData.append('currency_payment', String(this.currency_payment_ii.value));
        formData.append('invoice_number', String(this.invoice_number_ii.value));
        formData.append('date_payment', String(this.date_payment_ii.value));
        formData.append('status_payment', String(this.status_payment_ii.value));
        this.http.post('http://' + this.authservice.server_ip + '/payments/set_ii.php', formData)
            .subscribe((response) => {
            this.shipservice.getIIs().subscribe((response) => {
                this.Payments_II = response['response'];
                this.name_payment_ii.setValue("");
                this.rate_payment_ii.setValue("");
                this.currency_payment_ii.setValue("");
                this.invoice_number_ii.setValue("");
                this.date_payment_ii.setValue("");
                this.status_payment_ii.setValue("");
            });
        });
    }
    edit_II(index) {
        this.II_edit = true;
        this.II_editing = index;
        this.name_payment_ii.setValue(this.Payments_II[index]['name_payment']);
        this.rate_payment_ii.setValue(this.Payments_II[index]['rate_payment']);
        this.currency_payment_ii.setValue(this.Payments_II[index]['currency_payment']);
        this.invoice_number_ii.setValue(this.Payments_II[index]['invoice_number']);
        this.date_payment_ii.setValue(this.Payments_II[index]['date_payment']);
        this.status_payment_ii.setValue(this.Payments_II[index]['status_payment']);
    }
    cancel_II() {
        this.name_payment_ii.setValue("");
        this.rate_payment_ii.setValue("");
        this.currency_payment_ii.setValue("");
        this.invoice_number_ii.setValue("");
        this.date_payment_ii.setValue("");
        this.status_payment_ii.setValue("");
        this.II_edit = false;
    }
    Editing_II() {
        const formData = new FormData();
        formData.append('logistics_id', String(this.shipservice.id));
        formData.append('editing_id', String(this.Payments_II[this.II_editing]['id']));
        formData.append('invoice_type', String(1));
        formData.append('name_payment', String(this.name_payment_ii.value));
        formData.append('rate_payment', String(this.rate_payment_ii.value));
        formData.append('currency_payment', String(this.currency_payment_ii.value));
        formData.append('invoice_number', String(this.invoice_number_ii.value));
        formData.append('date_payment', String(this.date_payment_ii.value));
        formData.append('status_payment', String(this.status_payment_ii.value));
        this.http.post('http://' + this.authservice.server_ip + '/payments/edit_ii.php', formData)
            .subscribe((response) => {
            this.shipservice.getIIs().subscribe((response) => {
                this.Payments_II = response['response'];
                this.name_payment_ii.setValue("");
                this.rate_payment_ii.setValue("");
                this.currency_payment_ii.setValue("");
                this.invoice_number_ii.setValue("");
                this.date_payment_ii.setValue("");
                this.status_payment_ii.setValue("");
                this.II_edit = false;
            });
        });
    }
    Delete_II(index) {
        const formData = new FormData();
        formData.append('logistics_id', String(this.shipservice.id));
        formData.append('del_id', String(this.Payments_II[index]['id']));
        this.http.post('http://' + this.authservice.server_ip + '/payments/del_payment.php', formData)
            .subscribe((response) => {
            this.shipservice.getIIs().subscribe((response) => {
                this.Payments_II = response['response'];
            });
        });
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _service_shipping_service__WEBPACK_IMPORTED_MODULE_7__["ShippingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/payment/payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.css */ "./src/app/shipping/payment/payment.component.css")).default]
    })
], PaymentComponent);



/***/ }),

/***/ "./src/app/shipping/service/shipping.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shipping/service/shipping.service.ts ***!
  \******************************************************/
/*! exports provided: ShippingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingService", function() { return ShippingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");




let ShippingService = class ShippingService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getShipping(id) {
        return this.http.get('http://' + this.auth.server_ip + '/shipping/get_shipping.php?id=' + id);
    }
    getTransport() {
        return this.http.get('http://' + this.auth.server_ip + '/shipping/get_Transport.php?id=' + this.id);
    }
    getNotes(id) {
        return this.http.get('http://' + this.auth.server_ip + '/notes/get_notes.php?id=' + id);
    }
    saveNote(id, email, note, date) {
        const formData = new FormData();
        formData.append('id', String(id));
        formData.append('email', String(email));
        formData.append('note', String(note));
        formData.append('date', String(date));
        return this.http.post('http://' + this.auth.server_ip + '/notes/set_notes.php', formData, { responseType: 'json' });
    }
    getCompany(name_company) {
        return this.http.get('http://' + this.auth.server_ip + '/search/get_company.php?name_company=' + name_company);
    }
    getTruck(tractor) {
        return this.http.get('http://' + this.auth.server_ip + '/search/get_truck.php?tractor=' + tractor);
    }
    getDriver(driver) {
        return this.http.get('http://' + this.auth.server_ip + '/search/get_driver.php?driver=' + driver);
    }
    saveTransport(searchTractor, trailer, searchCountry_truck, mark_truck, driver_seria_pass, searchDriver_number_pass, driver_first_name, driver_last_name, searchDriver_country, driver_text, searchCarrier_name, rate, rate_currency) {
        const formData = new FormData();
        formData.append('id', String(this.id));
        formData.append('searchTractor', String(searchTractor));
        formData.append('trailer', String(trailer));
        formData.append('searchCountry_truck', String(searchCountry_truck));
        formData.append('mark_truck', String(mark_truck));
        formData.append('driver_seria_pass', String(driver_seria_pass));
        formData.append('searchDriver_number_pass', String(searchDriver_number_pass));
        formData.append('driver_first_name', String(driver_first_name));
        formData.append('driver_last_name', String(driver_last_name));
        formData.append('searchDriver_country', String(searchDriver_country));
        formData.append('driver_text', String(driver_text));
        formData.append('searchCarrier_name', String(searchCarrier_name));
        formData.append('rate', String(rate));
        formData.append('rate_currency', String(rate_currency));
        return this.http.post('http://' + this.auth.server_ip + '/save/save_shipping.php', formData, { responseType: 'json' });
    }
    editTransport(transport_id, searchTractor, trailer, searchCountry_truck, mark_truck, driver_seria_pass, searchDriver_number_pass, driver_first_name, driver_last_name, searchDriver_country, driver_text, searchCarrier_name, rate, rate_currency) {
        const formData = new FormData();
        formData.append('id', String(this.id));
        formData.append('transport_id', String(transport_id));
        formData.append('searchTractor', String(searchTractor));
        formData.append('trailer', String(trailer));
        formData.append('searchCountry_truck', String(searchCountry_truck));
        formData.append('mark_truck', String(mark_truck));
        formData.append('driver_seria_pass', String(driver_seria_pass));
        formData.append('searchDriver_number_pass', String(searchDriver_number_pass));
        formData.append('driver_first_name', String(driver_first_name));
        formData.append('driver_last_name', String(driver_last_name));
        formData.append('searchDriver_country', String(searchDriver_country));
        formData.append('driver_text', String(driver_text));
        formData.append('searchCarrier_name', String(searchCarrier_name));
        formData.append('rate', String(rate));
        formData.append('rate_currency', String(rate_currency));
        return this.http.post('http://' + this.auth.server_ip + '/save/edit_shipping.php', formData, { responseType: 'json' });
    }
    deleteTransport(transport_id) {
        const formData = new FormData();
        formData.append('id', String(this.id));
        formData.append('transport_id', String(transport_id));
        return this.http.post('http://' + this.auth.server_ip + '/save/delete_shipping.php', formData, { responseType: 'json' });
    }
    //////////////////////////////////////////////////////////////////documents
    getAgreement() {
        return this.http.get('http://' + this.auth.server_ip + '/documents/get_agreement.php?id=' + this.id);
    }
    getNumAgree(carrier_id) {
        return this.http.get('http://' + this.auth.server_ip + '/documents/get_num_agree.php?carrier_id=' + carrier_id);
    }
    getOrders() {
        return this.http.get('http://' + this.auth.server_ip + '/documents/get_order.php?id=' + this.id);
    }
    getAgreementClient() {
        return this.http.get('http://' + this.auth.server_ip + '/documents/get_agreement_client.php?id=' + this.id);
    }
    //////////////////////////////////////////////////////////////////documents
    //////////////////////////////////////////////////////////////////payments
    getIOs() {
        return this.http.get('http://' + this.auth.server_ip + '/payments/get_ios.php?id=' + this.id);
    }
    getIIs() {
        return this.http.get('http://' + this.auth.server_ip + '/payments/get_iis.php?id=' + this.id);
    }
    //////////////////////////////////////////////////////////////////payments
    //////////////////////////////////////////////////////////////////cmr
    getTrucks() {
        return this.http.get('http://' + this.auth.server_ip + '/cmr/get_trucks.php?id=' + this.id);
    }
};
ShippingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ShippingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShippingService);



/***/ }),

/***/ "./src/app/shipping/shipping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shipping/shipping.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar\r\n{\r\n\tbackground-image: url('banner.jpg'); \r\n\tpadding: 0px 15px 0px 5px;\r\n}\r\n.table\r\n{\r\n\tbackground-color: white\r\n}\r\n.footer\r\n{\r\n\twidth: 100%;\r\n\theight: 100px;\r\n\tbackground-image: url('banner.jpg');\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tvertical-align: center;\r\n\tpadding-top: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvc2hpcHBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxtQ0FBOEM7Q0FDOUMseUJBQXlCO0FBQzFCO0FBQ0E7O0NBRUM7QUFDRDtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsbUNBQThDO0NBQzlDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGlwcGluZy9zaGlwcGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhclxyXG57XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYW5uZXIuanBnKTsgXHJcblx0cGFkZGluZzogMHB4IDE1cHggMHB4IDVweDtcclxufVxyXG4udGFibGVcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuLmZvb3RlclxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2Jhbm5lci5qcGcpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/shipping/shipping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shipping/shipping.component.ts ***!
  \************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_shipping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/shipping.service */ "./src/app/shipping/service/shipping.service.ts");




let ShippingComponent = class ShippingComponent {
    constructor(activateRoute, shippingService) {
        this.activateRoute = activateRoute;
        this.shippingService = shippingService;
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.shippingService.id = this.id;
        console.log(this.id);
    }
};
ShippingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_shipping_service__WEBPACK_IMPORTED_MODULE_3__["ShippingService"] }
];
ShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shipping.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/shipping.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shipping.component.css */ "./src/app/shipping/shipping.component.css")).default]
    })
], ShippingComponent);



/***/ }),

/***/ "./src/app/shipping/transport/transport.component.css":
/*!************************************************************!*\
  !*** ./src/app/shipping/transport/transport.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card\r\n{\r\n\tborder-color: #0e91e3;\r\n}\r\n.mat-option\r\n{\r\n\tbackground-color: white;\r\n\tcolor: black;\r\n}\r\n.mat-active\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n.mat-option:hover\r\n{\r\n\tbackground-color: #17a2b8;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHBpbmcvdHJhbnNwb3J0L3RyYW5zcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7QUFDQTs7Q0FFQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiO0FBQ0E7O0NBRUMseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nL3RyYW5zcG9ydC90cmFuc3BvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkXHJcbntcclxuXHRib3JkZXItY29sb3I6ICMwZTkxZTM7XHJcbn1cclxuLm1hdC1vcHRpb25cclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG4ubWF0LWFjdGl2ZVxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdC1vcHRpb246aG92ZXJcclxue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shipping/transport/transport.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shipping/transport/transport.component.ts ***!
  \***********************************************************/
/*! exports provided: TransportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportComponent", function() { return TransportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _service_shipping_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/shipping.service */ "./src/app/shipping/service/shipping.service.ts");









let TransportComponent = class TransportComponent {
    constructor(shipservice, activateRoute, http, authservice) {
        this.shipservice = shipservice;
        this.activateRoute = activateRoute;
        this.http = http;
        this.authservice = authservice;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrash"];
        //////////////////////////////Material Autocomlete
        this.searchTractor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.isLoadingTractor = false;
        //////////////////////////////Material Autocomlete
        this.trailer = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        //////////////////////////////Material Autocomlete
        this.searchCountry_truck = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.isLoadingCountry_truck = false;
        //////////////////////////////Material Autocomlete
        this.mark_truck = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.driver_seria_pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        //////////////////////////////Material Autocomlete
        this.searchDriver_number_pass = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.isLoadingDriver_number_pass = false;
        //////////////////////////////Material Autocomlete
        this.driver_first_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.driver_last_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        //////////////////////////////Material Autocomlete
        this.searchDriver_country = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.isLoadingDriver_country = false;
        //////////////////////////////Material Autocomlete
        this.driver_text = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.uzbek = false;
        //////////////////////////////Material Autocomlete
        this.searchCarrier_name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.isLoadingCarrier_name = false;
        //////////////////////////////Material Autocomlete
        this.rate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.rate_currency = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.disable = false;
        this.editing = false;
        this.etransport = 0;
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.id = activateRoute.snapshot.params['id'];
    }
    selectedTractor(item) {
        this.shipservice.getTruck(item.option.value).subscribe((Truck) => {
            console.log(Truck);
            this.trailer.setValue(Truck['trailer']);
            this.searchCountry_truck.setValue(Truck['country']);
            this.mark_truck.setValue(Truck['mark']);
        });
    }
    selectedCountry_truck(item) {
        this.searchCountry_truck.setValue(item.option.value);
    }
    selectedDriver_number_pass(item) {
        this.shipservice.getDriver(item.option.value).subscribe((Driver) => {
            console.log(Driver);
            this.driver_seria_pass.setValue(Driver['driver_seria_pass']);
            this.driver_first_name.setValue(Driver['driver_first_name']);
            this.driver_last_name.setValue(Driver['driver_last_name']);
            this.searchDriver_country.setValue(Driver['driver_country']);
            this.driver_text.setValue(Driver['driver_text']);
        });
    }
    selectedDriver_country(item) {
        this.searchDriver_country.setValue(item.option.value);
    }
    selectedCarrier_name(item) {
        this.searchCarrier_name.setValue(item.option.value);
    }
    ngOnInit() {
        ///////////////////////////////////////ngOnInit
        this.shipservice.getTransport().subscribe((response) => {
            this.Transports = response[0];
            this.total_rate = response['total_rate'];
            this.total_currency = response['total_currency'];
            this.count_carriers = response['count_carriers'];
            const formData = new FormData();
            formData.append('id', String(this.shipservice.id));
            return this.http.post('http://' + this.authservice.server_ip + '/status/getStat_Us.php', formData, { responseType: 'json' }).subscribe((response) => {
                this.Stat_Us = response["duo"];
                console.log(this.Stat_Us);
                this.Transports + this.Stat_Us;
                console.log(this.Transports);
            });
        });
        ///////////////////////////////////////ngOnInit
        ///////////////////////////////////////valuechanges
        this.searchDriver_country.valueChanges.subscribe((value) => {
            if (value == "УЗБЕКИСТАН" || value == "860 УЗБЕКИСТАН") {
                this.uzbek = true;
            }
            else {
                this.uzbek = false;
            }
        });
        ///////////////////////////////////////valuechanges
        //////////////////////////////Material Autocomlete OnInit Carrier
        this.searchCarrier_name.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.filteredCarrier_name = [];
            this.isLoadingCarrier_name = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.authservice.server_ip + "/search/search_carrier_contract.php?company=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoadingCarrier_name = false;
        }))))
            .subscribe(data => {
            if (data['company'] == null) {
                this.filteredCarrier_name = [];
            }
            else {
                this.filteredCarrier_name = data["company"];
            }
        });
        //////////////////////////////Material Autocomlete OnInit Carrier
        //////////////////////////////Material Autocomlete OnInit Driver country
        this.searchDriver_country.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.filteredDriver_country = [];
            this.isLoadingDriver_country = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.authservice.server_ip + "/search/search_countries.php?countries=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoadingDriver_country = false;
        }))))
            .subscribe(data => {
            if (data['countries'] == null) {
                this.filteredDriver_country = [];
            }
            else {
                this.filteredDriver_country = data["countries"];
            }
        });
        //////////////////////////////Material Autocomlete OnInit Driver country
        //////////////////////////////Material Autocomlete OnInit Driver
        this.searchDriver_number_pass.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.filteredDriver_number_pass = [];
            this.isLoadingDriver_number_pass = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.authservice.server_ip + "/search/search_driver.php?driver=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoadingDriver_number_pass = false;
        }))))
            .subscribe(data => {
            if (data['driver'] == null) {
                this.filteredDriver_number_pass = [];
            }
            else {
                this.filteredDriver_number_pass = data["driver"];
            }
        });
        //////////////////////////////Material Autocomlete OnInit Driver
        //////////////////////////////Material Autocomlete OnInit truck country
        this.searchCountry_truck.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.filteredCountry_truck = [];
            this.isLoadingCountry_truck = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.authservice.server_ip + "/search/search_countries.php?countries=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoadingCountry_truck = false;
        }))))
            .subscribe(data => {
            if (data['countries'] == null) {
                this.filteredCountry_truck = [];
            }
            else {
                this.filteredCountry_truck = data["countries"];
            }
        });
        //////////////////////////////Material Autocomlete OnInit truck country
        //////////////////////////////Material Autocomlete OnInit Truck
        this.searchTractor.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
            this.filteredTractor = [];
            this.isLoadingTractor = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(value => this.http.get("http://" + this.authservice.server_ip + "/search/search_truck.php?tractor=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.isLoadingTractor = false;
        }))))
            .subscribe(data => {
            if (data['tractor'] == null) {
                this.filteredTractor = [];
            }
            else {
                this.filteredTractor = data["tractor"];
            }
        });
        //////////////////////////////Material Autocomlete OnInit Truck
    }
    SaveTransport() {
        this.disable = true;
        this.shipservice.saveTransport(this.searchTractor.value, this.trailer.value, this.searchCountry_truck.value, this.mark_truck.value, this.driver_seria_pass.value, this.searchDriver_number_pass.value, this.driver_first_name.value, this.driver_last_name.value, this.searchDriver_country.value, this.driver_text.value, this.searchCarrier_name.value, this.rate.value, this.rate_currency.value)
            .subscribe((response) => {
            console.log(response);
            this.shipservice.getTransport().subscribe((response) => {
                this.Transports = response[0];
                this.total_rate = response['total_rate'];
                this.total_currency = response['total_currency'];
                this.count_carriers = response['count_carriers'];
            });
            this.disable = false;
        });
        this.searchTractor.setValue("");
        this.trailer.setValue("");
        this.searchCountry_truck.setValue("");
        this.mark_truck.setValue("");
        this.driver_seria_pass.setValue("");
        this.searchDriver_number_pass.setValue("");
        this.driver_first_name.setValue("");
        this.driver_last_name.setValue("");
        this.searchDriver_country.setValue("");
        this.driver_text.setValue("");
        this.searchCarrier_name.setValue("");
        this.rate.setValue("");
        this.rate_currency.setValue("");
    }
    edit_transport(index) {
        this.editing = true;
        this.searchTractor.setValue(this.Transports[index]['tractor']);
        this.truck_id = this.Transports[index]['truck_id'];
        this.trailer.setValue(this.Transports[index]['trailer']);
        this.searchCountry_truck.setValue(this.Transports[index]['country']);
        this.mark_truck.setValue(this.Transports[index]['mark']);
        this.driver_seria_pass.setValue(this.Transports[index]['driver_seria_pass']);
        this.searchDriver_number_pass.setValue(this.Transports[index]['driver_number_pass']);
        this.driver_last_name.setValue(this.Transports[index]['driver_last_name']);
        this.driver_first_name.setValue(this.Transports[index]['driver_first_name']);
        this.searchDriver_country.setValue(this.Transports[index]['driver_country']);
        this.driver_text.setValue(this.Transports[index]['driver_text']);
        this.searchCarrier_name.setValue(this.Transports[index]['carrier_name_company']);
        this.rate.setValue(this.Transports[index]['rate']);
        this.rate_currency.setValue(this.Transports[index]['rate_currency']);
        this.etransport = this.Transports[index]['id'];
        const formData = new FormData();
        formData.append('id', String(this.shipservice.id));
        formData.append('transport_id', String(this.truck_id));
        return this.http.post('http://' + this.authservice.server_ip + '/status/getStatus.php', formData, { responseType: 'json' }).subscribe((response) => {
            this.Statuses = response["response"];
        });
    }
    CancelEditing() {
        this.searchTractor.setValue("");
        this.trailer.setValue("");
        this.searchCountry_truck.setValue("");
        this.mark_truck.setValue("");
        this.driver_seria_pass.setValue("");
        this.searchDriver_number_pass.setValue("");
        this.driver_last_name.setValue("");
        this.driver_first_name.setValue("");
        this.searchDriver_country.setValue("");
        this.driver_text.setValue("");
        this.searchCarrier_name.setValue("");
        this.rate.setValue("");
        this.rate_currency.setValue("");
        this.editing = false;
    }
    EditTransport() {
        this.shipservice.editTransport(this.etransport, this.searchTractor.value, this.trailer.value, this.searchCountry_truck.value, this.mark_truck.value, this.driver_seria_pass.value, this.searchDriver_number_pass.value, this.driver_first_name.value, this.driver_last_name.value, this.searchDriver_country.value, this.driver_text.value, this.searchCarrier_name.value, this.rate.value, this.rate_currency.value)
            .subscribe((response) => {
            console.log(response);
            this.shipservice.getTransport().subscribe((response) => {
                this.Transports = response[0];
                this.total_rate = response['total_rate'];
                this.total_currency = response['total_currency'];
                this.count_carriers = response['count_carriers'];
            });
        });
        this.searchTractor.setValue("");
        this.trailer.setValue("");
        this.searchCountry_truck.setValue("");
        this.mark_truck.setValue("");
        this.driver_seria_pass.setValue("");
        this.searchDriver_number_pass.setValue("");
        this.driver_first_name.setValue("");
        this.driver_last_name.setValue("");
        this.searchDriver_country.setValue("");
        this.driver_text.setValue("");
        this.searchCarrier_name.setValue("");
        this.rate.setValue("");
        this.rate_currency.setValue("");
        this.editing = false;
    }
    delete(index) {
        let indx = this.Transports[index]['id'];
        this.shipservice.deleteTransport((indx)).subscribe((deleted) => {
            console.log(deleted);
            this.shipservice.getTransport().subscribe((response) => {
                this.Transports = response[0];
                this.total_rate = response['total_rate'];
                this.total_currency = response['total_currency'];
                this.count_carriers = response['count_carriers'];
            });
            this.editing = false;
        });
    }
    addStatus() {
        const formData = new FormData();
        formData.append('id', String(this.shipservice.id));
        formData.append('transport_id', String(this.truck_id));
        formData.append('status', String(this.status.value));
        formData.append('date', String(this.date.value));
        return this.http.post('http://' + this.authservice.server_ip + '/status/addStatus.php', formData, { responseType: 'json' }).subscribe((value) => {
            this.status.setValue('');
            this.date.setValue('');
            const formData = new FormData();
            formData.append('id', String(this.shipservice.id));
            formData.append('transport_id', String(this.truck_id));
            return this.http.post('http://' + this.authservice.server_ip + '/status/getStatus.php', formData, { responseType: 'json' }).subscribe((response) => {
                this.Statuses = response["response"];
                const formData = new FormData();
                formData.append('id', String(this.shipservice.id));
                return this.http.post('http://' + this.authservice.server_ip + '/status/getStat_Us.php', formData, { responseType: 'json' }).subscribe((response) => {
                    this.Stat_Us = response["duo"];
                    console.log(this.Stat_Us);
                    this.Transports + this.Stat_Us;
                    console.log(this.Transports);
                });
            });
        });
    }
};
TransportComponent.ctorParameters = () => [
    { type: _service_shipping_service__WEBPACK_IMPORTED_MODULE_8__["ShippingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
TransportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transport',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping/transport/transport.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transport.component.css */ "./src/app/shipping/transport/transport.component.css")).default]
    })
], TransportComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\mmuz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map