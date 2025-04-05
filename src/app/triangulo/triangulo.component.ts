import { Component, OnInit } from '@angular/core';
import { TrianguloEquilatero } from '../modelo/figuraGeometrica';
import {IonicModule} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})

export class TrianguloComponent  implements OnInit {
  txtLadoA = ""
  txtLadoB = ""
  txtLadoC = ""
  perimetro = 0
  
  triangulo = new TrianguloEquilatero(0)
  resultado: string = ""

  constructor() { }
  ngOnInit() {}

  calcularPerimetro(){
    const ladoA = parseFloat(this.txtLadoA)
    const ladoB = parseFloat(this.txtLadoB)
    const ladoC = parseFloat(this.txtLadoC)

    this.triangulo.ladoA = ladoA
    this.triangulo.ladoB = ladoB
    this.triangulo.ladoC = ladoC
    this.perimetro = this.triangulo.calcularPerimetro()
    this.resultado = `El perímetro es ${this.perimetro.toFixed(2)} cm`
  }

}
