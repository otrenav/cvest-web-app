
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'assets', pathMatch: 'full' },
    { path: 'assets', loadChildren: 'app/assets/assets.module#AssetsModule' },
    { path: 'markets', loadChildren: 'app/markets/markets.module#MarketsModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
