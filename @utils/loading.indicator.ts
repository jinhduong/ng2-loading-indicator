export class LoadingIndicatorUtils {
  private static _css = `
    .loading {
      position: fixed;
      z-index: 999;
      height: 2em;
      width: 2em;
      overflow: show;
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    /* Transparent Overlay */
    .loading:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.3);
    }

    /* :not(:required) hides these rules from IE9 and below */
    .loading:not(:required) {
      /* hide "loading..." text */
      font: 0/0 a;
      color: transparent;
      text-shadow: none;
      background-color: transparent;
      border: 0;
    }

    .loading:not(:required):after {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: transparent;
      content: '';
      display: block;
      
      border-top: 4px solid #fff;
      border-right: 4px solid #fff;
      border-bottom: 4px solid #777;
      border-left: 4px solid #777;
      
      -webkit-animation: loading 1.2s infinite linear;
      -moz-animation: loading 1.2s infinite linear;
      -ms-animation: loading 1.2s infinite linear;
      animation: loading 1.2s infinite linear;
    }

    /* Animation */
    @-webkit-keyframes loading {
      to { -webkit-transform: rotate(360deg); }
    }
    @-moz-keyframes loading {
      to { -moz-transform: rotate(360deg); }
    }
    @-ms-keyframes loading {
      to { -ms-transform: rotate(360deg); }
    }
    @keyframes loading {
      to { transform: rotate(360deg); }
    }
    .loading.hide{
      display: none;
    }
    .loading.show{
      display: inherit;
    }
`;
  private static $element: Element;
  private static init() {
    let element = document.createElement('div');
    let body = document.getElementsByTagName('body')[0];

    element.className = 'loading hide';
    body.appendChild(element);

    this.addCss();
    this.$element = element;
  }

  private static addCss() {
    let styleElem = document.createElement('style');

    styleElem.type = 'text/css';
    if (styleElem['styleSheet']) {
      styleElem['styleSheet'].cssText = this._css;
    } else {
      styleElem.appendChild(document.createTextNode(this._css));
    }

    document.getElementsByTagName('head')[0].appendChild(styleElem);
  }

  public static showLoading() {
    if (!this.$element) {
      this.init();
    };
    this.$element.className = 'loading show';
  }

  public static hideLoading() {
    if (this.$element) {
      this.$element.className = 'loading hide';
    }
  }
}
