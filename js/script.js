window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
    }, 1000)
})

// Gallery Items Filter

const filterContainer = document.querySelector(".gallery-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    galleryItems = document.querySelectorAll(".gallery-item"),
    totalGalleryItem = galleryItems.length;

//added
console.log(totalGalleryItem);

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function() {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalGalleryItem; k++) {
            if (filterValue === galleryItems[k].getAttribute("data-category")) {
                galleryItems[k].classList.remove("hide");
                galleryItems[k].classList.add("show");
            } else {
                // add -> show
                galleryItems[k].classList.add("hide");
                galleryItems[k].classList.remove("show");
            }

            if (filterValue === "all") {
                galleryItems[k].classList.remove("hide");
                galleryItems[k].classList.add("show");
            }
        }
    })
}

// Gallery Lightbox

const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalGalleryItem; i++) {

    galleryItems[i].addEventListener("click", function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })

}

function nextItem() {
    if (itemIndex === totalGalleryItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalGalleryItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    imgSrc = galleryItems[itemIndex].querySelector(".gallery-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = galleryItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = ((itemIndex + 1) + " of " + totalGalleryItem);
}

lightbox.addEventListener("click", function(event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }
})


// Aside Navbar

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        // remove back-section class
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // add back-section class
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];

        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// Nav Toggler Button

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// Comments

// console.log("HDcomments init");

// const HDC_EL = {
//     submit: document.getElementById("hdc_submit"),
//     comment: document.getElementById("hdc_comment_input"),
//     email: document.getElementById("hdc_email_input"),
//     name: document.getElementById("hdc_name_input")
// };

// let canSubmit = false;

// function hdc_can_submit() {
//     let comment = HDC_EL.comment.nodeValue.trim();
//     let email = HDC_EL.email.nodeValue.trim();
//     let name = HDC_EL.name.nodeValue.trim();

//     if (comment.length > 4 && email.length > 4 && name.length > 4) {
//         if (hdc_validate_email_address(email)) {
//             HDC_EL.submit.classList.add("hdc_submit_enabled");
//             HDC_EL.submit.disabled = false;
//             canSubmit = true;
//         } else {
//             HDC_EL.submit.classList.remove("hdc_submit_enabled");
//             HDC_EL.submit.disabled = true;
//             canSubmit = false;
//         }
//     } else {
//         HDC_EL.submit.classList.remove("hdc_submit_enabled");
//         HDC_EL.submit.disabled = true;
//         canSubmit = false;
//     }
// }

// function hdc_set_event_listeners() {
//     HDC_EL.comment.addEventListener("keyup", hdc_can_submit);
//     HDC_EL.email.addEventListener("keyup", hdc_can_submit);
//     HDC_EL.name.addEventListener("keyup", hdc_can_submit);

// }

// hdc_set_event_listeners();

// function hdc_validate_email_address(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


// Comments JQuery

$(document).ready(function() {
    $('button').click(function() {
        var comment = $('.commentBox').val();
        $('<li>').text(comment).prependTo('.commentPlace');
        $('button').attr('disabled', 'true');
        $('.counter').text('140');
        $('.commentBox').val('');
    });

    $('.commentBox').keyup(function() {
        var commentLength = $(this).val().length;
        var charLeft = 140 - commentLength;
        $('.counter').text(charLeft);

        if (commentLength == 0) {
            $('button').attr('disabled', 'true');
        } else if (commentLength > 140) {
            $('button').attr('disabled', 'true');
        } else {
            $('button').removeAttr('disabled', 'true');
        }
    });

    $('button').attr('disabled', 'true');

});