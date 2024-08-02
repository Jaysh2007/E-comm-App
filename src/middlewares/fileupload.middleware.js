import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        
        cb(null, './src/uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g,'_')+file.originalname);
    },
});

export const  upload = multer({storage:storage});