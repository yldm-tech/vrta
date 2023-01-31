import React from 'react';
import { faker } from '@faker-js/faker';

import { Card, Typography, CardHeader, CardContent } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineContent,
    TimelineConnector,
    TimelineSeparator,
    TimelineDot
} from '@material-ui/lab';
import { fDateTime } from '@/utils/formatTime';

const TIMELINES = [
    {
        title: '1983, orders, $4220',
        time: faker.date.past(),
        type: 'order1'
    },
    {
        title: '12 Invoices have been paid',
        time: faker.date.past(),
        type: 'order2'
    },
    {
        title: 'Order #37745 from September',
        time: faker.date.past(),
        type: 'order3'
    },
    {
        title: 'New order placed #XF-2356',
        time: faker.date.past(),
        type: 'order4'
    },
    {
        title: 'New order placed #XF-2346',
        time: faker.date.past(),
        type: 'order5'
    }
];

interface Props {
    item;
    isLast: boolean;
}

function OrderItem(props: Props) {
    const { item, isLast } = props;
    const { type, title, time } = item;
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot
                    sx={{
                        bgcolor:
                            (type === 'order1' && 'primary.main') ||
                            (type === 'order2' && 'success.main') ||
                            (type === 'order3' && 'info.main') ||
                            (type === 'order4' && 'warning.main') ||
                            'error.main'
                    }}
                />
                {isLast ? null : <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="subtitle2">{title}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {fDateTime(time)}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}

const AppOrderTimeline = (): JSX.Element => {
    return (
        <Card
            sx={{
                '& .MuiTimelineItem-missingOppositeContent:before': {
                    display: 'none'
                }
            }}
        >
            <CardHeader title="Order Timeline" />
            <CardContent>
                <Timeline>
                    {TIMELINES.map((item, index) => (
                        <OrderItem
                            key={item.title}
                            item={item}
                            isLast={index === TIMELINES.length - 1}
                        />
                    ))}
                </Timeline>
            </CardContent>
        </Card>
    );
};

export default AppOrderTimeline;
