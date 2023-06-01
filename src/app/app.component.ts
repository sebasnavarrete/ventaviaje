import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  image: string = "";
  products   = [
    {
      title: "Espejo (Vidrio gris)",
      subtitle: `Dimensiones: 1.80m alto x 80cm ancho x 20cm fondo`,
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
      title: "Freidora",
      subtitle: `Marca: IMUSA`,
      price: 150000,
      images: ["freidora.jpeg"],
      sold: true
    }, {
      title: "Horno freidor",
      subtitle: `Marca: Black and Decker`,
      price: 200000,
      images: ["horno_f.jpeg"],
      sold: false
    }, {
      title: "Espejo con luces",
      subtitle: `Dimensiones: 1m alto x 50cm ancho x 15cm fondo`,
      price: 800000,
      images: ["espluces.jpeg"],
      sold: true
    }, {
      title: "Licuadora",
      subtitle: `Marca: Oster`,
      price: 250000,
      images: ["licuadora.jpeg"],
      sold: true
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
    }, {
      title: "Exprimidor de naranjas",
      subtitle: `Marca: Universal`,
      price: 50000,
      images: ["exprimidor.jpeg"],
      sold: true
    }, {
      title: "Bicicleta SCOTT Talla L",
      subtitle: `SCOTT ASPECT 940/2021 9 VEL - Negro Mate`,
      price: 2000000,
      images: ["bici11.jpeg", "bici12.jpeg"],
      sold: false
    }, {
      title: "Bicicleta OPTIMUS Talla S",
      subtitle: `OPTIMUS AQUILA 29 8 VEL - Negro/Azul/Naranja`,
      price: 800000,
      images: ["bici21.jpeg", "bici22.jpeg"],
      sold: false
    }, {
      title: "PlayStation 5 825GB",
      subtitle: `(Excelente estado, sin caja) con lector de disco + 2 controles + Estación de carga original + Audífonos HyperX Cloud Flight`,
      price: 3000000,
      images: ["ps5.jpeg"],
      sold: false
    }, {
      title: "iPAD 6ta generación",
      subtitle: `32GB de disco`,
      price: 1000000,
      images: ["ipad.jpeg", "ipad2.jpeg"],
      sold: true
    }, {
      title: "Filtro Renaware Aqua Nano CTU-500 HD",
      subtitle: `Excelente estado`,
      price: 2700000,
      images: ["filtro.jpeg"],
      sold: false
    }, {
      title: "Impresora EPSON",
      subtitle: `M3170`,
      price: 1500000,
      images: ["impresora.jpeg"],
      sold: false
    }, {
      title: "Lavadora/Secadora LG",
      subtitle: `22/13kg`,
      price: 4000000,
      images: ["lavadora.jpeg"],
      sold: false
    }, {
      title: "Pantalla Samsung",
      subtitle: `27"`,
      price: 500000,
      images: ["pantallas.jpeg"],
      sold: false
    }, {
      title: "Puff redondo",
      subtitle: `Diametro: `,
      price: 900000,
      images: ["puffred.jpeg"],
      sold: false
    }, {
      title: "Silla gamer blanca",
      subtitle: `Con masajeador de espalda y luces led`,
      price: 450000,
      images: ["sillab.jpeg"],
      sold: true
    }, {
      title: "Calentador Kalley K-CAT",
      subtitle: `Disponibilidad 1 de 2`,
      price: 150000,
      images: ["calentador.jpeg"],
      sold: false
    }, {
      title: "VideoBeam EPSON Powerlite L200SW",
      subtitle: `Excelente estado - Sin caja`,
      price: 6500000,
      images: ["videob.jpeg"],
      sold: false
    }, {
      title: "Monitor Gamer LG 27gl850-b 27 Nanoips",
      subtitle: `Excelente estado`,
      price: 1400000,
      images: ["pantallalg.jpeg", "pantallalg2.png"],
      sold: false
    }, {
      title: "Báscula inteligente",
      subtitle: `Renpho`,
      price: 150000,
      images: ["bascula.jpeg"],
      sold: true
    }, {
      title: "TV LG 55 pulgadas",
      subtitle: ``,
      price: 1500000,
      images: ["tv.jpeg"],
      sold: true
    }, {
      title: "KIT de gimnasio",
      subtitle: `1 Mancuerna Hexagonal 7,5kg - 2 Mancuernas Hexagonal 10kg - 2 Kettlebell 8kg y 12kg - 2 Balones de caucho 7kg y 10kg - 1 Wallball 6kg`,
      price: 950000,
      images: ["pesas.jpeg"],
      sold: false
    }, {
      title: "Escritorio en madera",
      subtitle: `Dimensiones: 2m ancho x 1.70m largo x 78cm alto - Diseño único y cajones con cierre lento`,
      price: 3500000,
      images: ["desk.jpeg", "desk2.jpeg", "desk3.jpeg", "desk4.jpeg", "desk5.jpeg", "desk6.jpeg", "desk7.jpeg"],
      sold: false
    }, {
      title: "Nevera",
      subtitle: `Marca: Samsung - Capacidad: 361 litros`,
      price: 1800000,
      images: ["nevera.jpeg"],
      sold: false
    }, {
      title: "Decoración centro de mesa",
      subtitle: ``,
      price: 50000,
      images: ["bolasdecor.jpeg"],
      sold: false
    }, {
      title: "Copas vidrio",
      subtitle: `Tamaño medio`,
      price: 10000,
      images: ["copamedia.jpeg"],
      sold: true
    }, {
      title: "Copas vidrio",
      subtitle: `Tamaño corto`,
      price: 10000,
      images: ["copasbajas.jpeg"],
      sold: true
    }, {
      title: "Copas vidrio",
      subtitle: `Tamaño largo`,
      price: 10000,
      images: ["copaslargas.jpeg"],
      sold: true
    }, {
      title: "Espátula",
      subtitle: `Renaware`,
      price: 80000,
      images: ["espatula.jpeg"],
      sold: false
    }, {
      title: "Exprimidor gris",
      subtitle: ``,
      price: 10000,
      images: ["exprimidorgris.jpeg"],
      sold: true
    }, {
      title: "Exprimidor Tupperware",
      subtitle: ``,
      price: 60000,
      images: ["exprimidortu.jpeg"],
      sold: false
    }, {
      title: "Picatodo y batidor",
      subtitle: `Marca Oster`,
      price: 70000,
      images: ["picatodo.jpeg"],
      sold: true
    }, {
      title: "Portacubiertos",
      subtitle: `Plástico con tapa y espacio adicionales`,
      price: 40000,
      images: ["portacub.jpeg","portacub2.jpeg"],
      sold: false
    }, {
      title: "Reloj de pared",
      subtitle: ``,
      price: 20000,
      images: ["reloj.jpeg"],
      sold: false
    }, {
      title: "Servilletero de acero",
      subtitle: ``,
      price: 15000,
      images: ["servacero.jpeg"],
      sold: false
    }, {
      title: "Servilletero marmol",
      subtitle: ``,
      price: 40000,
      images: ["servblanco.jpeg"],
      sold: false
    }, {
      title: "Sopladora",
      subtitle: `Marca Ferton`,
      price: 40000,
      images: ["sopladora1.jpeg","sopladora2.jpeg"],
      sold: true
    }
  ];
}
