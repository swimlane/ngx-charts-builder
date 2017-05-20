function createChartType({title, ...obj}) {
  return {
    title,
    name: titleToName(title),
    dimLabels: ['Group by', 'Name', 'Value', null],
    ...obj
  };

  function titleToName(s: string) {
    return s.toLowerCase().replace(/\ /g, '-');
  }
}

export const chartTypes = [
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
