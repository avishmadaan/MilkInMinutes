import { CanDeactivateFn } from '@angular/router';
import { SingleproductComponent } from '../singleproduct/singleproduct.component';

export const deactivateGuardGuard: CanDeactivateFn<SingleproductComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate?component.canDeactivate():true;
};
