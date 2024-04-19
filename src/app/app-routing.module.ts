import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'productos',
    loadChildren: () => import('./components/products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: 'nuestra-empresa',
    component: CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
