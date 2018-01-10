import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

import { FinancasRoutingModule } from './financas.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FinancasRoutingModule
  ],
  declarations: [FormComponent]
})
export class FinancasModule { }
