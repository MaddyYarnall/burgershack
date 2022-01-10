import { generateId } from '../../client/app/Utils/generateId.js'
import { FakeDb } from '../db/FakeDB.js'
import { BadRequest } from '../utils/Errors.js'
class BurgersService {
  async getAll() {
    return FakeDb.burgers
  }

  async getById(id) {
    const burger = await FakeDb.burgers.find(burger => burger.id === id)
    if (!burger) {
      throw new BadRequest('Invalid ID')
    }
    return burger
  }

  async create(burger) {
    burger.id = generateId()
    FakeDb.burgers.push(burger)
    return burger
  }

  async edit(burger) {
    const original = await this.getById(burger.id)
    original.name = burger.name || original.name
    return original
  }

  async remove(id) {
    await this.getById(id)
    FakeDb.burgers = FakeDb.burgers.filter(b => b.id !== id)
  }
}

export const burgersService = new BurgersService



