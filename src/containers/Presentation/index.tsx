import {
    AvatarWrapper,
    ButtonsWrapper,
    Container,
    PersonalInfo,
    Role,
    Socials,
    StyledDownloadIcon,
    Title,
    Welcome,
    Wrapper,
} from './styles';
import { Avatar, Button, DownloadButton } from '../../components';

import moment from 'moment';

import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";

import img from '../../assets/img/profile-pic.jpg';

import cv from '../../assets/pdf/Nicolas_Moreno_A._Medeiros.pdf';
import { useEffect, useState } from 'react';

export function Presentation() {
    const [age, setAge] = useState(0);

    useEffect(() => {
        calculateAge();
    }, []);

    const calculateAge = () => {
        const birthday = moment('19990406');

        const diff = moment().diff(birthday, 'years');

        setAge(diff);
    };

    return (
        <Container>
            <Wrapper>
                <Welcome>👏 Olá, seja bem vind@!</Welcome>
                <Title>
                    <br /> Meu nome é <span>Nicolas&nbsp;Moreno</span>
                </Title>
                <Role>Desenvolvedor Web</Role>
                <ButtonsWrapper>
                    <DownloadButton href={cv} download="CV - Nicolas Moreno">
                        Download CV
                        <StyledDownloadIcon size={20} />
                    </DownloadButton>
                    <Button onClick={() => { window.open('https://wa.me/05531983634531', '_blank') }} outlined>
                        <FaWhatsapp size={24} />
                    </Button>
                    <Button onClick={() => { window.open('mailto:contato@nicolasmoreno.dev', '_blank') }} outlined>
                        <MdMailOutline size={24} />
                    </Button>
                </ButtonsWrapper>
            </Wrapper>
            <AvatarWrapper>
                <Avatar image={img} alt="imagem de Nicolas Moreno" fallback="NM" />
                <PersonalInfo>
                    <span>
                        <strong>Idade:</strong> {age} anos
                    </span>
                    <span>
                        <strong>Localidade:</strong> Contagem/MG
                    </span>
                </PersonalInfo>
                <Socials>
                    <a href="https://www.linkedin.com/in/nicolasmorenoalves/" target="_blank" title="LinkedIn">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://github.com/NicolasAlvesM" target="_blank" title="GitHub">
                        <FaGithub size={32} />
                    </a>
                </Socials>
            </AvatarWrapper>
        </Container>
    );
}
