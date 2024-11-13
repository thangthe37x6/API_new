import express from 'express'
import controllers from '../controller/indexcontroller.js'


const UseRoutes = express.Router()
UseRoutes.get('/', controllers.index)
UseRoutes.get('/api/register', controllers.addget)
UseRoutes.post('/api/register', controllers.addpost)
UseRoutes.post('/delete/:id', controllers.deletedata)
UseRoutes.post('/api/login', controllers.login)







UseRoutes.post('/api/notifi', (req, res) => {
    const {mess} = req.body;
    res.status(200).json({status: 'success', mess:'completed successfully!'})
  })
UseRoutes.get('/api/data', (req, res) => {
    res.json({
      data: [
        { namefood: 'burger', price: '50', image: 'assets/burger.jpg' },
        { namefood: 'French fries', price: '20' , image: 'assets/fried_french.jpg'},
        { namefood: 'Fried chicken', price: '30', image: 'assets/chicken_fried.jpg'},
        { namefood: 'Chicken wings', price: '40', image: 'assets/sandwich.jpg' },
        { namefood: 'Chicken pasta', price: '10', image: 'assets/chicken_pasta.jpg' },
        { namefood: 'sandwich', price: '20', image: 'assets/sandwich.jpg'},
        { namefood: 'bread', price: '1', image: 'assets/bread.jpg'},
        { namefood: 'salad', price: '10', image: 'assets/salad.jpg'},
        { namefood: 'Beef steeak', price: '200', image: 'assets/beef_steak.jpg'},
        { namefood: 'Pizza', price: '100', image: 'assets/pizza.jpg' },
      ],
      restaurant: [
        
        {address: '32 To Huu - Da Nang', image: 'assets/burger.jpg' ,name: 'burger-Chicken pasta', acountstar: 4.2, time: 20},            
        {address: '32 Bach Dang - Da Nang', image: 'assets/fried_french.jpg',name: 'French fries-French fries',acountstar: 4.2, time: 20},
        {address: '32 Hai Phong - Da Nang', image: 'assets/chicken_fried.jpg',name: 'Fried chicken-burger',acountstar: 4.2, time: 20},
        {address: '32 Doan Uan - Da Nang', image: 'assets/sandwich.jpg', name: 'Chicken wings-Fried chicken',acountstar: 4.2, time: 20},
        {address: '32 Quang Nam - Da Nang',  image: 'assets/chicken_pasta.jpg',name: 'Chicken pasta-French fries',acountstar: 4.2, time: 20},
        {address: '32 Dong Da - Da Nang',  image: 'assets/sandwich.jpg',name: 'sandwich-French fries',acountstar: 4.2, time: 20},
        {address: '32 Ham Nghi - Da Nang', image: 'assets/bread.jpg',name: 'bread-Chicken wings',acountstar: 4.2, time: 20},
        {address: '32 Phan Dang Luu - Da Nang', image: 'assets/salad.jpg',name: 'salad-French fries',acountstar: 4.2, time: 20},
        {address: '55 To Huu - Da Nang',  image: 'assets/beef_steak.jpg',name: 'Beef steeak-French fries',acountstar: 4.2, time: 20},
        {address: '100 To Huu - Da Nang',  image: 'assets/pizza.jpg',name: 'Pizza-burger-French fries'  ,acountstar: 4.2, time: 20}  ,        
        
      ]
    });
  });


export default UseRoutes



