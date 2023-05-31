import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CurrencyConverterPage } from './currency-converter/currency-converter.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'currency-converter',
    pathMatch: 'full',
  },
  {
    path: 'currency-converter',
    component: CurrencyConverterPage,
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
