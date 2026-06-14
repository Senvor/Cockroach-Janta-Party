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