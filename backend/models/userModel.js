const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isEmployer: {
            type: Boolean,
            required: true,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        resume: {
            type: String,
            default: "https://upload.wikimedia.org/wikipedia/commons/9/90/Resume_logo.jpeg"
        },
        profilePicture: {
            type: String,
            // required: true,
            default:
                "https://res.cloudinary.com/dizvyn9b5/image/upload/v1632241265/sjddbfkcij5tz8vokcmo.jpg",
        },
        github: {
            type: String,
            // required: true,
        },
        linkedin: {
            type: String,
            // required: true,
        },
        mobile: {
            type: Number,
            // required: true,
        },
        certificateOfIncorporation: {
            type: String
        },
        pancard: {
            type: String,

        },
        gst: {
            type: String,

        },
        description: {
            type: String,
            required: true,
            default: "Description",
        },
        location: {
            type: String,
            required: true,
            default: "Description",
        },
        education: {
            type: String,
            required: true,
            default: "Bachelor of Technology",
        },
        website: {
            type: String
        },
        projects: [{
            projectName: {
                type: String,
                default: "E-learning Website"
            },
            projectLink: {
                type: String,
                default: "https://github.com/vidhishpanchal/Full-Stack-Simplified"
            },
        }],

        skills: [
            {
                skillName: {
                    type: String,
                    default: "ReactJS"
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function (enterredPassword) {
    return await bcrypt.compare(enterredPassword, this.password);
};

// Middleware for hashing password
// pre => before saving the user in the database
userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;