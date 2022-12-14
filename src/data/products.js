    //  http://drive.google.com/uc?export=view&id={ACA VA EL ID}
    // Asi viene el link desde Drive --> https://drive.google.com/file/d/16C1wM1FVC4vMwQ4WGE5UzmlNZLQFOtVA/view?usp=share_link
    // Poner asi --> https://drive.google.com/uc?export=view&id=16C1wM1FVC4vMwQ4WGE5UzmlNZLQFOtVA
    // https://drive.google.com/file/d/12iGO_TiqbkcGhPw4MDWer2JjenIwxWOx/view?usp=share_link

const PRODUCTS = [
    {
        id: 1,
        title: 'El',
        category: 'ilustracion',
        stock: 12,
        price: 1200,
        description: 'Arte digital donde los pies son el foco del a acción',
        pictureUrl: 'https://drive.google.com/uc?export=view&id=16C1wM1FVC4vMwQ4WGE5UzmlNZLQFOtVA',
        inCart: false
    },
    {
        id: 2,
        title: 'Lineas Interlocutoras',
        category: 'ilustracion',
        stock: 14,
        price: 1400,
        description: `Entre lineas a veces se codifican señales, entre locutores se entienden`,
        pictureUrl: 'https://drive.google.com/uc?export=view&id=1KfgDJPnKZ3F6Eme0jHzcBCfZbENgF7Vh',
        inCart: false
    },
    {
        id: 3,
        title: 'Ellas',
        category: 'ilustracion',
        stock: 5,
        price: 2000,
        description: `Las manos humanas tienen varias formas, la predominante no es esta`,
        pictureUrl: 'https://drive.google.com/uc?export=view&id=1DG2_VA_CQaEnybEZp5eBkUP61EqPCrlh',
        inCart: false
    },
    {
        id: 4,
        title: 'Un barco en la avenida',
        category: 'ilustracion',
        stock: 15,
        price: 1000,
        description: `No hace falta explicar nada`,
        pictureUrl: 'https://drive.google.com/uc?export=view&id=1Vh7unNSIcbAlXlDq3yIDCk4QDHBWpzxt',
        inCart: false
    },
    {
        id: 5,
        title: 'Gentes',
        category: 'pintura',
        stock: 1,
        price: 2400,
        description: `2 sobre piedra blanca, forma irregular`,
        pictureUrl: 'http://drive.google.com/uc?export=view&id=1zXeRaJkBPOo83HED2dS74UBZXTw1ibPy',
        inCart: false
    },
    {
        id: 6,
        title: 'Handas',
        category: 'pintura',
        stock: 4,
        price: 4200,
        description: `Manos unidas, oleo sobre tela`,
        pictureUrl: 'http://drive.google.com/uc?export=view&id=1I_1oy6dBp63i9I6crg8-vynWX0dWjmZo',
        inCart: false
    },
    {
        id: 7,
        title: 'Sueños de gato',
        category: 'pintura',
        stock: 4,
        price: 4200,
        description: `Acuarela y Oleo sobre lienzo de tela, sueños de gato`,
        pictureUrl: 'http://drive.google.com/uc?export=view&id=1S9tpB3ejXdzrvBis5lJ2aZJXeTxmSc1T',
        inCart: false
    },
    {
        id: 8,
        title: 'Diosa',
        category: 'pintura',
        stock: 4,
        price: 4200,
        description: `Acuarela y Oleo sobre lienzo de tela, Diosa`,
        pictureUrl: 'http://drive.google.com/uc?export=view&id=1ngReS0vZ547pk0Ho1ontI2d3A7ZaHHZT',
        inCart: false
    }
]

export { PRODUCTS}