import { lazy } from 'react';
import { Content } from './styles';
const Header = lazy(() => import('../../components/Header'));
const Presentation = lazy(() => import('../../containers/Presentation'));
const Qualifications = lazy(() => import('../../containers/Qualifications'));
const Skills = lazy(() => import('../../containers/Skills'));

export default function Home() {
    return (
        <>
            <Header />
            <Content>
                <Presentation />
                <Skills />
                <Qualifications />
            </Content>
        </>
    );
}
