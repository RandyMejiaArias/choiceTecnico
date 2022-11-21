import { Router } from 'express'

import * as filesCtrl from '../controllers/files.controller.js'

const router = Router()

router.get(
  '/data',
  filesCtrl.getFiles
)

export default router
