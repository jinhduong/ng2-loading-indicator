# ng2-loading-indicator @decorator

The simplest library for loading indicator @decorator in Angular 2/4.

- No dependencies
- Simplest

![https://media.giphy.com/media/3ohrycvBeKeTToSjcs/giphy.gif](https://media.giphy.com/media/3ohrycvBeKeTToSjcs/giphy.gif)

## 1. Install
`npm install ng2-loading-indicator --save`

## 2. Using

### Add into `.component`
```js
import { LoadingIndicator } from 'ng2-loading-indicator';
```

### We have 2 ways to use this decorator in our code:

#### 1. When return a `Subscription` after call `.subscribe`

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

#### 2. When return a `Observable<T>` after call from operators `do`, `map`,...

```js
  @LoadingIndicator()
  tryLoadingIndicator() {
    return Observable.timer(3000).do(x => {
      console.log('finished 3s');
    });
  }
```










