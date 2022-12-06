import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { NotfoundOageComponent } from './notfound-oage/notfound-oage.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { UpdateProductComponent } from './update-product/update-product.component';
const routes: Routes =[
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {path:'products',component:ProductsComponent},
  {path:'articles',component:ArticlesComponentComponent},
  {path:'offre-emploi',component:OffresEmploiComponent},
  {path:'editProduct/:id',component: UpdateProductComponent},
  {path:'addProduct',component: AddProductComponent},
  {path:'TemplateDrivenForm',component: TemplateDrivenFormComponent},
  {path:'**',component:NotfoundOageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
