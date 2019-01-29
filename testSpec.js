
/**
 * Address book tests
 * 
 */

 describe("Address book contacts tests", () => {

    var addressBook;
    var thisContact;

    beforeEach(() => {
        addressBook = require('./src/AddressBook.js');
        thisContact = require('./src/Contact.js');
    });

    it("should be able to add the first contact", () => {

        await addressBook.addContact(thisContact);
        await expect(addressBook.getContact(0)).toBe(thisContact);
    });


    it("should be able to delete a contact", () =>{

        await addressBook.addContact(thisContact);
        await addressBook.deleteContact(thisContact);
        await expect(addressBook.verifyContactPresent(thisContact)).toBe(false);

    });

 });