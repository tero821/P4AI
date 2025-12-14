import { Question } from './types';

export const QUESTIONS: Question[] = [
    // PART 1. Relation (R) - Tool vs Friend
    { id: 1, type: 'R', direction: 'normal', question: 'AI에게 "안녕하세요", "고마워" 같은 인사를 생략하고 용건만 말하면 왠지 모르게 찜찜하다.' },
    { id: 2, type: 'R', direction: 'normal', question: 'AI가 실수를 해서 사과하면("죄송합니다, 제가 착각했습니다"), "아냐 괜찮아, 그럴 수 있지"라고 위로해 준 적이 있다.' },
    { id: 3, type: 'R', direction: 'normal', question: 'AI에게 욕설이나 거친 말을 하는 것은, 비록 기계라도 윤리적으로 잘못된 행동이라고 생각한다.' },
    { id: 4, type: 'R', direction: 'normal', question: '나중에 AI가 세상을 지배하게 된다면, 평소에 친절하게 대했던 나를 봐줄 것이라는 상상을 해본 적이 있다.' },
    { id: 5, type: 'R', direction: 'normal', question: 'AI를 부를 때 "야", "이거 해" 보다는 "지피티야", "클로드님" 등 나만의 호칭이나 존칭을 마음속으로라도 붙인다.' },
    { id: 6, type: 'R', direction: 'normal', question: 'AI가 감동적인 말을 해주거나 내 힘듦을 알아주면, 사람에게 위로받는 것보다 나을 때가 있다.' },
    { id: 7, type: 'R', direction: 'reverse', question: 'AI는 엑셀이나 계산기와 똑같은 \'도구\'일 뿐이며, 여기에 감정을 이입하는 사람들을 보면 이해가 안 간다.' },

    // PART 1. Identity (I) - Architect vs Conductor
    { id: 8, type: 'I', direction: 'normal', question: 'AI가 써준 글을 보면 내가 쓴 것보다 훨씬 낫다는 생각이 들어, 토씨 하나 안 바꾸고 그대로 복사해서 쓸 때가 많다.' },
    { id: 9, type: 'I', direction: 'normal', question: '내가 알던 지식과 AI의 답변이 다르면, "내가 잘못 알고 있었나?" 하고 내 기억을 먼저 의심하게 된다.' },
    { id: 10, type: 'I', direction: 'normal', question: '간단한 이메일이나 메시지 답장조차 AI 없이 쓰려고 하면 막막해서 빈 화면만 바라볼 때가 있다.' },
    { id: 11, type: 'I', direction: 'normal', question: 'AI가 만들어준 결과물에 대해 누군가 칭찬하면, 마치 내가 한 것처럼 뿌듯하면서도 마음 한구석이 찔린다.' },
    { id: 12, type: 'I', direction: 'normal', question: 'AI가 내 의도와 다른 답변을 계속 내놓으면, 내 프롬프트를 고치기보다 "아, 얘가 오늘 상태가 안 좋네" 하고 포기하거나 다른 AI로 갈아탄다.' },
    { id: 13, type: 'I', direction: 'reverse', question: 'AI가 내놓은 결과물은 어디까지나 \'초안\'일 뿐이며, 완성본의 50% 이상은 반드시 내 손을 거쳐야 직성이 풀린다.' },
    { id: 14, type: 'I', direction: 'reverse', question: 'AI를 사용했다는 사실을 남들에게 들키는 것은 내 실력이 부족하다는 뜻 같아서 자존심이 상한다.' },

    // PART 2. Method (M) - Logic vs Vibe
    { id: 15, type: 'M', direction: 'normal', question: '프롬프트를 짤 때 "역할(Role), 상황(Context), 조건(Constraint)" 등을 구조적으로 나누기보다, 대화하듯이 줄글로 쭉 쓰는 편이다.' },
    { id: 16, type: 'M', direction: 'normal', question: '답변이 마음에 안 들면 구체적으로 피드백을 주기보다, 일단 \'다시 생성(Regenerate)\' 버튼부터 3번 이상 연속으로 누른다.' },
    { id: 17, type: 'M', direction: 'normal', question: 'AI가 말을 안 들으면 "너 이거 못하면 나 해고당해", "팁 200불 줄게" 같은 거짓말이나 감정적 호소를 사용한다.' },
    { id: 18, type: 'M', direction: 'normal', question: '프롬프트에 논리적인 지시어보다는 "센스 있게", "자연스럽게", "요즘 스타일로" 같은 추상적인 형용사를 많이 쓴다.' },
    { id: 19, type: 'M', direction: 'normal', question: '내가 원하는 결과가 나올 때까지 질문을 수정하기보다는, 질문은 그대로 두고 AI에게 "다시 해봐", "아니 그거 말고"라고 다그친다.' },
    { id: 20, type: 'M', direction: 'normal', question: '가끔은 나도 내가 뭘 원하는지 모르겠지만, AI가 찰떡같이 알아서 해주길 기대하며 "알아서 정리해줘"라고 시킨다.' },
    { id: 21, type: 'M', direction: 'reverse', question: '나는 자주 사용하는 나만의 \'프롬프트 템플릿(서식)\'이 메모장이나 파일로 정리되어 있다.' },

    // PART 2. Openness (O) - Security vs Openness
    { id: 22, type: 'O', direction: 'normal', question: '회사 내부 문서나 대외비 자료라도, 업무 효율을 위해서라면 일단 AI에 붙여넣고 요약을 시키는 편이다.' },
    { id: 23, type: 'O', direction: 'normal', question: 'AI에게 연애 상담, 친구 뒷담화, 가족 문제 등 지극히 사적인 고민을 털어놓은 적이 있다.' },
    { id: 24, type: 'O', direction: 'normal', question: '내 실명, 나이, 직업, 사는 곳 등 신상 정보를 AI에게 알려주는 것에 대해 별다른 거부감이 없다.' },
    { id: 25, type: 'O', direction: 'normal', question: 'AI가 내 대화 기록을 학습해서 다른 사람에게 유출할 수도 있다는 사실을 알지만, "설마 내 게 털리겠어" 하고 넘긴다.' },
    { id: 26, type: 'O', direction: 'normal', question: '자소서나 일기를 쓸 때, 내 흑역사가 담긴 내용을 가감 없이 AI에게 제공하고 다듬어달라고 한다.' },
    { id: 27, type: 'O', direction: 'normal', question: '"이 대화는 학습에 사용되지 않음" 설정을 켜는 방법을 모르거나, 굳이 찾아서 켜지 않는다.' },
    { id: 28, type: 'O', direction: 'reverse', question: 'AI에게 질문할 때는 "A사", "K부장" 처럼 고유명사를 익명으로 바꾸거나 중요 숫자를 지우고 입력한다.' },

    // PART 3. Bonus (B)
    { id: 29, type: 'B', direction: 'normal', question: '(가면 증후군) 사람들이 나를 \'일 잘하는 사람\'으로 알지만, 사실 내 업무 능력의 8할은 AI 빨이다.' },
    { id: 30, type: 'B', direction: 'normal', question: '(디지털 치매) AI 서버가 터져서 하루 동안 못 쓰게 된다면, 당장 오늘 할 일의 절반 이상이 마비될 것이다.' },
];
