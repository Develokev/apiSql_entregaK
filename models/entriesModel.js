const { Pool } = require('pg');
const queries = require('../models/queriesModel');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: "admin"
})

const findEntriesByEmail =async (req,res) => { /*done*/
    let client,result;

    try {
        client = await pool.connect();   // EL QUERY ES EL QUE SE ENCARGA DE LAS CONSULTAS
        const data = await client.query(queries.entryModelByEmail[email]);

        return result = data.rows

    } catch (error) {
        console.log(error);
        throw error

    } finally { //El FINALLY se utiliza para que entre por el TRY, o por el CATCH, el finally se ejecuta//
        client.release();
    }
    return result
 }

const findEntries =async (req,res) =>{ /*done*/

    let result, client, data;
    try {
        client = await pool.connect();
        data = await client.query(queries.allEntries);

        result = data;
        
    } catch (error) {
        console.log('FAILED getting ALL Entries')
    }
    finally {
        client.release();
    }
    return result;
}

const createNewEntry = async (body) => {
    let client, result;
    
    
    // console.log(title,content,date,id_author,category)
    
    try {
        const {title,content,date,id_author,category} = body;
        client = await pool.connect();
        const data = await client.query(queries.createEntry, [title,content,date,id_author,category]);

        result = data;

    } catch (error) {
        console.log(error)
    }
    finally{
        client.release();
    }
    return result;
}

const updateEntry = async (body, id) => {
    let client, result;
    try {
        const {title,content,date,id_author,category} = body;
        const data = await client.query(queries.updateEntryQuery, [title,content,date,id_author,category,id]);
        result = data;
    } catch (error) {
        console.log(error)
    }
    finally {
        client.release()
    }
    return result;
}

const deleteEntry = async (title) => {
    let client, result, data;
    try {
        
        // const {title} = body;
        client = await pool.connect();
        data = await client.query(queries.deleteEntryQuery, [title]);
        result = data;

    } catch (error) {
        
        console.log(error)

    }
    finally {
        client.release()
    }
    return result;
}

 module.exports={
    findEntriesByEmail,
    findEntries,
    createNewEntry,
    updateEntry,
    deleteEntry
 }