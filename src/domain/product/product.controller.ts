import productModel from './product.schema';
import { Request, Response } from 'express';
import runMiddleware from 'expmidd';
import Cors from 'cors';
const cors = Cors({
  methods: ['GET'],
});

class ProductController {
  async create(req: Request, res: Response) {
    const {
      name,
      slug,
      quantity,
      image,
      price,
      description,
      guarantee,
      brand,
      model,
    } = req.body;
    await runMiddleware(req, res, cors);

    const product = await productModel.create({
      name,
      slug,
      quantity,
      image,
      price,
      description,
      guarantee,
      brand,
      model,
    });

    return res.status(200).json(product);
  }

  async read(req: Request, res: Response) {
    const product = await productModel.find({});
    await runMiddleware(req, res, cors);
    return res.status(200).json(product);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const {
      name,
      slug,
      quantity,
      image,
      price,
      description,
      guarantee,
      brand,
      model,
    } = req.body;
    const product = await productModel.findOneAndUpdate(
      { _id: id },
      {
        name,
        slug,
        quantity,
        image,
        price,
        description,
        guarantee,
        brand,
        model,
      }
    );
    await runMiddleware(req, res, cors);
    return res.json(product);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const product = await productModel.deleteOne({ _id: id });
    await runMiddleware(req, res, cors);
    return res.json(product);
  }
}
export default new ProductController();
