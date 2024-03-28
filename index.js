let data = [
    {
      image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=1780",
      category: "Women's Apparel",
      dis: "Elevate your wardrobe with our limited-time fashion offer!",
      navigate: "Explore More",
      textAlign: "center",
      justify: "center",
      align: "flex-end"
    },
    {
      image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=1780",
      category: "Trendy Classics",
      dis: "Discover Signature Look: Fashion Forward and Fabulous!",
      navigate: "Shop Now",
      textAlign: "start",
      justify: "flex-start",
      align: "flex-end"
    },
    {
      image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665890&width=1780",
      category: "Modern Elegance",
      dis: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
      navigate: "Explore More",
      textAlign: "center",
      justify: "flex-start",
      align: "flex-end"
    }
  ];



document.addEventListener('DOMContentLoaded', function () {

  
    const splideList = document.querySelector('.splide__list');
    
    data.forEach((item) => {
      const slide = document.createElement('li');
      slide.className = 'splide__slide';
      slide.innerHTML = `
          <div class="slide-background" style="background-image: url('${item.image}');justify-content: ${item.justify}; align-items: ${item.align}">
              <div class="slide-content" style="text-align:${item.textAlign}">
              <button>${item.category}</button>
              <p>${item.dis}</p>
              <button>${item.navigate}</button>
              </div>
          </div>
      `;
      splideList.appendChild(slide);
    });
  
    const splide = new Splide('#dynamic-slider', {
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      pauseOnHover: true,
      pagination: true,
      arrows: true,
      rewind: true,
    }).mount();
  
    document.getElementById('checkButton').addEventListener('click', function() {
      // Get selected values from dropdowns
      const position = document.getElementById('dropdown1').value;
      let arr = position.split(',')
      const horizontalPosition = arr[0]
      const verticalPosition = arr[1]
      const textPosition = document.getElementById('dropdown3').value;
    
      // Get the index of the current slide
      const currentIndex = splide.index;
      console.log(currentIndex)
    
      // Get the content element of the current slide
      const currentSlide = document.querySelector(`.splide__slide:nth-child(${currentIndex + 1}) .slide-background`);
      const currentSlideContent = document.querySelector(`.splide__slide:nth-child(${currentIndex + 1}) .slide-content`);

    
      // Apply selected values as CSS styles to the content element of the current slide
      currentSlide.style.justifyContent = horizontalPosition;
      currentSlide.style.alignItems = verticalPosition;
      currentSlideContent.style.textAlign = textPosition;
      console.log(currentSlideContent)

    });
  });
  