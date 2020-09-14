import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

// Faz configuracoes para UPLOAD de imagens
const tempFolderAvatar = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directoryAvatars: tempFolderAvatar,

  // Armazena dentro do proprio disco, ms o ideal eh usar servicos de upload de imagens
  storage: multer.diskStorage({
    destination: tempFolderAvatar,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
