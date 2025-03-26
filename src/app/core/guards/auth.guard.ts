import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const toastr=inject(ToastrService)

  if (localStorage.getItem('token') !== null) {
    return true;
  } else {
    router.navigate(['/login']); 
    toastr.error('log in frist','error')
    return false;
  }
};
