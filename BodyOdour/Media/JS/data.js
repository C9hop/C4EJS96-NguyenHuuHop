let admin ={
    email:`amin123@gmail.com`,
    password:`amin123`,
    permission:`admin`,
}

let user = [
    {
        name: `Nguyen Huu Hop`,
        age: 20,
        address: `Ha Noi`,
        phoneNumber: 033123456,
        email: `hop123@gmail.com`,
        password: `hop123`,
        permission:`user`,

    },{
        name: `Phung Duc Trung`,
        age: 20,
        address: `Ha Noi`,
        phoneNumber: 135791113,
        email: `trung123@gmail.com`,
        password: `trung123`,
        permission:`user`,
    },{
        name: `Do Minh Khue`,
        age: 20,
        address: `Ha Noi`,
        phoneNumber: 246810121,
        email: `khue123@gmail.com`,
        password: `khue123`,
        permission:`user`,
    }
]

let productsData = [
    {
        name:`La Nuit De L’homme EDT`,
        brand:`Yves Saint Laurent`,
        price:`2.950.000đ`,
        imageUrl: `./Media/image/La Nuit De L’homme EDT.png` ,
        size:`100ml`,
        sex:`male`,
        scent:[
            'lavender',
            'snowwood',
            'cardamom',
        ],
    },{
        name:`Libre`,
        brand:`Yves Saint Laurent`,
        price:`3.400.000đ`,
        imageUrl:`./Media/image/Libre.png`,
        size:`90ml`,
        sex:`female`,
        scent:[
            'orange madarin',
            'lavender',
            'musk',
        ],
    }, {
        name:`Dior Sauvage EDT`,
        brand:`Dior`,
        price:`3.150.000đ`,
        imageUrl:`./Media/image/Dior Sauvage EDT.png`,
        size:`100ml`,
        sex:`male`,
        scent:[
            'black pepper',
            'snowwood',
            'ambroxan',
        ],
    }, {
        name:`Sauvage Parfum`,
        brand:`Dior`,
        price:`3.850.000đ`,
        imageUrl:`./Media/image/Sauvage Parfum.png`,
        size:`100ml`,
        sex:`male`,
        scent:[
            'vanilla',
            'frankincense',
            'sandalwood',

        ],
    }, {
        name:`Chanel Coco Noir`,
        brand:`Chanel`,
        price:`4.250.000đ`,
        imageUrl:`./Media/image/Chanel Coco Noir.png`,
        size:`100ml`,
        sex:`female`,
        scent:[
            'orange',
            'rose',
            'tonka beans',
        ],
    }, {
        name:`Chanel Chance EDT`,
        brand:`Chanel`,
        price:`3.400.000đ`,
        imageUrl:`./Media/image/Chanel Chance EDT.png`,
        size:`100ml`,
        sex:`female`,
        scent:[
            'pineapple',
            'jasmine',
            'vanilla',
        ],
    }, {
        name:`Ombre Leather EDP`,
        brand:`Tom Ford`,
        price:`4.700.000đ`,
        imageUrl:`./Media/image/Ombre Leather EDP.png`,
        size:`100ml`,
        sex:`male`,
        scent:[
            'leather',
            'cardamom',
            'moss moss',
        ],
    }, {
        name:`Noir de Noir`,
        brand:`Tom Ford`,
        price:`8.000.000đ`,
        imageUrl:`./Media/image/Noir de Noir.png`,
        size:`100ml`,
        sex: `unisex`,
        scent:[
            'saffron flowers',
            'rose',
            'oak tree',
        ],
    },{
        name:`My Burberry Blush`,
        brand:`Burberry`,
        price:`3.750.000đ`,
        imageUrl:`./Media/image/My Burberry Blush.png`,
        size:`100ml`,
        sex: `female`,
        scent:[
            'yellow lemon',
            'rose',
            'purple flowers',
        ],
    },{
        name:`Mr. Burberry EDP`,
        brand:`Burberry`,
        price:`3.000.000đ`,
        imageUrl:`./Media/image/Mr. Burberry EDP.png`,
        size:`100ml`,
        sex: `male`,
        scent:[
            'cinnamon',
            'snowwood',
            'amber',
        ],
    },{
        name:`Twilly d’Hermès`,
        brand:`Hermès`,
        price:`2.950.000đ`,
        imageUrl:`./Media/image/Twilly d’Hermès.png`,
        size:`85ml`,
        sex: `female`,
        scent:[
            'ginger',
            'jasmine',
            'sandalwood',
        ],
    },{
        name:`Un Jardin Sur Le Nil`,
        brand:`Hermès`,
        price:`2.800.000đ`,
        imageUrl:`./Media/image/Un Jardin Sur Le Nil.png`,
        size:`100ml`,
        sex: `famale`,
        scent:[
            'pomelo',
            'peony',
            'musk',
        ],
    },
]
let mainProd = document.getElementById('main-content');


//fnc list
function showList(productsData){
    // let entry = data.entry;
    // console.log(entry);
    // console.log(productsData)
    for(let prod of productsData){
        let imageUrl = prod.imageUrl;
        let name = prod.name;
        // console.log(name)
        let brand = prod.brand;
        let price = prod.price;
        let size = prod.size;
        let sex = prod.sex;
        let scent = prod.scent;
        // let more = prod['link'][0].attributes.href;
        product(imageUrl,name, brand,price,size,sex,scent);
    }
}
// console.log(showList);
showList(productsData);


// fnc prod
function product(imageUrl,name, brand,price,size,sex,scent){

    // console.log(mainProd)
    mainProd.insertAdjacentHTML('beforeend',`
    <div class="main-item">
        <div class="main-pic">
            <img wirdth="170" height="170" src="${imageUrl}" alt="${name}"/>
        </div>
        <div class="title">
            <b>${brand}</b><br/>
            <span>${price}</span>

        </div>
    </div>
`);
}