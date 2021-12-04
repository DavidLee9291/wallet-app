import { More } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Box, height } from "@mui/system";
import React, { useState } from "react";
import Chat from "./tab/chat";
import Gift from "./tab/gift";
import Member from "./tab/member";

export default function Kakao() {

    // let = 변수
    // const = 상수

    const [content, setContent] = useState<any>('내용입니다.')
    const [title, setTitle] = useState<any>('')


    function onClickMember() {
        setContent(<Member />)
        setTitle('회원')
    }

    function onClickChat() {
        setContent(<Chat />)
        setTitle('채팅창')
    }

    function onClickGift() {
        setContent(<Gift />)
        setTitle('선물하기')
    }

    function onClickMore() {
        setContent(<More />)
        setTitle('회원')
    }

    return <>
   <Stack sx={{ height: '100vh'}}>
        <Stack direction="row" alignItems="center" sx={{ background: 'Blue', height: 50 , px: 2}}>
        <Box sx={{ flexGrow: 1, fontSize: 20}}>
             FACEBOOK{title}
            </Box>
        </Stack>
        
        <Stack direction="row" justifyContent="space-around" sx={{ background: 'Gray'}}>
        <Button sx={{color: 'white'}} onClick={onClickMember}>홈</Button>
        <Button sx={{color: 'white'}} onClick={onClickChat}>회원</Button>
        <Button sx={{color: 'white'}} onClick={onClickGift}>쇼핑</Button>
        <Button sx={{color: 'white'}} onClick={onClickMore}>게이밍</Button>
        </Stack>

        <Box sx={{flexGrow: 1}}>{content}</Box>

        <Stack direction="row" sx={{ height: 50}}>
            <Box>ⓒ 2021 facebook</Box>
        </Stack>
   </Stack>
    </>
}