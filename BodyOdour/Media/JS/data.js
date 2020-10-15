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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/06/Untitled-1-2-768x768.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/06/libre.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/05/9fe851cd-23f4-475f-9966-c931cb11e899-768x768.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/06/3348901486392_672fa1db2d985714658c181fc5f0ac72-768x768.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/06/coconoir-768x768.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/06/chane-edt.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/06/tom-ford-ombre-leather-orchard.vn_-768x768.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/07/71lGQ7UBp7L._AC_SL1500_-768x768.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/06/my-burberry-768x768.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/06/mr-burberry-edp-768x768.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/08/hermes-twilly-d-hermes-hermes-twilly-d-hermes-eau-de-parfum-50-ml-3346133200014-copy.png`,
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
        imageUrl:`https://xxivstore.com/wp-content/uploads/2020/07/dfc17fa6322836978db254d13aa3e46a-768x768.png`,
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
            <img src="${imageUrl}" alt="${name}"/>
        </div>
        <div class="title">
            <b>${brand}</b><br/>
            <span>${price}</span>
            <span>${size}</span>
            <span>${sex}</span>
            <span>${scent}</span>
        </div>
    </div>
`);
}