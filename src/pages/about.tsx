import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Head from 'next/head';

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, height: "70vh" }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    About Us
                </Typography>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo lectus eget
                        dignissim tristique. Nulla facilisi. Praesent vel pretium velit. Duis ac magna sit amet
                        dolor rutrum ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae; Aliquam nec dolor eu tortor dignissim faucibus. Nulla facilisi.
                        Proin scelerisque fermentum nibh, nec fermentum lectus sodales in.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Fusce maximus massa at ligula accumsan, vel interdum lorem lobortis. Cras ullamcorper eros
                        eu lorem luctus, quis posuere mi malesuada. Vivamus non mi a ex commodo dapibus. Donec nec
                        molestie felis, eu lacinia eros. In hac habitasse platea dictumst. Mauris at placerat orci,
                        et vestibulum elit. Nulla facilisi.
                    </Typography>
                    <Typography variant="body1">
                        Nam feugiat ultricies nunc, sed lacinia odio. Integer euismod semper mauris, vitae
                        pellentesque nisi suscipit ac. Etiam vehicula, lorem non iaculis convallis, nisi mauris
                        tempor ipsum, non fermentum nisi arcu ac est. Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas.
                    </Typography>
                    <Typography variant="body1">
                        Nam feugiat ultricies nunc, sed lacinia odio. Integer euismod semper mauris, vitae
                        pellentesque nisi suscipit ac. Etiam vehicula, lorem non iaculis convallis, nisi mauris
                        tempor ipsum, non fermentum nisi arcu ac est. Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas.
                    </Typography>
                    <Typography variant="body1">
                        Nam feugiat ultricies nunc, sed lacinia odio. Integer euismod semper mauris, vitae
                        pellentesque nisi suscipit ac. Etiam vehicula, lorem non iaculis convallis, nisi mauris
                        tempor ipsum, non fermentum nisi arcu ac est. Pellentesque habitant morbi tristique senectus
                        et netus et malesuada fames ac turpis egestas.
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default AboutPage;
