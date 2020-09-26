// bai5
let item1 ={
    Name : "Xiaomi portable charger 20000mah",
    Brand : 'Xiaomi',
    Price : 428,
    Color : 'White',
    Category : 'Charger'
  };
  let item2 ={
    Name : "VSmart Active 1",
    Brand : 'VSmart',
    Price : 5487,
    Color : 'Black',
    Category : 'Phone'
  };
  let item3 ={
    Name : "IphoneX",
    Brand : 'Apple',
    Price : 21490,
    Color : 'Gray',
    Category : 'Phone'
  };
  let item4 ={
    Name : "Samsung Galaxy A9",
    Brand : 'Samsung',
    Price : 8490,
    Color : 'Blue',
    Category : 'Phone'
  };
  let listItems = [item1,item2,item3,item4];
  
  // 5.1
  for(let i=0; i<listItems.length;i++){
    console.log('----------------------')
    console.log('Name : '+listItems[i].Name);
    console.log('Price : '+listItems[i].Price);
  }
  
  // 5.2
  for(let i=0; i<listItems.length;i++){
    console.log('----------------------')
    console.log('#'+(i+1)+' Name : '+listItems[i].Name);
    console.log('   Price : '+listItems[i].Price);
  }
  console.log(listItems.indexOf(item1))
  let a = Number(prompt('enter a number you want to check position'));
  console.log(listItems[a-1]);
  
//   5.3
  let x = prompt('enter your catory :');
  for(let i=0; i<listItems.length;i++){
    if(listItems[i].Category = x){
      console.log('----------------------')
      console.log('Name : '+listItems[i].Name);
      console.log('Price : '+listItems[i].Price);
    }
  }
  
//   // 5.4
  listItems[0].providers = ['phuPhukienzero','Dientuccc'];
  listItems[1].providers = ['Tgdd','Ddghn','VhStore'];
  listItems[2].providers = ['Tgdd'];
  listItems[3].providers = ['Tgdd'];
  for(let i=0; i<listItems.length;i++){
      console.log('----------------------')
      console.log('Name : '+listItems[i].Name);
      console.log('Price : '+listItems[i].Price);
      console.log('Providers : '+listItems[i].providers);
  }
  
//   // 5.5
  let x = prompt('enter your catory :');
  for(let i=0; i<listItems.length;i++){
    for(let j=0; j<listItems[i].providers.length;i++){
      if(listItems[i].providers[j] = x){
      console.log('----------------------')
      console.log('Name : '+listItems[i].Name);
      console.log('Brand : '+listItems[i].Brand);
      console.log('Price : '+listItems[i].Price);
      console.log('Color : '+listItems[i].Color);
      console.log('Providers : '+listItems[i].providers);
    }
    }
  }