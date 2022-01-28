import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatInputModule} from "@angular/material/input"
import {MatListModule} from "@angular/material/list"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatRadioModule} from "@angular/material/radio"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatDividerModule} from "@angular/material/divider"
import {MatIconModule} from '@angular/material/icon';



const MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatListModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule
]

@NgModule(
  {
    imports: [MATERIAL],
    exports: [MATERIAL]
  }
)

export class MaterialModule{}
