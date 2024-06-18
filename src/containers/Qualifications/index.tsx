import { ContainerTitle } from '../../components';
import { Container, Head, QualificationItem, QualificationWrapper, Wrapper } from './styles';

import { BiBriefcase, BiBookBookmark, BiCalendarAlt } from 'react-icons/bi';

export function Qualifications() {
    return (
        <Container>
            <ContainerTitle>Qualificações</ContainerTitle>
            <Wrapper>
                <Head>
                    <BiBriefcase size={24} />
                    <h3>Experiências</h3>
                </Head>
                <QualificationItem>
                    <strong>Fullstack Developer</strong>
                    <QualificationWrapper>
                        <span>Vcodes</span>
                        <span>
                            <BiCalendarAlt />
                            Jan 2024 - Atual
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
                <QualificationItem>
                    <strong>Desenvolvedor Fullstack Pleno</strong>
                    <QualificationWrapper>
                        <span>Planetfone</span>
                        <span>
                            <BiCalendarAlt />
                            Mar 2023 - Ago 2023
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
                <QualificationItem>
                    <strong>Desenvolvedor Fullstack</strong>
                    <QualificationWrapper>
                        <span>Planetfone</span>
                        <span>
                            <BiCalendarAlt />
                            Set 2022 - Fev 2023
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
                <QualificationItem>
                    <strong>Desenvolvedor Fullstack</strong>
                    <QualificationWrapper>
                        <span>Chammas Engenharia</span>
                        <span>
                            <BiCalendarAlt />
                            Dez de 2020 - Dez de 2021
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
            </Wrapper>
            <Wrapper>
                <Head>
                    <BiBookBookmark size={24} />
                    <h3>Educação</h3>
                </Head>
                <QualificationItem>
                    <strong>Bacharelado em Sistemas de Informação</strong>
                    <QualificationWrapper>
                        <span>Centro Universitário Una (Una&nbsp;Contagem)</span>
                        <span>
                            <BiCalendarAlt />
                            Ago 2019 - 
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
                <QualificationItem>
                    <strong>Técnico em Automação Industrial</strong>
                    <QualificationWrapper>
                        <span>
                            Instituo Federal de Educação, Ciência e Tecnologia de Minas Gerais
                            (IFMG)
                        </span>
                        <span>
                            <BiCalendarAlt />
                            Fev 2015 - Dez 2018
                        </span>
                    </QualificationWrapper>
                </QualificationItem>
            </Wrapper>
        </Container>
    );
}
