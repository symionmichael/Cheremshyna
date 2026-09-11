(function () {
    const scriptTag = document.currentScript;
    const API_URL = scriptTag.getAttribute("data-api") || "http://127.0.0.1:8000";

    function getSessionId() {
        let id = localStorage.getItem("visitor_session_id");
        if (!id) {
            id = "sid_" + Math.random().toString(36).slice(2) + Date.now();
            localStorage.setItem("visitor_session_id", id);
        }
        return id;
    }

    const sessionId = getSessionId();
    let currentVisitId = null;
    const pageLoadTime = Date.now();

    fetch(API_URL + "/api/track/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            session_id: sessionId,
            page: window.location.pathname,
            referrer: document.referrer || null,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            currentVisitId = data.id; 
        })
        .catch((err) => console.error("Tracking chyba:", err));

    document.addEventListener("click", function (e) {
        const el = e.target.closest("[id], [data-track]");
        if (!el) return;

        const elementLabel = el.id ? "#" + el.id : el.getAttribute("data-track");

        fetch(API_URL + "/api/track/event", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_id: sessionId,
                event_type: "click",
                element: elementLabel,
            }),
        }).catch((err) => console.error("Tracking chyba:", err));
    });

    window.addEventListener("beforeunload", function () {
        if (!currentVisitId) return;
        const secondsSpent = Math.round((Date.now() - pageLoadTime) / 1000);

        navigator.sendBeacon(
            `${API_URL}/api/track/leave/${currentVisitId}?seconds=${secondsSpent}`
        );
    });
})();