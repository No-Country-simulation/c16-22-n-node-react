const express = require("express");
const router = express.Router();
const streamifier = require('streamifier');


router.post('/', async (req, res) => {
    try {
        const file = req.files.file;

        console.log('-------------file.buffer--------------------');
        console.log(file.data);

        const stream = await cloudinary.uploader.upload_stream(
            {
                folder: 'serviya',
            },
            (error, result) => {
                if (error) return console.error(error);
                res.status(200).json(result);
            }
        );

        streamifier.createReadStream(file.data).pipe(stream);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al subir el archivo" });
    }
});

module.exports = router;
