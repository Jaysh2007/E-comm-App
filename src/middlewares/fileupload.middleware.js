import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const dir = './Uploads/';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, './uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString()+file.originalname);
    },
});

export const  upload = multer({storage:storage});