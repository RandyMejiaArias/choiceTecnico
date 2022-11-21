import externalApi from '../api/external-api.js'
import { downloadFile } from '../utils/downloadFile.js'
import { readFile } from '../utils/readFile.js'

export const getFiles = async (req, res) => {
  const dataToResponse = []
  try {
    const { data } = await externalApi.get(
      '/files'
    )

    const { files } = data

    for (const file of files) {
      await downloadFile(file)
      const fileObj = await readFile(file)
      if (fileObj) { dataToResponse.push(fileObj) }
    }
    return res.status(200).json(dataToResponse)
  } catch (error) {
    console.error(error)
  }
}
