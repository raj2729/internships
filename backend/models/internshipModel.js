const mongoose = require("mongoose");

const InternshipSchema = mongoose.Schema(
    {
        EmployerId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
        },
        companyLogo: {
            type: String,
            // required: true,
            default:
                "https://media.istockphoto.com/vectors/businessman-avatar-icon-profession-logo-male-character-a-man-in-suit-vector-id1126791018?k=20&m=1126791018&s=170667a&w=0&h=qfHYWoeGkS5Xmg6RNzujdQOpbWarSACoXICDC7TlLvg=",
        },
        companyName: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
            default: "Work from Home"
        },
        startsAt: {
            type: Date,
            default: "Immediately"
        },
        duration: {
            type: Number,
            required: true
        },
        stipend: {
            type: Number,
            required: true,
            default: 5000,
        },
        lastDate: {
            type: Date
            // default: Date.now
        },
        aboutCompany: {
            type: String,
            required: true,
        },
        aboutInternship: {
            type: String,
            required: true,
        },
        skillsRequired: [
            {
                skill: {
                    type: String,
                    required: true,
                },
            },
        ],

        perks: [
            {
                perk: {
                    type: String,
                },
            },
        ],

    },
    {
        timestamps: true,
    }
);

const Internship = mongoose.model("Internship", InternshipSchema);

module.exports = Internship;