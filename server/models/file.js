import mongoose from "mongoose";

// database_model
const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
})

const File = mongoose.model('file', FileSchema);

export default File;
