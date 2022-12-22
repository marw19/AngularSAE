import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponentComponent } from './actor-component/actor-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { NotfoundOageComponent } from './notfound-oage/notfound-oage.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoUserComponent } from './todo-user/todo-user.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UsersComponent } from './users/users.component';
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
  {path:'todo',component: TodoListComponent},
  {path:'users',component: UsersComponent},
  {path:'todoUser/:userId',component: TodoUserComponent},
  {path:'convertiseur',component: ConvertisseurComponentComponent},
  {path:'to-euro-convert',component: ToEuroConvertComponentComponent},
  {path:'actor',component: ActorComponentComponent},
  {path:'actors',component: ActorsComponentComponent},
  {path:'**',component:NotfoundOageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
