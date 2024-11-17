import express from 'express'
import controllers from '../controller/indexcontroller.js'


const UseRoutes = express.Router()
UseRoutes.get('/', controllers.index)
UseRoutes.get('/api/register', controllers.addget)
UseRoutes.post('/api/register', controllers.addpost)
UseRoutes.post('/delete/:id', controllers.deletedata)
UseRoutes.post('/api/login', controllers.login)
UseRoutes.post('/api/notifi', controllers.notices)
UseRoutes.get('/api/data', controllers.getdata);
UseRoutes.get('/api/product', controllers.displayproduct);
UseRoutes.post('/api/delete-product', controllers.deleteproduct);
UseRoutes.post('/api/add-product', controllers.addproduct);


export default UseRoutes



