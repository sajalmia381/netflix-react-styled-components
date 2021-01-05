import jumboData from '../fixtures/jambo';
import { Jumbotron } from '../components';

export default function Home() {
    return <>

            {
                jumboData.map(item => (
                        <Jumbotron.Item>
                    <Jumbotron key={item.id} direction={item.direction}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt} />
                        </Jumbotron.Pane>
                    </Jumbotron>
                    </Jumbotron.Item>
                ))
            }

    </>
}