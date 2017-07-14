import { LoadingIndicatorUtils } from './@utils/loading.indicator';
import { ElementRef } from '@angular/core';

export function LoadingIndicator(elemRef?: ElementRef): MethodDecorator {
  return function(
    target: Object,
    propertyKey: string | symbol,
    descriptor: any
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      LoadingIndicatorUtils.showLoading();
      const subs = originalMethod.apply(this, args);

      // If it's using do operator
      if (subs.subscribe) {
        subs.subscribe(() => {
          LoadingIndicatorUtils.hideLoading();
        });
      } else if (subs.__zone_symbol__state === null) {
        const _interval = setInterval(() => {
          if (subs.__zone_symbol__state === true) {
            LoadingIndicatorUtils.hideLoading();
            clearInterval(_interval);
          }
        }, 50);
      } else {
        // If it's using subscribe
        const _interval = setInterval(() => {
          if (subs.isStopped) {
            LoadingIndicatorUtils.hideLoading();
            clearInterval(_interval);
          }
        }, 50);
      }
    };
  };
}
