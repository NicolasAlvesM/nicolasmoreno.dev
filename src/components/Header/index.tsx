import { Container, Content } from './styles';
import { ThemeSwitch } from '../../components';

export function Header() {
    return (
        <Container>
            <Content>
                <h2>{'<Nicolas Moreno/>'}</h2>
                <ThemeSwitch />
            </Content>
        </Container>
    );
}
