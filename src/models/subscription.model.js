import mongoose, {Schema} from "mongoose";


const subscriptionSchema = new Schema({
    subscriber :{
        type: Schema.Types.ObjectId, //user id subscribing
        ref: "User",
    },
    channel :{
        type: Schema.Types.ObjectId, //user id of the channel
        ref: "User",
    },
    },{
        timestamps: true,
    })



export const Subscription = mongoose.model("Subscription", subscriptionSchema);