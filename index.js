var express= require("express")
var cors= require("cors")

var app= express()
app.use(cors())
const port = process.env.PORT || 8080

var data= {
    "message" :"hi"
}

var categories= [
    {
        "id": "1",
        "category": "Fashion",
        "image": "https://drive.google.com/uc?export=view&id=1-1DJZEr6bgnxlfbWaiDv0Rz324paf2SV"
    },

    {
        "id": "2",
        "category": "Electronics",
        "image": "https://drive.google.com/uc?export=view&id=1ZofgtVwb61DW2NbYz23BmMKgTQFTANCw"
    },

    {
        "id": "3",
        "category": "Books",
        "image": "https://drive.google.com/uc?export=view&id=128LtPYhKHHftiIBZdhjiLkMGkGd8C7gH"
    },

    {
        "id": "4",
        "category": "Home Appliances",
        "image": "https://drive.google.com/uc?export=view&id=1isqZSFjh6c7W5rpZpp-TELYYSn7RXwJ1"
    },

    {
        "id": "5",
        "category": "Mobiles",
        "image": "https://drive.google.com/uc?export=view&id=164YzqCE3upSJtew5W7JKVVgskRtnaxv3"
    },

    {
        "id": "6",
        "category": "Toys",
        "image": "https://drive.google.com/uc?export=view&id=1b6m5fI8TnEIxh8YObrZQ-uW2NVbx_YEb"
    },

    {
        "id": "7",
        "category": "Vehicles",
        "image": "https://drive.google.com/uc?export=view&id=1LNqzbyrgunwM-rjCNdGQmqDsuw80CX9A"
    },

    {
        "id": "8",
        "category": "Baby Products",
        "image": "https://drive.google.com/uc?export=view&id=16wkVixtHKAl5adobLKhMUMZ-dl4JNyu0"
    },

    {
        "id": "9",
        "category": "Movies",
        "image": "https://drive.google.com/uc?export=view&id=1bbjxtBPJwKjAYh49mQOVG4TP5uO1Yrip"
    },

    {
        "id": "10",
        "category": "Sports",
        "image": "https://drive.google.com/uc?export=view&id=1LTRvKx4oBkg7xzjKAxg3xpWRDash79_g"
    }
]

var cDetails= [
    {
        "id": "1",
        "cName": "Fashion",
        "image": "https://rukminim1.flixcart.com/image/714/857/l3hmwsw0/t-shirt/2/v/g/l-723-2-4-5-6-ftx-original-imagehzttyk82rfg.jpeg?q=50"
    },

    {
        "id": "2",
        "cName": "Electronics",
        "image": "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
    },

    {
        "id": "3",
        "cName": "Books",
        "image": "https://rukminim1.flixcart.com/image/612/612/km0x5zk0/book/n/w/q/set-of-8-panchatantra-and-traditional-story-books-collections-original-imagfyffjvexfggr.jpeg?q=70"
    },

    {
        "id": "4",
        "cName": "Home Appliances",
        "image": "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
    },

    {
        "id": "5",
        "cName": "Mobiles",
        "image": "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
    },

    {
        "id": "6",
        "cName": "Sports",
        "image": "https://m.media-amazon.com/images/I/51AZO6eOzLS._AC_UL320_.jpg"
    },

    {
        "id": "7",
        "cName": "Toys",
        "image": "https://m.media-amazon.com/images/I/61UUZEawoLL._AC_UL320_.jpg"
    },

    {
        "id": "8",
        "cName": "Vehicles",
        "image": "https://m.media-amazon.com/images/I/51kkYk-Vp8L._AC_UL320_.jpg"
    },

    {
        "id": "9",
        "cName": "Baby Products",
        "image": "https://rukminim1.flixcart.com/image/612/612/kingqkw0-0/toy-accessory/u/f/m/luxury-kitchen-set-cooking-toy-with-briefcase-and-accessories-original-imafyecbdd26ncfg.jpeg?q=70"
    },

    {
        "id": "10",
        "cName": "Movies",
        "image": "https://rukminim1.flixcart.com/image/612/612/l2arp8w0/movie/w/x/4/2022-dvd-flt-movies-hindi-kgf-chapter-1-kgf-chapter-2-2-movies-original-imagdz7fddztw6xv.jpeg?q=70"
    },
]

