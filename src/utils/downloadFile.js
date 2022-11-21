import fs from 'fs'
import path from 'path'
import stream from 'stream'
import { fileURLToPath } from 'url'
import util from 'util'

import externalApi from '../api/external-api.js'

const pipeline = util.promisify(stream.pipeline)

export const downloadFile = async (file) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const filesFolder = 'dwnldFiles'
  const filesFolderPath = path.join(__dirname, '../', filesFolder)

  try {
    const filePath = fs.createWriteStream(`${filesFolderPath}/${file}`)
    const { data: fileData } = await externalApi.get(
      `/file/${file}`
    )
    await pipeline(fileData, filePath)
  } catch (error) {
    const { code, message, details, status } = error.response.data
    console.error('Error on ' + file)
    console.error({ code, message, details, status })
  }
}
