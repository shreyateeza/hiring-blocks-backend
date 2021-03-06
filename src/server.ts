/**
 * Created by bhavyaagg on 02/09/2018.
 */

import api = require('./api')

const swaggerUi = require('swagger-ui-express')
const graphiql = require('express-graphiql-toolbox')

import config = require('../config')

api.server.use('/docs', swaggerUi.serve,
  swaggerUi.setup(null, true, null, null, null,
    '/api/swagger.json', 'Hiring Blocks API Docs'
  )
)

api.server.use('/graphiql', graphiql({endpoint: '/api/'}))

api.start(() => {
  console.log(`Server Running at ${config.SERVER.PORT}`)
})
