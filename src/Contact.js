function Contact() {

    this.createContact = async (name, address) => {
        
        this.name = name;
        this.address = address;

    }

}

module.exports = new Contact();