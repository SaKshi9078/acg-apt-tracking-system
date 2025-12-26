document.addEventListener("DOMContentLoaded", () => {
    console.log("ACG APT PAM Frontend Loaded");

    // Fade in all cards
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "opacity 1s";
            card.style.opacity = 1;
        }, index * 300);
    });
});

// Asset list fetch for assets.html
async function loadAssets() {
    const list = document.getElementById("assetList");
    if (!list) return;

    try {
        const response = await fetch("http://localhost:5000/api/assets");
        const data = await response.json();
        list.innerHTML = "";
        data.forEach(asset => {
            const li = document.createElement("li");
            li.textContent = `${asset.assetName} | ${asset.department} | ${asset.status}`;
            list.appendChild(li);
        });
    } catch (err) {
        list.innerHTML = "<li>Failed to load assets</li>";
        console.error(err);
    }
}

// Call loadAssets if assetList exists
if (document.getElementById("assetList")) loadAssets();
