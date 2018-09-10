var path = require("path");

module.exports = function(app) {
    
    // default catch-all route leading to home.html
    app.get("*", function(data) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })

    //display the survey page
    app.get("/survey", function(data) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
};