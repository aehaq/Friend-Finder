var friends = require("../data/friends")

function findMatch(profile, array) {
    // Set array for the compatability with each existing user, in order.
    var compatArray = [];
    // Go through each existing user (one less than array's new length)
    for (let i = 0; i < array.length - 1; i++) {
        var compScores = array[i].scores;
        var compIndex = 0;
        // for each question, calculate the difference in score
        for (let j = 0; j < compScores.length; j++) {
            var diff = Math.abs(profile.scores[j] - compScores[j])
            compIndex += diff;
        }
        // Pushes a single number representing the difference for each user.
        compatArray.push(compIndex)
    }
    // compatArray now has a single number for each possible match

    // By Default we will set the first option in our Friends object as a match,
    var matchNum = 0;
    var matchCompat = compatArray[0];
    var additionalMatches = [];
    // Look at each individual number in the array
    for (let i = 1; i < compatArray.length; i++) {
        var compIndex = compatArray[i];
        // If the compatability number you are looking at is the lowest so far, 
        if (compIndex < matchCompat) {
            // keep track of index number and compatibility score
            matchNum = i;
            matchCompat = compIndex;
            additionalMatches = [];
        } else if (compIndex === matchCompat) {
            additionalMatches.push(i)
        }
    }

    // Returns the object of the chosen friend.
    return array[matchNum]
    // Determine if we want to do something with the array of additional matches we sent.
}

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        // display json of all friends added to the database
        res.json(friends)
    });
    
    app.post("/api/friends", function(req, res) {
        // handle incoming survey results
        friends.push(req.body)
        
        // handle compatibility logic.
        findMatch(user, friends)
    })

}