var fashion= [
    {
        "id": "1",
        "name": "T-Shirt",
        "image": "https://rukminim1.flixcart.com/image/495/594/l4fxh8w0/t-shirt/p/n/z/m-ktb-108-wpk-rnhs-ylw-killer-original-imagfc2c6qsf8jry.jpeg?q=50",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Jeans",
        "image": "https://rukminim1.flixcart.com/image/495/594/l3hmwsw0/jean/j/g/i/28-d-jen-white-3-masterly-weft-original-imagehqghtbuvgzy.jpeg?q=50",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Jacket",
        "image": "https://rukminim1.flixcart.com/image/495/594/k44hksw0/sweatshirt/k/n/a/m-tblrdwthdfulsweat-k15-tripr-original-imafmzbq8vgj3fvh.jpeg?q=50",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Shorts",
        "image": "https://rukminim1.flixcart.com/image/495/594/kiqbma80-0/short/w/x/i/xxl-ic-24445-indiclub-original-imafygpfzcyx5gjy.jpeg?q=50",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Track Pants",
        "image": "https://rukminim1.flixcart.com/image/495/594/l2hwwi80/track-pant/l/s/6/m-31-3-line-foxter-original-imagdtz9fagggkqj.jpeg?q=50",
        "price": "₹550"
    }
]

var electronics= [
    {
        "id": "1",
        "name": "Smart Watch",
        "image": "https://rukminim1.flixcart.com/image/612/612/kvy58y80/smartwatch/8/4/p/42-android-ios-bhfjkjklfdjkdkkd-swastik-no-original-imag8qbzpffggzzx.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Pen Drive",
        "image": "https://rukminim1.flixcart.com/image/612/612/kialrww0-0/pendrive/pendrive/b/a/z/v236w-hp-original-imafy4cp8c7tqvnc.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Printer",
        "image": "https://rukminim1.flixcart.com/image/312/312/johi3680/printer/g/t/f/canon-lbp-6230-dn-original-imafaxjnkphbznyy.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Speaker",
        "image": "https://rukminim1.flixcart.com/image/612/612/l1b1oy80/speaker/home-audio-speaker/x/k/6/mb42x-micca-original-imagcwfhgdxfsysa.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Mouse",
        "image": "https://rukminim1.flixcart.com/image/612/612/l1whaq80/mouse/h/9/h/-original-imagdcx2kuyxeyyt.jpeg?q=70",
        "price": "₹550"
    }
]

var books= [
    {
        "id": "1",
        "name": "Space",
        "image": "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/c/f/o/black-holes-the-reith-lectures-original-imag7jxzuhcgksgg.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Biology",
        "image": "https://rukminim1.flixcart.com/image/612/612/jpu324w0/book/7/9/1/biology-for-class-9-2019-exam-original-imafbyz44dszk6ft.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Fiction",
        "image": "https://rukminim1.flixcart.com/image/612/612/kwcfngw0/book/3/8/x/wish-i-could-tell-you-original-imag9ffkhqehzwzs.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Civil",
        "image": "https://rukminim1.flixcart.com/image/612/612/kkcwo7k0/regionalbooks/p/y/3/ssc-je-2021-civil-engineering-previous-years-topic-wise-original-imafzpufudfmtfuh.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Agriculture",
        "image": "https://rukminim1.flixcart.com/image/612/612/jm573ww0/book/4/8/1/agriculture-at-a-glance-20th-revised-enlarged-edition-an-original-imaf94dyggzhzjpp.jpeg?q=70",
        "price": "₹550"
    }
]

