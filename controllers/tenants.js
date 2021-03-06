import Tenant from "../models/tenants.js";
import mongoose from "mongoose";
import {singleEmail} from "../mailer.js";

export const getTenants = async (req, res) => {
    try {
        const tenants = await Tenant.find();

        res.status(200).json(tenants);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createTenant = (req, res) => {

    const newTenantData = req.body;

    const newTenant = new Tenant(newTenantData);

    try {
         newTenant.save();

        res.status(201).json(newTenant);

    } catch (error) {

        res.status(409).json({message: error.message});

    }
}

export const updateTenant = async (req, res) => {
    const {id : _id} = req.params;
    const tenant = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No tenant with that id")
    } else {

        const updatedTenant = await Tenant.findByIdAndUpdate(_id, tenant, {new: true});

        res.json(updatedTenant);
    }
}

export const deleteTenant = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No tenant with that id")

    } else {

        await Tenant.findByIdAndRemove(id);

        return res.json({message: "Tenant deleted successfully"});

    }
}

export const emailTenant = async (req, res) => {
    try {
        const {email, message} = req.body

        singleEmail({email, message})
        console.log("email sent")
 
    } catch (error) {
        console.log(error)
    }
}

// export const scheduleReminder = async (req, res) => {
//     console.log(req.body);

// }


