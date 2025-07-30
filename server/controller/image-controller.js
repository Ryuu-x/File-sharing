import File from "../models/file.js";

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }
    
    try {
        const file = await File.create(fileObj);
        console.log(file);
        response.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
    } catch (e) {
        console.error(e.message);
        response.status(500).json({ error: error.message });
    }
}

export const downloadImage = async(request, response) => {
    try {
        const file = await File.findById(request.params.fileID);

        file.downloadContent++;

        await file.save();

        response.download(file.path, file.name);
    } catch (e) {
        console.error(e.message);
        response.status(500).json({ error: e.message });
    }
}

// export const downloadImage = async (request, response) => {
//     try {
//         const file = await File.findById(request.params.fileID); 

//         if (!file) {
//             return response.status(404).json({ error: "File not found" });
//         }

//         file.downloadContent++;  
//         await file.save();      

//         response.download(file.path, file.name);  
//     } catch (e) {
//         console.error(e.message);
//         response.status(500).json({ error: e.message });  
//     }
// };
