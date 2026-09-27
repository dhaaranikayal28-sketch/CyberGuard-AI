/* =========================================================
   CYBERGUARD AI
   Main JavaScript
========================================================= */


/* =========================================================
   VIEW MODE
========================================================= */

function setView(mode) {

    const app = document.querySelector(".app");

    const mobileBtn = document.getElementById("mobileBtn");
    const desktopBtn = document.getElementById("desktopBtn");


    if (mode === "mobile") {

        app.classList.remove("desktop-mode");

        app.classList.add("mobile-mode");

        mobileBtn.classList.add("active");

        desktopBtn.classList.remove("active");

        localStorage.setItem("cyberguardView", "mobile");

    }


    if (mode === "desktop") {

        app.classList.remove("mobile-mode");

        app.classList.add("desktop-mode");

        desktopBtn.classList.add("active");

        mobileBtn.classList.remove("active");

        localStorage.setItem("cyberguardView", "desktop");

    }

}


/* =========================================================
   DEFAULT VIEW
========================================================= */

window.addEventListener("DOMContentLoaded", () => {

    const savedView =
        localStorage.getItem("cyberguardView");


    if (savedView === "mobile") {

        setView("mobile");

    } else {

        setView("desktop");

    }


    animateCounters();

});


/* =========================================================
   COUNTERS
========================================================= */

function animateCounters() {

    const counters =
        document.querySelectorAll(".counter");


    counters.forEach(counter => {

        const target =
            parseInt(counter.dataset.target);


        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 30));


        const timer =
            setInterval(() => {

                current += increment;


                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }


                counter.textContent = current;

            }, 35);

    });

}


/* =========================================================
   SCROLL TO FEATURES
========================================================= */

