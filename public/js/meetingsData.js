// Meetings data embedded directly to avoid CORS issues
const meetingsData = [
  {
    "date": "01.07",
    "attendees": [
      "건범",
      "민재",
      "민지",
      "서진",
      "예림",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "자기 소개",
      "마을 소개",
      "버킷 리스트 결정",
      "마을 규칙 결정",
      "삶 나눔",
      "말씀 나눔"
    ],
    "photos": [],
    "richContent": [
      {
        "type": "paragraph",
        "content": "피드백 : 마을 모임 시간이 너무 늘어지지 않게, 한명 한명 신경 쓰기, 노래 미리 준비해 가기"
      }
    ],
    "title": "교제와 나눔"
  },
  {
    "date": "01.14",
    "attendees": [
      "민재",
      "민지",
      "서진",
      "주원",
      "지영",
      "태양",
      "호영"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": true,
      "mealTogether": false
    },
    "content": [
      "카페에서 마을 모임",
      "곤약젤리 나눠주기",
      "삶나눔",
      "서로 가 본 여행지 공유",
      "Q. 하나님을 경험한 적이 있는가?",
      "Q. 평상시에도 하나님을 경험하기 위해 집중하는가?"
    ],
    "photos": [
      "/assets/마을 모임/01 14/240114_(1).jpg",
      "/assets/마을 모임/01 14/240114_(2).jpg",
      "/assets/마을 모임/01 14/240114_(3).jpg",
      "/assets/마을 모임/01 14/240114_(4).jpg"
    ],
    "richContent": [
      {
        "type": "paragraph",
        "content": "어려운 일이 있거나 감사한 일이 있을 때, 또 선교와 같이 단기간 동안, 특정 이벤트나 기간동안 하나님을 경험하는 감각적인 느낌이 아니라 모든 삶속에서 하나님께 집중하고 하나님의 일하심을 포착하여 우리의 삶이 변화되는 것을 경험하는 태양마을이 되면 좋겠습니다!"
      },
      {
        "type": "paragraph",
        "content": "오늘은 24년 두번째 예배임에도 불구하고 거의 모든 인원이 늦지 않고 약속을 지켜주었고, 성경도 모두 챙겨와(호영이는 학교에 성경책이 없어서 못챙겨 왔지만) 맨 앞자리에서 함께 예배를 드리게 되어서 매우 뿌듯!"
      },
      {
        "type": "paragraph",
        "content": "앞으로도 한 해 동안 화이팅-!"
      }
    ],
    "title": "말씀, 찬양 외"
  },
  {
    "date": "01.21",
    "attendees": [
      "민재",
      "민지",
      "서진",
      "예림",
      "주원",
      "태양",
      "호영"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "수련회 광고",
      "간식 - 젤리",
      "3시 40분까지 마무리",
      "숙제를 생각하며 일주일을 보냈는지/ 반성..ㅜ",
      "묵상 그룹 모집",
      "짧게 삶나눔",
      "짧은 말씀 나눔"
    ],
    "photos": [
      "/assets/마을 모임/01 21/IMG_7463.jpeg",
      "/assets/마을 모임/01 21/IMG_7464.jpeg",
      "/assets/마을 모임/01 21/Untitled.png"
    ],
    "richContent": [
      {
        "type": "paragraph",
        "content": "성경 2명 미지참! ㅜㅜ 다음번엔 잊지 말고 챙겨 오기-!"
      },
      {
        "type": "blockquote",
        "content": "**요나와 같은 마음가짐 버리기.**"
      },
      {
        "type": "paragraph",
        "content": "요나처럼 타인을 배제해 버리는 마음, 하나님의 의도를 멋대로 판단하는 마음, 나의 노력으로 구원의 역사를 이루려고 하는 마음등이 내 마음속에 있다면 모두 내려놓고, 오로지 모든 **주권**을 하나님께 드리자."
      },
      {
        "type": "paragraph",
        "content": "마을 목표 : 목요일 시간내서 하나님께 집중"
      }
    ],
    "title": "말씀"
  },
  {
    "date": "01.28",
    "attendees": [
      "민재",
      "민지",
      "서진",
      "예림",
      "주원",
      "태양",
      "호영"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": true,
      "mealTogether": false
    },
    "content": [
      "예배 및 마을 모임",
      "한 주간의 일상 나누기",
      "찬양 시간"
    ],
    "photos": [
      "/assets/마을 모임/01 28/IMG_1673.jpeg",
      "/assets/마을 모임/01 28/IMG_1674.jpeg",
      "/assets/마을 모임/01 28/Untitled.png"
    ],
    "richContent": [],
    "title": "찬양"
  },
  {
    "date": "02.04",
    "attendees": [
      "민재",
      "민지",
      "서진",
      "예림",
      "주원",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": false,
      "bibleBrought": true,
      "mealTogether": true
    },
    "content": [
      "나가서 밥먹기",
      "밥먹고 예배 특강 이전까지 카페 or 교회",
      "서로에 대해 알아가는 시간"
    ],
    "photos": [],
    "richContent": [
      {
        "type": "paragraph",
        "content": "호아면에서 다같이 점심을 먹고, 빽다방에서 커피하나씩 사서 교회 마을 모임장소에서 마을 모임 진행!"
      },
      {
        "type": "paragraph",
        "content": "마을모임 이후에 진행되는 예배특강에 마을원들 다같이 참여했습니다!! 다들 마을 목표를 같이 달성하기 위해 피곤한 가운데서도 함께 참여해줘서 정말 고마워요"
      },
      {
        "type": "paragraph",
        "content": "태양 마을 친구들 쵝오.."
      },
      {
        "type": "heading",
        "content": "말씀 내용"
      },
      {
        "type": "heading",
        "content": "사도 바울의 사도권"
      },
      {
        "type": "paragraph",
        "content": "하나님께서 주신 생명과 구원, 하나님 나라 소망의 복음은 나의것을 챙기는 삶에서 타자에게 종이 되어주는 삶으로 바꿔 놓는다."
      },
      {
        "type": "paragraph",
        "content": "바리새인의 삶을 살던 바울이 진정한 복음을 경험하고 회심하여 당시 다른 사람들이 주장하던 율법중심의 복음이 아닌 바울이 믿는 복음을 선포함"
      },
      {
        "type": "paragraph",
        "content": "바울은 본인이 누릴 수 있는 권리들을 누리지 않았고, 그런것에 신경 쓰지 않고 오로지 복음에 참여하는 것만을 중요하게 여김"
      },
      {
        "type": "paragraph",
        "content": "**따라서 우리는 바울의 경향성은 닮아가도록 노력해 볼 수 있지 않을까?**"
      },
      {
        "type": "paragraph",
        "content": "치열한 고민 끝에 고백하는 복임이 있어야 온전한 신앙의 삶을 살아갈 수 있다."
      },
      {
        "type": "paragraph",
        "content": "바울이 확실하게 남들과는 다른 복음을 전할 수 있었던 이유는 본인이 가진 복음이 확실했기 때문"
      },
      {
        "type": "paragraph",
        "content": "우리도 확실한 복음을 가져야 하고, 확실한 복음을 가졌을 때 다른 것에 메이지 않고, 평안을 누릴 수 있다"
      },
      {
        "type": "paragraph",
        "content": "하나님 앞에서 우리는 그저 감사함을 고백하며 복음에 참여하는 삶을 살아가는 수밖에 없다."
      },
      {
        "type": "paragraph",
        "content": "따라서 우리는 바울과 같이 복음을 살 수 있는 것만으로도 감사하는 삶을 살아가는 수밖에 없다"
      },
      {
        "type": "paragraph",
        "content": "복음을 산다는 것은 복음을 전하는 것이 아니라 복음(십자가 구원)을 받은 사람답게 사는 것, 하나님 나라의 방식대로 살아가는 삶을 말한다"
      }
    ],
    "title": "찬양"
  },
  {
    "date": "02.18",
    "attendees": [
      "민지",
      "예림",
      "주원",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": true,
      "mealTogether": true
    },
    "content": [
      "나가서 밥먹기 - 가츠맘",
      "음료 한잔씩 사주기",
      "4층에서 모임"
    ],
    "photos": [
      "/assets/마을 모임/02 18/Untitled 1.png",
      "/assets/마을 모임/02 18/Untitled 2.png",
      "/assets/마을 모임/02 18/Untitled.png"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "노아를 통해 볼 수 있는 인간의 악함"
      },
      {
        "type": "blockquote",
        "content": "인간은 마을으로 생각하는 모든 계획이 항상 악하다."
      },
      {
        "type": "paragraph",
        "content": "성경을 통해 아담 때부터 인간의 악한 모습들을 볼 수 있다."
      },
      {
        "type": "paragraph",
        "content": "인간은 부패하였고 답이 없는 존재임을 보여준다."
      },
      {
        "type": "paragraph",
        "content": "욕심과 갈증 속에 사는 죽은 것과 같은 상태가 되고 채워지지 않는 갈증으로 인해 우상을 만들어내기도 한다."
      },
      {
        "type": "paragraph",
        "content": "하지만 인간은 이러한 **답 없음에 대해 무지**하고, 이것 또한 매우 큰 죄이다."
      },
      {
        "type": "paragraph",
        "content": "**본인이 죄인이고 답이 없는 존재임을 먼저 깨달아야 한다.**",
        "underline": true
      },
      {
        "type": "blockquote",
        "content": "하나님은 우리에게 기회를 주시며, 지켜주시겠다고 약속해 주시는 분이다."
      },
      {
        "type": "paragraph",
        "content": "하나님께서는 노아에게 다시는 멸하지 않겠다고 조건 없는 약속을 해주셨다."
      },
      {
        "type": "paragraph",
        "content": "인간의 악함이 가득하지만 그럼에도 불구하고 약속을 해주신다."
      },
      {
        "type": "paragraph",
        "content": "→ 악을 허용해주시는 하나님의 은총과 사랑을 볼 수 있다."
      },
      {
        "type": "paragraph",
        "content": "우리의 답이 없음과 실패를 절감해야하고 이를 통해 우리는 예수님을 찾게 된다."
      },
      {
        "type": "paragraph",
        "content": "만약 죄에 대한 인식이 없다며 우리는 예수님을 찾지 않게 된다."
      },
      {
        "type": "paragraph",
        "content": "나에게 무엇이 필요한지 모르는 '무지' 또한 죄"
      },
      {
        "type": "paragraph",
        "content": "따라서 우리의 상황(답없는 존재인 인간)을 실감하고 이로 인해서 하나님을 더더욱 찾게 알게 되어야 한다."
      }
    ],
    "title": "노아를 통해 볼 수 있는 인간의 악함"
  },
  {
    "date": "02.25",
    "attendees": [
      "건범",
      "민재",
      "민지",
      "서진",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": true,
      "mealTogether": false
    },
    "content": [
      "예배 및 마을 모임",
      "2월 회고 시간",
      "3월 계획 세우기"
    ],
    "photos": [
      "/assets/마을 모임/02 25/KakaoTalk_20240227_133925607_01.jpg",
      "/assets/마을 모임/02 25/Untitled.png"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "베드로의 왜곡된 기대"
      },
      {
        "type": "blockquote",
        "content": "우리는 예수 그리스도에 대해서 자신이 만든 왜곡된 기대를 가지고 있다."
      },
      {
        "type": "p",
        "content": "이스라엘 사람들을 대망 사상(메시아가 나타나 이스라엘을 구원할거라는 믿음)을 가지고 있었음"
      },
      {
        "type": "p",
        "content": "하지만 예수님은 그런 사람들의 기대와는 다른 메시아를 선포하심 → 고난과 죽임을 당함, 그리고 부활하심"
      },
      {
        "type": "p",
        "content": "이에 베드로는 항변 → 베드로는 자신이 만든 그리스도를 꿈꾸고 있었음(영웅적인 모습)"
      },
      {
        "type": "p",
        "content": "우리도 베드로처럼 우리가 만든 기대(왜곡된 기대감)를 하나님께 투사/투영 하곤 한다."
      },
      {
        "type": "blockquote",
        "content": "우리는 사람의 관점에서 하나님의 관점으로 시선을 바꿔야 한다."
      },
      {
        "type": "p",
        "content": "바리새인들이 율법을 지키지 않으면 철저히 배제시켰다. (=인간의 방식)"
      },
      {
        "type": "p",
        "content": "하지만 예수님은 그와 반대로 분리된 사람들에게 다가가셨다."
      },
      {
        "type": "p",
        "content": "예수님의 방식은 이처럼 세상의 기준에서는 이해하기가 어렵다. 따라서 인간의 일에 빠진 사람은 하나님의 일을 생각하지 못한다."
      },
      {
        "type": "p",
        "content": "하나님 나라를 세워가는 방식은 자기희생(고통, 소외, 고독, 고난 을 감내하는 것) 이다."
      },
      {
        "type": "p",
        "content": "고독이란 내면과 하나님과의 관계에 집중하는 것을 의미하고, 이를 통해 세상의 메세지와 거리를 두어야 한다."
      },
      {
        "type": "blockquote",
        "content": "우리는 사람의 일을 버리고 예수님 뒤로 물러나야 한다."
      },
      {
        "type": "p",
        "content": "예수님께서 베드로에게 “사탄아 물러가라” 라고 강한 반응을 보이신 것은 예수님의 강력하고 엄중한 경고이다."
      },
      {
        "type": "p",
        "content": "예수님께서 말씀 하신 사탄은 대적자를 의미하며 겉보기로는 하나님나라를 위하는 것처럼 보이지만 하나님의 길에 반대되는 일을 하는 것을 의미한다."
      }
    ],
    "title": "베드로의 왜곡된 기대"
  },
  {
    "date": "03.03",
    "attendees": [
      "건범",
      "민지",
      "서진",
      "주원",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": true,
      "mealTogether": false
    },
    "content": [
      "서진이 생일 케이크",
      "말씀나눔",
      "삶나눔"
    ],
    "photos": [
      "/assets/마을 모임/03 03/KakaoTalk_20240304_232507096.mp4",
      "/assets/마을 모임/03 03/KakaoTalk_20240305_114632267_01.jpg",
      "/assets/마을 모임/03 03/Untitled 1.png",
      "/assets/마을 모임/03 03/Untitled.png"
    ],
    "richContent": [
      {
        "type": "paragraph",
        "content": "예수님의 십자가 구원은 잘 이해되지 않는 부분들이 많기 때문에 신앙을 버리게 되는 경우가 많음"
      },
      {
        "type": "paragraph",
        "content": "십자가의 구원은 이해하기가 어렵기 때문에 섣불리 판단해서도 안되고, 어렵게 이해하는 과정이 필요!!"
      },
      {
        "type": "heading",
        "content": "세상의 질서에 익숙한 우리는 예수님의 생각과 방식에서 멀어져 있다."
      },
      {
        "type": "paragraph",
        "content": "유대인은 표식을(초자연적인 현상) 신앙의 신호라고 생각을 했음"
      },
      {
        "type": "paragraph",
        "content": "하지만 예수님은 이와 다른 모습의 표적과 이적을 보여주심 (예수님은 사람들이 원하는 표적을 경계하심)"
      },
      {
        "type": "paragraph",
        "content": "**예수님은 멸망해야 하는 민족들을 구원하는 기적**을 행하셨지만 사람들은 자신들이 생각하는 표적과는 다르다는 이유로 인정을 하지 않고 자신의 성공을 목적으로 하는 신앙을 가짐"
      },
      {
        "type": "paragraph",
        "content": "우리 현대인들도 마찬가지로 나의 성공과 인정을 추구"
      },
      {
        "type": "paragraph",
        "content": "→ 따라서 예수님을 수단으로 생각하게 됨"
      },
      {
        "type": "paragraph",
        "content": "하지만 이와 반대로 _하나님은 믿을수록 고난스러워 져야함_",
        "underline": true
      },
      {
        "type": "paragraph",
        "content": "**나의 마음에는 어떠한 표적과 마음이 있는가?**"
      },
      {
        "type": "paragraph",
        "content": "우리 마음속에 자리잡은 성공주의와 합리주의"
      },
      {
        "type": "paragraph",
        "content": "→ 따라서 예수님의 방식을 면밀하게 들여다 볼 필요가 있다! 우리의 삶의 방식이 얼마나 동 떨어져 있는지 직면해야 함"
      },
      {
        "type": "heading",
        "content": "예수님은 무력함으로 하나님의 강함이 드러나는 방식을 선택하셔서 그렇게 살아가셨다."
      },
      {
        "type": "paragraph",
        "content": "우리는 과연 고난을 감내 했을 때 하나님 나라가 이루어 질거라는 믿음이 있는가"
      },
      {
        "type": "paragraph",
        "content": "우리의 믿음이 증명하지 않아도 되는 믿음(단순히 말로만 고백하는 믿음)이지는 않은가"
      },
      {
        "type": "paragraph",
        "content": "**가볍게 말로 뱉어낼 수 있는 믿음이 아니라 하나님 나라의 믿음, 고난과 무기력함을 통해 경험할 수 있는 믿음을 가져야 한다.**"
      },
      {
        "type": "paragraph",
        "content": "성공, 성취 등에이 아닌 하나님과의 친밀감, 치유받는 모습 등에서 기쁨을 누릴수 있는 차별된 목적을 가져야 한다."
      },
      {
        "type": "paragraph",
        "content": "하나님을 경험하기 위해서는 우리가 그러한 환경속에 있어야 하므로 세상에서 기뻐하는 것들을 뒤로하고 무기력함과 고난의 현장에 있어야 한다."
      },
      {
        "type": "paragraph",
        "content": "무력함과 최악이라고 느끼는 것에서 강함을 보여주신 예수님"
      },
      {
        "type": "blockquote",
        "content": "숙제: 삶에서 힘을 주고 있던 영역에서 힘을 뻬보기"
      }
    ],
    "title": "세상의 질서에 익숙한 우리는 예수님의 생각과 방식에서 멀어져 있다."
  },
  {
    "date": "03.10",
    "attendees": [
      "건범",
      "민지",
      "서진",
      "예림",
      "주원",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "예배 후 함께 식사",
      "마을원들과 깊은 대화",
      "서로를 위한 기도"
    ],
    "photos": [
      "/assets/마을 모임/03 10/Untitled 1.png",
      "/assets/마을 모임/03 10/Untitled 2.png",
      "/assets/마을 모임/03 10/Untitled.png"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "마을원들은 일찍오고 성경책도 챙겨왔는데 리더가 늦게 오고 성경책도 못챙김..ㅠㅠㅠㅠ 면목이 없습니다…"
      },
      {
        "type": "p",
        "content": "배가 고파서 (주원이가 그렇게 먹고 싶어하던) 엽떡 시키고 말씀 나눔!"
      },
      {
        "type": "p",
        "content": "말씀 나눔이후에 엽떡 먹으면서 삶나눔과 이런 저런 얘기를 나눴습니당"
      },
      {
        "type": "p",
        "content": "이번주는 개강도하고 다들 바쁜 일주일이었는지 다들 피곤해 보이고, 고된 일주일을 보낸것 같네요.."
      },
      {
        "type": "p",
        "content": "나눔 도중에 갑자기 정수형이 우리 마을 커피를 사주겠다고 하셔서 커피를 얻어먹었습니다 ㅠㅠㅠㅠ"
      },
      {
        "type": "p",
        "content": "정수형 감사해요~~~ 커피 잘 마셨습니당 🥰"
      },
      {
        "type": "p",
        "content": "예림이는 맛있게 먹고 정리할때 도망(?)갔지만 각자 역할을 분담해 먹은건 깨끗하게 치우고 마무리 했습니다~"
      },
      {
        "type": "p",
        "content": "말씀 내용"
      },
      {
        "type": "p",
        "content": "니고데모와 예수님의 대화 → 니고데모는 당시 유대교의 입장, 예수님은 기독교의 입장을 대변"
      },
      {
        "type": "p",
        "content": "거듭나지 않으면 하나님의 나라를 볼 수 없다. 성령에 의하지 않으면 거듭남을 이해할 수 없다."
      },
      {
        "type": "heading",
        "content": "우리는 모두 현실에 대한 원망 때문에 참된 현실을 보지 못하고, 하나님을 보지 못한다. 원망이 죽음을 만든다."
      },
      {
        "type": "p",
        "content": "※ 모세의 불뱀과 놋뱀 이야기"
      },
      {
        "type": "p",
        "content": "이스라엘 사람들이 출애굽 이후에 다시 길을 우회해서 가야하는 상황에서 하나님에게 원망하기 시작"
      },
      {
        "type": "p",
        "content": "이전에도 수차례 하나님의 기적을 경험하였지만 계속 반복해서 하나님을 원망하는 이스라엘 사람들"
      },
      {
        "type": "p",
        "content": "→ 끈임없이 원망하게 되는 인간의 한계"
      }
    ],
    "title": "식사 & 기도"
  },
  {
    "date": "03.17",
    "attendees": [
      "건범",
      "민재",
      "민지",
      "예림",
      "주원",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": true,
      "mealTogether": false
    },
    "content": [
      "예배 및 마을 모임",
      "한 주간의 감사 나누기",
      "다음 활동 계획"
    ],
    "photos": [
      "/assets/마을 모임/03 17/KakaoTalk_20240317_201810859_01.jpg",
      "/assets/마을 모임/03 17/KakaoTalk_20240317_201810859_02.jpg"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "카3층 소그룹실이 너무 추운 관계로 엘림 카페에서 마을 모임을 진행했습니다-!"
      },
      {
        "type": "p",
        "content": "오늘은 다들 마을데이하러 나와서 그런지 엘림카페에 다른 마을들도 정말 많았어용"
      },
      {
        "type": "p",
        "content": "음료를 하나씩 시키고 다들 배가 많이 고팠는데 건범이가 허니브레드와 샌드위치, 랩을 사줬습니다 ㅠㅠㅠ😋"
      },
      {
        "type": "p",
        "content": "맛있게 먹으며 말씀에 대해 나누고, 나의 조급한 마음들을 돌아보고 하나님의 응답을 다시금 되새겨 볼 수 있는 시간을 가졌습니다!"
      },
      {
        "type": "p",
        "content": "그리고 다음번에는 다같이 볼링이나 피구를 같이 하기러 기약하며 삶나눔을 하고 마무리 했습니다~"
      },
      {
        "type": "p",
        "content": "한주간 하나님의 시간을 사는 태양마을이 됩시다-!!"
      },
      {
        "type": "blockquote",
        "content": "📖 말씀 내용"
      },
      {
        "type": "p",
        "content": "배경: 이스라엘 백성들을 항상 억눌림을 받는 삶을 살고 있었고, 여호와의 날을 꿈꾸면 살았다."
      },
      {
        "type": "p",
        "content": "그 가운데에 예수님께서는 섬기는 사역을 하시다가 이방인이었던 헬라인들이 나아왔을 때 십자가 사역을 시작하셨다."
      },
      {
        "type": "heading",
        "content": "하나님의 카이로스를 살 때 우리는 평안을 누린다."
      },
      {
        "type": "p",
        "content": "헬라인들이 나아왔을 때 십자가의 사역을 시작한 예수님 → 모든 일에는 적당한 때가 있고 그에 따른 결과가 온다."
      },
      {
        "type": "p",
        "content": "세상에서는 내가 예상한 때에 결과가 나타나지 않고, 나의 계획과 나의 타이밍을 따라주지 않는다. → (세상이 정해놓은 때로 인해) 조급함과 불안함을 느끼게 됨"
      },
      {
        "type": "p",
        "content": "우리는 삶의 방향조차 헷갈려 하는 상황에서 속도에 대한 압박이 있다보니 더욱 불안해짐"
      },
      {
        "type": "p",
        "content": "그래서 우리는 남과 비교하면서 안정감을 찾으려 하고, 이렇게 주변의 영향을 받는 인생은 결국 불안, 불행해짐"
      },
      {
        "type": "p",
        "content": "⇒ 세상의 크로노스에 사는 우리는 조급함을 느끼게 되고, 하나님의 카이로스를 살 때 진정한 평안을 누릴 수 있다."
      }
    ],
    "title": "교제와 나눔"
  },
  {
    "date": "03.24",
    "attendees": [
      "건범",
      "민지",
      "서진",
      "예림",
      "주원",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "예배 및 마을 모임",
      "3월 마지막 모임",
      "4월 계획 세우기"
    ],
    "photos": [
      "/assets/마을 모임/03 24/KakaoTalk_20240324_200024390_02.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_200509456.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_200509456_01.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_200509456_02.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_200509456_03.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_205732203.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_212019895.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_212019895_01.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_212019895_02.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_212019895_03.jpg",
      "/assets/마을 모임/03 24/KakaoTalk_20240324_212019895_04.jpg"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "오늘은 종려주일을 맞아 청년부 예배를 따로 드리지 않고 연합예배가 진행되었습니다!"
      },
      {
        "type": "p",
        "content": "하지만 예배 이후에 청년부는 따로 마대 백일장 모임을 가졌어용"
      },
      {
        "type": "p",
        "content": "부활절에 징행하는 클린 무브먼트 활동에 사용될 마대를 꾸미는 활동을 마을원들과 함께 했는데, 처음에는 산으로 가는 듯 했지만 한명한명 의견을 내며 하나하나 추가하다보니 정말 그럴싸한 결과물이..!!"
      },
      {
        "type": "p",
        "content": "‘부활절을 축하하면서도 그 속에 있는 예수님의 십자가 구원을 잊지 말자!’ 라는 주제로 표현을 했습니당"
      },
      {
        "type": "p",
        "content": "좋은 결과가 있길 바랬지만 크게 기대는 하지 못하고 있었는데.. 무려 1등을..! 했습니다 ㅠㅠㅠ"
      },
      {
        "type": "p",
        "content": "귀찮은 시간에도 같이 함께해주고, 이렇게 열심히 해준 태양마을 최고👍👍👍 이렇게 다 같이 모여 색다른 활동을 하니 재밌었습니다!!"
      }
    ],
    "title": "교제와 나눔"
  },
  {
    "date": "03.31",
    "attendees": [
      "민지",
      "서진",
      "예림",
      "주원",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "부활절 - 영통 클린 무브먼트",
      "함께 식사하며 나눔",
      "봄 나들이 계획"
    ],
    "photos": [
      "/assets/마을 모임/03 31/IMG_9068.jpeg",
      "/assets/마을 모임/03 31/IMG_9069.jpeg",
      "/assets/마을 모임/03 31/IMG_9070.jpeg",
      "/assets/마을 모임/03 31/IMG_9071.jpeg",
      "/assets/마을 모임/03 31/IMG_9072.jpeg",
      "/assets/마을 모임/03 31/IMG_9073.jpeg",
      "/assets/마을 모임/03 31/IMG_9074.jpeg",
      "/assets/마을 모임/03 31/IMG_9075.jpeg",
      "/assets/마을 모임/03 31/IMG_9076.png",
      "/assets/마을 모임/03 31/IMG_9195.jpeg",
      "/assets/마을 모임/03 31/IMG_9196.jpeg",
      "/assets/마을 모임/03 31/IMG_9197.jpeg"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "부활절 - 영통 클린 무브먼트"
      },
      {
        "type": "paragraph",
        "content": "부활절을 맞이해 예배 이후에 청년부 다같이 마을원들과 함께 영통 중심상가를 청소하는 클린 무브먼트를 진행했습니다-! 직접 꾸민 마대를 가지고 다같이 길가에 있는 쓰레기들을 주으며 다양함 감정들을 공유하고 또 새로운 경험과 뿌듯함을 느끼게 되는 활동이었습니다:)"
      },
      {
        "type": "paragraph",
        "content": "열심히 봉사한 뒤 출출해진 마을원들과 함께 지난번 마대 백일장에서 1등한 보상으로 받은 마을데이 지원금을 가지고 배달음식을 시켜먹었습니다!!"
      },
      {
        "type": "paragraph",
        "content": "태영마을의 태영이와 치영이도 함께 맛있게 식사하는 자리를 가지고, 또 빽다방에서 음료수도 사먹고 마무리까지 깔끔하게!! 하고 마무리했습니다"
      },
      {
        "type": "paragraph",
        "content": "태양마을 너무 고생했다~!!"
      }
    ],
    "title": "부활절 - 영통 클린 무브먼트"
  },
  {
    "date": "04.07",
    "attendees": [
      "건범",
      "민지",
      "서진",
      "예림",
      "주원",
      "지민",
      "지영",
      "찬규",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "태양 마을 첫 피크닉",
      "새로운 마을원 환영 (찬규, 지민)",
      "영흥공원에서 함께 식사하며 친목"
    ],
    "photos": [
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202112556.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202112556_01.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202112556_02.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202247834.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202247834_01.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202247834_02.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202247834_03.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202247834_04.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202247834_05.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_202247834_06.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_233654419.jpg",
      "/assets/마을 모임/04 07/KakaoTalk_20240407_233654419_01.jpg",
      "/assets/마을 모임/04 07/Untitled.png"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "태양 마을 첫 피크닉-!!"
      },
      {
        "type": "paragraph",
        "content": "날씨가 많이 좋아져서 봄이 온김에 처음으로 다같이 나간 피크닉!!"
      },
      {
        "type": "paragraph",
        "content": "오늘은 군대에서 휴가나온 찬규와 마을에 새로 합류하게 된 지민이가 같이 모임을 했습니다-! (feat. 오랜만에 올라온 지영이)"
      },
      {
        "type": "paragraph",
        "content": "예배 마치고 다같이 돗자리와 보드게임을 챙겨서 영흥공원으로 갔습니당"
      },
      {
        "type": "paragraph",
        "content": "그런데 그늘이 하나도 없어서 생각보다 강렬한 햇빛에 다같이 구워졌던… 해가 있을땐 덥고, 해가 지니까 또 춥고"
      },
      {
        "type": "paragraph",
        "content": "그래도 엽떡에 허니콤보는 역대급으로 맛있었다 ㅠ"
      },
      {
        "type": "paragraph",
        "content": "사람도 가장 많이 모인날이라 자리도 좁고 음료수도 쏟고(주원) 정신없었지만 맛있게 밥을 먹고 즐거운 시간을 보냈습니당"
      },
      {
        "type": "paragraph",
        "content": "다같이 하려고 보드게임도 챙겼는데 막상 자리가 애매해서 가져간 보드게임은 안하고, 라이어게임이랑 마피아 게임 하기-!"
      },
      {
        "type": "paragraph",
        "content": "건범이가 사준 메가커피도 다같이 맛있게 먹고, 재밌게 수다를 떨다가 해 지고 나서 사진을 찍고 마무리 했습니당"
      },
      {
        "type": "paragraph",
        "content": "6층에서 돗자리 정리하다가 튀어나와있던 구조물에 건범이가 머리를 부딪혀 머리가 찢어져서 피가 철철.. 건범이를 집까지 잘 데려다 주고 건범이는 바로 응급실에 가서 머리에 호치키스 빵빵빵"
      },
      {
        "type": "paragraph",
        "content": "다사다난 하고 시끌벅적했던 태양 마을 첫 피크닉 끝-!"
      },
      {
        "type": "paragraph",
        "content": "이번 기회로 다들 더 친해질 수 있었던 것 같아 즐거웠습니다 :)"
      },
      {
        "type": "blockquote",
        "content": "**위로** - 마을안에서 위로를 받고 마음의 안식처가 되었으면 좋겠다.\n**성숙** - 한 해동안 마을 안에서 지내며 신앙적으로도 함께 성숙해 질 수 있는 마을이 되었으면 좋겠다.\n**사랑** - 우리 마을 안에서는 항상 서로 사랑하고, 아껴주는 관계가 형성되면 좋겠다.\n**재미** - 무엇보다도 이 관계가 부담스럽지 않고, 마을 사람들과 함께하는 모든 시간이 편안하고 즐거운 시간이면 좋겠다."
      },
      {
        "type": "paragraph",
        "content": "무엇보다 마을원들이 마을모임을 하고 교제하면서 많이 치유가 되고, 재미를 느끼게 된 같아서 정말 행복하고 감사합니다"
      },
      {
        "type": "paragraph",
        "content": "앞으로도 태양마을이 지금보다도 관계가 더 깊어져서 어려운 마음들도 함께 나누어 치유받고, 신앙의 진지함을 가지고 신앙적으로도 성장할 수 있는 계기가 되길 희망합니다"
      }
    ],
    "title": "태양 마을 첫 피크닉-!!"
  },
  {
    "date": "04.14",
    "attendees": [
      "건범",
      "민재",
      "민지",
      "예림",
      "주원",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "예배 후 마을 모임",
      "함께 식사",
      "주간 나눔 시간"
    ],
    "photos": [
      "/assets/마을 모임/04 14/IMG_9467.mov",
      "/assets/마을 모임/04 14/IMG_9468.jpeg",
      "/assets/마을 모임/04 14/IMG_9469.jpeg",
      "/assets/마을 모임/04 14/IMG_9470.jpeg",
      "/assets/마을 모임/04 14/IMG_9471.jpeg",
      "/assets/마을 모임/04 14/IMG_9473.jpeg",
      "/assets/마을 모임/04 14/IMG_9474.jpeg",
      "/assets/마을 모임/04 14/IMG_9475.jpeg"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "오늘은 3층에서 간단하게 말씀 나눔을 가지고, 마을 다같이 밥을 먹으러 밖으로 나갔습니다!"
      },
      {
        "type": "p",
        "content": "오늘부터 먹 gpt 역할은 잘먹는 주원이가 담당하기로 했습니다-!"
      },
      {
        "type": "p",
        "content": "밥을 먹으러 가츠맘으로 가서 맛있게 밥을 먹었고, 그동안 행사때문에 챙겨주지 못했던 약 한달전의 예림이의 생일을 드디어 챙겨줄 수 있었습니다 ㅠㅠㅠ 예림아 생일 축하했어!!!"
      },
      {
        "type": "p",
        "content": "밥을 먹고 나서 현주 마을의 준현이랑 진경이를 만나 같이 아이스크림도 같이 먹었습니다:)"
      }
    ],
    "title": "식사 & 나눔"
  },
  {
    "date": "04.21",
    "attendees": [
      "건범",
      "민지",
      "서진",
      "예림",
      "주원",
      "지민",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "건범이 생일 축하",
      "케이크와 함께 축하",
      "즐거운 마을 모임"
    ],
    "photos": [
      "/assets/마을 모임/04 21/IMG_1748.jpeg",
      "/assets/마을 모임/04 21/_talkv_wvndRUK0ha_kgkmEkTprs2q5Co3vaKf51_talkv_high.mp4"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "이번 주일은 건범이의 생일 당일 이었습니다! 예배를 마치고 서프라이즈(?)로 준비한 케이크를 건범이에게 전달해 주었습니다~~"
      },
      {
        "type": "p",
        "content": "건범아 생일 축하해!!!"
      },
      {
        "type": "p",
        "content": "이번주는 시험기간이라 그런지 다들 피곤해 보였습니다 ㅠㅠ 그래서 마을 모임은 말씀나눔만 하고 최대한 빠르게 끝내고 집에 보내기로 했습니당"
      },
      {
        "type": "p",
        "content": "마을 모임에서 이번 말씀 내용과 이번 한 주간 어떻게 보낼것인지 나누고 나서 각자를 위해 필요한 것을 하나씩 해주는 일주일을 보내기로 하고 마을 모임을 마무리 하였습니다."
      },
      {
        "type": "p",
        "content": "마을 모임이후에는 배고픈 사람만 남아서 같이 이삭 토스트를 먹으로 가기로 했습니다. 다른 친구들은 시험 준비를 하러 먼저 가고, 민지와 예림이만 남아 같이 밥을 먹으러 갔습니다!"
      },
      {
        "type": "p",
        "content": "대학생들은 시험기간이라 정말 피곤하고 힘들텐데 지치지 않고 시험 잘 마무리 할 수 있기를..!!"
      },
      {
        "type": "p",
        "content": "다른 친구들도 지치지 않고, 준비하고 있는 일들, 하고 있는 일들 모두 잘 마무리 할 수 있길 기도합니다😊"
      }
    ],
    "title": "생일축하"
  },
  {
    "date": "04.28",
    "attendees": [
      "건범",
      "민지",
      "서진",
      "예림",
      "주원",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "4월 마지막 모임",
      "5월 계획 논의",
      "기도 제목 나누기"
    ],
    "photos": [
      "/assets/마을 모임/04 28/0224EB11-557C-4153-A0D7-CE36A71261B8.jpeg",
      "/assets/마을 모임/04 28/07CF43AE-9890-472F-9490-0C2BD6D3B6B3.jpeg",
      "/assets/마을 모임/04 28/136A0576-37A6-4ACB-AD7A-727641800719.jpeg",
      "/assets/마을 모임/04 28/164A4F1B-5026-4C68-9C84-0E2F7E3D4978.jpeg",
      "/assets/마을 모임/04 28/36EF2651-8544-46B3-BD45-109F2F55B4C9.jpeg",
      "/assets/마을 모임/04 28/5AEB036D-7B3F-43E8-855C-695887401A21.jpeg",
      "/assets/마을 모임/04 28/61BFC93D-0ECC-4223-9450-968B05D2D7DA.jpeg",
      "/assets/마을 모임/04 28/6A8F2846-B7A5-422A-AE42-64E35E20053A.jpeg",
      "/assets/마을 모임/04 28/829C41FB-7C94-45BB-BF46-451828498FB4.jpeg",
      "/assets/마을 모임/04 28/D07B8CC6-7CDA-4A8E-ACD4-DC404B11277E.jpeg",
      "/assets/마을 모임/04 28/E26AE47F-FE0F-46F2-8223-0856E1283DFF.jpeg"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "청년부 체육대회-!"
      },
      {
        "type": "p",
        "content": "오늘은 청년부끼리 체육대회를 진행했습니다-!"
      },
      {
        "type": "p",
        "content": "시험도 거의 끝나 청년부 전체가 다같이 루터대학교로 가서 체육대회를 진행하게 되었는데요..! 우리 마을은 ‘위러브 팀‘으로 함께하게 되었습니당"
      },
      {
        "type": "p",
        "content": "몸풀기 → 족구 → 짝피구 → 식사 → 장애물 달리기 순으로 체육대회가 진행되었고, 역시 태양마을의 활약이..!👍"
      },
      {
        "type": "p",
        "content": "예림이는 족구에서 거의 배구 선수마냥 너무 잘해줬고, 주원이는 짝피구에서 전설을 써버렸다… 몸을 아끼지 않는 주원이에게 MVP 목걸이가 주어집니다.."
      },
      {
        "type": "p",
        "content": "결과적으로 총 경기는 위러브 팀이 패배하였지만 즐거운 시간이었고, 마지막 경품 추첨에서 우리 마을에서는 좋은 경품을 많이 받아가지 못한게 너무 아쉽.. ㅠㅠㅠㅠ"
      },
      {
        "type": "p",
        "content": "처음에 농구도 너무 재미있었고, 나중에 우리 마을끼리 나가서 운동해도 너무 재밌을것 같다는 생각이 들었습니다!!!다들 고생많았고 다친 곳 없어서 정말 다행이에용 푹 쉬세요~~"
      }
    ],
    "title": "청년부 체육대회-!"
  },
  {
    "date": "05.05",
    "attendees": [
      "민재",
      "민지",
      "예림",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "어린이날 모임",
      "예배 및 나눔",
      "감사의 시간"
    ],
    "photos": [],
    "richContent": [
      {
        "type": "p",
        "content": "이번주에는 마을 원들이 다들 바쁘고 피곤해서 적은 인원이 모여 빠르게 말씀 나눔만 하고 마쳤습니다-!"
      },
      {
        "type": "p",
        "content": "다들 피곤한 일주일을 보낸것 같은데 피곤한 일상 속에서도 하나님의 말씀으로 충만할 수 있는 태양마을이 되길 원합니다!!"
      },
      {
        "type": "heading",
        "content": "고녤로의 성령 입음"
      },
      {
        "type": "p",
        "content": "하나님께서 베드로를 만나게 했던 고녤로는 성령충만한 모습을 보여 베드로의 선입견이 깨지게 하였습니다."
      },
      {
        "type": "p",
        "content": "고녤로의 성령입음은 두가지 모습으로 나타납니다."
      },
      {
        "type": "heading",
        "content": "1. 방언"
      },
      {
        "type": "p",
        "content": "방언은 언어가 소통이 되는 방언과 뜻을 알 수 없는 방언으로 나눠집니다. 하지만 이 구절에서 언급하는 방언은 또 다른 형태인 새로운 경험을 통해 열리게 된 새로운 언어를 의미합니다."
      },
      {
        "type": "p",
        "content": "이는 방언이 단순히 언어의 개념이 아닌 하나님의 세계를 열어주는 것임을 의미합니다."
      },
      {
        "type": "p",
        "content": "하나님을 경험함으로 신앙의 언어를 더 깊게 하여 하나님과 더욱 친밀한 관계를 맺기 바랍니다."
      },
      {
        "type": "heading",
        "content": "2. 하나님을 높이는 것"
      },
      {
        "type": "p",
        "content": "하나님을 높이는 것에는 두가지 전제가 따릅니다."
      },
      {
        "type": "p",
        "content": "인간의 속성은 자신의 연약함 감추기 위해 자신을 높이지 않으면 견디지 못하기 때문에 결국 자기자신이 높아지는 방향으로 행동하게 된다."
      },
      {
        "type": "p",
        "content": "이는 예수님의 방식과 반대되므로 우리는 예수님이 행하셨던 방식들을 기억해야 하고, 나의 행동의 기저에 있는 나의 마음을 들여다 볼 수 있어야 한다."
      },
      {
        "type": "p",
        "content": "세상에는 하나님의 영광보다 더 크게 작용하는 것들이 많이 존재한다. 돈, 영광, 인정, 명예 등이 하나님 중요해져 하나님의 영광을 가리게 된다."
      },
      {
        "type": "p",
        "content": "우리는 내 안에 하나님보다 크게 있는 것들과 씨름하여 성령의 임재를 추구해야 한다."
      }
    ],
    "title": "고녤로의 성령 입음"
  },
  {
    "date": "05.12",
    "attendees": [
      "민지",
      "예림",
      "주원",
      "지민",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "5월 둘째 주 모임",
      "예배 및 교제",
      "서로를 위한 기도"
    ],
    "photos": [
      "/assets/마을 모임/5 12/KakaoTalk_20240527_095651526.jpg",
      "/assets/마을 모임/5 12/KakaoTalk_20240527_095651526_01.jpg",
      "/assets/마을 모임/5 12/KakaoTalk_20240527_095651526_02.jpg",
      "/assets/마을 모임/5 12/KakaoTalk_20240527_095651526_04.jpg",
      "/assets/마을 모임/5 12/KakaoTalk_20240527_095651526_05.jpg",
      "/assets/마을 모임/5 12/KakaoTalk_20240527_095657326.jpg",
      "/assets/마을 모임/5 12/KakaoTalk_20240527_095657326_01.jpg"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "이번주는 마을데이로 멜라카에서 모임을 진행했습니다~~!"
      },
      {
        "type": "p",
        "content": "멜라카 2층은 처음 올라가봤는데 2층에 우리밖에 없어서 너무 시끄럽게 떠들어서 1층분들께 민폐를… 죄송합니다…"
      },
      {
        "type": "p",
        "content": "말씀 나눔을 나누고 각자의 삶에 적용해 보는 시간은 가진 뒤에 음료와 디저트로 시켜서 수다를 떨며 즐거운 시간을 보냈습니다!"
      },
      {
        "type": "p",
        "content": "허니브레드 주문이 누락돼서 사장님이 서비스로 펜케이크(?)도 주셨습니다~~~!~!"
      }
    ],
    "title": "기도"
  },
  {
    "date": "05.19",
    "attendees": [
      "민지",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "소규모 모임",
      "깊은 대화와 나눔",
      "함께 식사"
    ],
    "photos": [
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221905842.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221905842_01.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221905842_02.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221905842_03.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221905842_04.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221905842_05.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_01.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_02.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_03.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_04.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_05.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_06.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_07.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_08.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_09.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_10.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_11.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_12.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_13.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_14.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_15.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_16.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_17.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_18.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_19.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_20.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_21.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221909335_22.jpg",
      "/assets/마을 모임/5 19/KakaoTalk_20240526_221911962.mp4"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "체육대회"
      },
      {
        "type": "p",
        "content": "오늘은 전교인 체육대회가 있어 연합예배를 드리고 체육대회로 바로 출발했습니다!"
      },
      {
        "type": "p",
        "content": "체육대회에 참여하는 인원이 많이 없어 현주마을과 함께 이동을 했습니다."
      },
      {
        "type": "p",
        "content": "원래는 민지와 태양만 있었는데 근처에 있던 지영이도 합류하게 되어서 함께 체육대회를 끝까지 함께하고 갔습니다! ㅋㅋㅋㅋㅋ"
      },
      {
        "type": "p",
        "content": "날씨가 너무 뜨거워서 조금은 힘들고 지영이도 발목이 안좋아서 힘들어하기는 했지만 그래도 다같이 닭강정도 먹고, 김밥도 먹고 함께 체육대회를 참여하며 즐거운 시간을 보냈습니다!"
      },
      {
        "type": "p",
        "content": "그리고 다른 마을 사람들과도 친해질 수 있는 기회여서 좋았어요 :)"
      },
      {
        "type": "p",
        "content": "그리고 전혀 예상치도 못했는 청년부가 무려 3등!! 다음 체육대회에는 더 많은 사람들이 함께하면 재밌을거 같아요~!!"
      }
    ],
    "title": "체육대회"
  },
  {
    "date": "05.26",
    "attendees": [
      "건범",
      "민재",
      "민지",
      "서진",
      "예림",
      "주원",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "5월 마지막 모임",
      "함께 식사",
      "6월 계획 세우기"
    ],
    "photos": [
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_01.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_02.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_03.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_04.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_05.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_06.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_07.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_08.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_09.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_10.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_11.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_184715945_12.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_01.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_02.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_03.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_04.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_05.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_06.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_07.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_08.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_09.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_10.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_11.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_12.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_13.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_14.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_15.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_16.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_17.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_18.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_19.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_20.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_21.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_22.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_23.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_24.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_25.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200104473_26.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200108051.mp4",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200114773.mp4",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_200120388.mp4",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_202114055.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_202114055_01.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_202116379.mp4",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_202118681.mp4",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_203546272.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_01.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_02.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_03.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_04.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_05.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_06.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_07.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_08.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_09.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_10.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_11.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_12.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_13.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_14.jpg",
      "/assets/마을 모임/5 26/KakaoTalk_20240526_205605511_15.jpg"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "주원이 마지막 청년부 예배 ㅠ"
      },
      {
        "type": "p",
        "content": "주원이가 입시 준비로 인해 청년부예배를 드리지 못하게 되어 마지막으로 같이 나가 노는 시간을 가졌습니다..!"
      },
      {
        "type": "p",
        "content": "레드버튼에서 보드게임을 하면서 밥을 같이 먹었는데 사실 먹은 기억밖에 없는 보드게임카페 ㅋㅋ쿠ㅜㅜ"
      },
      {
        "type": "p",
        "content": "게임에서 진 사람이 간식들을 사기러 했지만 거의 다 내가 걸린것 같은 느낌..🥲 윤서진, 박주원 최대 수혜자.."
      },
      {
        "type": "p",
        "content": "루미큐브, 크라켄, 달무티, 젠가를 하며 즐거운 시간을 보냈습니당 (+훈민정음 똥쓰기)"
      },
      {
        "type": "p",
        "content": "3시간이라는 시간이 후딱 지나가고 게임이 끝나고 나서는 인생네컷에서 사진도 찍었습니당"
      },
      {
        "type": "p",
        "content": "주원아 입시 준비 잘하고, 다시 보자!! 태양마을 포에버-"
      }
    ],
    "title": "주원이 마지막 청년부 예배 ㅠ"
  },
  {
    "date": "06.02",
    "attendees": [
      "민지",
      "지민",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "6월 첫 모임",
      "예배 및 나눔",
      "기도 시간"
    ],
    "photos": [
      "/assets/마을 모임/06 02/IMG_0193.mov",
      "/assets/마을 모임/06 02/IMG_0194.jpeg"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "민재없는 민재 생일파티"
      },
      {
        "type": "p",
        "content": "시험기간이라 그런지 허전해진 태양마을.."
      },
      {
        "type": "p",
        "content": "민재 생일 축하를 위해 케이크를 사왔는데 민재가 일이 있어서 먼저 집에 가버렸습니다..ㅠㅠㅠㅠ"
      },
      {
        "type": "p",
        "content": "그래서 아쉽지만 민재에게 영상편지라도 남기기!"
      },
      {
        "type": "p",
        "content": "시험기간이고 다들 바쁜 와중에 있겠지만, 이번주 말씀처럼 열심히 달려가다가도 잠시 멈추고 하나님을 바라볼 수 있는 태양마을이 되기 원합니다!"
      }
    ],
    "title": "민재없는 민재 생일파티"
  },
  {
    "date": "06.09",
    "attendees": [
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "개인 묵상 시간",
      "기도와 말씀"
    ],
    "photos": [
      "/assets/마을 모임/06 09/Untitled 1.png",
      "/assets/마을 모임/06 09/Untitled.png"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "연합 마을 모임"
      },
      {
        "type": "p",
        "content": "이번주는 시험 바로 직전이라 그런지 2청년부 인원들이 전부 전멸했습니다.."
      },
      {
        "type": "p",
        "content": "다른 마을원들도 다들 오지 못해서 이번에는 주호, 현주 마을과 함께했습니다!"
      },
      {
        "type": "p",
        "content": "오늘 마을모임에 참석한 인원은 태양, 주은, 현주, 예린 입니당"
      },
      {
        "type": "p",
        "content": "서로 일주일간의 삶을 나누고 시험기간을 겪으며 느꼈던 어려움들을 공유하였습니다."
      },
      {
        "type": "p",
        "content": "그리고 그 와중에 신앙적으로 경험한 어려움들을 나누는 시간을 보냈습니다!"
      },
      {
        "type": "p",
        "content": "예린이는 마을모임 이후에 바로 가야해서 먼저 가고, 주은이와 현주와 이삭토스트에서 식사를 함께했습니다-!"
      },
      {
        "type": "p",
        "content": "태양마을 인원들이 없어서 아쉬웠지만 다들 시험기간 힘내서 잘 마무리 하길!!!"
      }
    ],
    "title": "연합 마을 모임"
  },
  {
    "date": "06.16",
    "attendees": [
      "민지",
      "지민",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "예배 및 마을 모임",
      "주간 나눔"
    ],
    "photos": [],
    "richContent": [
      {
        "type": "p",
        "content": "이번 주는 시험주간이라 그런지 인원이 많이 없어 간단하고 말씀 나눔하고 삶 나눔을 하고 마쳤습니다!"
      },
      {
        "type": "p",
        "content": "하나님 나라는 마치 겨자씨와 같습니다. 우리의 삶 속에서 하나님의 삶의 방식대로 살아가는 것이 하나님 나라의 시작이 될 수 있음을 기억하면서 한 주간 살아가길 바래요!"
      },
      {
        "type": "p",
        "content": "다들 시험 잘 마무리하고 다시 돌아오길 바랍니다~~"
      }
    ],
    "title": "나눔"
  },
  {
    "date": "06.23",
    "attendees": [
      "민지",
      "서진",
      "예림",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": true
    },
    "content": [
      "예배 후 함께 식사",
      "여름 계획 논의",
      "기도 제목 나누기"
    ],
    "photos": [
      "/assets/마을 모임/06 23/Untitled 1.png",
      "/assets/마을 모임/06 23/Untitled.png"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "종강 후 마을데이~"
      },
      {
        "type": "p",
        "content": "드디어 시험기간이 끝이나고 그동안 마을모임에 잘 참석하지 못했던 친구들도 함께 모임을 가질 수 있게 되었습니다-!"
      },
      {
        "type": "p",
        "content": "6월 마을데이 비용으로 멜라카에서 마을 모임을 가지면서 각자 삶속의 고민들을 공유하고 각자의 신앙을 점검해보는 시간을 가졌습니다."
      },
      {
        "type": "p",
        "content": "그리고 바쁜 일상으로 인해 밥도 잘 챙겨먹지 못하는 예림이를 위해 서진이가 호두과자를 사줘 함께 나눠먹으며 오랜만에 즐거운 대화를 나눴습니다 🙂"
      },
      {
        "type": "p",
        "content": "각자의 삶속에서 치열하게 살아가다가도 이 모임이 마음속의 치유가 되는 시간이 되면 좋겠습니다. 다른 친구들도 같이 볼 수 있길..!"
      }
    ],
    "title": "종강 후 마을데이~"
  },
  {
    "date": "06.30",
    "attendees": [
      "민지",
      "예림",
      "지민",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "6월 마지막 모임",
      "상반기 회고",
      "7월 계획"
    ],
    "photos": [],
    "richContent": [
      {
        "type": "p",
        "content": "이번주는 서진이가 여행을 가서 참석하지 못했고, 민재도 아직 과제들이 끝나지 않아 참석하지 못했습니다 ㅠㅠ"
      },
      {
        "type": "p",
        "content": "이번주에는 이제 다들 방학을 맞아 또 오랜만에 지영이가 함께할 수 있어 반가웠습니다!"
      },
      {
        "type": "p",
        "content": "그동안 시험기간이라 인원이 많이 없었는데 그간 어떻게 지냈는지 근황을 나누고, 어려운 일들을 없었는지 나누는 시간을 가졌습니다."
      },
      {
        "type": "p",
        "content": "이제 방학도 시작했으니 다들 자주 볼 수 있으면 좋겠습니다!!"
      }
    ],
    "title": "교제와 나눔"
  },
  {
    "date": "07.07",
    "attendees": [
      "민재",
      "민지",
      "서진",
      "예림",
      "지영"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "7월 첫 모임",
      "예배 및 교제",
      "여름 활동 계획"
    ],
    "photos": [
      "/assets/마을 모임/07 07/Untitled 1.png",
      "/assets/마을 모임/07 07/Untitled.png"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "이번주는 제가 여행 일정이 있어 저 대신 현주마을에서 마을 모임이 진행됐습니다!"
      },
      {
        "type": "p",
        "content": "제가 없으니 마을 모임 안하고 도망가겠다고 하던 친구들이 다들 모여서 마을모임 참석하고 있는 사진을 보니 흐뭇하군요!"
      },
      {
        "type": "p",
        "content": "우리 마을원들까지도 챙겨준 현주에게 정말 고마웠습니다 :)"
      },
      {
        "type": "p",
        "content": "다음부터는 주일을 빠지는 일은 없도록..!"
      }
    ],
    "title": "교제와 나눔"
  },
  {
    "date": "07.14",
    "attendees": [
      "민재",
      "민지",
      "서진",
      "예림",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "예배 및 마을 모임",
      "지영이 생일 축하",
      "즐거운 시간"
    ],
    "photos": [
      "/assets/마을 모임/07 14/KakaoTalk_20240714_174039978.jpg",
      "/assets/마을 모임/07 14/KakaoTalk_20240714_174039978_01.jpg",
      "/assets/마을 모임/07 14/KakaoTalk_20240714_174039978_02.jpg",
      "/assets/마을 모임/07 14/KakaoTalk_20240714_174039978_03.jpg",
      "/assets/마을 모임/07 14/KakaoTalk_20240714_174039978_04.jpg"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "이번주는 현주마을과 함께 연합 마을데이를 가졌습니다!!"
      },
      {
        "type": "p",
        "content": "두 마을 모두 인원이 적은 것 같아 연합을 했는데 모이고 나니 생각보다 사람이 많네요..!"
      },
      {
        "type": "p",
        "content": "엘림 2층을 가득 채워 모임을 가졌는데 인원이 많다보니 두 그룹으로 나눠져 이야기를 나눴던 것 같습니다."
      },
      {
        "type": "p",
        "content": "카페에 와서도 작업을 하는 예림이…ㅜㅜ 체력적으로 지치지 않도록 기도와 격려가 많이 필요할 것 같습니다.."
      },
      {
        "type": "p",
        "content": "지영이가 갑자기 머리가 노래져서 와서 많이 놀랐는데 또 정말 잘어울리는 것 같습니다👍"
      },
      {
        "type": "p",
        "content": "가끔씩 다른 마을과 함께 시간을 가지는 것도 좋은 것 같아요! 즐거운 시간이었습니다 :)"
      }
    ],
    "title": "생일축하"
  },
  {
    "date": "07.21",
    "attendees": [],
    "content": [],
    "photos": [
      "/assets/마을 모임/07 21/KakaoTalk_20240728_204824393.jpg",
      "/assets/마을 모임/07 21/KakaoTalk_20240728_204824393_01.jpg"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "title": "마을 모임"
  },
  {
    "date": "07.28",
    "attendees": [],
    "content": [],
    "photos": [
      "/assets/마을 모임/07 28/Untitled 1.png",
      "/assets/마을 모임/07 28/Untitled.png"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "title": "마을 모임"
  },
  {
    "date": "08.04",
    "attendees": [],
    "content": [],
    "photos": [
      "/assets/마을 모임/08 04/KakaoTalk_20240804_215103453.jpg",
      "/assets/마을 모임/08 04/KakaoTalk_20240804_215103453_01.jpg",
      "/assets/마을 모임/08 04/KakaoTalk_20240804_215103453_02.jpg",
      "/assets/마을 모임/08 04/KakaoTalk_20240804_215219352.mp4"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "title": "마을 모임"
  },
  {
    "date": "08.15~08.17",
    "attendees": [
      "건범",
      "민재",
      "서진",
      "예림",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "여름 수련회",
      "2박 3일 함께 보내기",
      "은혜와 감동의 시간",
      "깊은 교제와 나눔"
    ],
    "photos": [
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_01.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_02.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_03.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_04.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_05.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_06.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_07.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_08.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_09.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_10.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_11.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_12.jpg",
      "/assets/마을 모임/0815-0817-summer-retreat/KakaoTalk_20241208_194807148_13.jpg"
    ],
    "richContent": [],
    "title": "교제와 나눔"
  },
  {
    "date": "08.18",
    "attendees": [],
    "content": [],
    "photos": [
      "/assets/마을 모임/08 18/KakaoTalk_20241208_194807148_14.jpg",
      "/assets/마을 모임/08 18/KakaoTalk_20241208_194807148_15.jpg"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "title": "마을 모임"
  },
  {
    "date": "09.01",
    "attendees": [
      "건범",
      "민지",
      "서진",
      "예림",
      "지민",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "9월 첫 모임",
      "하반기 시작",
      "새로운 각오"
    ],
    "photos": [
      "/assets/마을 모임/09 01/KakaoTalk_20241208_194807148_16.jpg",
      "/assets/마을 모임/09 01/KakaoTalk_20241208_194807148_17.jpg",
      "/assets/마을 모임/09 01/KakaoTalk_20241208_194807148_18.jpg"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "마을데이"
      },
      {
        "type": "p",
        "content": "내가 빙수 먹고 싶어서 멜라카 감"
      }
    ],
    "title": "마을데이"
  },
  {
    "date": "09.22",
    "attendees": [],
    "activities": {
      "earlyArrival": false,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "태양이 생일",
      "축하 시간"
    ],
    "photos": [
      "/assets/마을 모임/09 22/KakaoTalk_20241208_194824679.mp4"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "태양 생일"
      },
      {
        "type": "p",
        "content": "마을원들의 깜짝 생일파티"
      },
      {
        "type": "p",
        "content": "케이크 나눠 먹기"
      }
    ],
    "title": "태양 생일"
  },
  {
    "date": "10.06",
    "attendees": [],
    "content": [],
    "photos": [
      "/assets/마을 모임/10 06/%EB%AF%BC%EC%A7%80_%EC%83%9D%EC%9D%BC.mp4",
      "/assets/마을 모임/10 06/image.png"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": true,
      "bibleBrought": false,
      "mealTogether": false
    },
    "title": "마을 모임"
  },
  {
    "date": "10.20",
    "attendees": [
      "민재",
      "민지",
      "서진",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "가을 모임",
      "예배 및 나눔"
    ],
    "photos": [
      "/assets/마을 모임/10 20/KakaoTalk_20241208_194807148_19.jpg"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "마을 데이"
      },
      {
        "type": "p",
        "content": "사진 없음 멜라카"
      }
    ],
    "title": "마을 데이"
  },
  {
    "date": "10.27",
    "attendees": [],
    "activities": {
      "earlyArrival": false,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "예배 및 마을 모임"
    ],
    "photos": [
      "/assets/마을 모임/10 27/image.png"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "대회 리허설"
      },
      {
        "type": "p",
        "content": "현주 마을"
      }
    ],
    "title": "마을 모임"
  },
  {
    "date": "11.10",
    "attendees": [
      "민지",
      "예림",
      "주원",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "11월 모임",
      "예배 및 교제",
      "감사의 시간"
    ],
    "photos": [
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194807148_20.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194807148_21.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194807148_22.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194807148_23.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194807148_24.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194807148_25.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194807148_26.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194807148_27.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194828493.mp4",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194905571.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194905571_01.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194905571_02.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194905571_03.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194905571_04.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194905571_05.jpg",
      "/assets/마을 모임/11 10/KakaoTalk_20241208_194905571_06.jpg"
    ],
    "richContent": [
      {
        "type": "heading",
        "content": "연합예배 + 주원이 수능 응원"
      },
      {
        "type": "p",
        "content": "오늘은 연합예배로 진행되어 청년부 예배는 따로 없었습니다!"
      }
    ],
    "title": "연합예배 + 주원이 수능 응원"
  },
  {
    "date": "12.01",
    "attendees": [
      "민재",
      "민지",
      "예림",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "12월 첫 모임",
      "한 해 마무리 준비",
      "감사 나누기"
    ],
    "photos": [],
    "richContent": [
      {
        "type": "heading",
        "content": "마을 데이"
      },
      {
        "type": "p",
        "content": "한동안 합창연습으로 인해 마을모임이 없었는데 오랜만에 합창 연습 이후에 마을 모임을 진행했습니다-!"
      },
      {
        "type": "p",
        "content": "이번주는 마을데이로 멜라카(또라카..)를 갔습니다. 그래도 오랜만에 모임을 할 수 있게 되어서 좋았어요😋"
      },
      {
        "type": "p",
        "content": "멜라카에서 음료를 마시며 그동안 나누지 못했던 근황들을 공유하는 시간을 가졌습니다. 이제 마을원들에게 음료를 사줄 수 있는 날도 그리 오래 남지 않았네요 🥲"
      },
      {
        "type": "p",
        "content": "민재는 드디어 졸업 작품을 마무리 해서 한동안 여유가 생겼다고 합니다! 하지만 또 면접 준비를 해야해서 바빠질 수 있을것 같아요."
      },
      {
        "type": "p",
        "content": "지영이는 그동안 많은 이슈들이 있었는데, 우선 오산대로 편입을 하게 돼서 장거리 통학을 벗어나게 되었습니다-!!"
      },
      {
        "type": "p",
        "content": "예림이도 일본과 미국으로 출장을 갈 수도 있다는 좋은 소식을 전해주었습니다. 일정이 수련회와 겹치게 될 가능성이 크긴 하지만 먼 곳에서도 믿음을 잘 유지할 수 있길..!"
      },
      {
        "type": "p",
        "content": "매번 근황을 공유하다보면 제 얘기를 빼먹을때도 많이 있는데 항상 제 근황은 어떤지 물어봐주는 마을원들에게 고마움을 느꼈습니다.. 태양 마을 최고👍"
      }
    ],
    "title": "마을 데이"
  },
  {
    "date": "12.08",
    "attendees": [
      "건범",
      "민재",
      "민지",
      "서진",
      "예림",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": true,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "예배 및 마을 모임",
      "2024년 회고",
      "함께한 시간 돌아보기"
    ],
    "photos": [],
    "richContent": [
      {
        "type": "p",
        "content": "이번주는 마을 모임 참석인원이 많아 오랜만에 다같이 이야기 나눌 수 있어 더욱 좋았어용"
      },
      {
        "type": "p",
        "content": "다 모인 만큼 외부활동을 같이 하면 좋았겠지만 시험기간인 관계로 마을 모임은 빠르게 마무리했습니다"
      }
    ],
    "title": "교제와 나눔"
  },
  {
    "date": "12.22",
    "attendees": [
      "민지",
      "서진",
      "지영",
      "태양"
    ],
    "activities": {
      "earlyArrival": false,
      "photoTaken": false,
      "bibleBrought": false,
      "mealTogether": false
    },
    "content": [
      "크리스마스 전 모임",
      "한 해 감사",
      "새해 계획"
    ],
    "photos": [
      "/assets/마을 모임/12 22/image.png"
    ],
    "richContent": [
      {
        "type": "p",
        "content": "이번주일은 성탄주일로 전야제가 있었습니다!"
      },
      {
        "type": "p",
        "content": "예배를 마치고 나서 바로 리허설을 진행했고, 에림이는 일정이 있어 같이 함께하지 못했습니다ㅠㅠ"
      },
      {
        "type": "p",
        "content": "민지가 무대 소품으로 산타 머리띠를 챙겨왔는데 두개를 챙겨와서 마을원들의 강요(?)로 인해 하나는 제가 하고 무대에 서게 됐습니다….🥲"
      },
      {
        "type": "p",
        "content": "리허설을 마친 뒤 전야제를 무사히 마치고, 청년부 다같이 저녁식사를 했습니다!"
      },
      {
        "type": "p",
        "content": "우리마을원은 다함께 모여 이야기를 나누며 치킨 피자를 함께 나눠 먹었습니다."
      },
      {
        "type": "p",
        "content": "서진이는 아직 꾸준히 연주회에 참석하는 것 같고, 지영이는 이제 이번주부터 실습 출근을 하게 되어 마지막으로 놀 수 있는 시간이었습니다..ㅠ"
      },
      {
        "type": "p",
        "content": "하지만 저는 여행일정이 있어 놀러간다고 놀렸지만..! 진심으로 응원하는 제 마음을 마을원들이 알지!"
      },
      {
        "type": "p",
        "content": "모두 행복한 성탄절, 행복한 연말 보냅시당~!"
      }
    ],
    "title": "교제와 나눔"
  }
];
