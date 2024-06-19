import { lazy } from 'react';
const ContainerTitle = lazy(() => import('../../components/ContainerTitle'));
import { Container } from './styles';

export function Recommendations() {
    return (
        <Container>
            <ContainerTitle>Recomendações</ContainerTitle>
        </Container>
    );
}
