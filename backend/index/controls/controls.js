//librerary
const pool = require('../bd');

const petitions_get = async (req, res) => {

    try {
        const answer = await pool.query('SELECT * FROM city');
        console.log('req.body',answer);
        res.json(answer.rows);
    } catch (error) {
        console.log(error, 'error');
    }

}


module.exports = {
    petitions_get
}





