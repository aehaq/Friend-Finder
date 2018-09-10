var path = require("path");

module.exports = function(app) {
    
    //display the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
    
    // default catch-all route leading to home.html
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })
};
