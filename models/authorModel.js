//SENTENCIAS SQL //
const { Pool } = require('pg')
const queries = require('../models/queriesModel');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: "admin"
})
 const getAuthorByEmail =async (req,res) => {
    let client,result;

    try {
        client = await pool.connect();
        const data = await client.query.authorByEmailQuery[email]; // EL QUERY ES EL QUE SE ENCARGA DE LAS CONSULTAS

        return result = data.rows

    } catch (error) {
        console.log(error)
        throw error

    } finally { //El FINALLY se utiliza para que entre por el TRY, o por el CATCH, el finally se ejecuta//
        client.release();
    }
    return result
 }

 const findAuthors=async (req,res) => {

    let result, client, data;
    try {
        client = await pool.connect();
        data = await client.query(queries.allAuthorsQuery);

        result=data;

    } catch (error) {
        console.log('FAILED getting All Authors')
    }
    finally {
        client.release();
    }
    return result;
 }

 const createNewAuthor = async (body) => {
        let client, result, data;

        try {
            const {name,surname,email,image} = body;
            client = await pool.connect();
            data = await client.query(queries.createAuthorQuery, [name,surname,email,image]);

            result = data;

        } catch (error) {
            console.log('FAILED creating new author');
        }
        finally {
            client.release();
        }
        return result;
 }

 module.exports={
    getAuthorByEmail,
    findAuthors,
    createNewAuthor
 }