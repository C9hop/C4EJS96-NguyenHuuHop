// //data
// let user = [
//     {
//         name: `Nguyen Huu Hop`,
//         age: 20,
//         address: `Ha Noi`,
//         phoneNumber: 033123456,
//         email: `hop123@gmail.com`,
//         password: `hop123`,
//         permission:`user`,

//     },{
//         name: `Phung Duc Trung`,
//         age: 20,
//         address: `Ha Noi`,
//         phoneNumber: 135791113,
//         email: `trung123@gmail.com`,
//         password: `trung123`,
//         permission:`user`,
//     },{
//         name: `Do Minh Khue`,
//         age: 20,
//         address: `Ha Noi`,
//         phoneNumber: 246810121,
//         email: `khue123@gmail.com`,
//         password: `khue123`,
//         permission:`user`,
//     }
// ]
// let modalNameInput = document.getElementById(`sign_in_name_input`);
// let modalPasswordInput = document.getElementById(`sign_in_password_input`);
// let modalSignInStatusTitle = document.getElementById(`sign_in_status_title`);

// function modalSignInOnclickCallback() {
//     console.log(user)
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].email==modalNameInput.value && user[i].password==modalPasswordInput.value)
//         { signIn(i);
//               Content_Title_Bag.style.display = `block`;
//                 modalNameInput.value = null;
//                 modalPasswordInput.value = null;
//                 modalSignIn.style.display = `none`;
                
//         } 
//         else {
          
//                 modalSignInStatusTitle.textContent = `Thông tin sai! Vui lòng điền lại`;
//                 modalSignInStatusTitle.style.color = `red`;
//                 modalNameInput.value = null;
//                 modalPasswordInput.value = null;   
//         }
//     }
// }

// modalSignInBtn.addEventListener(`click`, modalSignInOnclickCallback);

// function signIn(index) {
//     signInBtn.style.display = `none`;
//     signOutBtn.style.display = `block`;
//     sideName.textContent = user[index].name;
// }
// // Get the modal
// var modal = document.getElementById('id01');
// var x = document.getElementById('id02');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         x.style.display = "block";

//     }
// }