var home= [
    {
        "id": "1",
        "name": "Oven",
        "image": "https://rukminim1.flixcart.com/image/300/300/klzhq4w0/microwave-new/v/r/w/gmx-519-cp1-pz-godrej-original-imagyzexsnbkug24.jpeg?q=90",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Chimney",
        "image": "https://rukminim1.flixcart.com/image/300/300/kf4ajrk0/chimney/h/b/p/c100258-hindware-original-imafvndvyzkeyys2.jpeg?q=90",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Blender",
        "image": "https://rukminim1.flixcart.com/image/612/612/l44hyfk0/hand-blender/8/1/u/hb-141-maharaja-whiteline-original-imagf34jzvz72jpc.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Coffee Maker",
        "image": "https://rukminim1.flixcart.com/image/612/612/kyag87k0/coffee-maker/3/b/w/cm-09-800-watts-coffee-o-clock-electric-warmex-home-appliances-original-imagajuq7kvjseug.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Vaccumm Cleaner",
        "image": "https://rukminim1.flixcart.com/image/312/312/kl6wx3k0/vacuum-cleaner/s/t/u/ksl-160-kent-original-imagyda3uhvkhdqc.jpeg?q=70",
        "price": "₹550"
    }
]

var mobiles= [
    {
        "id": "1",
        "name": "Samsung",
        "image": "https://rukminim1.flixcart.com/image/312/312/kt0enww0/mobile/x/l/h/galaxy-a52s-5g-sm-a528bzwdins-samsung-original-imag6fmjjmvehtgn.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Apple",
        "image": "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/u/p/8/iphone-13-mini-mlk23hn-a-apple-original-imag6vp6btm5zacs.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "RealMe",
        "image": "https://rukminim1.flixcart.com/image/312/312/l1dwknk0/mobile/f/t/x/-original-imagcyj4unsxhadw.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "OPPO",
        "image": "https://rukminim1.flixcart.com/image/312/312/kbs9k7k0/mobile/s/k/2/oppo-a11k-cph2083-original-imaft25bhg9f3k2f.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Vivo",
        "image": "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70",
        "price": "₹550"
    }
]

var sports= [
    {
        "id": "1",
        "name": "Bat",
        "image": "https://rukminim1.flixcart.com/image/612/612/jvqzo280/bat/q/b/a/0-900-poplar-willow-cricket-bat-no-6-6-1-ceat-original-imafggjgczcwszky.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Badminton",
        "image": "https://rukminim1.flixcart.com/image/612/612/l0cr4i80/kit/d/2/t/double-rod-badminton-rackest-3-shuttle-3322-23-neulife-68-original-imagc5mxzk8xpndq.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Football",
        "image": "https://rukminim1.flixcart.com/image/612/612/ksuowi80/ball/y/z/s/400-450-5-free-kick-xx-901-5-football-xxuma-original-imag6bnzhhqd74ef.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Skating",
        "image": "https://rukminim1.flixcart.com/image/612/612/kpwybgw0/skate/p/z/w/6-9-skating-shoes-premium-quality-adjustable-different-size-with-original-imag4fzr6yxxgymm.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Hockey",
        "image": "https://rukminim1.flixcart.com/image/612/612/ku4ezrk0/stick/v/r/9/panjab-tiger-practice-field-hockey-stick-wood-36-expsports-original-imag7b3qzqszhgxj.jpeg?q=70",
        "price": "₹550"
    }
]

var toys= [
    {
        "id": "1",
        "name": "Remote Control Car",
        "image": "https://rukminim1.flixcart.com/image/612/612/ktep2fk0/remote-control-toy/r/x/v/steering-remote-control-plastic-lighting-radio-control-electric-original-imag6rp6ehagyy5g.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Soft Toys",
        "image": "https://rukminim1.flixcart.com/image/612/612/kll7bm80/stuffed-toy/t/v/c/godteddy-pink-unicorn-with-white-rabbit-25-god-teddy-original-imagyzqrmwfmzyjy.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Action Figure",
        "image": "https://rukminim1.flixcart.com/image/612/612/kr6oeq80/action-figure/n/o/p/batman-bobblehead-augen-original-imag5f5zpg6zyu8a.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Tent House",
        "image": "https://rukminim1.flixcart.com/image/612/612/l111lzk0/outdoor-toy/g/9/g/2-hut-type-kids-toys-play-tent-house-homecute-0-original-imagczxwbm5wh52g.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Carrom Board",
        "image": "https://rukminim1.flixcart.com/image/612/612/knm2s280/board/a/k/9/premium-quality-smooth-shiny-glossy-small-20-inch-carrom-board-1-original-imag298zmhenut9w.jpeg?q=70",
        "price": "₹550"
    }
]

