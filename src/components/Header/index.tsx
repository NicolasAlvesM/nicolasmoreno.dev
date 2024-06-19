import { lazy } from 'react';
import { Container, Content } from './styles';
const ThemeSwitch = lazy(() => import('../../components/ThemeSwitch'));

export default function Header() {
    return (
        <Container>
            <Content>
                <h2>{'<Nicolas Moreno/>'}</h2>
                <ThemeSwitch />
            </Content>
        </Container>
    );
}
