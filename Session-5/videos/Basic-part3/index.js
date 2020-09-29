//3.1:
// let list = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
// let counts = {};
// for(let i=0; i<list.length; i++){
//     let num = list[i];
//     counts[num] = counts[num] ? counts[num]+1 :1;
// }
// console.log("to:"+counts['to']);
// console.log("be:"+counts['be']);
// console.log("that:"+counts['that']);
// console.log("of:"+counts['of']);
// console.log("elon:"+counts['elon']);
// console.log("this:"+counts['this']);
// console.log("now:"+counts['now']);
// console.log("back:"+counts['back']);
// console.log("cool:"+counts['cool']);
// console.log("hey:"+counts['hey']);
// console.log("love:"+counts['love']);
// console.log("life:"+counts['life']);
// console.log("rain:"+counts['rain']);
// console.log("summer:"+counts['summer']);
// console.log("color:"+counts['color']);
// console.log("hat:"+counts['hat']);
// console.log("late:"+counts['late']);
// console.log("sorry:"+counts['sorry']);
// console.log("my:"+counts['my']);
// console.log("team:"+counts['team']);
// //3.2:
let inventory = [

    {
    
        name: ' HP Envy 13aq ',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    
    {
    
        name: ' Dell XPS 9370 ',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: ' Dell Inspiron 3567 ',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: ' Dell Latitude E5450 ',
    
        price: 8600,
    
        brand: 'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: ' Asus Zenbook ',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: ' HP Pavilion ',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },
]
let inventoryByBrand = {
    hp: [
        {
            name: ' HP Envy 13aq ',
    
            price: 21000,
        
            brand: 'HP',
        
            quantity: 5,
        },
        {  
        name: ' HP Pavilion ',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
        },
    ],
    dell: [
        {
            name: ' Dell XPS 9370 ',
    
            price: 30000,
        
            brand: 'Dell',
        
            quantity: 1,
        },
        {
            name: ' Dell Latitude E5450 ',
    
            price: 8600,
        
            brand: 'Dell',
        
            quantity: 2,
        },
        {
            name: ' Dell Inspiron 3567 ',
    
            price: 9300,
        
            brand: 'Dell',
        
            quantity: 12,
        },
    ],
    asus: [
        {
            name: ' Asus Zenbook ',
    
            brand: 'Asus',
        
            price: 20000,
        
            quantity: 4,
        }
    ],
}
console.log(inventoryByBrand);
//3.4/3.5/3.6/3.7:
let x = prompt('which brand?');
if(x == null || x== undefined){
    alert("???...");
}
else{
    switch(x){
        case 'hp':
            let total1=0;
            let string1 = "\t";
        for(let i=0; i<inventoryByBrand.hp.length; i++){
            string1+=inventoryByBrand.hp[i].name;
            total1 += (inventoryByBrand.hp[i].price)*(inventoryByBrand.hp[i].quantity)*1000;
        }
        alert("There are "+inventoryByBrand.hp.length+" generations of 'HP' in inventor:\n"+string1+"\n"+"With total value: "+total1.toLocaleString()+"VND");        
        break;
        case 'dell':
            let total=0;
            let string = "  ";
        for(let i=0; i<inventoryByBrand.dell.length; i++){
            string+=inventoryByBrand.dell[i].name;
            total += (inventoryByBrand.dell[i].price*inventoryByBrand.dell[i].quantity)*1000;
        }
        alert("There are "+inventoryByBrand.dell.length+" generations of 'HP' in inventor:\n"+string+"\n"+'With total value: '+total.toLocaleString()+"VND");        
        break;
        case 'asus':
            let total2=0;
            let string2 = "  ";
        for(let i=0; i<inventoryByBrand.asus.length; i++){
            string2+=inventoryByBrand.asus[i].name;
            total2 += (inventoryByBrand.asus[i].price*inventoryByBrand.asus[i].quantity);
        }
        alert("There are "+inventoryByBrand.asus.length+" generations of 'HP' in inventor:\n"+string2+"\n"+"With total value: "+total2.toLocaleString()+"VND");        
        break;
    }
}

