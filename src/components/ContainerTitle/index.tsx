import { ReactNode } from 'react';
import { Title } from './styles';

interface ContainerTitleProps {
    children: ReactNode;
}

export default function ContainerTitle({ children }: ContainerTitleProps) {
    return <Title>{children}</Title>;
}
