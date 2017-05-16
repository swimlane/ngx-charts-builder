import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import * as shape from 'd3-shape';
import * as dsv from 'd3-dsv';
import { nest } from 'd3-collection';
import * as babyparse from 'babyparse';
import SvgSaver from 'svgsaver';

import { chartTypes } from './chartTypes';
import { gapminder } from './data';

const  curves = {
  'Basis': shape.curveBasis,
  'Basis Closed': shape.curveBasisClosed,
  'Bundle': shape.curveBundle.beta(1),
  'Cardinal': shape.curveCardinal,
  'Cardinal Closed': shape.curveCardinalClosed,
  'Catmull Rom': shape.curveCatmullRom,
  'Catmull Rom Closed': shape.curveCatmullRomClosed,
  'Linear': shape.curveLinear,
  'Linear Closed': shape.curveLinearClosed,
  'Monotone X': shape.curveMonotoneX,
  'Monotone Y': shape.curveMonotoneY,
  'Natural': shape.curveNatural,
  'Step': shape.curveStep,
  'Step After': shape.curveStepAfter,
  'Step Before': shape.curveStepBefore,
  'default': shape.curveLinear
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/@swimlane/ngx-ui/release/index.css', './app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app works!';

  data: any[];
  rawData: any[];

  headerValues: any[];
  errors: any[] = [];
  chartType = 'bubble-chart';
  chartTypes = chartTypes;
  theme = 'light';

  _dataText = gapminder;

  get dataText() {
    return this._dataText;
  }

  set dataText(value) {
    this.updateData(value);
  }

  editorConfig = {
    lineNumbers: true,
    theme: 'dracula',
    mode: {
      name: 'json'
    }
  };

  dataOptions = {
    groupBy: 'country',
    name: 'year',
    value: 'gdp',
    value2: 'life expectancy'
  };

  chartOptions = {
    view: [1400, 600],
    colorScheme: colorSets.find(s => s.name === 'cool'),
    schemeType: 'ordinal',
    showLegend: true,
    legendTitle: 'Legend',
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    yAxisLabel: 'GDP Per Capita',
    xAxisLabel: 'Census Date',
    autoScale: true,
    showGridLines: true,
    rangeFillOpacity: 0.5,
    roundDomains: false,
    tooltipDisabled: false,
    showSeriesOnHover: true,
    curve: shape.curveLinear,
    curveClosed: shape.curveCardinalClosed
  };

  svgSaver = new SvgSaver();

  ngOnInit() {
    this.updateData();
  }

  clear() {
    this.headerValues = [];
    this.rawData = [];
    return this.data = [];
  }

  processData() {
    const key$ = d => d[this.dataOptions.groupBy];
    const name$ = d => d[this.dataOptions.name];
    const value$ = d => d[this.dataOptions.value];
    const value2$ = d => d[this.dataOptions.value2];

    return this.data = nest()
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
  }

  updateData(value = this._dataText) {
    /* if (this._dataText === value) {
      return this.clear();
    } */

    this._dataText = value;
    const parsed = babyparse.parse(this._dataText, {
      header: true,
      dynamicTyping: true
    });

    this.errors = parsed.errors;

    if (this.errors.length) {
      return this.clear();
    }

    this.rawData = parsed.data;

    const headerValues = parsed.meta.fields.map(d => ({
      name: d,
      type: typeof parsed.data[0][d]
    }));

    if (JSON.stringify(headerValues) !== JSON.stringify(this.headerValues)) {
      this.headerValues = headerValues;
      this.dataOptions.groupBy = this.headerValues[0].name;
      this.dataOptions.name = this.headerValues[1].name;
      this.dataOptions.value = this.headerValues[2].name;
      this.dataOptions.value2 = this.headerValues[3].name;
    }

    this.processData();
  }
}

