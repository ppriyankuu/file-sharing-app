import multer from 'multer';

// multer library 
const upload = multer({ dest: 'uploads' })

export default upload;
