import csvToJson from 'csvtojson'
import path from 'path'
import { fileURLToPath } from 'url'

export const readFile = async (file) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const filesFolder = 'dwnldFiles'
  const filesFolderPath = path.join(__dirname, '../', filesFolder)

  const filePath = path.join(filesFolderPath, file)

  const lines = []
  let fileName = ''

  const rows = await csvToJson({
    trim: true
  }).fromFile(filePath)

  for (const { file, text, number, hex } of rows) {
    if (file && text && number && hex) {
      fileName = file
      lines.push({ text, number, hex })
    }
  }

  if (lines.length > 0) {
    return ({
      file: fileName,
      lines
    })
  }
}
