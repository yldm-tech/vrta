import React from 'react';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack, Typography } from '@material-ui/core';
import Page from '@/components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '@/components/_dashboard/blog';
import POSTS from '@/_mocks_/blog';

const SORT_OPTIONS = [
    { value: 'latest', label: 'Latest' },
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

const Blog = (): JSX.Element => {
    return (
        <Page title="Dashboard: Blog | Minimal-UI">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Blog
                    </Typography>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="#"
                        startIcon={<Icon icon={plusFill} />}
                    >
                        New Post
                    </Button>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    <BlogPostsSearch posts={POSTS} />
                    <BlogPostsSort options={SORT_OPTIONS} />
                </Stack>

                <Grid container spacing={3}>
                    {POSTS.map((post, index) => (
                        <BlogPostCard key={post.id} post={post} index={index} />
                    ))}
                </Grid>
            </Container>
        </Page>
    );
};

export default Blog;
