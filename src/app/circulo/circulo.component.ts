import { Component, OnInit } from '@angular/core';
import { Circulo } from '../modelo/figuraGeometrica';
import {IonicModule} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})

export class CirculoComponent implements OnInit{

  txtRadio = ""
  perimetro = 0
  circulo = new Circulo("circulo", 0)
  resultado: string = ""

  constructor() { }
  ngOnInit() {}

  calcularPerimetro(){
    const radio = parseFloat(this.txtRadio)
  
    this.circulo.radio = radio
    this.perimetro = this.circulo.calcularPerimetro()
    this.resultado = `El perímetro es ${this.perimetro.toFixed(2)} cm`
  }
}
