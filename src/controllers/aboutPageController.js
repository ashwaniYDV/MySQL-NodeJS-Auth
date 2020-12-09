let getPageAbout = async (req, res) => {
    return res.render("about.ejs",{
        user: req.user
    });
};

module.exports = {
    getPageAbout,
};
