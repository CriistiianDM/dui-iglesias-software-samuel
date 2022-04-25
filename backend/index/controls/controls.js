

const petitions_get = (req, res) => {

    try {
        console.log('req.body');
        res.json({id:54});
    } catch (error) {
        console.log(error, 'error');
    }

}


module.exports = {
    petitions_get
}





