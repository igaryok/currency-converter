(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{28:function(e,t,r){e.exports=r(44)},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(14),u=r.n(a),o=r(10),l=r(2),i=r(9),s=(r(37),r(16)),y="https://openexchangerates.org/api/",E={SAVE_LIST_CURRENCY:"SAVE_LIST_CURRENCY",SAVE_RATES_USD:"SAVE_RATES_USD",START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING",SET_LOAD_ERROR:"SET_LOAD_ERROR",SET_CURRENCY_FROM:"SET_CUURENCY_FROM",SET_CURRENCY_TO:"SET_CURRENCY_TO",SET_CURRENT_SUM:"SET_CURRENT_SUM",SET_BASE_CURRENCY:"SET_BASE_CURRENCY"},f=Object(l.b)(null,(function(e){return{setCurrencyFrom:function(t){return e(function(e){return{type:E.SET_CURRENCY_FROM,payload:e}}(t))},setCurrencyTo:function(t){return e(function(e){return{type:E.SET_CURRENCY_TO,payload:e}}(t))},setBaseCurrency:function(t){return e(function(e){return{type:E.SET_BASE_CURRENCY,payload:e}}(t))}}}))((function(e){var t=e.options,r=e.name,n=e.defaultValue,a=e.typeCurrency,u=e.setCurrencyFrom,o=e.setCurrencyTo,l=e.setBaseCurrency,i=function(e){switch(e){case"currencyFrom":return u;case"currencyTo":return o;case"currencyBase":return l;default:return}}(a),s=Object.keys(t);return c.a.createElement("label",null,r.toUpperCase(),c.a.createElement("select",{onChange:function(e){return i(e.target.value)},className:"currency-selector"},s.map((function(e){return c.a.createElement("option",{key:e,value:e,selected:n===e},e)}))))})),m=(r(38),Object(l.b)(null,(function(e){return{setCurrentSum:function(t){return e(function(e){return{type:E.SET_CURRENT_SUM,payload:e}}(t))}}}))((function(e){var t=e.defaultValue,r=e.setCurrentSum;return c.a.createElement("input",{className:"input-field",type:"number",defaultValue:t,onInput:function(e){return r(Number(e.target.value))}})}))),S=r(11),_=function(e){return e},b=Object(S.a)(_,(function(e){return e.listCurrency})),p=Object(S.a)(_,(function(e){return e.currencyFrom})),O=Object(S.a)(_,(function(e){return e.currencyTo})),C=Object(S.a)(_,(function(e){return e.exchangeRatesUSD})),R=Object(S.a)(_,(function(e){return e.currentSum})),d=Object(S.a)(_,(function(e){return e.baseCurrency})),T=Object(l.b)((function(e){return{currencyFrom:p(e),currencyTo:O(e),rates:C(e),currentSum:R(e)}}))((function(e){var t=e.currencyFrom,r=e.currencyTo,n=e.rates,a=e.currentSum*(n[r]/n[t]);return c.a.createElement("label",null,a.toFixed(3))})),N=(r(39),Object(l.b)((function(e){return{listCurrency:b(e)}}))((function(e){var t=e.listCurrency;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"converter"},c.a.createElement("div",{className:"converter-currency"},c.a.createElement(f,{className:"coverter-currency__from",options:t,name:"from currency",defaultValue:"USD",typeCurrency:"currencyFrom"}),c.a.createElement(m,{defaultValue:"0"})),c.a.createElement("div",{className:"converter-currency"},c.a.createElement(f,{className:"converter-currency__to",options:t,name:"to currency",defaultValue:"USD",typeCurrency:"currencyTo"}),c.a.createElement(T,null))),c.a.createElement(o.b,{className:"button-link",to:"currency-rates"},"Show all currencies rates"))}))),U=r(17),h=(r(41),Object(l.b)((function(e){return{ratesUSD:C(e),baseCurrency:d(e),listCurrency:b(e)}}))((function(e){var t=e.ratesUSD,r=e.baseCurrency,a=e.listCurrency,u=Object.entries(t).map((function(e){return[e[0],e[1]/t[r],a[e[0]],1]})).sort((function(e,t){return e[3]-t[3]})),o=Object(n.useState)(Object(U.a)(u)),l=Object(s.a)(o,2),i=l[0],y=l[1];Object(n.useEffect)((function(){y(Object(U.a)(u))}),[r,t]);return c.a.createElement("table",{className:"table-rates"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Currency"),c.a.createElement("th",null,"Rates"),c.a.createElement("th",null,"Country"))),c.a.createElement("tbody",null,i&&i.map((function(e){return c.a.createElement("tr",{className:"table-rates-item",key:e[0],id:e[0],bgcolor:e[3]?null:"yellow",onClick:function(e){return function(e){var t=e.target.id,r=i.find((function(e){return e[0]===t}));1===r[3]?r[3]=0:r[3]=1,i.sort((function(e,t){if(e[3]===t[3]){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0])return 0}return e[3]-t[3]})),y(Object(U.a)(i))}(e)}},c.a.createElement("td",{id:e[0]},e[0]),c.a.createElement("td",{id:e[0]},e[1].toFixed(5)),c.a.createElement("td",{id:e[0]},e[2]))}))))}))),j=(r(42),Object(l.b)((function(e){return{listCurrency:b(e)}}))((function(e){var t=e.listCurrency;return c.a.createElement("div",{className:"rates-currency"},c.a.createElement(o.b,{className:"button-link",to:"/"},"Currency autoconverter"),c.a.createElement("h1",null,"Rates currency"),c.a.createElement("p",null,"*You can click to row in the table with the currency and the row moves on the begin of the table"),c.a.createElement(f,{className:"converter-currency__base",options:t,name:"base currency",defaultValue:"USD",typeCurrency:"currencyBase"}),c.a.createElement(h,null))}))),v=(r(43),{loadData:function(){return function(e){e({type:E.START_LOADING}),Promise.all([fetch("".concat(y).concat("currencies.json")).then((function(e){return e.json()})),fetch("".concat(y).concat("latest.json?app_id=").concat("be9423d4e8744a938087bb2febb7693e")).then((function(e){return e.json()}))]).then((function(t){var r=Object(s.a)(t,2),n=r[0],c=r[1];e(function(e){return{type:E.SAVE_LIST_CURRENCY,payload:e}}(n)),e(function(e){return{type:E.SAVE_RATES_USD,payload:e}}(c.rates))})).catch((function(t){return e(function(e){return{type:E.SET_LOAD_ERROR,payload:e}}(t))})).finally(e({type:E.STOP_LOADING}))}}}),D=Object(l.b)(null,v)((function(e){var t=e.loadData;return Object(n.useEffect)((function(){t()})),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"header"},"Converter Currency"),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:N}),c.a.createElement(i.a,{path:"/currency-rates",component:j})))})),A=r(12),g=r(26),L=r(27);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(L.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y={listCurrency:{},exchangeRatesUSD:{},isLoading:!1,errorLoading:null,currencyFrom:"USD",currencyTo:"USD",currentSum:0,baseCurrency:"USD",exchangeRateBaseCurrency:{}};var V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,I=[g.a],P=Object(A.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SAVE_LIST_CURRENCY:return F({},e,{error:null,listCurrency:t.payload});case E.SAVE_RATES_USD:return F({},e,{error:null,exchangeRatesUSD:t.payload});case E.SET_CURRENCY_FROM:return F({},e,{currencyFrom:t.payload});case E.SET_CURRENCY_TO:return F({},e,{currencyTo:t.payload});case E.SET_BASE_CURRENCY:return F({},e,{baseCurrency:t.payload});case E.SET_CURRENT_SUM:return F({},e,{currentSum:t.payload});case E.START_LOADING:return F({},e,{isLoading:!0});case E.STOP_LOADING:return F({},e,{isLoading:!1});case E.SET_LOAD_ERROR:return F({},e,{listCurrency:{},exchangeRatesUSD:{},isLoading:!1,errorLoading:t.payload});default:return e}}),V(A.a.apply(void 0,I)));u.a.render(c.a.createElement(l.a,{store:P},c.a.createElement(o.a,null,c.a.createElement(D,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.57fe8878.chunk.js.map