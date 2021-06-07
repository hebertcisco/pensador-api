import { Router } from 'express';

import DefaultRouter from './domain/default.route';
import ProductRouter from './domain/product/product.routes';

const Routes = Router();

Routes.use('/', DefaultRouter).use('/product', ProductRouter);

export default Routes;
