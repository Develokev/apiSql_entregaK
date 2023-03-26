const {getAuthorByEmail, findAuthors, createNewAuthor} = require('../models/authorModel')

const getAuthor=async(req,res)=>{

    let data;
    let email = req.query.email;
    try {
        if(email){
            data=await getAuthorByEmail(email)
        } else{
            data
        }

        res.status(200).json({
            ok:true,
            data
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'FAILED to get AUTHOR'
        })
    }
}

const getAllAuthors=async(req,res)=>{
    let data;

    try {
        data = await findAuthors();
        if(data){

            console.log(data);

            res.status(200).json({
                ok:true,
                msg: 'Getting ALL AUTHORS correctly',
                data: data.rows
            })
        }
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'FAILED getting all authors'
        })
}
}

const createAuthor=async(req,res)=>{
    try {
        const newAuthor = await createNewAuthor(req.body);
        if(newAuthor){
            return res.status(201).json({
                ok:true,
                msg: 'Positive CREATING Author'
            })
        } else {
            return res.status(400).json({
                ok:false,
                msg: 'FAILED creating new author'
            })
        }
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'FAILED to create - SERVER'
        })
    }
}

const updateAuthor=async(req,res)=>{
    
}

const deleteAuthor=async(req,res)=>{
    
}

module.exports={
    getAuthor,
    getAllAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}