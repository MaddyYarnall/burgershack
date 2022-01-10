import { burgersService } from '../services/BurgersService.js'
import BaseController from '../utils/BaseController.js'
export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
  }

  async getAll(req, res, next) {
    try {
      const burgers = await burgersService.getAll()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const burger = await burgersService.getById(req.params.id)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const burger = await burgersService.create(req.body)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const burger = await burgersService.edit(req.body)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await burgersService.remove(req.params.id)
      res.send({ message: 'Deleted' })
    } catch (error) {
      next(error)
    }
  }
}