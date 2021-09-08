import React from 'react';
import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
import { styled } from '@material-ui/core/styles';
import { Box, TextField, Autocomplete, InputAdornment } from '@material-ui/core';
import { IPost } from '@/models';

const RootStyle = styled('div')(({ theme }) => ({
    '& .MuiAutocomplete-root': {
        width: 200,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
        }),
        '&.Mui-focused': {
            width: 240,
            '& .MuiAutocomplete-inputRoot': {
                // boxShadow: theme.customShadows.z12
            }
        }
    },
    '& .MuiAutocomplete-inputRoot': {
        '& fieldset': {
            borderWidth: '1px !important',
            borderColor: `${theme.palette.grey[500_32]} !important`
        }
    },
    '& .MuiAutocomplete-option': {
        '&:not(:last-child)': {
            borderBottom: `solid 1px ${theme.palette.divider}`
        }
    }
}));

interface Props {
    posts: IPost[];
}

export const BlogPostsSearch = (props: Props): JSX.Element => {
    return (
        <RootStyle>
            <Autocomplete
                size="small"
                disablePortal
                popupIcon={null}
                options={props.posts}
                getOptionLabel={(post) => post.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search post..."
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <>
                                    <InputAdornment position="start">
                                        <Box
                                            component={Icon}
                                            icon={searchFill}
                                            sx={{
                                                ml: 1,
                                                width: 20,
                                                height: 20,
                                                color: 'text.disabled'
                                            }}
                                        />
                                    </InputAdornment>
                                    {params.InputProps.startAdornment}
                                </>
                            )
                        }}
                    />
                )}
            />
        </RootStyle>
    );
};

export default BlogPostsSearch;
