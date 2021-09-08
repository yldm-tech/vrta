import React from 'react';
import { Icon } from '@iconify/react';
import { Form, FormikProvider } from 'formik';
import closeFill from '@iconify/icons-eva/close-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import {
    Box,
    Radio,
    Stack,
    Button,
    Drawer,
    Rating,
    Divider,
    Checkbox,
    FormGroup,
    IconButton,
    Typography,
    RadioGroup,
    FormControlLabel
} from '@material-ui/core';
import Scrollbar from '../../Scrollbar';
import ColorManyPicker from '../../ColorManyPicker';

export const FILTER_GENDER_OPTIONS = ['Men', 'Women', 'Kids'];
export const FILTER_CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
    { value: 'below', label: 'Below $25' },
    { value: 'between', label: 'Between $25 - $75' },
    { value: 'above', label: 'Above $75' }
];
export const FILTER_COLOR_OPTIONS: string[] = [
    '#00AB55',
    '#000000',
    '#FFFFFF',
    '#FFC0CB',
    '#FF4842',
    '#1890FF',
    '#94D82D',
    '#FFC107'
];

interface Props {
    isOpenFilter: boolean;
    onResetFilter: () => void;
    onOpenFilter: () => void;
    onCloseFilter: () => void;
    formik;
}

const ProductFilterSidebar = (props: Props): JSX.Element => {
    const { onResetFilter } = props;
    const { values, getFieldProps, handleChange } = props.formik;

    return (
        <>
            <Button
                disableRipple
                color="inherit"
                endIcon={<Icon icon={roundFilterList} />}
                onClick={props.onOpenFilter}
            >
                Filters&nbsp;
            </Button>

            <FormikProvider value={props.formik}>
                <Form autoComplete="off" noValidate>
                    <Drawer
                        anchor="right"
                        open={props.isOpenFilter}
                        onClose={props.onCloseFilter}
                        PaperProps={{
                            sx: { width: 280, border: 'none', overflow: 'hidden' }
                        }}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ px: 1, py: 2 }}
                        >
                            <Typography variant="subtitle1" sx={{ ml: 1 }}>
                                Filters
                            </Typography>
                            <IconButton onClick={props.onCloseFilter}>
                                <Icon icon={closeFill} width={20} height={20} />
                            </IconButton>
                        </Stack>

                        <Divider />

                        <Scrollbar>
                            <Stack spacing={3} sx={{ p: 3 }}>
                                <div>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Gender
                                    </Typography>
                                    <FormGroup>
                                        {FILTER_GENDER_OPTIONS.map((item) => (
                                            <FormControlLabel
                                                key={item}
                                                control={
                                                    <Checkbox
                                                        {...getFieldProps('gender')}
                                                        value={item}
                                                        checked={values.gender.includes(item)}
                                                    />
                                                }
                                                label={item}
                                            />
                                        ))}
                                    </FormGroup>
                                </div>

                                <div>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Category
                                    </Typography>
                                    <RadioGroup {...getFieldProps('category')}>
                                        {FILTER_CATEGORY_OPTIONS.map((item) => (
                                            <FormControlLabel
                                                key={item}
                                                value={item}
                                                control={<Radio />}
                                                label={item}
                                            />
                                        ))}
                                    </RadioGroup>
                                </div>

                                <div>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Colour
                                    </Typography>
                                    <ColorManyPicker
                                        name="colors"
                                        colors={FILTER_COLOR_OPTIONS}
                                        onChange={handleChange}
                                        onChecked={(color) => values.colors.includes(color)}
                                        sx={{ maxWidth: 36 * 4 }}
                                    />
                                </div>

                                <div>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Price
                                    </Typography>
                                    <RadioGroup {...getFieldProps('priceRange')}>
                                        {FILTER_PRICE_OPTIONS.map((item) => (
                                            <FormControlLabel
                                                key={item.value}
                                                value={item.value}
                                                control={<Radio />}
                                                label={item.label}
                                            />
                                        ))}
                                    </RadioGroup>
                                </div>

                                <div>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Rating
                                    </Typography>
                                    <RadioGroup {...getFieldProps('rating')}>
                                        {FILTER_RATING_OPTIONS.map((item, index) => (
                                            <FormControlLabel
                                                key={item}
                                                value={item}
                                                control={
                                                    <Radio
                                                        disableRipple
                                                        color="default"
                                                        icon={<Rating readOnly value={4 - index} />}
                                                        checkedIcon={
                                                            <Rating readOnly value={4 - index} />
                                                        }
                                                    />
                                                }
                                                label="& Up"
                                                sx={{
                                                    my: 0.5,
                                                    borderRadius: 1,
                                                    '& > :first-of-type': { py: 0.5 },
                                                    '&:hover': {
                                                        opacity: 0.48,
                                                        '& > *': { bgcolor: 'transparent' }
                                                    },
                                                    ...(values.rating.includes(item) && {
                                                        bgcolor: 'background.neutral'
                                                    })
                                                }}
                                            />
                                        ))}
                                    </RadioGroup>
                                </div>
                            </Stack>
                        </Scrollbar>

                        <Box sx={{ p: 3 }}>
                            <Button
                                fullWidth
                                size="large"
                                type="submit"
                                color="inherit"
                                variant="outlined"
                                onClick={onResetFilter}
                                startIcon={<Icon icon={roundClearAll} />}
                            >
                                Clear All
                            </Button>
                        </Box>
                    </Drawer>
                </Form>
            </FormikProvider>
        </>
    );
};

export default ProductFilterSidebar;
