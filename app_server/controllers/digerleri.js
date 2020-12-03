const hakkinda = function (req, res, next) {
    res.render('hakkinda', {
        title: 'Hakkında',
        'footer': ' Yavuz AKILLI 2020',
    });
}


module.exports = {
    hakkinda
}
