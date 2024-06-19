import { lazy } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
const ContainerTitle = lazy(() => import('../../components/ContainerTitle'));
import { Container, SkillAreaTitle, SkillItem, SkillsArea, SkillsList, Wrapper } from './styles';

export default function Skills() {
    return (
        <Container>
            <ContainerTitle>Habilidades</ContainerTitle>
            <Wrapper>
                <SkillsArea>
                    <SkillAreaTitle>Backend</SkillAreaTitle>
                    <SkillsList>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>NodeJS</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>NestJS</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Golang</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Typescript</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>SQL</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Docker</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                    </SkillsList>
                </SkillsArea>
                <SkillsArea>
                    <SkillAreaTitle>Frontend</SkillAreaTitle>
                    <SkillsList>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>HTML</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>CSS</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Javascript</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>ReactJS</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>React Native</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                    </SkillsList>
                </SkillsArea>
                <SkillsArea>
                    <SkillAreaTitle>DevOps</SkillAreaTitle>
                    <SkillsList>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>CI/CD</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Github Actions</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Jenkins</strong>
                                <span>Intermediário</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Microserviços</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                        <SkillItem>
                            <BsCheck2Circle size={20} />
                            <div>
                                <strong>Cloud</strong>
                                <span>Avançado</span>
                            </div>
                        </SkillItem>
                    </SkillsList>
                </SkillsArea>
            </Wrapper>
        </Container>
    );
}
