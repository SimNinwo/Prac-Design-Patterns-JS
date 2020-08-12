var repo = require('./Repo');

var taskHandler = function() {
    return {
        save: function() {
            repo.save('"HI" from taskHandler');
        }
    }
}

module.exports = taskHandler();