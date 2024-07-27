

// Git class representing a repository
function Git(name) {
    this.name = name; // Repo name

}

// Actual git command: git init
// instantiating the git class
var repo = new Git("my-repo");

// id to reference the snapshot of the commit
function Commit(id) {
    // Assume 'this' has a 'change' property
    this.id = id;
    // Message to describe the commit
    this.message = message;
}

// Adding ability to commit
Git.prototype.commit = function (message) {
    // Create a new commit
    var commit = new Commit();
    // Return the commit
    return commit;
};