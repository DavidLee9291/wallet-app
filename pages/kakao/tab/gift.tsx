import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Gift() {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row">
                <Button>선물하기</Button>
                <Button>쇼핑하기</Button>
                <Button>쇼핑라이브</Button>
            </Stack>
            <Box>선물하기 내용 들어갈 부분</Box>
        </Box>
    </>
}