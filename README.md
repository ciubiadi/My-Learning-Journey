# My-Learning-Journey
## Cart with Advanced Redux
### App description
This app allows the user to add the available books to the cart. The user can change the quantity of the cart items. The cart shows the total amount of total items. 

### What I have learned
In this project I practiced :
* State Management with Redux : I did manage the state of the cart globally via Redux. However, the available products(that can be added to the cart) are mapped from a local array.
  - I use two different slices in the Redux store, one for cart(addition/removal of cart items and cart quantity update) and one for ui(cart showing/hiding and notification display)
* fetching and submitting data to the **firebase database** ( https://react-http-8fe27-default-rtdb.europe-west1.firebasedatabase.app/cart.json )
  - I use the actions of redux store slices while fetching data from firebase database( display notifications accordingly) and also while sending data to the firebase.
* Building UI reusable components for Notifications, Cards, Layout and Header.

State Management
Re-usable components
Error handling

### App View
![Screenshot 2023-10-03 at 23 01 38](https://github.com/ciubiadi/My-Learning-Journey/assets/46215033/8f4bb255-f905-4db4-b8dd-be1939b23c21)

### Structure
```
Redux Project
├── package.json
├── package-lock.json
├── notes.txt           => General notes regarding state management and comparison between core hooks useState, useContext and useReducer 
|── Redux-notes.txt     => The notes I did while practicing and leraning React and Redux
├── public
└── src
    ├── components
    |   ├── Cart
    |   |   ├── Cart.js
    |   |   ├── CartButton.js
    |   |   └── CartItem.js
    |   |
    |   ├── Layout
    |   |   ├── Layout.js
    |   |   ├── MainHeader.js
    |   |   └── MainGHeader.module.css
    |   |
    |   ├── Shop
    |   |   ├── ProductItem.js
    |   |   ├── ProductItem.module.css
    |   |   ├── Products.js
    |   |   └── Products.module.css
    |   |   
    |   └── UI
    |       ├── Card.js
    |       ├── Card.module.css
    |       ├── Notification.js
    |       └── Notification.module.css
    |
    ├── store
    |   ├── cart-actions.js
    |   ├── cart-slice.js
    |   ├── store.js
    |   └── ui-slice.js
    |
    ├── App.js
    ├── index.js
    └── idnex.css
```
