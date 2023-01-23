import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    return (<Layout>
        <h1>Здесь вы можете посмотреть контакты по адресу или оставить свои данные.</h1>
        <Button.Group>
        <Button primary onClick={() => router.push("/show")}>Посмотреть</Button>
        <Button.Or text="||" />
        <Button positive onClick={() => router.push("/add")}>Создать</Button>
        </Button.Group>
    </Layout>)
}

export default Index;