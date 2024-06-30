import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"
import express from "express"
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js"
import formidable from 'express-formidable'
const router = express.Router()


//routes

router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)

//update product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)

//getProducts

router.get('/get-product', getProductController)

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//single product
router.get('/get-product/:slug',getSingleProductController)

//get photo 
router.get('/product-photo/:id',productPhotoController)


//delete product

router.delete('/delete-product/:pid',deleteProductController)


//search product 
router.get('/search/:keyword',searchProductController)

//similar product

router.get('/related-product/:pid/:cid',relatedProductController)

//category wise Product

router.get('/product-category/:slug',productCategoryController)

//Payments Routes

//Token

router.get('/braintree/token',braintreeTokenController)


//payments

router.post('/braintree/payment',requireSignIn,brainTreePaymentController)
export default router