import multer from "multer";

const imgStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb('./public/img'); //destino
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);//nombre del archivo original
    }
});
export const imgUploader = multer({Storage: imgStorage});