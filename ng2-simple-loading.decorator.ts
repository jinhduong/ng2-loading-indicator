import { LoadingIndicatorUtils } from './@utils/loading.indicator';

export function LoadingIndicator(props?: string[]): MethodDecorator {
  return function(
    target: Object,
    propertyKey: string | symbol,
    descriptor: any
  ) {
    let _sectionElem;
    const originalMethod = descriptor.value;
    const afterViewInitOriginalMethod =
      target.constructor.prototype.ngAfterViewInit || (() => {});

    if (props) {
      target.constructor.prototype.ngAfterViewInit = function(...args) {
        afterViewInitOriginalMethod.apply(this, args);
        Object.keys(this).forEach(prop => {
          const property = this[prop];
          if (props.includes(prop)) {
            _sectionElem = property;
          }
        });
      };
    }

    descriptor.value = function(...args) {
      const subs = originalMethod.apply(this, args);
      showLoading(_sectionElem);
      // If it's using do operator
      if (subs.subscribe) {
        subs.subscribe(() => {
          hideLoading(_sectionElem);
        });
      } else if (subs.__zone_symbol__state === null) {
        const _interval = setInterval(() => {
          if (subs.__zone_symbol__state === true) {
            hideLoading(_sectionElem);
            clearInterval(_interval);
          }
        }, 50);
      } else {
        // If it's using subscribe
        const _interval = setInterval(() => {
          if (subs.isStopped) {
            hideLoading(_sectionElem);
          }
        }, 50);
      }
    };
  };
}

function showLoading(element?: Element) {
  element
    ? LoadingIndicatorUtils.sectionShowLoading(element)
    : LoadingIndicatorUtils.showLoading();
}

function hideLoading(element?: Element) {
  element
    ? LoadingIndicatorUtils.sectionHideLoading(element)
    : LoadingIndicatorUtils.hideLoading();
}
