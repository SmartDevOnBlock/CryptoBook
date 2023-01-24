import { useState } from "react";
import { Form, Message } from "semantic-ui-react";
import Layout from "../components/Layout";
import contactFactory from "../contactFactory";
import provider from "../provider";

const AddContact = () => {
    const [telegram, setTelegram] = useState("");
    const [discord, setDiscord] = useState("");
    const [errorMsg,setErrorMsg]= useState("");
    const [description, setDescription]= useState("");
    const [successMsg,setSuccessMsg]= useState("");
    

    const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if(!telegram) {
        setErrorMsg("ТГ не введено")
    }

    // await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const contactFactoryWithSigner = contactFactory.connect(signer);
    console.log("func", contactFactoryWithSigner.functions)
    try{
        let response;
        // if(discord && description){
        //     response = await contactFactoryWithSigner["createContact(string,string,string)"](telegram,discord,description);
        // }else 
        if(discord){
            response = await contactFactoryWithSigner["createContact(string,string)"](telegram,discord);
            console.log("createContact(string,string)");
        }else{
            response = await contactFactoryWithSigner["createContact(string)"](telegram);
            console.log("createContact(string)");
        }
        console.log("response: ",response);
        setSuccessMsg("Хэш транзакции: " + response.hash);

    }catch(error){
        console.error(error);
        setErrorMsg(error.message);
    };
    }

    return ( <Layout>
        <Form error={!!errorMsg} success={!!successMsg} onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Telegram:' value={telegram} onChange={(event) => setTelegram(event.target.value)} placeholder='@telegram_name' />
          <Form.Input fluid label='Discord:' value={discord} onChange={(event) => setDiscord(event.target.value)} placeholder='@discord_name' />
        </Form.Group>
        {/* <Form.TextArea label='Description' value={description} onChange={(event) => setDescription(event.target.value)} placeholder='Tell us more about you...' />  */}
        <Form.Button primary>Сохранить</Form.Button>
        <Message style={{wordBreak: "break-word"}} error header='Произошла ошибка' content={errorMsg}/>
        <Message success header='Контакт успешно создан' content={successMsg}/>
      </Form>
    </Layout>);
}

export default AddContact;