// Media Preview State
let currentMediaList = [];
let currentMediaIndex = 0;

// Page Navigation System
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.querySelector(`[data-page-content="${pageName}"]`);
    if (selectedPage) {
        selectedPage.classList.add('active');
        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    // Update navbar style based on page
    const navbar = document.querySelector('.navbar');
    if (pageName === 'home') {
        navbar.classList.remove('on-white-page');
    } else {
        navbar.classList.add('on-white-page');
    }

    // Reload meetings timeline when switching to home or activities page
    if (pageName === 'home' || pageName === 'activities') {
        displayMeetingsTimeline();
    }

    // Reload prayers timeline when switching to prayer page
    if (pageName === 'prayer') {
        displayPrayersTimeline();
    }
}

// Handle navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageName = this.getAttribute('data-page');
        showPage(pageName);
    });
});

// Logo click returns to home
document.querySelector('.nav-logo').addEventListener('click', function() {
    showPage('home');
});

// Handle hero CTA button clicks
document.querySelectorAll('.btn-navigate').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const pageName = this.getAttribute('data-page');
        if (pageName) {
            showPage(pageName);
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add 'scrolled' class when scrolled down
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Observe cards with staggered animation
const animateCards = (selector, delay = 100) => {
    const cards = document.querySelectorAll(selector);
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * delay}ms, transform 0.5s ease ${index * delay}ms`;

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        cardObserver.observe(card);
    });
};

// Apply staggered animations to various card elements
animateCards('.value-card', 100);
animateCards('.role-card', 80);
animateCards('.birthday-item', 60);
animateCards('.bucket-item', 50);
animateCards('.guideline-item', 80);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const shapes = document.querySelectorAll('.shape');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.05;
        shape.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
    });
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add hover effect to role cards
document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeftWidth = '6px';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '4px';
    });
});

// Animate bucket list items on hover
document.querySelectorAll('.bucket-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const check = this.querySelector('.bucket-check');
        if (check) {
            check.style.transform = 'scale(1.2)';
        }
    });

    item.addEventListener('mouseleave', function() {
        const check = this.querySelector('.bucket-check');
        if (check) {
            check.style.transform = 'scale(1)';
        }
    });
});

// Load and display meetings data
// meetingsData is loaded from meetingsData.js

function loadMeetings() {
    if (typeof meetingsData !== 'undefined' && meetingsData.length > 0) {
        displayMeetingsTimeline();
    } else {
        console.error('마을 모임 데이터를 불러오는데 실패했습니다');
    }
}

function displayMeetingsTimeline() {
    // Get all timeline elements (there might be multiple on different pages)
    const timelines = document.querySelectorAll('[id="meetingsTimeline"]');
    if (timelines.length === 0) return;

    timelines.forEach(timeline => {
        timeline.innerHTML = '';

        meetingsData.forEach((meeting, index) => {
            const card = document.createElement('div');
            card.className = 'meeting-date-card';

            const hasContent = meeting.content && meeting.content.length > 0;
            const hasRichContent = meeting.richContent && meeting.richContent.length > 0;

            // Filter out videos to get only photos
            const photos = meeting.photos ? meeting.photos.filter(p => !p.match(/\.(mp4|mov|avi)$/i)) : [];
            const hasPhotos = photos.length > 0;

            // Use the title from meetingsData
            const meetingTitle = meeting.title || '마을 모임';

            // Create preview image or placeholder
            let previewHTML = '';
            if (hasPhotos) {
                card.classList.add('has-photos');
                previewHTML = `
                    <div class="card-preview-image" style="background-image: url('${photos[0]}')">
                        <div class="card-photo-count">${photos.length}장</div>
                    </div>
                `;
            } else {
                // Use default background image for cards without photos
                previewHTML = `
                    <div class="card-preview-image" style="background-image: url('/assets/default-meeting-bg.png')">
                    </div>
                `;
            }

            card.innerHTML = `
                ${previewHTML}
                <div class="card-info">
                    <div class="meeting-date">${meeting.date}</div>
                    <div class="meeting-title">${meetingTitle}</div>
                    ${meeting.attendees.length > 0 ? `<div class="meeting-attendees-count"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>${meeting.attendees.length}명 참석</div>` : ''}
                </div>
            `;

            card.addEventListener('click', () => openMeetingModal(meeting));

            // Staggered animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 30);

            timeline.appendChild(card);
        });
    });
}

function openMeetingModal(meeting) {
    const modal = document.getElementById('meetingModal');
    const modalBody = document.getElementById('modalBody');

    // Build modal content
    let modalHTML = `
        <div class="modal-header">
            <h2 class="modal-date">${meeting.date} 마을 모임</h2>
            <div class="modal-activities">
                ${createActivityBadge('⏰ 15분 전 도착', meeting.activities.earlyArrival)}
                ${createActivityBadge('📸 사진 촬영', meeting.activities.photoTaken)}
                ${createActivityBadge('📖 성경 준비', meeting.activities.bibleBrought)}
                ${createActivityBadge('🍽️ 함께 식사', meeting.activities.mealTogether)}
            </div>
        </div>
    `;

    // Attendees section
    if (meeting.attendees && meeting.attendees.length > 0) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span>👥</span>
                    <span>참석 인원 (${meeting.attendees.length}명)</span>
                </h3>
                <div class="modal-attendees">
                    ${meeting.attendees.map(name => `<span class="attendee-badge">${name}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Content section
    if (meeting.content && meeting.content.length > 0) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span>📝</span>
                    <span>모임 내용</span>
                </h3>
                <ul class="modal-content-list">
                    ${meeting.content.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Rich Content section (with markdown formatting)
    if (meeting.richContent && meeting.richContent.length > 0) {
        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span>✍️</span>
                    <span>상세 내용</span>
                </h3>
                <div class="rich-content">
                    ${meeting.richContent.map(item => renderRichContent(item)).join('')}
                </div>
            </div>
        `;
    }

    // Photos and Videos section
    if (meeting.photos && meeting.photos.length > 0) {
        const imageCount = meeting.photos.filter(p => !p.match(/\.(mp4|mov|avi)$/i)).length;
        const videoCount = meeting.photos.filter(p => p.match(/\.(mp4|mov|avi)$/i)).length;

        let title = '';
        if (imageCount > 0 && videoCount > 0) {
            title = `사진 ${imageCount}장 & 영상 ${videoCount}개`;
        } else if (videoCount > 0) {
            title = `영상 ${videoCount}개`;
        } else {
            title = `사진 ${imageCount}장`;
        }

        modalHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <span>📷</span>
                    <span>모임 ${title}</span>
                </h3>
                <div class="modal-photos">
                    ${meeting.photos.map(photo => {
                        const isVideo = photo.match(/\.(mp4|mov|avi)$/i);
                        if (isVideo) {
                            return `
                                <div class="modal-photo modal-video">
                                    <video controls preload="metadata">
                                        <source src="${photo}" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            `;
                        } else {
                            return `
                                <div class="modal-photo">
                                    <img src="${photo}" alt="마을 모임 사진" loading="lazy" onerror="this.parentElement.style.display='none'">
                                </div>
                            `;
                        }
                    }).join('')}
                </div>
            </div>
        `;
    }

    // No content message
    if ((!meeting.content || meeting.content.length === 0) &&
        (!meeting.photos || meeting.photos.length === 0) &&
        (!meeting.attendees || meeting.attendees.length === 0)) {
        modalHTML += `
            <div class="no-content-message">
                이 날짜의 상세 기록이 없습니다.
            </div>
        `;
    }

    modalBody.innerHTML = modalHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add click handlers to media elements
    if (meeting.photos && meeting.photos.length > 0) {
        const mediaElements = modalBody.querySelectorAll('.modal-photo');
        mediaElements.forEach((element, index) => {
            element.addEventListener('click', () => {
                openMediaPreview(meeting.photos, index);
            });
        });
    }
}

function createActivityBadge(label, completed) {
    const className = completed ? 'completed' : 'incomplete';
    const icon = completed ? '✓' : '✗';
    return `<span class="activity-badge ${className}">${icon} ${label}</span>`;
}

function renderRichContent(item) {
    // Process markdown-style formatting
    let content = item.content || '';

    // Replace **text** with <strong>text</strong>
    content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Replace _text_ with <em>text</em>
    content = content.replace(/_([^_]+)_/g, '<em>$1</em>');

    switch(item.type) {
        case 'heading':
            return `<h3 class="rich-heading">${content}</h3>`;
        case 'blockquote':
            return `<blockquote class="rich-blockquote">${content}</blockquote>`;
        case 'paragraph':
            const className = item.underline ? 'rich-paragraph underlined' : 'rich-paragraph';
            return `<p class="${className}">${content}</p>`;
        default:
            return `<p class="rich-paragraph">${content}</p>`;
    }
}

function closeMeetingModal() {
    const modal = document.getElementById('meetingModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Media Preview Functions
function openMediaPreview(mediaList, startIndex) {
    currentMediaList = mediaList;
    currentMediaIndex = startIndex;

    const modal = document.getElementById('mediaPreviewModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    displayCurrentMedia(true);
    updateNavigationButtons();
}

function closeMediaPreview() {
    const modal = document.getElementById('mediaPreviewModal');
    const content = document.getElementById('mediaPreviewContent');

    // Fade out animation
    content.classList.remove('loaded');

    // Wait for animation to complete
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = '';

        // Clear video if playing
        const video = content.querySelector('video');
        if (video) {
            video.pause();
        }
    }, 200);
}

function displayCurrentMedia(isInitial = false) {
    const content = document.getElementById('mediaPreviewContent');
    const counter = document.getElementById('mediaPreviewCounter');
    const mediaUrl = currentMediaList[currentMediaIndex];

    const isVideo = mediaUrl.match(/\.(mp4|mov|avi)$/i);

    // Remove animation classes
    content.classList.remove('animating', 'switching', 'loaded');

    if (isVideo) {
        content.innerHTML = `
            <video controls autoplay>
                <source src="${mediaUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else {
        content.innerHTML = `<img src="${mediaUrl}" alt="미디어 미리보기">`;
    }

    counter.textContent = `${currentMediaIndex + 1} / ${currentMediaList.length}`;

    // Trigger animation
    requestAnimationFrame(() => {
        if (isInitial) {
            content.classList.add('animating', 'loaded');
        } else {
            content.classList.add('switching', 'loaded');
        }
    });
}

function showPreviousMedia() {
    if (currentMediaIndex > 0) {
        currentMediaIndex--;
        displayCurrentMedia();
        updateNavigationButtons();
    }
}

function showNextMedia() {
    if (currentMediaIndex < currentMediaList.length - 1) {
        currentMediaIndex++;
        displayCurrentMedia();
        updateNavigationButtons();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('mediaPreviewPrev');
    const nextBtn = document.getElementById('mediaPreviewNext');

    prevBtn.disabled = currentMediaIndex === 0;
    nextBtn.disabled = currentMediaIndex === currentMediaList.length - 1;
}

// Modal close handlers
document.getElementById('modalClose')?.addEventListener('click', closeMeetingModal);
document.getElementById('modalOverlay')?.addEventListener('click', closeMeetingModal);

// Media Preview close handlers
document.getElementById('mediaPreviewClose')?.addEventListener('click', closeMediaPreview);
document.getElementById('mediaPreviewOverlay')?.addEventListener('click', closeMediaPreview);
document.getElementById('mediaPreviewPrev')?.addEventListener('click', showPreviousMedia);
document.getElementById('mediaPreviewNext')?.addEventListener('click', showNextMedia);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    const mediaPreviewModal = document.getElementById('mediaPreviewModal');
    const meetingModal = document.getElementById('meetingModal');

    if (e.key === 'Escape') {
        if (mediaPreviewModal.classList.contains('active')) {
            closeMediaPreview();
        } else if (meetingModal.classList.contains('active')) {
            closeMeetingModal();
        }
    }

    // Arrow key navigation for media preview
    if (mediaPreviewModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            showPreviousMedia();
        } else if (e.key === 'ArrowRight') {
            showNextMedia();
        }
    }
});

// Prayer topics data and functions
let prayersData = [];

async function loadPrayers() {
    try {
        const response = await fetch('/data/prayers.json');
        prayersData = await response.json();
        displayPrayersTimeline();
    } catch (error) {
        console.error('기도 제목 데이터를 불러오는데 실패했습니다:', error);
    }
}

function displayPrayersTimeline() {
    const timeline = document.getElementById('prayersTimeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    if (!prayersData || prayersData.length === 0) {
        timeline.innerHTML = '<p style="text-align: center; color: #666;">기도 제목이 없습니다.</p>';
        return;
    }

    // Reverse to show most recent first
    const reversedPrayers = [...prayersData].reverse();

    reversedPrayers.forEach((prayer, index) => {
        const card = document.createElement('div');
        card.className = 'meeting-date-card';

        const hasPrayers = prayer.prayers && prayer.prayers.length > 0;
        const hasImage = prayer.image;

        // Create preview or placeholder
        let previewHTML = '';
        if (hasImage) {
            card.classList.add('has-photos');
            // Use the image path directly from JSON
            const imagePath = prayer.image;
            previewHTML = `
                <div class="card-preview-image" style="background-image: url('${imagePath}')"></div>
            `;
        } else {
            previewHTML = `
                <div class="card-date-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12l7-7 7 7"/>
                        <path d="M12 5c-2 0-4 2-4 4v6c0 1 .5 2 1 2s1-1 1-2v-3"/>
                        <path d="M12 5c2 0 4 2 4 4v6c0 1-.5 2-1 2s-1-1-1-2v-3"/>
                    </svg>
                </div>
            `;
        }

        // Create card content - only show date
        card.innerHTML = `
            ${previewHTML}
            <div class="card-info">
                <div class="card-date">${prayer.date}</div>
            </div>
        `;

        // Make card clickable if there are prayers or an image
        if (hasPrayers || hasImage) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => openPrayerModal(prayer));
        }

        timeline.appendChild(card);
    });
}

function openPrayerModal(prayer) {
    const modal = document.getElementById('meetingModal');
    const modalBody = document.getElementById('modalBody');

    const hasPrayers = prayer.prayers && prayer.prayers.length > 0;
    const hasImage = prayer.image;

    let prayersHTML = '';
    if (hasPrayers) {
        prayer.prayers.forEach(person => {
            prayersHTML += `
                <div class="prayer-person">
                    <h4 class="prayer-person-name">${person.name}</h4>
                    <ul class="prayer-list-detail">
                        ${person.prayers.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    }

    let imageHTML = '';
    if (hasImage) {
        // Use the image path directly from JSON
        const imagePath = prayer.image;
        imageHTML = `
            <div class="modal-media-section">
                <h4>기도제목 사진</h4>
                <div class="modal-media-grid">
                    <img src="${imagePath}" alt="기도제목" class="modal-image">
                </div>
            </div>
        `;
    }

    // Build modal content based on what's available
    let contentSections = '';

    // Only show prayer content section if there are prayers
    if (hasPrayers) {
        contentSections += `
            <div class="modal-content-section">
                <h4>기도 제목</h4>
                ${prayersHTML}
            </div>
        `;
    }

    // Add image section if it exists
    contentSections += imageHTML;

    // If there's no content at all, show a message
    if (!hasPrayers && !hasImage) {
        contentSections = `
            <div class="modal-content-section">
                <p style="text-align: center; color: #999; padding: 2rem;">기록된 내용이 없습니다.</p>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-date">${prayer.date.replace(' 기도', '').replace('제목', '')}</div>
            <h3 class="modal-title">기도 제목</h3>
            <div class="modal-subtitle">${prayer.fullDate.replace('@', '')}</div>
        </div>

        ${contentSections}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Load meetings on page load
document.addEventListener('DOMContentLoaded', () => {
    loadMeetings();
    loadPrayers();
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// SVG Icons
const moonIcon = `
    <svg class="theme-icon moon" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
`;

const sunIcon = `
    <svg class="theme-icon sun" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
    </svg>
`;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.innerHTML = sunIcon;
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update icon
    if (body.classList.contains('dark-mode')) {
        themeIcon.innerHTML = sunIcon;
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.innerHTML = moonIcon;
        localStorage.setItem('theme', 'light');
    }
});

// Console welcome message
console.log('%c🌟 태양 마을에 오신 것을 환영합니다! 🌟',
    'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c함께 성장하고, 사랑하며, 빛나는 공동체',
    'font-size: 14px; color: #764ba2;');
