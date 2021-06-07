import { Router } from 'express';

import productController from './product.controller';

const ProductRouter = Router();

ProductRouter.post('/', productController.create);
ProductRouter.get('/', productController.read);
ProductRouter.put('/:id', productController.update);
ProductRouter.delete('/:id', productController.delete);

export default ProductRouter;
