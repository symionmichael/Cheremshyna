const API_URL = document.currentScript.getAttribute("data-api");

const loginBox = document.getElementById("login-box");
const dashboard = document.getElementById("dashboard");
const loginError = document.getElementById("login-error");

if (localStorage.getItem("admin_token")) {
    showDashboard();
}

document.getElementById("login-btn").addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await fetch(API_URL + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
        loginError.textContent = "Špatné přihlašovací údaje.";
        return;
    }

    const data = await res.json();
    localStorage.setItem("admin_token", data.access_token);
    showDashboard();
});

async function authFetch(path) {
    const token = localStorage.getItem("admin_token");
    const res = await fetch(API_URL + path, {
        headers: { Authorization: "Bearer " + token },
    });
    if (res.status === 401) {
        localStorage.removeItem("admin_token");
        location.reload();
        return null;
    }
    return res.json();
}

async function showDashboard() {
    loginBox.style.display = "none";
    dashboard.style.display = "block";

    const stats = await authFetch("/api/admin/stats");
    if (!stats) return;

    document.getElementById("stats").innerHTML = `
        <div class="stat-box"><strong>${stats.total_visits}</strong><br>Celkem návštěv</div>
        <div class="stat-box"><strong>${stats.unique_visitors}</strong><br>Unikátní návštěvníci</div>
        <div class="stat-box"><strong>${stats.total_events}</strong><br>Zaznamenané akce</div>
    `;

    const visits = await authFetch("/api/admin/visits");
    if (!visits) return;

    const tbody = document.getElementById("visits-table");
    tbody.innerHTML = visits
        .map(
            (v) => `
        <tr>
            <td>${new Date(v.timestamp).toLocaleString("cs-CZ")}</td>
            <td>${v.page}</td>
            <td>${v.session_id.slice(0, 12)}...</td>
            <td>${v.ip_address}</td>
            <td>${v.time_on_page ?? "-"}</td>
        </tr>`
        )
        .join("");
}