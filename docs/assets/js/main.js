document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /**
   * Images loader
   */
  let gallery = document.querySelector("#gallery .cont");
  let fileNames = ["20201113_004315","20210907_233422","20210907_233433","39515272_p0","46736519_p0","48466332_p0","48998760_p0","53003270_p0","54089272_p1","55982257_p0","56828146_p0","57203074_p0","57618220_p0","58756091_p0","58898621_p0","59209057_p0","59903623_p0","60018375_p0","61067775_p0","61462595_p0","62304822_p0","62366020_p0","63816442_p0","64018800_p0","64959545_p1","65430492_p0","65747305_p0","65822051_p0","66187270_p0","66380765_p0","66439020_p0","66467615_p0","66474729_p0","66923002_p0","66942873_p0","67069310_p0","67490108_p0","67737876_p0","67962380_p0","68243148_p2","68245920_p0","68296718_p0","68308941_p0","69075233_p0","69311501_p0","69387106_p0","70455360_p0","70858381_p0","71079390_p0","71171353_p0","71308103_p0","71492208_p0","71775808_p0","72027189_p0","72361530_p0","72811179_p0","72822308_p0","72956271_p0","73143226_p0","73192263_p0","73246816_p0","73451226_p0","73486071_p0","73739659_p0","73787173_p0","73805181_p1","73805181_p3","74055613_p0","74279779_p0-1","75338347_p0","75422834_p0","75746643_p0","75908797_p0","76026741_p0","76422957_p0","76455250_p0","76518579_p0","76605242_p0","76807859_p0","76813572_p0","77005971_p0","77055925_p0","77089474_p0","77300726_p0","77688144_p1","78135753_p0","78172995_p0","78245066_p0","78300125_p0","78572714_p0","78693112_p0","79283322_p0","79784484_p0","80147954_p0","80440672_p0","80657120_p0","80820149_p0","80843564_p0","80954537_p0","80994745_p0","81035268_p0","81082833_p0","81489526_p0","81820095_p0","82036411_p0","82284613_p0","82298682_p1","82298682_p3","82461279_p0","82714472_p0","82828735_p6","82979781_p0","83068254_p0","83514166_p0","83988105_p0","84116229_p0","84271064_p0","84565482_p0","85443587_p0","85496404_p0","86094437_p0","86221238_p0","86328229_p0","86699336_p0","86751901_p0","86844722_p0","87119406_p0","87279779_p0","87709922_p0","88218097_p0","88244831_p0","88501831_p0","89133756_p0","90214136_p0","90868303_p0","92219685_p0","92753814_p0","93474571_p0","93980571_p0","94000385_p0","94993064_p0","97415366_p0","98024306_p0","98083210_p0","98503581_p0","98809137_p0","99057853_p0","99079886_p0","99213563_p0","E29m1dfUcAEVl4-","E2Eg7mSUYAAum7g","E3JC0g9VkAAtMKL","IMG_20200219_232806_961","IMG_20200219_232809_604","arnor-lucy3","dd0yrx1-3f5540e3-aacf-40b8-8111-1dde5cde368a","illust_52520072_20200527_004229","illust_56857092_20200517_005425","illust_63149181_20200620_234127","illust_63176977_20200613_204144","illust_64535234_20200710_011539","illust_64585758_20200606_234550","illust_67010409_20200620_234906","illust_67208132_20200507_015259","illust_67994735_20200610_235133","illust_68657131_20200612_010240","illust_68766270_20200517_010400","illust_68772358_20201202_194134","illust_69695596_20200518_224158","illust_69983148_20200717_010342","illust_72301374_20200613_232348","illust_72354655_20200717_010500","illust_74983835_20200525_192152","illust_75063622_20200612_010119","illust_75092997_20200608_012035","illust_75453892_20200524_005014","illust_76371059_20200616_015726","illust_76654781_20200507_231622","illust_76707966_20200616_015746","illust_76763038_20200612_005442","illust_76822484_20200620_233136","illust_78466735_20200616_015323","illust_78511602_20210414_030440","illust_78905175_20200507_231522","illust_78908984_20200624_012656","illust_79580326_20200620_233011","illust_79711298_20200717_005844","illust_80009292_20200620_232940","illust_80035153_20200601_015450","illust_81566462_20210414_030822","illust_81648738_20200609_224539","illust_81853167_20200601_015034","illust_81976038_20200629_091436","illust_82072496_20200610_220808","illust_82140995_20200705_104941","illust_82284574_20200620_232140","illust_82500395_20200629_090649","illust_82565785_20200626_014855","illust_82590422_20200703_173817","illust_82713723_20200703_173516","illust_82900645_20200713_010238","illust_83091645_20200723_013657","illust_83438695_20220616_082249","illust_85159063_20201028_194548","illust_85340093_20201123_000856","illust_85793822_20201123_001155","illust_86094212_20201204_161912","illust_86094696_20201208_125655","illust_87335574_20210319_000824","illust_87469505_20210303_010957","illust_88137512_20210303_010912","illust_89828749_20210520_235910","illust_89942876_20210520_235557","illust_89977816_20210520_235622","illust_90027120_20210530_030820","illust_90097332_20210611_205518","illust_90159882_20210530_031055","illust_92651755_20211007_090010","illust_93745659_20211101_220908","illust_94162123_20211122_181319","illust_97973029_20220725_021413","illust_98921171_20220725_021112","illust_99349797_20220712_105733","illust_99641744_20220712_105631","illust_99663712_20220712_105639","illust_99705960_20220714_011258","lei-deng-chunli","lei-deng-cyberpunk2077","z-w-gu-backb5pfst"];
  shuffle(fileNames)

  fileNames.forEach(
    function(filename, index){

      setTimeout(function(){
        let url = `https://raw.githubusercontent.com/Delath/Artworks/main/docs/assets/compressed-artworks/${filename}.webp`;
        let urlForModal = `https://raw.githubusercontent.com/Delath/Artworks/main/images/${filename}`;

        let htmlString = `
          <!-- ======= Gallery Item ======= -->
          <div class="col-xl-3 col-lg-4 col-md-6" style="width: auto; padding: 20px; max-width: 449.75; margin-left: auto; margin-right: auto;">
            <div class="gallery-item h-100">
              <img src="${url}" class="img-fluid" onClick="createModal(&quot;${urlForModal}.jpeg&quot;)">
            </div>
          </div><!-- Gallery Item -->
        `
        gallery.innerHTML+=htmlString;    
      }, 1 * (index + 1))

    }
  );

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  
});