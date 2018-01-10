import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
 
const financasRoutes: Routes = [
    { path: '', component: FormComponent }
];
 
@NgModule({
    imports: [RouterModule.forChild(financasRoutes)],
    exports: [RouterModule]
})
export class FinancasRoutingModule {}