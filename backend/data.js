import bcrypt from 'bcryptjs';


const data = {
  users:[
    {
      name: 'Zamzam',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Nobila', 
      email: 'user@example.com',
      password:  bcrypt.hashSync('123456'),
      isAdmin: false,


    }
  ],

  products: [
    {
      name: 'PALASHA DRESS',
      slug: 'palasha-dress',
      //_id: 12368659,
      description:
        'Look chic in satin with our Palasha dress. In a forest green, it features a midi length with cowl neckline and long sleeves.',
      brand: 'PALASHA',
      category: 'Dresses',
      image: '/images/p1.jpg',
      price: 640,
      rating: 4.5,
      countInStock: 10,
      numReviews: 10,
    },
    {
      name: 'SANSA CARDI BLOUSE',
      slug: 'sana-cardi-blouse',
      //_id: 8675670,
      description:
        'Look fabulous in the Sansa cardi, featuring flared, long sleeves and tie up front detailing in elegent black. Finish off with some black shorts.',
      brand: 'SANSA CARDI',
      category: 'Blouses',
      image: '/images/p2.jpg',
      price: 390,
      rating: 5,
      countInStock: 15,
      numReviews: 20,
    },
    {
      name: 'JANDI QUILTED ECRU',
      slug: 'jandi-quilted-ecru',
      //_id: 12345670,
      description:
        'For those cooler days, our Jandi jacket is here. Featuring a quilted design with zip up fastening in ecru. Pair with our Widya skirt for a perfect fit.',
      brand: 'JANDI',
      category: 'Coats',
      image: '/images/p11.jpg',
      price: 450,
      rating: 4.5,
      countInStock: 10,
      numReviews: 10,
    },
    {
      name: 'MOTEL X Trouser',
      slug: 'motel-x-trouser',
      //_id: 9876234,
      description:
        'Our Zocha trousers will have you covered for every occasion Featuring a high waisted fit, flared leg with buckle belt detailing in a black striped print. Style with the Hajra Vest Top for a cute co-ord.',
      brand: 'MOTEL X NEILL',
      category: 'Trousers',
      image: '/images/p4.jpg',
      price: 549,
      rating: 4,
      countInStock: 16,
      numReviews: 6,
    },
    {
      name: 'MAIWA BLAZER',
      slug: 'maiwa-blazer',
      //_id: 567689,
      description:
        'Tailored blazer featuring an oversize longline fit and a two button single breasted front fastening. Lapel collar and long sleeves with shoulder pads. Front flap pocket detailing. Simply style with our Tovani skirt in pinstripe brown.',
      brand: 'MAIWA',
      category: 'Blazers',
      image: '/images/p5.jpg',
      price: 720,
      rating: 4,
      countInStock: 16,
      numReviews: 16,
    },
    {
      name: 'WALTA JACKET ',
      slug: 'walta-jacket',
      //_id: 12854870,
      description:
        'Looking for the perfect jacket for this season? Look no further than our Walta jacket. In redwood, it features long sleeves, a button up front, a collared neckline and a PU finish. We love to pair with our Frayed jeans.',
      brand: 'WALTA',
      category: 'Blazers',
      image: '/images/p9.jpg',
      price: 900,
      rating: 5,
      countInStock: 16,
      numReviews: 25,
    },
    {
      name: 'Glo Sweatshirt',
      slug: 'glo-sweatshirt',
      //_id: 4442389,

      description:
        'Earn instant street cred with our Glo Sweatshirt in olive! Featuring a crew neckline, long sleeves, oversized loose fit, and cherub Angelo print, this piece is the definition of comfort and versatility.',
      brand: 'Glo',
      category: 'Knit Wear',
      image: '/images/p8.jpg',
      price: 490,
      rating: 3.5,
      countInStock: 16,
      numReviews: 50,
    },
    {
      name: 'NOBILA SHRUG TOP',
      slug: 'nobila-shrug-top',
      //_id: 8097656,
      description:
        'Amp up your knitwear with the perfect layering piece, our Nobila shrug top. Featuring a long sleeve fit in an ivory knit. Style with our Paiva dress for a cute fit. ',
      brand: 'NOBILA SHRUG',
      category: 'Knit Wear',
      image: '/images/p10.jpg',
      price: 490,
      rating: 4.5,
      countInStock: 16,
      numReviews: 19,
    },
  ],
};
export default data;
