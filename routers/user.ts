import { Router } from 'express';

export default function users(){
  const router = Router();

  router
    .get('/', (req, res, next) => {
      res.json({
        id: 1,
        firstname: 'Cristina-Elena',
        lastname: 'Caia-Hoanas'
      });
    })

    return router;
}