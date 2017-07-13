# ng2-choices

The simplest library for multiple choices in Angular.

- No dependencies
- Simplest

![http://i.imgur.com/AerIXxA.png](http://i.imgur.com/AerIXxA.png)

## 1. Install
`npm install ng2-choices --save`

## 2. Using

### **2.1 .html**
``` html
<ng2-choices [options]="options" (change)="change($event)" [choices]="choices"></ng2-choices>
```


### **2.2 .component**

``` js
choices: ChoiceModel[] = [
    { title: 'Angular', checked: false },
    { title: 'React', checked: false },
    { title: 'Vue', checked: false },
    { title: 'Ember', checked: false },
    { title: 'Preact', checked: false },
    { title: 'Aurelia', checked: false }
  ];
```

### **2.3 .app.module**

``` js
import { Ng2ChoicesComponent } from './ng2-choices/build';

@NgModule({
  declarations: [
    AppComponent,
    Ng2ChoicesComponent
  ],
  imports: [
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### **options**
Default options
``` js
options = <ChoiceOptions>{
    multiple: true
};
```

### **events/ functions**

`change(item)`: Will fire whenever you checked/unchecked any items.
  - *item*: item which is checking/ un-checking.








