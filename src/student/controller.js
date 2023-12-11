const pool = require('../../db.js')
const queries = require('./queries.js')

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (err, results) => {
        if (err) throw err;

        res.status(200).json(results.rows)
    })
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentById, [id], (err, results) => {
        if (err) throw err;

        res.status(200).json(results.rows)
    })
}

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body

    //check if email exists
    pool.query(queries.emailExists, [email], (err, results) => {
        if (results.rows.length) {
            res.send('email already exists')
        }

        //add student
        pool.query(queries.addStudent, [name, email, age, dob], (err, results) => {
            if (err) throw err;
            res.status(201).send('student added')
        })
    })
}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentById, [id], (err, results) => {

        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send('student not found')
        }

       //delete student
       pool.query(queries.deleteStudent, [id], (err, results) => {
        if (err) throw err;
        res.status(200).send('student deleted')
    })
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent
}