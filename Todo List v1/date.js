// module.exports.getDate = getDate;  // export the getdate function
// module.exports.getDay = getDay;  // export the getday function



exports.getDate = function (){
const today = new Date();
const options = {weekday: "long",day: "numeric",month: "long"};
return today.toLocaleDateString("en-US", options)
}

exports.getDay = function (){
const today = new Date();
const options = {weekday: "long"};
return today.toLocaleDateString("en-US", options)
}
