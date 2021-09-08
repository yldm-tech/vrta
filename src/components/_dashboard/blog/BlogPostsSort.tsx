import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';

interface Menu {
    value: string;
    label: string;
}

interface Props {
    options: Menu[];
    onSort?: () => void;
}

export const BlogPostsSort = (props: Props): JSX.Element => {
    return (
        <TextField select size="small" value="latest" onChange={props.onSort}>
            {props.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default BlogPostsSort;
