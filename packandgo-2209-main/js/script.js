$(function(){
    "use strict";
    feather.replace();
    // Popular slider 
    $(".popular_slider").slick({
        slidesToShow:3,
        centerMode:true,
        centerPadding: "150px",
        arrows:false,
        focusOnSelect:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                centerMode:false
              }
            },
            {
              breakpoint: 576,
              settings: {
                centerMode:false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })

    const destination = document.querySelectorAll(".destination");
    const collapse = document.querySelectorAll(".list_item");
    console.log(destination);

    destination.forEach((item)=> {
      item.addEventListener("click", function(e) {
        collapse.forEach((list)=> {
          list.classList.add("collapse")
        })
      })
    })
    
    window.addEventListener("resize", (e)=> {
      let screen_size = document.body.clientWidth;
      console.log(screen_size);
      if (screen_size < 900) {
        collapse.forEach((event)=> {
          event.classList.add("collapse")
        })
      }else{
        collapse.forEach((event)=> {
          event.classList.remove("collapse")
        })
      }
    })
    
    // $(".list_item").slideUp(500)
    // $("#destination").click(()=> {
    //   $(".list_item").slideDown(500)
    //   console.log("slide");
    // })

    // navbar-toggler

    // let navbar_toggler = document.querySelector(".navbar-toggler");
    // navbar_toggler.addEventListener("click", function() {
    //     navbar_toggler.classList.toggle("color")
    // })
})

