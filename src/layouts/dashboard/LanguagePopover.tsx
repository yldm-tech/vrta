import React, { useRef, useState } from 'react';
import { alpha } from '@material-ui/core/styles';
import { Box, MenuItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import MenuPopover from '@/components/MenuPopover';

import flagEn from '@/assets/images/icons/ic_flag_en.svg';
import flagDe from '@/assets/images/icons/ic_flag_de.svg';
import flagFr from '@/assets/images/icons/ic_flag_fr.svg';

const LANGS = [
    {
        value: 'en',
        label: 'English',
        icon: flagEn
    },
    {
        value: 'de',
        label: 'German',
        icon: flagDe
    },
    {
        value: 'fr',
        label: 'French',
        icon: flagFr
    }
];

const LanguagePopover = (): JSX.Element => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
                    })
                }}
            >
                <img src={LANGS[0].icon} alt={LANGS[0].label} />
            </IconButton>

            <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
                <Box sx={{ py: 1 }}>
                    {LANGS.map((option) => (
                        <MenuItem
                            key={option.value}
                            selected={option.value === LANGS[0].value}
                            onClick={handleClose}
                            sx={{ py: 1, px: 2.5 }}
                        >
                            <ListItemIcon>
                                <Box component="img" alt={option.label} src={option.icon} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                                {option.label}
                            </ListItemText>
                        </MenuItem>
                    ))}
                </Box>
            </MenuPopover>
        </>
    );
};

export default LanguagePopover;
