import { CanActivateFn } from '@angular/router';

export const recipeGuard: CanActivateFn = (route, state) => {
  return true;
};
