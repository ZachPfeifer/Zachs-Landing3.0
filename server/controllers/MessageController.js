import MessageService from '../services/MessageService'
import express from 'express'



let _messageService = new MessageService().repository

//PUBLIC
export default class MessageController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:messageId', this.getOne)
      .post('', this.create)
      .use(this.defaultRoute)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let messages = await _messageService.find({})
      return res.send(messages)
      console.log("Getting all Messages!")

    } catch (error) { next(error) }
  }


  async getOne(req, res, next) {
    try {
      let message = await _messageService.findById(req.params.id)
      //FIXME can do an if for a req for an unmade ID
      return res.send(message)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    //FIXME Data Undifned / Body ANy
    try {
      let data = await _messageService.create(req.body)
      console.log(req.body);
      console.log("Successfully Sent Message", data)
      return res.status(201).send(data)
    } catch (error) {
      next(error)

    }
  }
}