function scrollToFeatures() {

    document
        .getElementById("features")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   FEATURE MODAL DATA
========================================================= */

const featureData = {

    voice: {

        icon: "📞",

        label: "VOICE PROTECTION",

        title: "AI Voice & Scam Detection",

        description:
            "CyberGuard analyzes relevant voice signals and conversation patterns to identify potential AI-generated voices and suspicious social-engineering behavior.",

        signals: [

            "AI-generated voice detection",

            "Voice scam pattern analysis",

            "Conversation risk signals",

            "Real-time warning concept"

        ]

    },


    sms: {

        icon: "💬",

        label: "SMS PROTECTION",

        title: "SMS Scam Detection",

        description:
            "Suspicious messages can be analyzed for urgent requests, impersonation patterns, suspicious language and potentially dangerous links.",

        signals: [

            "Urgency detection",

            "Suspicious message patterns",

            "OTP / payment warning",

            "Link inspection"

        ]

    },


    email: {

        icon: "📧",

        label: "EMAIL PROTECTION",

        title: "Email Phishing Detection",

        description:
            "CyberGuard analyzes email content for phishing indicators, suspicious requests, impersonation signals and potentially harmful links.",

        signals: [

            "Phishing indicators",

            "Impersonation signals",

            "Suspicious requests",

            "Link analysis"

        ]

    },


    url: {

        icon: "🔗",

        label: "URL PROTECTION",

        title: "Suspicious URL Analysis",

        description:
            "URLs can be checked using structural indicators, reputation information and threat intelligence before the user proceeds.",

        signals: [

            "Domain analysis",

            "Reputation checking",

            "Threat intelligence",

            "Suspicious link warning"

        ]

    },


    risk: {

        icon: "🧠",

        label: "UNIFIED RISK ENGINE",

        title: "Explainable Risk Score",

        description:
            "CyberGuard combines signals from multiple channels to produce a unified risk level and explain why the activity was considered suspicious.",

        signals: [

            "Multiple signal correlation",

            "Risk score from 0–100",

            "Explainable reasons",

            "Recommended preventive action"

        ]

    }

};


/* =========================================================
   SHOW FEATURE
========================================================= */

function showFeature(type) {

    const feature = featureData[type];


    if (!feature) return;


    document.getElementById("modalIcon").textContent =
        feature.icon;


    document.getElementById("modalLabel").textContent =
        feature.label;


    document.getElementById("modalTitle").textContent =
        feature.title;


    document.getElementById("modalDescription").textContent =
        feature.description;


    const signals =
        document.getElementById("modalSignals");


    signals.innerHTML = "";


    feature.signals.forEach(signal => {

        const div =
            document.createElement("div");


        div.className = "modal-signal";


        div.innerHTML =
            "✓ &nbsp;" + signal;


        signals.appendChild(div);

    });


    document
        .getElementById("featureModal")
        .classList.add("show");

}


function closeFeature() {

    document
        .getElementById("featureModal")
        .classList.remove("show");

}


/* =========================================================
   PROTOTYPE VIDEO
========================================================= */

function openDemoVideo() {

    document
        .getElementById("demoModal")
        .classList.add("show");

}


function closeDemoVideo() {

    const modal =
        document.getElementById("demoModal");

    const video =
        document.getElementById("demoVideo");


    video.pause();

    modal.classList.remove("show");

}


/* =========================================================
   LIVE PROTECTION DEMO
========================================================= */

const demoStages = [

    {

        icon: "📞",

        title: "Incoming Call",

        text:
            "A call is received. CyberGuard protection is active in the background.",

        risk:
            "Monitoring relevant signals",

        progress: 15,

        duration: 2500

    },


    {

        icon: "🤖",

        title: "Analyzing Voice",

        text:
            "CyberGuard is analyzing relevant voice and conversation signals.",

        risk:
            "Voice analysis in progress",

        progress: 32,

        duration: 2500

    },


    {

        icon: "⚠️",

        title: "Suspicious Call Detected",

        text:
            "Potential social-engineering indicators have been identified.",

        risk:
            "HIGH RISK",

        progress: 48,

        duration: 3000

    },


    {

        icon: "💬",

        title: "Suspicious SMS Received",

        text:
            "A message containing an urgent request and potentially risky content is detected.",

        risk:
            "SMS SIGNAL DETECTED",

        progress: 65,

        duration: 3000

    },


    {

        icon: "🔗",

        title: "URL Analysis",

        text:
            "The link is analyzed using suspicious indicators and reputation signals.",

        risk:
            "URL RISK DETECTED",

        progress: 82,

        duration: 3000

    },


    {

        icon: "🚨",

        title: "Unified Risk Assessment",

        text:
            "Multiple signals are combined to generate an explainable risk assessment.",

        risk:
            "91 / 100 — CRITICAL",

        progress: 100,

        duration: 4000

    }

];


let demoIndex = 0;

let demoTimer = null;


/* =========================================================
   RUN DEMO
========================================================= */

function runDemo() {

    demoIndex = 0;


    const panel =
        document.getElementById("liveDemoPanel");


    panel.classList.add("show");


    playDemoStage();

}


/* =========================================================
   PLAY STAGE
========================================================= */

function playDemoStage() {

    if (demoIndex >= demoStages.length) {

        demoIndex = 0;

        return;

    }


    const stage =
        demoStages[demoIndex];


    document
        .getElementById("demoStageIcon")
        .textContent = stage.icon;


    document
        .getElementById("demoStageTitle")
        .textContent = stage.title;


    document
        .getElementById("demoStageText")
        .textContent = stage.text;


    document
        .getElementById("demoRisk")
        .textContent = stage.risk;


    document
        .getElementById("progressBar")
        .style.width =
        stage.progress + "%";


    demoIndex++;


    demoTimer =
        setTimeout(
            playDemoStage,
            stage.duration
        );

}


/* =========================================================
   CLOSE LIVE DEMO
========================================================= */

function closeLiveDemo() {

    clearTimeout(demoTimer);


    document
        .getElementById("liveDemoPanel")
        .classList.remove("show");


    document
        .getElementById("progressBar")
        .style.width = "0%";

}


/* =========================================================
   CLEAR ALERTS
========================================================= */

function clearAlerts() {

    const list =
        document.getElementById("alertsList");


    list.innerHTML = `

        <div class="alert-item">

            <div class="alert-icon">
                ✓
            </div>

            <div class="alert-info">

                <strong>
                    No recent alerts
                </strong>

                <p>
                    Security event list cleared.
                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================================= */

window.addEventListener("click", event => {

    const featureModal =
        document.getElementById("featureModal");

    const demoModal =
        document.getElementById("demoModal");


    if (event.target === featureModal) {

        closeFeature();

    }


    if (event.target === demoModal) {

        closeDemoVideo();

    }

});


/* =========================================================
   KEYBOARD ESCAPE
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeFeature();

        closeDemoVideo();

        closeLiveDemo();

    }

});

function scrollToProduction() {
    const productionSection = document.getElementById("production");

    if (productionSection) {
        productionSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}