var vehicles= [
    {
        "id": "1",
        "name": "Bike",
        "image": "https://static.autox.com/uploads/bikes/2017/05/1486029592-honda-cd110dream.jpg",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Scooty",
        "image": "https://media.zigcdn.com/media/model/2019/Sep/2019-activa-125-right-side-view_360x240.jpg",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Car",
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=75",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Loading Car",
        "image": "https://cars.usnews.com/static/images/Auto/izmo/i70810173/2019_honda_ridgeline_angularfront.jpg",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Bus",
        "image": "https://media.istockphoto.com/photos/white-passenger-bus-picture-id135327019?k=20&m=135327019&s=612x612&w=0&h=YJneXYFReSVuKSIFOy5wGIygeLeb1UquX4BWLk-MluI=",
        "price": "₹550"
    }
]

var baby= [
    {
        "id": "1",
        "name": "Brush",
        "image": "https://rukminim1.flixcart.com/image/612/612/l37mtu80/toothpaste/w/f/k/-original-imagedndeq2z4zmp.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Massage Oil",
        "image": "https://rukminim1.flixcart.com/image/612/612/l3j2cnk0/massage-oil/y/m/w/500-baby-massage-oil-33049990-himalaya-original-imagempah9mgqpcd.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Soap",
        "image": "https://rukminim1.flixcart.com/image/612/612/k6jnfrk0/soap/a/j/a/1-125-gentle-baby-soap-himalaya-original-imafzzeb5jm7fvw3.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Powder",
        "image": "https://rukminim1.flixcart.com/image/612/612/kkk1vgw0/talc/e/u/u/700-baby-care-baby-powder-700-g-himalaya-original-imafzvs9maks2hxr.jpeg?q=70",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "Shampoo",
        "image": "https://rukminim1.flixcart.com/image/612/612/jve4pe80/shampoo/f/e/3/200-baby-no-more-tears-shampoo-200-ml-johnson-s-original-imaf6uf3kbdtffhq.jpeg?q=70",
        "price": "₹550"
    }
]

var movies= [
    {
        "id": "1",
        "name": "KGF",
        "image": "https://m.media-amazon.com/images/I/91r6f1nROqL._AC_UY218_.jpg",
        "price": "₹550"
    },

    {
        "id": "2",
        "name": "Bahubali",
        "image": "https://m.media-amazon.com/images/I/81YRmoEwYtL._AC_UY218_.jpg",
        "price": "₹550"
    },

    {
        "id": "3",
        "name": "Mission Impossible",
        "image": "https://m.media-amazon.com/images/I/71GDCAgDZAL._AC_UY218_.jpg",
        "price": "₹550"
    },

    {
        "id": "4",
        "name": "Pushpa",
        "image": "https://m.media-amazon.com/images/I/91mZVmYivFL._AC_UY218_.jpg",
        "price": "₹550"
    },

    {
        "id": "5",
        "name": "RRR",
        "image": "https://rukminim1.flixcart.com/image/612/612/l2arp8w0/movie/9/y/m/2022-dvd-flt-films-hindi-rrr-2022-play-only-in-computer-or-original-imagdnjmbesnswd7.jpeg?q=70",
        "price": "₹550"
    }
]

