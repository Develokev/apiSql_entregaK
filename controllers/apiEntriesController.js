const {findEntriesByEmail, findEntries, createNewEntry, updateEntry, deleteEntry} = require('../models/entriesModel')

const getEntry=async(req,res)=>{ //*tested
    let data;
    let email = req.query.email;
    try {
        if(email){
            data=await findEntriesByEmail(email)
        } else {
            data
        }

        res.status(200).json({
            ok:true,
            data
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'FAILED TO GET ENTRIES'
        })
}
}

const getAllEntries=async(req,res)=>{ //*tested
    let data;
    try {
        data = await findEntries();
        if(data){

            res.status(200).json({
                ok:true,
                msg: 'Getting ALL Entries correctly',
                data: data.rows
            })
        }
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'FAILED getting all entries'
        })
}
}

const createEntries=async(req,res)=>{ //*tested

    try {
        const newEntry = await createNewEntry(req.body);
        if(newEntry){
        return res.status(201).json({
            ok:true,
            msg: 'Positive creating.'
        })
    } else {
        return res.status(400).json({
            ok:false,
            msg: 'FAILED to create new entry'
        })
    }
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'FAILED to create - SERVER'
        })
    }
}

const updateEntries=async(req,res)=>{ //*tested
    const id = req.params.id;

    try {
        const updatedEntry = await updateEntry(req.body, id)
        if(updatedEntry){
            return res.status(200).json({
                ok:true,
                msg: 'Entry successfully updated'
            })
        } else {
            res.status(400).json({
                ok:false,
                msg: 'FAILED to update entry'
            })
        }
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'FAILED to update entry - SERVER'
        })
    }
    return updatedEntry;
}

const deleteEntries=async(req,res)=>{ //*tested

        const title = req.params.title;
    try {
        const deletedEntry = await deleteEntry(title)
        if(deletedEntry){
            return res.status(200).json({
                ok:true,
                msg: 'Entry successfully deleted'
            })
        } else {
            res.status(400).json({
                ok:false,
                msg: 'FAILED deleting entry'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'FAILED deleting entry - SERVER'
        })
    }
}

module.exports={
    getEntry,
    getAllEntries,
    createEntries,
    deleteEntries,
    updateEntries
}