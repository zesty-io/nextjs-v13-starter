/**
 * Zesty.io AutoGenerated Header Component
 * This file is used in [...slug.js] for example. It is not necceary and may be deleted or modified as needed.
 * 
 */

import { Grid, Typography } from "@mui/material";
import Image from 'next/image';


import MarketingNav from "./marketing-example/MarketingNav.js";

function Header() {
       
    return (
    <Grid container>
        <Grid item md={4}>
            <Grid container paddingY={1}>
                <Image src="https://brand.zesty.io/zesty-io-logo-dark.svg" width="36" height="36" alt="zesty logo" />
                <Typography sx={{mt: 1}} paddingX={2}>Next.js Marketing Examples</Typography>
            </Grid>
        </Grid>
        <Grid item md={8}>
            <MarketingNav/>
        </Grid>
    </Grid>
    );
}

export default Header;
