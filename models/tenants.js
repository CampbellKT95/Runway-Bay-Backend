import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tenantSchema = new Schema ({

    name: {
        type: [String],
        required: false
    },

    company: {
        type: String,
        required: true
    },

    contact: 
        {phone: 
            {business: {
                type: String,
                required: false
            },
            cell: {
                type: String,
                required: false
            }},

        email: {
            type: String,
            required: false
        }},

    location: 
        {address_1: {
            type: String,
            required: false
        },
        address_2: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        zip: {
            type: Number,
            required: false
        },
        property: 
            {building: {
                type: [String],
                required: true
            }, 
            unit: {
                type: [String],
                required: true
            }}},

    comments: {
        type: String,
        required: false
    },

    lease_details: 
        {start_date: {
            type: String,
            required: true
        },
        end_date: {
            type: String,
            required: true
        },
        lease_length: {
            type: Number,
            required: true
        },
        signing: 
            {signing_date: {
                type: String,
                required: false
            },
            signing_payment: {
                type: Number,
                required: false
            }},
        due_day: {
            type: Number,
            required: true
        }, 
        monthly_amt: {
            type: Number,
            required: true
        },
        sales_tax: {
            type: Number,
            required: true
        },
        subtotal: {
            type: Number,
            required: false
        },
        total_paid: {
            type: Number,
            required: false
        },
        security: 
            {security_received: {
                type: Boolean,
                required: false
            },
            security_amt: {
                type: Number,
                required: false
            },
            security_date_received: {
                type: String,
                required: false
            }},
        last_month_security: {
            type: Boolean,
            required: false
        },
        certificate_liability: {
            type: Boolean,
            required: false
        }},
    leaseFile: {
        type: String,
        required: false
    }
    
});

const Tenant = mongoose.model("Tenant", tenantSchema);

export default Tenant;