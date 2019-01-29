
function AddressBook() {

    this.contacts = [];

    this.addContact = (theContact) => {
        this.contacts.push(theContact);
    
    };


    this.deleteContact = (theContact) => {
        this.contacts.pop(theContact);
    };

    this.getContact = (index) => {
        return this.contacts[index];
    };

    this.verifyContactPresent = (theContact) => {
        return this.contacts.includes(theContact)
    };


};





module.exports = new AddressBook();