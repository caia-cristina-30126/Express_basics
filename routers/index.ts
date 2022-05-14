import express, { Application, Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import { resolve } from 'path';
import api from './api';


export default function configure(app: Application ){
  app
    .get('/', (req, res, next) => { // app.use: it s gonna get called on any type of request
       res.sendFile(resolve(__dirname, '../index.html'));
     })
    .use(express.static('public')) // it s gonna be looking for a file in the public folder. If it s not gonna find it => call next
    // make a req through the router
    .use(json()) // go through every single request after checks for all static files and before gets the api
    .use('/api', api())
    .use('/error',(req, res, next) => {
      next(new Error('Other error'))
    })
    .use((req, res, next) => {
        next(new Error('Not found!'));
     })
    .use((error: Error, req: Request, res: Response, next: NextFunction) => {
      switch(error.message){
        case 'Not Found' :
          res.sendFile(resolve(__dirname, '../notFound.html'));
          return;
      }
      res.sendFile(resolve(__dirname, '../error.html'));//parse the error from error.html
    })
}