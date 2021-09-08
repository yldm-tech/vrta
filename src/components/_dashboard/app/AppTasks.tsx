import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import {
    Box,
    Card,
    Checkbox,
    CardHeader,
    Typography,
    FormControlLabel,
    Stack
} from '@material-ui/core';

const TASKS = [
    'Create FireStone Logo',
    'Add SCSS and JS files if required',
    'Stakeholder Meeting',
    'Scoping & Estimations',
    'Sprint Showcase'
];

interface Props {
    task;
    checked;
    formik;
    other?;
}

const TaskItem = (props: Props) => {
    const { getFieldProps } = props.formik;

    return (
        <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
            <FormControlLabel
                control={
                    <Checkbox
                        {...getFieldProps('checked')}
                        value={props.task}
                        checked={props.checked}
                        {...props.other}
                    />
                }
                label={
                    <Typography
                        variant="body2"
                        sx={{
                            ...(props.checked && {
                                color: 'text.disabled',
                                textDecoration: 'line-through'
                            })
                        }}
                    >
                        {props.task}
                    </Typography>
                }
            />
        </Stack>
    );
};

export const AppTasks = (): JSX.Element => {
    const formik = useFormik({
        initialValues: {
            checked: [TASKS[2]]
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const { values, handleSubmit } = formik;

    return (
        <Card>
            <CardHeader title="Tasks" />
            <Box sx={{ px: 3, py: 1 }}>
                <FormikProvider value={formik}>
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        {TASKS.map((task) => (
                            <TaskItem
                                key={task}
                                task={task}
                                formik={formik}
                                checked={values.checked.includes(task)}
                            />
                        ))}
                    </Form>
                </FormikProvider>
            </Box>
        </Card>
    );
};

export default AppTasks;
