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
      images: ["esp1.jpeg", "espj2.jpeg"],
      sold: false
    }, {
      title: "Chocolatera",
      subtitle: ``,
      price: 100000,
      images: ["chocolatera.jpeg"],
      sold: true
    }, {
      title: "Exprimidor de naranjas",
      subtitle: `Marca: Universal`,
      price: 50000,
      images: ["exprimidor.jpeg"],
      sold: false
    }, {
      title: "Freidora",
      subtitle: `Marca: IMUSA`,
      price: 150000,
      images: ["freidora.jpeg"],
      sold: false
    }, {
      title: "Horno freidor",
      subtitle: `Marca: Black and Decker`,
      price: 300000,
      images: ["horno_f.jpeg"],
      sold: false
    }, {
      title: "Licuadora",
      subtitle: `Marca: Oster`,
      price: 250000,
      images: ["licuadora.jpeg"],
      sold: false
    }, {
      title: "Sanduchera",
      subtitle: `Marca: Oster`,
      price: 100000,
      images: ["sanduchera.jpeg"],
      sold: false
    }, {
      title: "Tetera",
      subtitle: `Marca: Universal`,
      price: 70000,
      images: ["tetera.jpeg"],
      sold: false
    }, {
      title: "Tostadora",
      subtitle: `Marca: Oster`,
      price: 200000,
      images: ["tostadora.jpeg"],
      sold: false
    },{
      title: "Bicicleta SCOTT Talla L",
      subtitle: `SCOTT ASPECT 940/2021 9 VEL - Negro Mate`,
      price: 2000000,
      images: ["bici11.jpeg", "bici12.jpeg"],
      sold: false
    },{
      title: "Bicicleta OPTIMUS Talla S",
      subtitle: `OPTIMUS AQUILA 29 8 VEL - Negro/Azul/Naranja`,
      price: 800000,
      images: ["bici21.jpeg", "bici22.jpeg"],
      sold: false
    },{
      title: "PlayStation 5 825GB",
      subtitle: `(Excelente estado, sin caja) con lector de disco + 2 controles + Audífonos gamer inalámbricos HyperX Cloud Flight`,
      price: 3000000,
      images: ["ps5.jpeg"],
      sold: false
    },{
      title: "iPAD 6ta generación",
      subtitle: `32GB de disco`,
      price: 1000000,
      images: ["ipad.jpeg", "ipad2.jpeg"],
      sold: false
    },{
      title: "Filtro Renaware Aqua Nano CTU-500 HD",
      subtitle: `Excelente estado`,
      price: 2700000,
      images: ["filtro.jpeg"],
      sold: false
    },{
      title: "Impresora EPSON",
      subtitle: `M3170`,
      price: 1500000,
      images: ["impresora.jpeg"],
      sold: false
    },{
      title: "Lavadora/Secadora LG",
      subtitle: `22/13kg`,
      price: 4000000,
      images: ["lavadora.jpeg"],
      sold: false
    },{
      title: "Pantalla Samsung",
      subtitle: `27"`,
      price: 500000,
      images: ["pantallas.jpeg"],
      sold: false
    },{
      title: "Puff redondo",
      subtitle: `Diametro: `,
      price: 900000,
      images: ["puffred.jpeg"],
      sold: false
    },{
      title: "Silla gamer blanca",
      subtitle: `Con masajeador de espalda y luces led`,
      price: 450000,
      images: ["sillab.jpeg"],
      sold: false
    },{
      title: "Calentador Kalley",
      subtitle: `K-CAT`,
      price: 150000,
      images: ["calentador.jpeg"],
      sold: false
    },{
      title: "VideoBeam EPSON Powerlite L200SW",
      subtitle: `Excelente estado - Sin caja`,
      price: 6500000,
      images: ["videob.jpeg"],
      sold: false
    },{
      title: "Monitor Gamer LG 27gl850-b 27 Nanoips",
      subtitle: `Excelente estado`,
      price: 1400000,
      images: ["pantallalg.jpeg","pantallalg2.png"],
      sold: false
    }
  ];
}
