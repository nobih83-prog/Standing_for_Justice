// সার্চ ফাংশন
function searchPage() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = ''; 

    if (input.length < 1) {
        resultsDiv.style.display = 'none';
        return;
    }

    const contents = [
        { title: 'হোম পেজ', url: 'index.html' },
        { title: 'নববর্ষ ২০২৬ আতশবাজি', url: 'fireworks.html' },
        { title: 'শহীদ ওসমান হাদি', url: 'details_hadi.html' },
        { title: 'যোগাযোগ', url: 'details.html' }
    ];

    let filtered = contents.filter(item => item.title.toLowerCase().includes(input));

    if (filtered.length > 0) {
        resultsDiv.style.display = 'block';
        filtered.forEach(item => {
            let a = document.createElement('a');
            a.href = item.url;
            a.classList.add('result-item');
            a.innerText = item.title;
            resultsDiv.appendChild(a);
        });
    } else {
        resultsDiv.style.display = 'none';
    }
}

// ইনপুট বক্সের বাইরে ক্লিক করলে রেজাল্ট লুকানো
document.addEventListener('click', function(e) {
    const searchArea = document.querySelector('.search-area');
    if (!searchArea.contains(e.target)) {
        document.getElementById('search-results').style.display = 'none';
    }
});function lightCandle() {
    const flame = document.getElementById('candleFlame');
    const status = document.getElementById('candleStatus');
    
    if (!flame.classList.contains('active')) {
        flame.classList.add('active');
        status.innerText = "আপনি শ্রদ্ধা নিবেদন করেছেন।";
        status.style.color = "#fbbf24";
    }
}