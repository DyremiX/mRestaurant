module.exports.mainIndex = (req, res, next) => {
    res.json()
    res.render('indexes/index', { title: 'Hej michał' });
}