import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import * as shape from 'd3-shape';
import * as dsv from 'd3-dsv';
import { nest } from 'd3-collection';
import * as babyparse from 'babyparse';
import SvgSaver from 'svgsaver';

import { chartTypes } from './chartTypes';
import { gapminder } from './data';

const defaultOptions = {
  view: [1000, 600],
  colorScheme: colorSets.find(s => s.name === 'cool'),
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
  curve: shape.curveLinear,
  curveClosed: shape.curveCardinalClosed
};

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
  chartTypes = chartTypes;

  data: any[];
  rawData: any[];
  headerValues: any[];
  errors: any[];
  chartType: any;
  theme: string;

  dataDims: string[];
  chartOptions: any;

  _dataText: string;
  get dataText() {
    return this._dataText || ' ';
  }

  set dataText(value) {
    this.updateData(value);
  }

  get hasValidData() {
    return this._dataText.length > 0 && this.errors.length === 0;
  }

  get hasChartSelected() {
    return this.hasValidData && this.chartType && this.chartType.name;
  }

  get hasValidDimensions() {
    return this.hasChartSelected &&
      !this.chartType.dimLabels.some((l, i) => l ? !this.dataDims[i] : false);
  }

  editorConfig = {
    lineNumbers: true,
    theme: 'dracula',
    mode: {
      name: 'json'
    }
  };

  svgSaver = new SvgSaver();

  ngOnInit() {
    this.clearAll();
  }

  useExample() {
    this.clear();
    this.dataText = gapminder;
  }

  clear() {
    this.headerValues = [];
    this.rawData = [];
    this.dataDims = [null, null, null, null];
    return this.data = [];
  }

  clearAll() {
    this.clear();
    this.dataText = '';
    this.chartType = null;
    this.theme = 'light';
    this.chartOptions = {...defaultOptions};
  }

  processData() {
    if (!this.hasValidDimensions) {
      return;
    }
    const key$ = d => d[this.dataDims[0]];
    const name$ = d => d[this.dataDims[1]];
    const value$ = d => d[this.dataDims[2]];
    const value2$ = d => d[this.dataDims[3]];

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
      this.headerValues = headerValues.slice();
      this.dataDims = [null, null, null, null];
      this.data = [];
    } else {
      this.processData();
    }
  }
}

