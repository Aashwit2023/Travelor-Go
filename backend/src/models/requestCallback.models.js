import mongoose from 'mongoose';

const requestCallback = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: false
    },
    phone: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    experience: {
        type: String, 
        enum: ["First Trek", "1-2 Treks", "3+ Treks"]
    },

    concerns: {
        type: [String],
        enum: ["Fitness", "Gear", "Altitude"],
        default: []
    },
    month: {
        type: Date,
        required: true
    },
    region: {
        type: String,
        enum: [
            "Himachal Pradesh",
            "Uttarakhand",
            "Jammu & Kashmir",
            "Eastern India",
            "Southern India",
            "Central India",
            "International treks"
        ],
        required: true
    },
    specialProgram: {
        type: String,
        enum: [
        "Corporate Trek",
        "School Trek",
        "Custom Expedition",
        "Family Trek with Children",
        "Seniors Trek"
        ]
    },
    treks: {
        type: String,
        enum: ["Hampta Pass", "Valley of Flowers", "Sandakphu Trek", "Kedarkantha Trek"],
        required: true
    },
    call: {
        type: String,
        enum: ["Yes", "No"],
        required: true
    },
    slots: {
        type: String,
        required: true
    }
}, {timestamps: true});

const requestCallbackModel = mongoose.model("requestCallback", requestCallback);
export default requestCallbackModel;