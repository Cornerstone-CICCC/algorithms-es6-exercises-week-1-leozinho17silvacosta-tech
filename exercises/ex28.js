/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
    name: "Leonardo Costa",
    friends: 795,
    message: ["Hello, classmates!", "I'm tired today.", "I just want to sleep."],

    postMessage: function (message) {
        return this.message.push(message);
    },
    deleteMessage: function (index) {
        return this.message.splice(index, 1);
    },
    addFriend: function (count) {
        return this.friends += count;
    },
    removeFriend: function () {
        return this.friends -= 1;
    }
};
    facebookProfile.addFriend(5);
     console.log(facebookProfile)



    