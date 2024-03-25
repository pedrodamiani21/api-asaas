import { Request, Response } from 'express';
import { paymentsService } from '../services/paymentsServices';
import { handleRequestError } from '../utils/errorHandler';

const getAll = async (req: Request, res: Response) => {
  const token = req.headers.authorization || '';
  try {
    const payment = await paymentsService.getAll({ token });
    res.json(payment);
  } catch (error: any) {
    const errorMessage = handleRequestError(error, "Erro ao listar pagamentos.");
    res.status(error?.response?.status || 500).json({ error: errorMessage });
  }
};

const getById = async (req: Request, res: Response) => {
  const paymentId = req.params.id || '';
  const token = req.headers.authorization || '';
  try {
    const payment = await paymentsService.getById({ paymentId, token });
    res.json(payment);
  } catch (error: any) {
    const errorMessage = handleRequestError(error, "Erro ao obter informações do pagamento.");
    res.status(error?.response?.status || 500).json({ error: errorMessage });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization || '';
    const body = req.body;
    const payment = await paymentsService.create({ postData: body, token });
    res.json(payment);
  } catch (error: any) {
    const errorMessage = handleRequestError(error, "Erro ao cadastrar pagamento.");
    res.status(error?.response?.status || 500).json({ error: errorMessage });
  }
};

export {
  create,
  getAll,
  getById,
};
