# ng2-loading-indicator @decorator
[npm-url]: https://npmjs.org/package/ng2-loading-indicator
[npm-image]: https://img.shields.io/npm/v/ng2-loading-indicator.svg
[downloads-image]: https://img.shields.io/npm/dm/ng2-loading-indicator.svg
[total-downloads-image]: https://img.shields.io/npm/dt/ng2-loading-indicator.svg

The simplest library for loading indicator @decorator in Angular 2/4.

- No dependencies
- Simplest

![https://media.giphy.com/media/3o7buiqQhDuGYmc2go/giphy.gif](https://media.giphy.com/media/3o7buiqQhDuGYmc2go/giphy.gif)

## 1. Install
`npm install ng2-loading-indicator --save`

## 2. Using

### Add into `.component`
```js
import { LoadingIndicator } from 'ng2-loading-indicator';
```

### **We have 2 ways to use this decorator in our code:**

### 1. Whole page loading

#### 1.1 When return a `Subscription` after call `.subscribe`

```js
  @LoadingIndicator()
  tryLoadingIndicator() {
    return Observable.timer(3000).subscribe(x => {
      console.log('finished 3s');
    });
  }
```

- Other cases in `http`,`forms`,... anything in Angular are using `rxjs`

```js
  @LoadingIndicator()
  getDataFromApi() {
    return this.http.get('your-api.com')
    .map(res => res.json())
    .subscribe(res => {});
  }
```

#### 1.2 In async/await function

```js
@LoadingIndicator()
async tryLoadingIndicator() {
  await Observable.timer(3000).toPromise();
}
```

#### 1.3 When return a `Observable<T>` after call from operators `do`, `map`,...

```js
  @LoadingIndicator()
  tryLoadingIndicator() {
    return Observable.timer(3000).do(x => {
      console.log('finished 3s');
    });
  }
```

### 2. Parts of the page loading

```js
// Define a variable with HTMLElement
$div: Element; 

// Using ElementRef to get DOM element for this component
constructor(private elementRef: ElementRef) {}

// Set value for above variable (HTMLElement)
ngOnInit() {
    this.$div = this.elementRef.nativeElement.querySelector('div');
}

// Add the variable string list to @decorator
@LoadingIndicator(['$div'])
async trySectionLoading() {
  await Observable.timer(3000).toPromise();
}
```










