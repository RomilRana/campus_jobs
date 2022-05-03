const { createcontact, findallcontact, findonecontact, deleteone } = require('../service/contactService');

const addContact = async (req,res) => {
    try {
        const {address,locality,landmark,phone_number,state,city,zipcode,country,status} = req.body;
        const user_id = req.user.id;
        const info = {
            address,
            locality,landmark,
            phone_number,
            state,
            city,
            zipcode,
            country,
            status,
            user_id,
        }
        const contact = await createcontact(info);
        res.status(201).json({ message: "contact inserted sucessfully" });
    } catch (error) {
        return res.status(500).json(error);
    }
}

const findAllContact = async (req, res) => {
    let {limit,page, skip, size} = req.pagination;
    const contacts = await findallcontact(limit, skip);
    size = contacts.length;
    res.status(200).json({
        page,
        size,
        data:contacts,
    });
}

const findOneContact = async (req, res) => {
    let uid = req.user.id;
    console.log(uid);
    const contact = await findonecontact(uid);
    res.status(200).json(contact);
}

const deleteOneContact = async (req, res) => {
    let id = req.user.id;
    const contact = await deleteone(id);
    res.status(200).json({ message: "contact delted..." })
}

module.exports = {
    addContact,
    findAllContact,
    findOneContact,
    deleteOneContact,
}