import { AnchorHTMLAttributes, ReactNode } from 'react';
import { StyledDownloadButton } from './styles';

interface DownloadButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    outlined?: boolean;
}

export default function DownloadButton({ children, ...props }: DownloadButtonProps) {
    return <StyledDownloadButton {...props}>{children}</StyledDownloadButton>;
}
