import { Component } from '@angular/core';
import { IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail} from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent} from '@ionic/core'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonSelect, IonSelectOption, CommonModule, CirculoComponent, TrianguloComponent],
})
export class HomePage {
  tipoFiguraGeometrica: string = ""

  constructor() {}

  esCirculo() { return this.tipoFiguraGeometrica == "circulo"}
  esTriangulo() { return this.tipoFiguraGeometrica == "triangulo"}
  
  manejarSelecciontipoFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFiguraGeometrica = $event.detail.value
  }
}
