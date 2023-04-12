$(document).ready(function (e) {
    var previousScrollPosition = 0;
    var portfolioLinks = document.querySelector('.nav--portfolio-links');
    var $navbarToggler = $('.navbar-toggler');
    var $overlay = $('.overlay');

    // close menu once item selected
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Select all links with hashes
    $('a[href*="#"]').click(function (event) {
        var isAnchorLink = location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname;

        if (isAnchorLink) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 750, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Toggles display of overlay on opening/closing of mobile menu
    $navbarToggler.click(function () {
        $overlay.toggleClass('d-none');
    });
    // Clicking on a visible overlay is the same as clicking on the mobile menu toggler
    $overlay.click(function () {
        $navbarToggler.click();
    });
    window.onscroll = function () { toggleMenuOnScroll() };
    portfolioLinks.onscroll = function () { togglePortfolioLinksGradients() };

    /**
     * Toggles the visibility of the menu on scroll
     */
    function toggleMenuOnScroll() {
        var heroImgHeight = $(".hero").height();
        var currentScrollPosition = window.pageYOffset;
        var hasScrolledPastHeroImg = currentScrollPosition > heroImgHeight;
        var hasScrolledUp = currentScrollPosition < previousScrollPosition;

        if (hasScrolledPastHeroImg && hasScrolledUp) {
            $(".home .navbar").css("top", "0");
        } else {
            $(".home .navbar").css("top", "-75px");
        }
        previousScrollPosition = currentScrollPosition;
    }

    /**
     * Toggles gradients on the edges of the portfolio links
     */
    function togglePortfolioLinksGradients() {
        var hasScrolledToStart = portfolioLinks.scrollLeft == 0;
        var hasScrolledToEnd = portfolioLinks.getBoundingClientRect().width + portfolioLinks.scrollLeft == portfolioLinks.scrollWidth;
        var startGradient = document.querySelector('.portfolio-links__gradient--start');
        var endGradient = document.querySelector('.portfolio-links__gradient--end');
        var startGradientVisibility = startGradient.style.visibility;
        var endGradientVisibility = endGradient.style.visibility;

        if (hasScrolledToStart) {
            startGradientVisibility = 'hidden';
            endGradientVisibility = 'visible';
        } else if (hasScrolledToEnd) {
            startGradientVisibility = 'visible';
            endGradientVisibility = 'hidden';
        } else {
            startGradientVisibility = 'visible';
            endGradientVisibility = 'visible';
        }

        startGradient.style.visibility = startGradientVisibility;
        endGradient.style.visibility = endGradientVisibility;
    }
});