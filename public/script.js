const titles =
document.querySelectorAll(
        ".chapter-1, .chapter-2, .chapter-3"
);

titles.forEach((title) => {

        const text =
        title.textContent;

        title.textContent = "";

        let started = false;

        const observer =
        new IntersectionObserver((entries) => {

                if(entries[0].isIntersecting && !started){

                        started = true;

                        let i = 0;

                        const interval =
                        setInterval(() => {

                                title.textContent +=
                                text[i];

                                i++;

                                if(i >= text.length){

                                        clearInterval(interval);

                                }

                        }, 50);

                }

        });

        observer.observe(title);

});

const logo = document.querySelector(".logo");

const secretPoster = document.querySelector(".secret-poster");

const secretClose = document.querySelector(".secret-close");

const overlay = document.querySelector(".secret-overlay");

let secretClicks = 0;

if (logo) {
    logo.addEventListener("click", () => {
        secretClicks++;
        if (secretClicks === 5) {
            if (secretPoster) secretPoster.classList.add("show");
            if (overlay) overlay.classList.add("show");
            secretClicks = 0;
        }
    });
}

if (secretClose) {
    secretClose.addEventListener("click", () => {
        if (secretPoster) secretPoster.classList.remove("show");
        if (overlay) overlay.classList.remove("show");
    });
}

if (overlay) {
    overlay.addEventListener("click", () => {
        if (secretPoster) secretPoster.classList.remove("show");
        overlay.classList.remove("show");
    });
}

const stamp = document.querySelector(".cockroach-stamp");

if (stamp) {
    const stampObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            stamp.classList.add("show");
            stampObserver.disconnect();
        }
    }, { threshold: 0.7 });
    stampObserver.observe(stamp);
}

// Back button handler: use history.back() with a safe fallback
(function () {
        var back = document.querySelector('.back-button');
        if (!back) return;
        back.addEventListener('click', function (e) {
                e.preventDefault();
                try {
                        if (window.history && window.history.length > 1) {
                                window.history.back();
                        } else {
                                // fallback to home
                                window.location.href = 'index.html';
                        }
                } catch (err) {
                        window.location.href = 'index.html';
                }
        });
})();