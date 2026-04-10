//persist zustand 에서 미들웨어중의 하나로 새로고침해도 데이터가 날아가지 않게하는 기능
//localStorage/sessctionStorage에 데이터를 저장
//zustand store> persist로 감싸기 > localStorage에 저장

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSample = create(
    persist((set, get) => ({
        //변수
        user: null,
        isLogin: false,
        temp: "임시값",
        //메서드
    }),
        {
            keyname: "저장할 키명",
            //전체가 아니라 특정 상태만 저장하고 싶을때
            partialize: (state) => ({
                user: state.user,
                isLogin: state.isLogin
            })
        }
    )
)