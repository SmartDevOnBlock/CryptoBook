import contactFactory from "../contactFactory";
import Contact from "../Contact";

const getContactByAddress = async (address) => {
    const contactAddress = await contactFactory.ownerToContact(address);
    if(contactAddress === "0x0000000000000000000000000000000000000000") {
        throw new Error("Пользователя с таким адресом не обнаружено!");
    }
    console.log("contactAddress", contactAddress);
    const contact = Contact(contactAddress);
    const telegram = await contact.telegram();
    console.log("TelegramAddress: ", telegram);
    const discord = await contact.discord();
    console.log("DiscordAddress: ", discord);
    const description = await contact.description();
    console.log("Description: ", description);
    return {telegram, discord, description};
};

export default getContactByAddress;