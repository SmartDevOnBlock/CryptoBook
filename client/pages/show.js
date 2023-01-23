import { Form, Button, Message } from "semantic-ui-react";
import Layout from "../components/Layout";
import { useRef, useState } from "react";
import getContactByAddress from "../utils/getContactByAddress";


const ShowContact = () => {
    const [telegram, setTelegram] = useState();
    const [discord, setDiscord] = useState();
    const [description, setDescription] = useState();
    const [isLoading, setLoading]= useState(false);
    
    const [errorMsg,setErrorMsg]= useState("");

    const addressRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const address = addressRef.current.value;
        setErrorMsg("");
        setTelegram("");
        setDescription("");
        setDiscord("");
        setLoading(true);
        if(!address) {
          setErrorMsg("Адрес пользователя не обнаружен, введи его!")
          return;
        }
        try{
          const contact = await getContactByAddress(address);
          setTelegram(contact.telegram);
          setDiscord(contact.discord);
          setDescription(contact.description);
        }catch(error){
          console.error(error);
          setErrorMsg(error.message);
        }finally {
          setLoading(false);
        }

    };

    return ( <Layout>
        <Form error={!!errorMsg} onSubmit={handleSubmit}>
        <Form.Field>
          <label>Введите адрес здесь</label>
          <input ref={addressRef} placeholder='ваш адрес' />
        </Form.Field>
        <Button loading={isLoading} primary type='submit'>Посмотреть</Button>
        <Message
    error
    header='Произошла ошибка'
    content={errorMsg}
  />
      </Form>
      {telegram && <h2>Telegram: {telegram}</h2>}
      {discord && <h2>Discord: {discord}</h2>}
      {description && <h2>Description: {description}</h2>}
      </Layout>);
};

export default ShowContact;