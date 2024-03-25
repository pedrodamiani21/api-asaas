import express, { Router } from 'express';
import * as customersController from './controllers/customersController';
import * as paymentsController from './controllers/paymentsController';

const router: Router = express.Router();

router.get('/customers', customersController.getAll);
router.get('/customers/:id', customersController.getById);
router.post('/customers', customersController.create);

router.get('/payments', paymentsController.getAll);
router.get('/payments/:id', paymentsController.getById);
router.post('/payments', paymentsController.create);

export default router;
