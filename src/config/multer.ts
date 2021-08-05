import multer from 'multer'
import crypto from 'crypto'
import path from 'path'

const storage = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'public', 'musics'))
    },
    filename: (req, file, cb) => {
      cb(null, crypto.randomBytes(8).toString('hex') + '-' + file.originalname)
    }
  })
}

const uploads = multer({
  dest: path.resolve(__dirname, '..', '..', 'public', 'musics'),
  storage: storage.local,
  limits: {
    fileSize: 2 * 4086 * 4086
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'audio/mp3',
      'audio/mp4'
    ]
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type.'))
    }
  }
})

export default uploads
