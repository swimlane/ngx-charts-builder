import { Component, ViewEncapsulation } from '@angular/core';

const SIZES = [
  's0',
  's1',
  's2',
  's3'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/@swimlane/ngx-ui/release/index.css', './app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';

  sourceBuilderSections = [
    { name: 'Field Types', tools: [
        { name: 'A String', inputType: 'string', icon: 'field-text', size: SIZES[1] },
        { name: 'A Number', inputType: 'number', icon: 'field-numeric', size: SIZES[1] }
      ]
    },
    { name: 'Layout', tools: [
        { name: 'Section', children: [], inputType: 'section', icon: 'section', size: SIZES[3] },
        {
          name: 'Tabs',
          tabs: [{ name: 'Tab 1', children: [], active: true }],
          inputType: 'tab',
          icon: 'tabs',
          size: SIZES[3]
        }
      ]
    }
  ];

  targetBuilderTools = [];

  droppableItemClass = item => `${item.size} ${item.inputType}`;

  builderDrag(e) {
    const item = e.value;
    item.data = item.inputType === 'number' ?
      Math.floor(Math.random() * 100) :
      Math.random().toString(36).substring(20);
  }

  log(e) {
    console.log(e.type, e);
  }

  addTab(tabs) {
    const idx = tabs.length + 1;
    const name = `Tab ${idx}`;
    tabs.push({name, children: [], active: idx === 0});
  }

  getNextSize(size, N = 1) {
    let idx = SIZES.indexOf(size) + N;
    idx = Math.min(idx, SIZES.length - 1);
    idx = Math.max(idx, 0);
    return SIZES[idx];
  }

  onDrag(item, ev) {
    const N = Math.floor((ev.x - item.x0) / 100);
    item.size = this.getNextSize(item.size0, N);
  }

  onDragEnd(item, ev) {
    item.size0 = item.size;
    item.x0 = item.x = 0;
  }

  onDragStart(item, ev) {
    item.size0 = item.size;
    item.x0 = item.x = ev.x;
  }
}

