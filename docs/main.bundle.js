webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>ngx-chart builder\n  <small class=\"pull-right\">\n    <button class=\"btn btn-primary\" (click)=\"clearAll()\">Reset</button>\n    <a href=\"https://github.com/swimlane/ngx-charts-builder\" class=\"btn btn-default\">Github</a>\n  </small>\n</h1>\n\n<div class=\"main\">\n  <ngx-section class=\"shadow dark\" sectionTitle=\"Your Data\">\n    <span>\n      Copy and paste your tabular (TSV, CSV) data here.\n      <button class=\"btn btn-link\" (click)=\"useExample()\">(Use example data)</button>\n    </span>\n    <ngx-codemirror\n      [(ngModel)]=\"dataText\"\n      [config]=\"editorConfig\">\n    </ngx-codemirror>\n    <p *ngIf=\"dataText.length > 1\">\n      <span *ngFor=\"let error of errors\" class=\"text-red\">\n        <span *ngIf=\"error.row\">Row {{error.row + 2}}: </span>{{error.message}} <br />\n      </span>\n      <span *ngIf=\"!errors.length\" class=\"text-green\">\n        {{rawData.length}} records have been successfully parsed!\n      </span>\n    </p>\n  </ngx-section>\n\n  <ngx-section class=\"shadow dark\" sectionTitle=\"Select your Chart\"\n    [sectionCollapsible]=\"hasValidData\"\n    [sectionCollapsed]=\"!hasValidData\">\n    <ngx-select [filterable]=\"false\" label=\"Chart Type\" [ngModel]=\"[chartType]\" (change)=\"chartType = $event[0]\">\n      <ngx-select-option *ngFor=\"let chart of chartTypes\" [name]=\"chart.title\" [value]=\"chart\">\n      </ngx-select-option>\n    </ngx-select>\n  </ngx-section>\n\n  <ngx-section class=\"shadow dark\" sectionTitle=\"Map your Dimensions\"\n    [sectionCollapsible]=\"hasChartSelected\"\n    [sectionCollapsed]=\"!hasChartSelected\">\n    <div *ngIf=\"hasChartSelected\">\n      <ngx-select\n        *ngIf=\"chartType && hasValidData\"\n        [filterable]=\"false\"\n        [label]=\"chartType.dimLabels[0]\"\n        [ngModel]=\"[dataDims[0]]\"\n        (change)=\"dataDims[0] = $event[0]; processData()\">\n        <ngx-select-option *ngFor=\"let field of headerValues\"\n          [name]=\"field\"\n          [value]=\"field.name\">\n          <ng-template ngx-select-option-input-template ngx-select-option-template let-option=\"option\">\n            {{option.name.name}} <small>{{option.name.type}}</small>\n          </ng-template>\n        </ngx-select-option>\n      </ngx-select>\n\n      <ngx-select\n        [filterable]=\"false\"\n        [label]=\"chartType.dimLabels[1]\"\n        [ngModel]=\"[dataDims[1]]\"\n        (change)=\"dataDims[1] = $event[0]; processData()\">\n        <ngx-select-option *ngFor=\"let field of headerValues\"\n          [name]=\"field\"\n          [value]=\"field.name\">\n          <ng-template ngx-select-option-input-template ngx-select-option-template let-option=\"option\">\n            {{option.name.name}} <small>{{option.name.type}}</small>\n          </ng-template>\n        </ngx-select-option>\n      </ngx-select>\n\n      <ngx-select\n        [filterable]=\"false\"\n        [label]=\"chartType.dimLabels[2]\"\n        [ngModel]=\"[dataDims[2]]\"\n        (change)=\"dataDims[2] = $event[0]; processData()\">\n        <ngx-select-option *ngFor=\"let field of headerValues\"\n          [name]=\"field\"\n          [value]=\"field.name\">\n          <ng-template ngx-select-option-input-template ngx-select-option-template let-option=\"option\">\n            {{option.name.name}} <small>{{option.name.type}}</small>\n          </ng-template>\n        </ngx-select-option>\n      </ngx-select>\n\n      <ngx-select\n        *ngIf=\"chartType.dimLabels[3]\"\n        [filterable]=\"false\"\n        [label]=\"chartType.dimLabels[3]\"\n        [ngModel]=\"[dataDims[3]]\"\n        (change)=\"dataDims[3] = $event[0]; processData()\">\n        <ngx-select-option *ngFor=\"let field of headerValues\"\n          [name]=\"field\"\n          [value]=\"field.name\">\n          <ng-template ngx-select-option-input-template ngx-select-option-template let-option=\"option\">\n            {{option.name.name}} <small>{{option.name.type}}</small>\n          </ng-template>\n        </ngx-select-option>\n      </ngx-select>\n    </div>\n  </ngx-section>\n\n  <ngx-section class=\"shadow\" [class]=\"theme\" sectionTitle=\"Your Visualization\"\n    [sectionCollapsible]=\"hasValidDimensions\"\n    [sectionCollapsed]=\"!hasValidDimensions\">\n    <div *ngIf=\"hasValidDimensions\" class=\"viz-container\">\n      <ngx-charts-bar-vertical-2d\n        *ngIf=\"chartType.name === 'bar-vertical-2d'\"\n        class=\"chart-container\"\n        [view]=\"chartOptions.view\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [results]=\"data\"\n        [gradient]=\"chartOptions.gradient\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        xxxbarPadding=\"chartOptions.barPadding\"\n        xxxgroupPadding=\"chartOptions.groupPadding\"\n        [roundDomains]=\"chartOptions.roundDomains\">\n      </ngx-charts-bar-vertical-2d>\n      <ngx-charts-bar-horizontal-2d\n        *ngIf=\"chartType.name === 'bar-horizontal-2d'\"\n        class=\"chart-container\"\n        [view]=\"chartOptions.view\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [results]=\"data\"\n        [gradient]=\"chartOptions.gradient\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        [roundDomains]=\"chartOptions.roundDomains\">\n      </ngx-charts-bar-horizontal-2d>\n      <ngx-charts-bar-vertical-stacked\n        *ngIf=\"chartType.name === 'bar-vertical-stacked'\"\n        class=\"chart-container\"\n        [view]=\"chartOptions.view\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [results]=\"data\"\n        [gradient]=\"chartOptions.gradient\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        [roundDomains]=\"chartOptions.roundDomains\">\n      </ngx-charts-bar-vertical-stacked>\n      <ngx-charts-bar-horizontal-stacked\n        *ngIf=\"chartType.name === 'bar-horizontal-stacked'\"\n        class=\"chart-container\"\n        [view]=\"chartOptions.view\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [results]=\"data\"\n        [gradient]=\"chartOptions.gradient\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        [roundDomains]=\"chartOptions.roundDomains\">\n      </ngx-charts-bar-horizontal-stacked>\n      <ngx-charts-bar-vertical-normalized\n        *ngIf=\"chartType.name === 'bar-vertical-normalized'\"\n        class=\"chart-container\"\n        [view]=\"chartOptions.view\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [results]=\"data\"\n        [gradient]=\"chartOptions.gradient\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        [roundDomains]=\"chartOptions.roundDomains\">\n      </ngx-charts-bar-vertical-normalized>\n      <ngx-charts-bar-horizontal-normalized\n        *ngIf=\"chartType.name === 'bar-horizontal-normalized'\"\n        class=\"chart-container\"\n        [view]=\"chartOptions.view\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [results]=\"data\"\n        [gradient]=\"chartOptions.gradient\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        [roundDomains]=\"chartOptions.roundDomains\">\n      </ngx-charts-bar-horizontal-normalized>\n      <ngx-charts-polar-chart\n        *ngIf=\"chartType.name === 'polar-chart'\"\n        [view]=\"chartOptions.view\"\n        class=\"chart-container\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [results]=\"data\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [gradient]=\"chartOptions.gradient\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [autoScale]=\"chartOptions.autoScale\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        [rangeFillOpacity]=\"chartOptions.rangeFillOpacity\"\n        [roundDomains]=\"chartOptions.roundDomains\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\"\n        [curve]=\"chartOptions.curveClosed\"\n        [showSeriesOnHover]=\"chartOptions.showSeriesOnHover\">\n      </ngx-charts-polar-chart>\n      <ngx-charts-line-chart\n        *ngIf=\"chartType.name === 'line-chart'\"\n        [view]=\"chartOptions.view\"\n        class=\"chart-container\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [results]=\"data\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [gradient]=\"chartOptions.gradient\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [autoScale]=\"chartOptions.autoScale\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        [curve]=\"chartOptions.curve\"\n        [rangeFillOpacity]=\"chartOptions.rangeFillOpacity\"\n        [roundDomains]=\"chartOptions.roundDomains\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\"\n        [showSeriesOnHover]=\"chartOptions.showSeriesOnHover\">\n      </ngx-charts-line-chart>\n      <ngx-charts-heat-map\n        *ngIf=\"chartType.name === 'heat-map'\"\n        class=\"chart-container\"\n        [view]=\"chartOptions.view\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [results]=\"data\"\n        [legend]=\"chartOptions.showLegend\"\n        [gradient]=\"chartOptions.gradient\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        xxxinnerPadding=\"chartOptions.innerPadding\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\">\n      </ngx-charts-heat-map>\n      <ngx-charts-bubble-chart\n        *ngIf=\"chartType.name === 'bubble-chart'\"\n        [view]=\"chartOptions.view\"\n        class=\"chart-container\"\n        [results]=\"data\"\n        [showGridLines]=\"chartOptions.showGridLines\"\n        [legend]=\"chartOptions.showLegend\"\n        [legendTitle]=\"chartOptions.legendTitle\"\n        [xAxis]=\"chartOptions.showXAxis\"\n        [yAxis]=\"chartOptions.showYAxis\"\n        [showXAxisLabel]=\"chartOptions.showXAxisLabel\"\n        [showYAxisLabel]=\"chartOptions.showYAxisLabel\"\n        [xAxisLabel]=\"chartOptions.xAxisLabel\"\n        [yAxisLabel]=\"chartOptions.yAxisLabel\"\n        [autoScale]=\"chartOptions.autoScale\"\n        [scheme]=\"chartOptions.colorScheme\"\n        [schemeType]=\"chartOptions.schemeType\"\n        [roundDomains]=\"chartOptions.roundDomains\"\n        [tooltipDisabled]=\"chartOptions.tooltipDisabled\"\n        [minRadius]=\"3\"\n        [maxRadius]=\"20\">\n      </ngx-charts-bubble-chart>\n    </div>\n    Download: \n    <ngx-button (click)=\"svgSaver.asSvg()\">SVG</ngx-button>\n    <ngx-button (click)=\"svgSaver.asPng()\">PNG</ngx-button>\n  </ngx-section>\n\n  <ngx-section class=\"shadow dark\" sectionTitle=\"Customize your Visualization\"\n    [sectionCollapsible]=\"hasValidDimensions\"\n    [sectionCollapsed]=\"!hasValidDimensions\">\n    <div *ngIf=\"hasValidDimensions\">\n      <ngx-select\n        [filterable]=\"false\"\n        label=\"Theme\"\n        [allowClear]=\"false\"\n        [ngModel]=\"[theme]\"\n        (change)=\"theme = $event[0]\">\n        <ngx-select-option *ngFor=\"let theme of ['light', 'dark']\"\n          [name]=\"theme\"\n          [value]=\"theme\">\n        </ngx-select-option>\n      </ngx-select>\n  \n      <ngx-toggle type=\"checkbox\" [(ngModel)]=\"chartOptions.showLegend\" label=\"Show Legend\">\n      </ngx-toggle>\n      <ngx-input type=\"text\" [(ngModel)]=\"chartOptions.legendTitle\" label=\"Legend Title\"></ngx-input>\n      <ngx-input type=\"text\" [(ngModel)]=\"chartOptions.xAxisLabel\" label=\"X Axis Label\"></ngx-input>\n      <ngx-input type=\"text\" [(ngModel)]=\"chartOptions.yAxisLabel\" label=\"Y Axis Label\"></ngx-input>\n    </div>\n  </ngx-section>\n\n  <ngx-section class=\"shadow dark\" sectionTitle=\"Customize Color Scale\"\n    [sectionCollapsible]=\"hasValidDimensions\"\n    [sectionCollapsed]=\"!hasValidDimensions\">\n\n    <ng-container *ngIf=\"hasValidDimensions\">\n      <ngx-toggle\n        [(ngModel)]=\"diverging\"\n        label=\"Diverging\"\n        (change)=\"updateColorScheme()\">\n      </ngx-toggle>\n      <ngx-input\n        type=\"number\"\n        min=\"2\"\n        label=\"Step count\"\n        [(ngModel)]=\"steps\"\n        (change)=\"updateColorScheme()\"></ngx-input>\n\n      <div fxLayout=\"row nowrap\" fxLayoutGap=\"20px\">\n        <div  fxFlex=\"1 1 100%\">\n          <ngx-input\n            class=\"colors\"\n            type=\"text\"\n            [(ngModel)]=\"colors\"\n            (change)=\"updateColorScheme()\"\n            label=\"Color Scale\"\n            hint=\"Enter named colors or hex codes\"></ngx-input>\n          <ngx-checkbox\n            [(ngModel)]=\"bezier\"\n            (change)=\"updateColorScheme()\">\n            Bezier interpollation\n          </ngx-checkbox>\n          <ngx-checkbox\n            [(ngModel)]=\"lightness\"\n            (change)=\"updateColorScheme()\">\n            Lightness correction\n          </ngx-checkbox>\n        </div>\n        <div fxFlex=\"1 1 100%\" *ngIf=\"diverging\">\n          <ngx-input\n            class=\"colors\"\n            type=\"text\"\n            [(ngModel)]=\"colorsRight\"\n            (change)=\"updateColorScheme()\"\n            label=\"Color Scale Right\"\n            hint=\"Enter named colors or hex codes\"></ngx-input>\n          <ngx-checkbox\n            [(ngModel)]=\"bezierRight\"\n            (change)=\"updateColorScheme()\">\n            Bezier interpollation\n          </ngx-checkbox>\n          <ngx-checkbox\n            [(ngModel)]=\"lightnessRight\"\n            (change)=\"updateColorScheme()\">\n            Lightness correction\n          </ngx-checkbox>\n        </div>\n        <div fxFlex=\"0 0 200px\">\n          <ul class=\"color-scale pull-right\">\n            <li *ngFor=\"let hex of chartOptions.colorScheme.domain\" [ngStyle]=\"{'background-color': hex}\">{{hex}}</li>\n          </ul>\n        </div>\n      </div>\n    </ng-container>\n\n  </ngx-section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n  * Backgrounds\n  */\n/**\n  * Text\n  */\nhtml, body {\n  margin: 10px;\n  padding: 0;\n  height: 100%;\n  background: #1b1e27;\n  color: #a8b2c7; }\n\nbody {\n  font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  min-height: 100vh;\n  color: #a8b2c7; }\n\n* {\n  box-sizing: border-box; }\n\n.main {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .main .CodeMirror {\n    height: 250px; }\n\n.light {\n  background: #fff; }\n\n.dark {\n  background: #1b1e27; }\n  .dark .ngx-charts text {\n    fill: #a8b2c7; }\n  .dark .ngx-charts .tooltip-anchor {\n    fill: white; }\n  .dark .ngx-charts .gridline-path {\n    stroke: #2f3646; }\n  .dark .ngx-charts .grid-panel.odd rect {\n    fill: rgba(255, 255, 255, 0.05); }\n  .dark .ngx-charts .force-directed-graph .edge {\n    stroke: #455066; }\n  .dark .ngx-charts .number-card p {\n    color: #f0f1f6; }\n  .dark .ngx-charts .gauge .background-arc path {\n    fill: #2f3646; }\n  .dark .ngx-charts .gauge .gauge-tick path {\n    stroke: #a8b2c7; }\n  .dark .ngx-charts .gauge .gauge-tick text {\n    fill: #a8b2c7; }\n  .dark .ngx-charts .linear-gauge .background-bar path {\n    fill: #2f3646; }\n  .dark .ngx-charts .linear-gauge .units {\n    fill: #72809b; }\n  .dark .ngx-charts .timeline .brush-background {\n    fill: rgba(255, 255, 255, 0.05); }\n  .dark .ngx-charts .timeline .brush .selection {\n    fill: rgba(255, 255, 255, 0.1);\n    stroke: #aaa; }\n  .dark .ngx-charts .polar-chart .polar-chart-background {\n    fill: #1e222e; }\n  .dark .chart-legend .legend-labels {\n    background: rgba(255, 255, 255, 0.05) !important; }\n  .dark .chart-legend .legend-item:hover {\n    color: #fff; }\n  .dark .chart-legend .legend-label:hover {\n    color: #fff !important; }\n  .dark .chart-legend .legend-label .active .legend-label-text {\n    color: #fff !important; }\n  .dark .chart-legend .scale-legend-label {\n    color: #a8b2c7; }\n  .dark .advanced-pie-legend {\n    color: #a8b2c7; }\n    .dark .advanced-pie-legend .legend-item:hover {\n      color: #fff !important; }\n  .dark .number-card .number-card-label {\n    font-size: 0.8em;\n    color: #a8b2c7; }\n\n/**\n * Header\n */\n.style-header {\n  text-transform: uppercase;\n  color: #72809b;\n  font-size: 1rem;\n  position: relative;\n  padding-bottom: 5px;\n  margin: 20px 0;\n  font-weight: 600; }\n  .style-header:after {\n    content: \"\";\n    width: 25px;\n    height: 1px;\n    background: #72809b;\n    position: absolute;\n    bottom: 0;\n    left: 0; }\n\n.viz-container {\n  position: relative;\n  display: flow-root;\n  min-height: 600px; }\n\nsvg.ngx-charts {\n  float: left;\n  overflow: visible; }\n\n.ngx-charts-outer {\n  display: flow-root;\n  position: relative; }\n\n.pull-right {\n  float: right; }\n\n.color-scale {\n  text-align: center;\n  width: 100%;\n  list-style-type: none;\n  padding-left: 0;\n  margin: 0; }\n  .color-scale li {\n    margin: 3px;\n    border-radius: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts_release_utils_color_sets__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/utils/color-sets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_collection__ = __webpack_require__("../../../../d3-collection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babyparse__ = __webpack_require__("../../../../babyparse/babyparse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babyparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babyparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_svgsaver__ = __webpack_require__("../../../../svgsaver/lib/svgsaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_svgsaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_svgsaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chroma_js__ = __webpack_require__("../../../../chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chroma_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chartTypes__ = __webpack_require__("../../../../../src/app/chartTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data__ = __webpack_require__("../../../../../src/app/data.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var defaultOptions = {
    view: [1000, 600],
    colorScheme: __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts_release_utils_color_sets__["a" /* colorSets */].find(function (s) { return s.name === 'cool'; }),
    schemeType: 'ordinal',
    showLegend: true,
    legendTitle: 'Legend',
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    yAxisLabel: '',
    xAxisLabel: '',
    autoScale: true,
    showGridLines: true,
    rangeFillOpacity: 0.5,
    roundDomains: false,
    tooltipDisabled: false,
    showSeriesOnHover: true,
    curve: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"],
    curveClosed: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCardinalClosed"]
};
var curves = {
    'Basis': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveBasis"],
    'Basis Closed': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveBasisClosed"],
    'Bundle': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveBundle"].beta(1),
    'Cardinal': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCardinal"],
    'Cardinal Closed': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCardinalClosed"],
    'Catmull Rom': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCatmullRom"],
    'Catmull Rom Closed': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCatmullRomClosed"],
    'Linear': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"],
    'Linear Closed': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinearClosed"],
    'Monotone X': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveMonotoneX"],
    'Monotone Y': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveMonotoneY"],
    'Natural': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveNatural"],
    'Step': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveStep"],
    'Step After': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveStepAfter"],
    'Step Before': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveStepBefore"],
    'default': __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"]
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.chartTypes = __WEBPACK_IMPORTED_MODULE_7__chartTypes__["a" /* chartTypes */];
        this.editorConfig = {
            lineNumbers: true,
            theme: 'dracula',
            mode: {
                name: 'json'
            }
        };
        this.svgSaver = new __WEBPACK_IMPORTED_MODULE_5_svgsaver___default.a();
    }
    Object.defineProperty(AppComponent.prototype, "dataText", {
        get: function () {
            return this._dataText || ' ';
        },
        set: function (value) {
            this.updateData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "hasValidData", {
        get: function () {
            return this._dataText.length > 0 && this.errors.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "hasChartSelected", {
        get: function () {
            return this.hasValidData && this.chartType && this.chartType.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "hasValidDimensions", {
        get: function () {
            var _this = this;
            return this.hasChartSelected &&
                !this.chartType.dimLabels.some(function (l, i) { return l ? !_this.dataDims[i] : false; });
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this.clearAll();
    };
    AppComponent.prototype.useExample = function () {
        var _this = this;
        this.clear();
        this.dataText = __WEBPACK_IMPORTED_MODULE_8__data__["a" /* gapminder */];
        this.updateData();
        this.chartType = __WEBPACK_IMPORTED_MODULE_7__chartTypes__["a" /* chartTypes */][0];
        this.dataDims = [5, 0, 3, 3].map(function (i) { return _this.headerValues[i].name; });
    };
    AppComponent.prototype.clear = function () {
        this.headerValues = [];
        this.rawData = [];
        this.dataDims = [null, null, null, null];
        return this.data = [];
    };
    AppComponent.prototype.clearAll = function () {
        this.clear();
        this.dataText = '';
        this.chartType = null;
        this.theme = 'light';
        this.colors = '#a8385d,#7aa3e5,#a27ea8,#aae3f5,#adcded,#a95963,#8796c0,#7ed3ed,#50abcc,#ad6886';
        this.colorsRight = 'darkred, deeppink, orange, lightyellow';
        this.steps = 10;
        this.bezier = false;
        this.lightness = false;
        this.bezierRight = false;
        this.lightnessRight = false;
        this.bezier = false;
        this.lightness = false;
        this.chartOptions = __assign({}, defaultOptions);
        return this.updateColorScheme();
    };
    AppComponent.prototype.processData = function () {
        var _this = this;
        if (!this.hasValidDimensions) {
            return;
        }
        var key$ = function (d) { return d[_this.dataDims[0]]; };
        var name$ = function (d) { return d[_this.dataDims[1]]; };
        var value$ = function (d) { return d[_this.dataDims[2]]; };
        var value2$ = function (d) { return d[_this.dataDims[3]]; };
        return this.data = Object(__WEBPACK_IMPORTED_MODULE_3_d3_collection__["b" /* nest */])()
            .key(key$)
            .entries(this.rawData)
            .map(series);
        function series(d) {
            return {
                name: d.key,
                series: d.values.map(seriesPoints)
            };
        }
        function seriesPoints(d) {
            return {
                name: name$(d),
                value: value$(d),
                x: name$(d),
                y: value$(d),
                r: value2$(d)
            };
        }
    };
    AppComponent.prototype.updateData = function (value) {
        /* if (this._dataText === value) {
          return this.clear();
        } */
        if (value === void 0) { value = this._dataText; }
        this._dataText = value;
        var parsed = __WEBPACK_IMPORTED_MODULE_4_babyparse__["parse"](this._dataText, {
            header: true,
            dynamicTyping: true
        });
        this.errors = parsed.errors;
        if (this.errors.length) {
            return this.clear();
        }
        this.rawData = parsed.data;
        var headerValues = parsed.meta.fields.map(function (d) { return ({
            name: d,
            type: typeof parsed.data[0][d]
        }); });
        if (JSON.stringify(headerValues) !== JSON.stringify(this.headerValues)) {
            this.headerValues = headerValues.slice();
            this.dataDims = [null, null, null, null];
            this.data = [];
        }
        else {
            this.processData();
        }
    };
    AppComponent.prototype.updateColorScheme = function () {
        var domain = this.diverging ? this.updateColorSchemeDiv() : this.updateColorSchemeSeq();
        this.chartOptions.colorScheme = __assign({}, this.chartOptions.colorScheme, { domain: domain });
    };
    AppComponent.prototype.updateColorSchemeSeq = function () {
        var cs = getColorScale(this.colors, this.bezier, this.lightness);
        return cs.colors(this.steps);
    };
    AppComponent.prototype.updateColorSchemeDiv = function () {
        var domainL = getColorScale(this.colors, this.bezier, this.lightness).colors(this.steps);
        var domainR = getColorScale(this.colorsRight, this.bezierRight, this.lightnessRight).colors(this.steps);
        if (domainL[domainL.length - 1] === domainR[0]) {
            domainL.pop();
        }
        var cs = __WEBPACK_IMPORTED_MODULE_6_chroma_js___default.a.scale(domainL.concat(domainR));
        return cs.colors(this.steps);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../@swimlane/ngx-ui/release/index.css"), __webpack_require__("../../../../../src/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], AppComponent);
    return AppComponent;
}());

function clean(s) {
    return s.trim().replace(/(, *| +)/g, ',').replace(/['"]/g, '').split(',');
}
function getColorScale(colors, bezier, lightness) {
    var cleanColors = clean(colors);
    var scale = bezier ? __WEBPACK_IMPORTED_MODULE_6_chroma_js___default.a.bezier(cleanColors.slice(0, 5)).scale() : __WEBPACK_IMPORTED_MODULE_6_chroma_js___default.a.scale(cleanColors);
    return scale.mode('lab').correctLightness(lightness);
}
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_ui__ = __webpack_require__("../../../../@swimlane/ngx-ui/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { NgxDnDModule } from '@swimlane/ngx-dnd/src/';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_ui__["NgxUIModule"],
                // NgxDnDModule,
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chartTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chartTypes; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function createChartType(_a) {
    var title = _a.title, obj = __rest(_a, ["title"]);
    return __assign({ title: title, name: titleToName(title), dimLabels: ['Group by', 'Name', 'Value', null] }, obj);
    function titleToName(s) {
        return s.toLowerCase().replace(/\ /g, '-');
    }
}
var chartTypes = [
    createChartType({ title: 'Bar Vertical 2D' }),
    createChartType({ title: 'Bar Horizontal 2D' }),
    createChartType({ title: 'Bar Vertical Stacked' }),
    createChartType({ title: 'Bar Vertical Normalized' }),
    createChartType({ title: 'Bar Horizontal Normalized' }),
    createChartType({ title: 'Polar Chart', dimLabels: ['Group by', 'Angle Values', 'Radius Values', null] }),
    createChartType({ title: 'Line Chart', dimLabels: ['Group by', 'x-Values', 'y-Values', null] }),
    createChartType({ title: 'Heat Map', dimLabels: ['x-Category', 'y-Category', 'Color', null] }),
    createChartType({ title: 'Bubble Chart', dimLabels: ['GroupBy', 'x-Values', 'y-Values', 'Radius'] })
];
//# sourceMappingURL=chartTypes.js.map

/***/ }),

/***/ "../../../../../src/app/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gapminder; });
var gapminder = "\ncountry\tyear\tgdpPercap\tlifeExp\tpop\tcontinent\nAustralia\t1952\t10039.59564\t69.12\t8691212\tOceania\nAustralia\t1957\t10949.64959\t70.33\t9712569\tOceania\nAustralia\t1962\t12217.22686\t70.93\t10794968\tOceania\nAustralia\t1967\t14526.12465\t71.1\t11872264\tOceania\nAustralia\t1972\t16788.62948\t71.93\t13177000\tOceania\nAustralia\t1977\t18334.19751\t73.49\t14074100\tOceania\nAustralia\t1982\t19477.00928\t74.74\t15184200\tOceania\nAustralia\t1987\t21888.88903\t76.32\t16257249\tOceania\nAustralia\t1992\t23424.76683\t77.56\t17481977\tOceania\nAustralia\t1997\t26997.93657\t78.83\t18565243\tOceania\nAustralia\t2002\t30687.75473\t80.37\t19546792\tOceania\nAustralia\t2007\t34435.36744\t81.235\t20434176\tOceania\nCanada\t1952\t11367.16112\t68.75\t14785584\tAmericas\nCanada\t1957\t12489.95006\t69.96\t17010154\tAmericas\nCanada\t1962\t13462.48555\t71.3\t18985849\tAmericas\nCanada\t1967\t16076.58803\t72.13\t20819767\tAmericas\nCanada\t1972\t18970.57086\t72.88\t22284500\tAmericas\nCanada\t1977\t22090.88306\t74.21\t23796400\tAmericas\nCanada\t1982\t22898.79214\t75.76\t25201900\tAmericas\nCanada\t1987\t26626.51503\t76.86\t26549700\tAmericas\nCanada\t1992\t26342.88426\t77.95\t28523502\tAmericas\nCanada\t1997\t28954.92589\t78.61\t30305843\tAmericas\nCanada\t2002\t33328.96507\t79.77\t31902268\tAmericas\nCanada\t2007\t36319.23501\t80.653\t33390141\tAmericas\nChina\t1952\t400.4486107\t44\t556263528\tAsia\nChina\t1957\t575.9870009\t50.54896\t637408000\tAsia\nChina\t1962\t487.6740183\t44.50136\t665770000\tAsia\nChina\t1967\t612.7056934\t58.38112\t754550000\tAsia\nChina\t1972\t676.9000921\t63.11888\t862030000\tAsia\nChina\t1977\t741.2374699\t63.96736\t943455000\tAsia\nChina\t1982\t962.4213805\t65.525\t1000281000\tAsia\nChina\t1987\t1378.904018\t67.274\t1084035000\tAsia\nChina\t1992\t1655.784158\t68.69\t1164970000\tAsia\nChina\t1997\t2289.234136\t70.426\t1230075000\tAsia\nChina\t2002\t3119.280896\t72.028\t1280400000\tAsia\nChina\t2007\t4959.114854\t72.961\t1318683096\tAsia\nFrance\t1952\t7029.809327\t67.41\t42459667\tEurope\nFrance\t1957\t8662.834898\t68.93\t44310863\tEurope\nFrance\t1962\t10560.48553\t70.51\t47124000\tEurope\nFrance\t1967\t12999.91766\t71.55\t49569000\tEurope\nFrance\t1972\t16107.19171\t72.38\t51732000\tEurope\nFrance\t1977\t18292.63514\t73.83\t53165019\tEurope\nFrance\t1982\t20293.89746\t74.89\t54433565\tEurope\nFrance\t1987\t22066.44214\t76.34\t55630100\tEurope\nFrance\t1992\t24703.79615\t77.46\t57374179\tEurope\nFrance\t1997\t25889.78487\t78.64\t58623428\tEurope\nFrance\t2002\t28926.03234\t79.59\t59925035\tEurope\nFrance\t2007\t30470.0167\t80.657\t61083916\tEurope\nGermany\t1952\t7144.114393\t67.5\t69145952\tEurope\nGermany\t1957\t10187.82665\t69.1\t71019069\tEurope\nGermany\t1962\t12902.46291\t70.3\t73739117\tEurope\nGermany\t1967\t14745.62561\t70.8\t76368453\tEurope\nGermany\t1972\t18016.18027\t71\t78717088\tEurope\nGermany\t1977\t20512.92123\t72.5\t78160773\tEurope\nGermany\t1982\t22031.53274\t73.8\t78335266\tEurope\nGermany\t1987\t24639.18566\t74.847\t77718298\tEurope\nGermany\t1992\t26505.30317\t76.07\t80597764\tEurope\nGermany\t1997\t27788.88416\t77.34\t82011073\tEurope\nGermany\t2002\t30035.80198\t78.67\t82350671\tEurope\nGermany\t2007\t32170.37442\t79.406\t82400996\tEurope\nJapan\t1952\t3216.956347\t63.03\t86459025\tAsia\nJapan\t1957\t4317.694365\t65.5\t91563009\tAsia\nJapan\t1962\t6576.649461\t68.73\t95831757\tAsia\nJapan\t1967\t9847.788607\t71.43\t100825279\tAsia\nJapan\t1972\t14778.78636\t73.42\t107188273\tAsia\nJapan\t1977\t16610.37701\t75.38\t113872473\tAsia\nJapan\t1982\t19384.10571\t77.11\t118454974\tAsia\nJapan\t1987\t22375.94189\t78.67\t122091325\tAsia\nJapan\t1992\t26824.89511\t79.36\t124329269\tAsia\nJapan\t1997\t28816.58499\t80.69\t125956499\tAsia\nJapan\t2002\t28604.5919\t82\t127065841\tAsia\nJapan\t2007\t31656.06806\t82.603\t127467972\tAsia\nMexico\t1952\t3478.125529\t50.789\t30144317\tAmericas\nMexico\t1957\t4131.546641\t55.19\t35015548\tAmericas\nMexico\t1962\t4581.609385\t58.299\t41121485\tAmericas\nMexico\t1967\t5754.733883\t60.11\t47995559\tAmericas\nMexico\t1972\t6809.40669\t62.361\t55984294\tAmericas\nMexico\t1977\t7674.929108\t65.032\t63759976\tAmericas\nMexico\t1982\t9611.147541\t67.405\t71640904\tAmericas\nMexico\t1987\t8688.156003\t69.498\t80122492\tAmericas\nMexico\t1992\t9472.384295\t71.455\t88111030\tAmericas\nMexico\t1997\t9767.29753\t73.67\t95895146\tAmericas\nMexico\t2002\t10742.44053\t74.902\t102479927\tAmericas\nMexico\t2007\t11977.57496\t76.195\t108700891\tAmericas\nSpain\t1952\t3834.034742\t64.94\t28549870\tEurope\nSpain\t1957\t4564.80241\t66.66\t29841614\tEurope\nSpain\t1962\t5693.843879\t69.69\t31158061\tEurope\nSpain\t1967\t7993.512294\t71.44\t32850275\tEurope\nSpain\t1972\t10638.75131\t73.06\t34513161\tEurope\nSpain\t1977\t13236.92117\t74.39\t36439000\tEurope\nSpain\t1982\t13926.16997\t76.3\t37983310\tEurope\nSpain\t1987\t15764.98313\t76.9\t38880702\tEurope\nSpain\t1992\t18603.06452\t77.57\t39549438\tEurope\nSpain\t1997\t20445.29896\t78.77\t39855442\tEurope\nSpain\t2002\t24835.47166\t79.78\t40152517\tEurope\nSpain\t2007\t28821.0637\t80.941\t40448191\tEurope\nUnited Kingdom\t1952\t9979.508487\t69.18\t50430000\tEurope\nUnited Kingdom\t1957\t11283.17795\t70.42\t51430000\tEurope\nUnited Kingdom\t1962\t12477.17707\t70.76\t53292000\tEurope\nUnited Kingdom\t1967\t14142.85089\t71.36\t54959000\tEurope\nUnited Kingdom\t1972\t15895.11641\t72.01\t56079000\tEurope\nUnited Kingdom\t1977\t17428.74846\t72.76\t56179000\tEurope\nUnited Kingdom\t1982\t18232.42452\t74.04\t56339704\tEurope\nUnited Kingdom\t1987\t21664.78767\t75.007\t56981620\tEurope\nUnited Kingdom\t1992\t22705.09254\t76.42\t57866349\tEurope\nUnited Kingdom\t1997\t26074.53136\t77.218\t58808266\tEurope\nUnited Kingdom\t2002\t29478.99919\t78.471\t59912431\tEurope\nUnited Kingdom\t2007\t33203.26128\t79.425\t60776238\tEurope\nUnited States\t1952\t13990.48208\t68.44\t157553000\tAmericas\nUnited States\t1957\t14847.12712\t69.49\t171984000\tAmericas\nUnited States\t1962\t16173.14586\t70.21\t186538000\tAmericas\nUnited States\t1967\t19530.36557\t70.76\t198712000\tAmericas\nUnited States\t1972\t21806.03594\t71.34\t209896000\tAmericas\nUnited States\t1977\t24072.63213\t73.38\t220239000\tAmericas\nUnited States\t1982\t25009.55914\t74.65\t232187835\tAmericas\nUnited States\t1987\t29884.35041\t75.02\t242803533\tAmericas\nUnited States\t1992\t32003.93224\t76.09\t256894189\tAmericas\nUnited States\t1997\t35767.43303\t76.81\t272911760\tAmericas\nUnited States\t2002\t39097.09955\t77.31\t287675526\tAmericas\nUnited States\t2007\t42951.65309\t78.242\t301139947\tAmericas".trim();
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map