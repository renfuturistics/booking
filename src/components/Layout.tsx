import { Box, useMediaQuery } from '@mui/material';
import React, { ReactNode } from 'react';

import Header from "./Header";
import Footer from "./Footer";
type LayoutProps = {
    children: ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            <Box flexGrow={1}>
                <Header

                />

                {children}

                <Footer />
            </Box>
        </Box>
    );
};

export default Layout;