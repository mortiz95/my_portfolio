const sliderShow = document.getElementById("slideShow");
    const slides = sliderShow.getElementsByTagName("video");
    var index = 0;

    function nextSlide() {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }

    function prevSlide() {
      slides[index].classList.remove("active");
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add("active");
    }

    const sliderShowText = document.getElementById("slideShowText");
    const slideText = sliderShowText.getElementsByTagName("div");
    var x = 0;

    function nextSlideText() {
      slideText[x].classList.remove("active");
      x = (x + 1) % slideText.length;
      slideText[x].classList.add("active");
    }

    function prevSlideText() {
      slideText[x].classList.remove("active");
      x = (x - 1 + slideText.length) % slideText.length;
      slideText[x].classList.add("active");
    }
