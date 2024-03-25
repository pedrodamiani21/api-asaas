import { Request, Response } from 'express';
import { customersService } from '../services/customersServices';
import { handleRequestError } from '../utils/errorHandler';

const getAll = async (req: Request, res: Response) => {
    const token = req.headers.authorization || '';
    try {
      const customers = await customersService.getAll({ token });
      res.json(customers);
    } catch (error: any) {
      const errorMessage = handleRequestError(error, "Erro ao listar clientes.");
      res.status(error?.response?.status || 500).json({ error: errorMessage });
    }
  };
  
  const getById = async (req: Request, res: Response) => {
    const customerId = req.params.id || '';
    const token = req.headers.authorization || '';
    try {
      const customer = await customersService.getById({ customerId, token });
      res.json(customer);
    } catch (error: any) {
      const errorMessage = handleRequestError(error, "Erro ao obter informações do cliente.");
      res.status(error?.response?.status || 500).json({ error: errorMessage });
    }
  };
  
  const create = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization || '';
      const body = req.body;
      const customers = await customersService.create({ customerData: body, token });
      res.json(customers);
    } catch (error: any) {
      const errorMessage = handleRequestError(error, "Erro ao cadastrar cliente.");
      res.status(error?.response?.status || 500).json({ error: errorMessage });
    }
  };

  export {
    create,
    getAll,
    getById,
  };
  