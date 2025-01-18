// script.js

// Function to redirect to specific pages
function redirectTo(page) {
    window.location.href = page;
}

// Optional animation enhancements
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.style.animation = `slideIn 0.6s ease ${index * 0.2}s forwards`;
        card.style.opacity = '0';
    });

    // FAQ Toggle functionality
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
        const toggleButton = card.querySelector('.faq-toggle');
        const content = card.querySelector('.faq-content');

        toggleButton.addEventListener('click', () => {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

// Keyframes animation via JS for cards
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes slideIn {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`, styleSheet.cssRules.length);

// Chatbot initialization
function initializeChatbot() {
    const chatbox = document.querySelector('.chatbox');
    if (chatbox) {
        chatbox.innerHTML = '<iframe src="https://example-chatbot.com" class="chatbot-iframe"></iframe>';
    }
}

initializeChatbot();

// Nearby doctors functionality
function loadDoctorsList() {
    const doctorsContainer = document.querySelector('.doctor-cards');
    if (doctorsContainer) {
        const doctors = [
            { name: "Dr. Sarah Johnson", specialty: "Psychiatrist", contact: "123-456-7890" },
            { name: "Dr. Mark Lee", specialty: "Therapist", contact: "987-654-3210" },
            { name: "Dr. Emily Davis", specialty: "Psychologist", contact: "456-123-7890" }
        ];

        doctors.forEach(doctor => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <div class="card-content">
                    <h2>${doctor.name}</h2>
                    <p>Specialty: ${doctor.specialty}</p>
                    <p>Contact: ${doctor.contact}</p>
                </div>
                <button class="card-button">Contact</button>
            `;

            doctorsContainer.appendChild(card);
        });
    }
}

loadDoctorsList();
