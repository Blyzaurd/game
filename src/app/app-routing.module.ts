import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickAreaComponent } from './core/components/click-area/click-area.component';
import { ClickStoreComponent } from './core/components/click-store/click-store.component';

const routes: Routes = [
  { path: '', component: ClickAreaComponent },
  { path: 'click-store', component: ClickStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
