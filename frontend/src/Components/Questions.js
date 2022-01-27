import React, { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Link,
    Button,
    Divider,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TextareaAutosize from "@mui/material/TextareaAutosize";
function Question() {
    const [input, setInput] = useState({
        q1: "", q2: ""
    });
    let name, value;
    const handleChange = (e) => {
        console.log(input);
        name = e.target.name;
        value = e.target.value;
        setInput({ ...input, [name]: value });
    };
    return (
        <>
            <Grid width="100%" sx={{ display: "flex" }}>
                <Grid width="20% "></Grid>
                <Grid width="60%">
                    <Typography sx={{ fontSize: { lg: "2rem", md: "2rem", sm: "1.4rem", xs: "1rem" } }} textAlign="center" variant="h4" pb={2} mt={3}>
                        Business Development (Sales) internship at <br /> SizeMetric Design
                        & Engineering
                    </Typography>
                    <Divider />
                    <Grid>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", marginTop: "2rem" }}
                        >
                            Cover letter
                        </Typography>
                        <Typography mt={2}>
                            Why should you be hired for this role ?
                        </Typography>
                        <Box display="flex" alignItems="center" mt={2}>
                            <ContentCopyIcon />
                            <Link href="#" sx={{ textDecoration: "none" }}>
                                {" "}
                                Copy from your last application & edit
                            </Link>
                        </Box>
                        <TextareaAutosize
                            name="q1"
                            aria-label="minimum height"
                            minRows={6}
                            placeholder="Enter here"
                            style={{ width: "100%", marginTop: "2rem" }}
                            // value="input"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid mt={4}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", marginTop: "2rem" }}
                        >
                            Availability
                        </Typography>
                        <Typography mt={2}>
                            Are you available for 4 months, starting immediately, for a
                            full-time work from home internship? If not, <br /> what is the
                            time period you are available for and the earliest date you can
                            start this internship on?
                        </Typography>
                        <TextareaAutosize
                            name="q2"
                            aria-label="minimum height"
                            minRows={6}
                            placeholder="Enter here"
                            style={{ width: "100%", marginTop: "2rem" }}
                            // value="input"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Typography mt={3} textAlign="center">
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </Typography>
                </Grid>
                <Grid width="20%"></Grid>
            </Grid>
        </>
    );
}

export default Question;