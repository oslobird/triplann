import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneratorComponent } from './components/generator/generator.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'hello', pathMatch: 'full' },
    { 
        path: 'hello',
        component: HomePageComponent,
        data: {depth: 1}
    },
    { 
        path: 'generator',
        component: GeneratorComponent,
        data: {depth: 2}
    },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PlannerRouting { }
