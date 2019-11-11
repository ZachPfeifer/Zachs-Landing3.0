import MessageService from '../services/MessageService'
import express from 'express'



let _messageService = new MessageService().repository

//PUBLIC
export default class BoardsController {
  constructor() {
    this.router = express.Router()

      .use(this.defaultRoute)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }


}


