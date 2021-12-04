import { Button, Stack, TextField } from "@mui/material";
import Box from "@mui/system/Box/Box";
import React, { useRef, useState } from "react";

export default function Setting() {

    const [result, setResult] = useState('')
    const color = useRef<HTMLInputElement>()
    

    function onClick() {
        setResult(color.current?.value!)
    }


    return <>
    <Stack>
    <TextField label="색깔" sx={{m:2}} inputRef={color} />
    <Button onClick={onClick}>확인</Button>
    </Stack>
    <Box>결과값 : {result} </Box>
    </>
}