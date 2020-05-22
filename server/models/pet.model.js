const mongoose =  require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet Name is required."],
        minlenght: [3, "Title must be at least 2 characters long."]
    },

    type: {
        type: String,
        required: [true, "Pet Type is required."],
        minlenght: [3, "Price must be at least 3 characters long."]
    },

    description:{
        type: String, 
        required: [true, "Pet Description is required."],
        minlength: [3, "Description must be at least 3 characters long."]
    },

    skillOne:{
        type: String, 
    },

    skillTwo:{
        type: String, 
    },
    
    skillThree:{
        type: String, 
    }
})

const Pet =  mongoose.model("Pet", PetSchema);

module.exports =  Pet;