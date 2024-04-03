import { ProductColor, ProductSize, type Product } from './entities/product';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const NodeCache = (await import('node-cache')).default;

    const productName1 = 'Camiseta Abc';
    const productName2 = 'Camiseta Def';
    const productName3 = 'Camiseta Ghi';
    const productName4 = 'Camiseta Jkl';
    const productName5 = 'Camiseta Mno';
    const description =
      'A Camiseta Regular ML Listrado Trabalhado é a escolha perfeita para o inverno 24! Em malha texturizada com listras, possui gola redonda, etiqueta interna e bandeira lateral Reserva e nosso clássico pica-pau bordado no peito. Use essa camiseta em diversas ocasiões, desde um passeio descontraído até um encontro com os amigos. O modelo tem 1,89 de altura, 96 de tórax e veste 40. Comprando esta peça, você viabiliza cinco pratos de comida através do nosso Programa 1P5P. Camiseta produzida eticamente no Brasil.';
    const details =
      'Produzido Eticamente No Brasil. Comprando Esta Peça, Você Viabiliza Cinco Pratos De Comida Através Do Nosso Programa 1P5P.';
    const highlights = [
      'Corte e costura à mão localmente',
      'Tingido com nossas cores proprietárias',
      'Pré-lavado e pré-encolhido',
      'Algodão 100% ultra macio',
    ];

    global.cacheBase = new NodeCache();
    global.cacheBase.set('products', [
      {
        id: 1,
        name: productName1,
        price: 100,
        image: [
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8509840-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8509840-1200-auto',
            },
            alt: productName1,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8509838-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8509838-1200-auto',
            },
            alt: productName1,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8509839-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8509839-1200-auto',
            },
            alt: productName1,
          },
        ],
        description,
        highlights,
        details,
        colors: [ProductColor.Red, ProductColor.Blue],
        sizes: [ProductSize.XS, ProductSize.S, ProductSize.M],
      },
      {
        id: 2,
        name: productName2,
        price: 200,
        image: [
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8509864-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8509864-1200-auto',
            },
            alt: productName2,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8509861-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8509861-1200-auto',
            },
            alt: productName2,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8509862-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8509862-1200-auto',
            },
            alt: productName2,
          },
        ],
        description,
        highlights,
        details,
        colors: [ProductColor.Green, ProductColor.Yellow],
        sizes: [ProductSize.L, ProductSize.XL, ProductSize.XXL],
      },
      {
        id: 3,
        name: productName3,
        price: 300,
        image: [
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8513747-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8513747-1200-auto',
            },
            alt: productName3,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8513744-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8513744-1200-auto',
            },
            alt: productName3,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8513745-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8513745-1200-auto',
            },
            alt: productName3,
          },
        ],
        description,
        highlights,
        details,
        colors: [ProductColor.Black, ProductColor.White],
        sizes: [ProductSize.S, ProductSize.M, ProductSize.L],
      },
      {
        id: 4,
        name: productName4,
        price: 400,
        image: [
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8513819-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8513819-1200-auto',
            },
            alt: productName4,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8513816-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8513816-1200-auto',
            },
            alt: productName4,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8513817-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8513817-1200-auto',
            },
            alt: productName4,
          },
        ],
        description,
        highlights,
        details,
        colors: [ProductColor.Pink],
        sizes: [ProductSize.XL, ProductSize.XXL],
      },
      {
        id: 5,
        name: productName5,
        price: 500,
        image: [
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8514736-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8514736-1200-auto',
            },
            alt: productName5,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8514733-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8514733-1200-auto',
            },
            alt: productName5,
          },
          {
            src: {
              small:
                'https://lojausereserva.vtexassets.com/arquivos/ids/8514734-600-auto',
              big: 'https://lojausereserva.vtexassets.com/arquivos/ids/8514734-1200-auto',
            },
            alt: productName5,
          },
        ],
        description,
        highlights,
        details,
        colors: [
          ProductColor.Red,
          ProductColor.Blue,
          ProductColor.Green,
          ProductColor.Yellow,
          ProductColor.Black,
          ProductColor.White,
          ProductColor.Pink,
        ],
        sizes: [
          ProductSize.XS,
          ProductSize.S,
          ProductSize.M,
          ProductSize.L,
          ProductSize.XL,
          ProductSize.XXL,
        ],
      },
    ] satisfies Array<Product>);
  }
}
