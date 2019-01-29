
function AddressBook() {
    
    this.contacts = [];

    this.addContact = function(theContact) {
        this.contacts.push(theContact);
    };


    this.deleteContact = function(theContact) {
        console.log("Contacts before pop: " + this.contacts.length);
        this.contacts.pop(theContact);
        console.log("Contacts after pop: " + this.contacts.length);
    };

    this.getContact = function(index) {
        return this.contacts[index];
    };

    this.verifyContactPresent = function(theContact) {
        return this.contacts.includes(theContact)
    };


};




module.exports = new AddressBook();