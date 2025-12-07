const fs = require('fs');
const path = require('path');

const meetingsDir = path.join(__dirname, '개인 페이지 & 공유된 페이지/태양 마을☀️/마을 모임');
const outputFile = path.join(__dirname, 'public/data/meetings.json');

// Parse HTML content to extract meeting data
function parseHTMLContent(html, date) {
    const meeting = {
        date: date,
        attendees: [],
        activities: {
            earlyArrival: false,
            photoTaken: false,
            bibleBrought: false,
            mealTogether: false
        },
        content: [],
        photos: []
    };

    // Extract attendees
    const attendeesMatch = html.match(/마을 모임 참석 인원<\/span><\/th><td>(.*?)<\/td>/s);
    if (attendeesMatch) {
        const attendeeMatches = attendeesMatch[1].matchAll(/select-value-color-\w+">([^<]+)</g);
        for (const match of attendeeMatches) {
            meeting.attendees.push(match[1]);
        }
    }

    // Extract checkboxes
    const checkboxes = {
        '15분 전에 도착하기': 'earlyArrival',
        '사진 찍기': 'photoTaken',
        '성경 챙겨오기': 'bibleBrought',
        '밥 같이 먹기': 'mealTogether'
    };

    for (const [label, key] of Object.entries(checkboxes)) {
        const regex = new RegExp(`${label}.*?checkbox (checkbox-\\w+)`, 's');
        const match = html.match(regex);
        if (match) {
            meeting.activities[key] = match[1] === 'checkbox-on';
        }
    }

    // Extract content (bullet points)
    const contentMatches = html.matchAll(/<li style="list-style-type:disc">([^<]+)<\/li>/g);
    for (const match of contentMatches) {
        meeting.content.push(match[1]);
    }

    // Extract any paragraphs
    const paragraphMatches = html.matchAll(/<p id="[^"]+">([^<]+)<\/p>/g);
    for (const match of paragraphMatches) {
        if (match[1].trim() && !match[1].includes('class=')) {
            meeting.content.push(match[1]);
        }
    }

    return meeting;
}

// Get all meeting files and directories
function getMeetings() {
    const meetings = [];
    const files = fs.readdirSync(meetingsDir);

    for (const file of files) {
        const filePath = path.join(meetingsDir, file);
        const stat = fs.statSync(filePath);

        // Process HTML files
        if (file.endsWith('.html')) {
            const dateMatch = file.match(/^(\d{2}\s\d{2})/);
            if (dateMatch) {
                const date = dateMatch[1].replace(/\s/g, '.');
                const html = fs.readFileSync(filePath, 'utf8');
                const meeting = parseHTMLContent(html, date);

                // Check for corresponding photo directory
                const photoDir = file.replace(/.html$/, '').replace(/\s\w{32}$/, '');
                const photoDirPath = path.join(meetingsDir, photoDir);

                if (fs.existsSync(photoDirPath) && fs.statSync(photoDirPath).isDirectory()) {
                    const photos = fs.readdirSync(photoDirPath)
                        .filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f))
                        .map(f => `/assets/마을 모임/${encodeURIComponent(photoDir)}/${encodeURIComponent(f)}`);
                    meeting.photos = photos;
                }

                meetings.push(meeting);
            }
        }
    }

    // Sort by date
    meetings.sort((a, b) => {
        const [aMonth, aDay] = a.date.split('.').map(Number);
        const [bMonth, bDay] = b.date.split('.').map(Number);
        return aMonth !== bMonth ? aMonth - bMonth : aDay - bDay;
    });

    return meetings;
}

// Main execution
try {
    console.log('📖 마을 모임 데이터를 파싱하는 중...');

    const meetings = getMeetings();

    // Create data directory if it doesn't exist
    const dataDir = path.join(__dirname, 'public/data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write JSON file
    fs.writeFileSync(outputFile, JSON.stringify(meetings, null, 2), 'utf8');

    console.log(`✅ 완료! ${meetings.length}개의 마을 모임 데이터가 생성되었습니다.`);
    console.log(`📁 파일 위치: ${outputFile}`);
} catch (error) {
    console.error('❌ 오류 발생:', error.message);
    process.exit(1);
}
