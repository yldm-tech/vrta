import { faker } from '@faker-js/faker';
import React from 'react';
import { Icon } from '@iconify/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@material-ui/core';
import { mockImgCover } from '@/utils/mockImages';
import Scrollbar from '../../Scrollbar';
import { News } from '@/models';

const NEWS = [...Array(5)].map((_, index) => {
    const setIndex = index + 1;
    return {
        title: faker.name.jobTitle(),
        description: faker.lorem.paragraphs(),
        image: mockImgCover(setIndex),
        postedAt: faker.date.soon()
    };
});

interface Props {
    news: News;
}

const NewsItem = (props: Props) => {
    const { news } = props;
    const { image, title, description, postedAt } = news;

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box
                component="img"
                alt={title}
                src={image}
                sx={{ width: 48, height: 48, borderRadius: 1.5 }}
            />
            <Box sx={{ minWidth: 240 }}>
                <Link to="#" color="inherit" underline="hover" component={RouterLink}>
                    <Typography variant="subtitle2" noWrap>
                        {title}
                    </Typography>
                </Link>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    {description}
                </Typography>
            </Box>
            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                {formatDistance(postedAt, new Date())}
            </Typography>
        </Stack>
    );
};

const AppNewsUpdate = (): JSX.Element => {
    return (
        <Card>
            <CardHeader title="News Update" />

            <Scrollbar>
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                    {NEWS.map((news) => (
                        <NewsItem key={news.title} news={news} />
                    ))}
                </Stack>
            </Scrollbar>

            <Divider />

            <Box sx={{ p: 2, textAlign: 'right' }}>
                <Button
                    to="#"
                    size="small"
                    color="inherit"
                    component={RouterLink}
                    endIcon={<Icon icon={arrowIosForwardFill} />}
                >
                    View all
                </Button>
            </Box>
        </Card>
    );
};

export default AppNewsUpdate;
