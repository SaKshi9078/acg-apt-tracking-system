// ====== DOMContentLoaded ======
document.addEventListener("DOMContentLoaded", () => {
    console.log("ACG APT PAM Frontend Loaded");

    // Example: simple animation on Home page
    const header = document.querySelector("header h1");
    if(header){
        header.style.opacity = 0;
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.02;
            header.style.opacity = opacity;
            if(opacity >= 1) clearInterval(fadeIn);
        }, 20);
    }

    // Menu link active highlight
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.style.textDecoration = "none");
            link.style.textDecoration = "underline";
        });
    });
});

// ====== Asset fetch for assets.html ======
async function loadAssets() {
    const list = document.getElementById("assetList");
    if(!list) return;

    try {
        const response = await fetch("http://localhost:5000/api/assets");
        const data = await response.json();

        list.innerHTML = "";
        data.forEach(asset => {
            const li = document.createElement("li");
            li.textContent = `${asset.assetName} | ${asset.department} | ${asset.status}`;
            list.appendChild(li);
        });

    } catch(err) {
        console.error("Error fetching assets:", err);
        list.innerHTML = "<li>Failed to load assets</li>";
    }
}

// Call loadAssets only on assets.html page
if(document.getElementById("assetList")){
    loadAssets();
}

// ====== Simple Dashboard Counters Example ======
const dashboardCards = document.querySelectorAll(".card");
if(dashboardCards.length){
    dashboardCards.forEach(card => {
        let count = 0;
        const target = parseInt(card.dataset.target) || 100;
        const interval = setInterval(() => {
            count += 1;
            card.innerText = count;
            if(count >= target) clearInterval(interval);
        }, 20);
    });
}
