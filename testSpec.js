
/**
 * Address book tests
 * 
 */

 describe("Address book", () => {

    var addressBook;
    var thisContact;

    beforeEach(() => {
        addressBook = require('./src/AddressBook.js');
        thisContact = require('./src/Contact.js');
    });

    it("should be able to add the first contact", async () => {
        thisContact.createContact("contact 1", "123 st");
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });


    it("should be able to delete a contact", async () => {

        thisContact.createContact("contact 2", "456 st");
        addressBook.addContact(thisContact);
        addressBook.deleteContact(thisContact);
        expect(addressBook.verifyContactPresent(thisContact)).toBe(false);

    });

    afterEach(() => {
        addressBook = null;
        thisContact = null;
    });

 });