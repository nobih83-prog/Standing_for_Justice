// ১. বিচারহীনতা শুরুর তারিখ (Year, MonthIndex, Day)
// ১৮ই ডিসেম্বর ২০২৫ থেকে গণনা শুরু
const startDate = new Date("2025-12-18T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - startDate;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // বাংলা সংখ্যায় রূপান্তর ফাংশন
    const toBn = (num) => {
        const str = num < 10 ? "0" + num : num.toString(); // ০ থেকে ৯ হলে আগে ০ যোগ করবে
        return str.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
    };

    // এলিমেন্টগুলো থাকলে তবেই আপডেট করবে (এরর এড়ানোর জন্য)
    if(document.getElementById("days")) {
        document.getElementById("days").innerText = toBn(d);
        document.getElementById("hours").innerText = toBn(h);
        document.getElementById("minutes").innerText = toBn(m);
        document.getElementById("seconds").innerText = toBn(s);
    }
}

// প্রতি সেকেন্ডে আপডেট
setInterval(updateCountdown, 1000);
updateCountdown();

// ২. সার্চ ফাংশনালিটি
const searchBox = document.querySelector('.search-box input');
const searchResults = document.createElement('div'); // সার্চ রেজাল্টের জন্য ড্রপডাউন তৈরি
searchResults.id = 'search-results';
searchResults.className = 'search-results-dropdown';
document.querySelector('.search-area').appendChild(searchResults);

const pages = [
    { name: "হোম পেজ", url: "index.html" },
    { name: "নববর্ষ ২০২৬ (আতশবাজি)", url: "fireworks.html" },
    { name: "স্মৃতিতে ওসমান হাদি", url: "details_hadi.html" },
    { name: "যোগাযোগ", url: "details.html" }
];

searchBox.addEventListener('input', function() {
    let query = this.value.toLowerCase();
    searchResults.innerHTML = '';
    
    if (query === "") {
        searchResults.style.display = "none";
        return;
    }

    let filtered = pages.filter(page => page.name.toLowerCase().includes(query));

    if (filtered.length > 0) {
        searchResults.style.display = "block";
        filtered.forEach(res => {
            let a = document.createElement('a');
            a.href = res.url;
            a.className = 'result-item'; // CSS-এর সাথে মিল রেখে
            a.innerText = res.name;
            searchResults.appendChild(a);
        });
    } else {
        searchResults.innerHTML = '<div class="result-item">কিছু পাওয়া যায়নি</div>';
        searchResults.style.display = "block";
    }
});

// ৩. বাইরের ক্লিকে সার্চ ড্রপডাউন বন্ধ করা
document.addEventListener('click', function(e) {
    if (!document.querySelector('.search-area').contains(e.target)) {
        searchResults.style.display = "none";
    }
});