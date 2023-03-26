const {findEntriesByEmail, findEntries, createNewEntry, updateEntryQuery} = require('../models/entriesModel')

const getEntry=async(req,res)=>{ //*Done
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

const getAllEntries=async(req,res)=>{ //*done
    let data;
    // let entry = req.query
    try {
        data = await findEntries();
        if(data){
            
            console.log(data);

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

const createEntries=async(req,res)=>{ //*done

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

const updateEntries=async(req,res)=>{ //*done
    const id = req.params.id;

    try {
        const updatedEntry = await updateEntryQuery(req.body, id)
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

const deleteEntries=async(req,res)=>{

}


module.exports={
    getEntry,
    getAllEntries,
    createEntries,
    deleteEntries,
    updateEntries
}