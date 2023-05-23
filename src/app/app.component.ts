import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  image = "";
  products = [
    {
      title: "Espejo (Vidrio gris)",
      subtitle: `Dimensiones: 1m alto x 2m ancho x 20cm fondo`,
      price: 1800000,
      images: ["esp1.jpeg", "espj2.jpeg"]
    }, {
      title: "Chocolatera",
      subtitle: ``,
      price: 100000,
      images: ["chocolatera.jpeg"]
    }, {
      title: "Exprimidor de naranjas",
      subtitle: `Marca: Universal`,
      price: 50000,
      images: ["exprimidor.jpeg"]
    }, {
      title: "Freidora",
      subtitle: `Marca: IMUSA`,
      price: 150000,
      images: ["freidora.jpeg"]
    }, {
      title: "Horno freidor",
      subtitle: `Marca: Black and Decker`,
      price: 300000,
      images: ["horno_f.jpeg"]
    }, {
      title: "Licuadora",
      subtitle: `Marca: Oster`,
      price: 250000,
      images: ["licuadora.jpeg"]
    }, {
      title: "Sanduchera",
      subtitle: `Marca: Oster`,
      price: 100000,
      images: ["sanduchera.jpeg"]
    }, {
      title: "Tetera",
      subtitle: `Marca: Universal`,
      price: 70000,
      images: ["tetera.jpeg"]
    }, {
      title: "Tostadora",
      subtitle: `Marca: Oster`,
      price: 200000,
      images: ["tostadora.jpeg"]
    },{
      title: "Bicicleta SCOTT Talla L",
      subtitle: `SCOTT ASPECT 940/2021 9 VEL - Negro Mate`,
      price: 2000000,
      images: ["bici11.jpeg", "bici12.jpeg"]
    },{
      title: "Bicicleta OPTIMUS Talla S",
      subtitle: `OPTIMUS AQUILA 29 8 VEL - Negro/Azul/Naranja`,
      price: 800000,
      images: ["bici21.jpeg", "bici22.jpeg"]
    },{
      title: "PlayStation 5 825GB",
      subtitle: `(Excelente estado, sin caja) con lector de disco + 2 controles + Audífonos gamer inalámbricos HyperX Cloud Flight`,
      price: 3000000,
      images: ["ps5.jpeg"]
    },{
      title: "iPAD 6ta generación",
      subtitle: `32GB de disco`,
      price: 1000000,
      images: ["ipad.jpeg", "ipad2.jpeg"]
    }
  ];
}
