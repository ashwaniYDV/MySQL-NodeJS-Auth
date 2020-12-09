let handleHelloWorld = async (req, res) => {
    return res.render("home.ejs",{
        user: req.user
    });
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};
