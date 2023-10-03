# My-Learning-Journey
## Food Order App with Advanced Redux
### App description
This app allows the user to add the available foods to the cart and submit the cart. The user can add different quantities of the items and the cart will be live updated (with a smooth animation as well for each cart update). 
The cart shows the total amount of total items and the total cost. After the user clicks on "Order" action, a form with user's address needs to be filled and submited in order for the order to be completed 

### What I have learned
In this project I practiced :
* state management with Redux : I did manage the state of the cart globally via Redux. In the contet I stored the items, the total amount of the cart and the 3 type of actions ( item addition, deletion and cart clearing).
* handling modals properly with ReactDOM.createPortal and rendering the modal content conditionally : The modal shows different content depending on the form submission states.  
* fetching and submitting data to the **firebase database** ( https://react-http-8fe27-default-rtdb.europe-west1.firebasedatabase.app/cart.json )
* Building UI reusable components for Form, Input, Modal, Card and others. 

State Management
Re-usable components
Error handling

### Menu Items
![food_app_home](https://github.com/ciubiadi/My-Learning-Journey/assets/46215033/1559a734-0e69-40d9-8c0c-b6a643a21fdb)

### Cart View
![food_app_cart](https://github.com/ciubiadi/My-Learning-Journey/assets/46215033/83e90cfa-bee6-4601-8046-7bd0af0f3d3d)

### Cart Form
![food_app_cart_form](https://github.com/ciubiadi/My-Learning-Journey/assets/46215033/d55816dd-7af8-480a-a840-ef322b03be07)

### Mobile View
![food_app_mobile](https://github.com/ciubiadi/My-Learning-Journey/assets/46215033/adf516c0-cf2b-4e4b-acdb-7b065997f01c)

### Structure
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
