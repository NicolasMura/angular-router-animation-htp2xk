import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { KakapoComponent } from './kakapo/kakapo.component';
import { FairyTernComponent } from './fairy-tern/fairy-tern.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'kakapo',  },
  { path: 'kakapo', component: KakapoComponent },
  { path: 'fairy-tern', component: FairyTernComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);