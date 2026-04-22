import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { create } from "zustand";
import { auth, db, googleProvider } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useAuthStore = create((set, get)=>({
    // 로그인, 회원가입
    user: null,

    // firebase 로그인 (앱 최초 실행)
    // 자동로그인 방지
    initAuth: ()=>{
        onAuthStateChanged(auth, async (firebaseUser)=>{
            if(firebaseUser){
                if(!firebaseUser.emailVerified){
                    alert("이메일 인증을 먼저 해주세요!!");
                    await signOut(auth);
                    set({user:null});
                    return
                }
            }
        })
    },

    // 회원가입
    onMember: async({uName, nickname, email, password, phone, profile})=>{
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;

            // 인증 메일 보내기
            await sendEmailVerification(user);

            // Firestore에 저장하기
            // 1단계 - 저장위치 지정 doc(db정보, "컬렉션", 문서)
            const userRef = doc(db, "users", user.uid);

            // 2단계 - 저장할 사용자 정보 만들기
            const userInfo = {
                uid: user.uid,
                name: uName,
                nickname,
                email,
                phone,
                profile
            }

            // 3단계 - firestore에 데이터 저장
            await setDoc(userRef, userInfo);

            // 4단계 - zustand에 상태저장
            // set({user: userInfo});
            alert("회원가입성공! 이메일 인증을 완료해주세요");
        }catch(err){
            alert(err.message);
        }
    },

    // 이메일로그인
    onLogin: async (email, password)=>{
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);

            set({user: userCredential.user});
        }catch(err){
            console.log(err.message);
        }
    },

    // 구글로그인
    onGoogleLogin: async ()=>{
        try{
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result);

            const user = result.user;
            // 데이터 베이스
            const userRef = doc(db, 'users', user.uid);

            // 회원인지 아닌지 체크하기
            const userDoc = await getDoc(userRef);
            if(!userDoc.exists()){
                const userInfo = {
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    nickname: "",
                    phone: user.phoneNumber,
                    profile: ""
                }

                await setDoc(userRef, userInfo);
                set({user: userInfo});
            }else{
                set({user: userDoc.data()});
            }
        }catch(err){
            console.log(err.message);
        }
    },

    // 카카오 로그인
    onKakaoLogin: ()=>{

    },

    // 로그아웃
    onLogout: async ()=>{
        await signOut(auth);
        set({user: null});
    }
}));