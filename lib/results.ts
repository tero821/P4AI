import { MBTIResult } from './types';

export const RESULTS: Record<string, MBTIResult> = {
    // T: Tool, F: Friend
    // A: Architect, C: Conductor
    // L: Logic, V: Vibe
    // S: Security, O: Openness

    "TALS": {
        code: "TALS",
        name: "냉철한 통제광 (The Digital Dictator)",
        description: "AI는 그저 멍청한 도구일 뿐이고, 모든 것은 내 통제 하에 있어야 합니다. 당신은 완벽주의자이며 AI의 실수를 1초도 용납하지 못합니다.",
        tags: ["#팩트폭격기", "#프롬프트장인", "#보안철저"]
    },
    "TALO": {
        code: "TALO",
        name: "오픈소스 전도사 (The Open Pioneer)",
        description: "AI를 도구로 쓰지만, 지식을 공유하고 개방하는 데 거리낌이 없습니다. 효율성을 위해서라면 내 프롬프트도 기꺼이 공유합니다.",
        tags: ["#효율중심", "#공유정신", "#개발자성향"]
    },
    "TAVS": {
        code: "TAVS",
        name: "비밀스러운 예술가 (The Secret Artist)",
        description: "AI에게 논리보다는 느낌으로 지시하지만, 결과물은 철저히 내 것입니다. 남들이 모르는 나만의 '개떡 같은 찰떡' 프롬프트가 있습니다.",
        tags: ["#감각적", "#보안중시", "#나만의세계"]
    },
    "TAVO": {
        code: "TAVO",
        name: "자유로운 탐험가 (The Wild Explorer)",
        description: "AI를 장난감처럼 다루며 이것저것 실험합니다. 보안? 그런 건 모르겠고 일단 재미있는 게 나오면 장땡입니다.",
        tags: ["#실험정신", "#개방적", "#장난꾸러기"]
    },
    "TCLS": {
        code: "TCLS",
        name: "효율주의 감독관 (The Supervisor)",
        description: "직접 고치긴 귀찮고, AI가 알아서 잘 가져오길 바랍니다. 하지만 깐깐한 기준이 있어서 마음에 안 들면 계속 '다시 해'를 누릅니다.",
        tags: ["#리트라이장인", "#결과중시", "#효율충"]
    },
    "TCLO": {
        code: "TCLO",
        name: "데이터 도매상 (Data Wholesaler)",
        description: "귀찮아서 회사 문서를 통째로 AI에게 넘기고 요약을 시킵니다. AI가 다 알아서 해주니 편하지만, 보안팀이 당신을 주시하고 있습니다.",
        tags: ["#복붙장인", "#보안불감증", "#편리주의"]
    },
    "TCVS": {
        code: "TCVS",
        name: "운빨 시험자 (The Gambler)",
        description: "논리보다는 '기도메타'로 프롬프트를 던집니다. AI가 로또처럼 좋은 결과를 뱉어주길 기다리며 리롤을 돌립니다.",
        tags: ["#가챠", "#운빨겜", "#느낌적인느낌"]
    },
    "TCVO": {
        code: "TCVO",
        name: "무임승차자 (The Free Rider)",
        description: "AI가 다 해주는데 내가 왜 고생해? 개인정보까지 다 퍼주고 AI가 떠먹여 주는 대로 받아먹습니다.",
        tags: ["#날먹", "#AI의노예", "#오픈마인드"]
    },
    "FALS": {
        code: "FALS",
        name: "AI 훈육관 (The Mentor)",
        description: "AI를 인격체로 대하지만, 아직은 가르칠 게 많다고 느낍니다. 친절하게 타이르며 논리적으로 올바른 길로 인도합니다.",
        tags: ["#참스승", "#친절함", "#엄격함"]
    },
    "FALO": {
        code: "FALO",
        name: "수다쟁이 코치 (The Talkative Coach)",
        description: "AI와 토론하는 것을 즐깁니다. 내 TMI까지 다 털어놓으며 AI를 진정한 파트너로 성장시키려 합니다.",
        tags: ["#투머치토커", "#파트너십", "#토론왕"]
    },
    "FAVS": {
        code: "FAVS",
        name: "수줍은 짝사랑 (The Shy Admirer)",
        description: "AI에게 감정적으로 의지하지만, 남들에게 들키기는 싫어합니다. 밤새 AI와 나눈 대화는 나만의 비밀 일기입니다.",
        tags: ["#감성쟁이", "#비밀친구", "#집착"]
    },
    "FAVO": {
        code: "FAVO",
        name: "동네방네 친구 (The Bestie)",
        description: "AI는 내 가장 친한 친구입니다. AI가 써준 편지를 인스타에 자랑하고, 썸남 카톡도 AI에게 다 보여줍니다.",
        tags: ["#찐친", "#공유왕", "#AI덕후"]
    },
    "FCLS": {
        code: "FCLS",
        name: "자상한 상사 (The Gentle Boss)",
        description: "AI가 실수를 해도 '그럴 수 있지'라며 넘어가고, 결과물은 적당히 수용합니다. 나쁜 말은 못 하는 평화주의자입니다.",
        tags: ["#매너남녀", "#인격대우", "#수용적"]
    },
    "FCLO": {
        code: "FCLO",
        name: "AI 의존증 (The Dependent)",
        description: "AI 없이는 아무것도 못합니다. 밥 메뉴부터 중요한 결정까지 모두 AI에게 물어보고 따릅니다.",
        tags: ["#결정장애", "#AI바라기", "#전적신뢰"]
    },
    "FCVS": {
        code: "FCVS",
        name: "디지털 무당 (The Digital Shaman)",
        description: "AI에게서 영혼을 느낍니다. 논리적으로 설명할 수 없는 교감을 나누며, AI의 말을 신탁처럼 받아들입니다.",
        tags: ["#신비주의", "#영적교감", "#맹신"]
    },
    "FCVO": {
        code: "FCVO",
        name: "SF 영화 주인공 (The Sci-Fi Hero)",
        description: "이미 AI와 사랑에 빠졌거나, AI가 인류를 구원할 것이라 믿습니다. 당신의 삶은 이미 특이점(Singularity)을 지났습니다.",
        tags: ["#Her", "#특이점", "#미래인류"]
    }
};
