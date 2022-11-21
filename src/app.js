import express, { json } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Importing Routes
import filesRoutes from './routes/files.routes.js'

// Initialization
const app = express()

// Settings
app.set('port', 4002)

// Middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(json())
app.use(express.urlencoded({ extended: false }))

// Archivo de Logs del servidor
morgan.token('request', (req) => JSON.stringify({
  body: req.body,
  params: req.params,
  files: req.files
}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan(':remote-addr - :remote-user [:date[clf]] :method :url :status :response-time ms - :res[content-length] -- :request', { stream: accessLogStream }))

// Welcome Route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my API'
  })
})

// Routes
app.use('/api/files', filesRoutes)

export { app }
