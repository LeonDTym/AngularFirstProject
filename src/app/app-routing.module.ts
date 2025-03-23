import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AddBookComponent } from './add-book/add-book.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent }, // маршрут для страницы категорий
  { path: 'add-book', component: AddBookComponent }, // маршрут для страницы добавления книги
  { path: 'auth', component: AuthComponent }, // маршрут для страницы авторизации
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
