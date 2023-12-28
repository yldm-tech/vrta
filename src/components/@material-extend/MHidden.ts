import { Theme, useMediaQuery } from '@mui/material';

interface Props {
    width: string;
    children;
    theme?;
}

export const MHidden = (props: Props): JSX.Element | null => {
    const { width, children } = props;
    const breakpoint = width.substring(0, 2) as unknown as number;

    const hiddenUp = useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));
    const hiddenDown = useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint));

    if (width.includes('Down')) {
        return hiddenDown ? null : children;
    }

    if (width.includes('Up')) {
        return hiddenUp ? null : children;
    }

    return null;
};

export default MHidden;