var offers= [
    {
        "id": "1",
        "category": "Sports",
        "item": "Ball",
        "image": "https://drive.google.com/uc?export=view&id=1RgUdlusR1XussLd7ka00jRQ1L9HgTzrd"
    },

    {
        "id": "2",
        "category": "Sports",
        "item": "Tennis Set",
        "image": "https://drive.google.com/uc?export=view&id=1LcP6euXqIbZNsiKzzSQp-wC_iUUyYJwb"
    },

    {
        "id": "3",
        "category": "Books",
        "item": "Fairy Tale Book",
        "image": "https://drive.google.com/uc?export=view&id=1vyWff5jlYP2QtL_eBGDRxtSe5bZQRqoP"
    },

    {
        "id": "4",
        "category": "Vehicles",
        "item": "Cycle",
        "image": "https://drive.google.com/uc?export=view&id=1i1Y7R7VhyIfOAg2Z20fQDP3dj8DOPCFd"
    },

    {
        "id": "5",
        "category": "Fashion",
        "item": "Jacket",
        "image": "https://drive.google.com/uc?export=view&id=1h2Szd1WbXqS6lw4GFEjCvXbaz6B6CtIq"
    },

    {
        "id": "6",
        "category": "Fashion",
        "item": "Shoes",
        "image": "https://drive.google.com/uc?export=view&id=1DhrTuASAJZYtosEUj6Q1NNmjqfFxrbz1"
    },

    {
        "id": "7",
        "category": "Electronics",
        "item": "Laptop",
        "image": "https://drive.google.com/uc?export=view&id=1d81N-naNuVWzoYbOgXCO9hPUi0Z3OOTP"
    },

    {
        "id": "8",
        "category": "Electronics",
        "item": "Mobile",
        "image": "https://drive.google.com/uc?export=view&id=1kqZNEXKDOv5GC6Ld2DGWgyn4DimDClpx"
    },

    {
        "id": "9",
        "category": "Electronics",
        "item": "Smart Watch",
        "image": "https://drive.google.com/uc?export=view&id=1NpBVO2H2JAJAhr7Ip-_8pX3jCti87PEn"
    },
    
    {
        "id": "10",
        "category": "Electronics",
        "item": "Smart Watch",
        "image": "https://drive.google.com/uc?export=view&id=1ehtx6n0XXlAKaunKCzeVrRAnXtdLQ_lj"
    },

    {
        "id": "11",
        "category": "Electronics",
        "item": "Speakers",
        "image": "https://drive.google.com/uc?export=view&id=1ih3-30Xb1h6DuN8-gPxfz6t9OHhMmXjT"
    },

    {
        "id": "12",
        "category": "Electronics",
        "item": "Washing Machine",
        "image": "https://drive.google.com/uc?export=view&id=19iY9hGP9GIDLTqakDa21bvV1g0OKewhc"
    },

    {
        "id": "13",
        "category": "Toys",
        "item": "Teddy",
        "image": "https://drive.google.com/uc?export=view&id=1WGdEsejvJCXclBfb0YOy6iJnZ3d3E3G9"
    },

    {
        "id": "14",
        "category": "Toys",
        "item": "Train Set",
        "image": "https://drive.google.com/uc?export=view&id=1uKuoabhbH9PmzB9mX8vLbj0ZPRCqKNwN"
    },

    
    {
        "id": "15",
        "category": "Home Appliances",
        "item": "Oven",
        "image": "https://drive.google.com/uc?export=view&id=1GZz9uDpvOcGnNV7y3ZTOEzpZ-eRuKgGn"
    }
]

app.get("/", (req, res) =>{
    console.log("Server running");
    res.json(data)
})

app.get("/categories", (req, res) =>{
    res.json(categories)
})

app.get("/categoryDetails", (req, res) => {
    res.json(cDetails)
})

app.get("/category/fashion", (req, res) =>{
    res.json(fashion)
})

app.get("/category/electronics", (req, res) =>{
    res.json(electronics)
})

app.get("/category/books", (req, res) =>{
    res.json(books)
})

app.get("/category/home", (req, res) =>{
    res.json(home)
})

app.get("/category/mobiles", (req, res) =>{
    res.json(mobiles)
})

app.get("/category/sports", (req, res) =>{
    res.json(sports)
})

app.get("/category/toys", (req, res) =>{
    res.json(toys)
})

app.get("/category/vehicles", (req, res) =>{
    res.json(vehicles)
})

app.get("/category/baby", (req, res) =>{
    res.json(baby)
})

app.get("/category/movies", (req, res) =>{
    res.json(movies)
})

app.get("/offers", (req, res) =>{
    res.json(offers)
})

app.listen(port)
console.log("Server Listening on port: "+ port);