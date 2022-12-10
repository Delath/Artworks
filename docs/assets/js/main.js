document.addEventListener('DOMContentLoaded', () => {

  // Array generated from Go "reader", you can find it in the repo
  let files = [{name: "20201113_004315", format: ".jpg", height: "450"},{name: "20210907_233422", format: ".jpg", height: "636"},{name: "20210907_233433", format: ".jpg", height: "600"},{name: "39515272_p0", format: ".jpg", height: "589"},{name: "46736519_p0", format: ".jpg", height: "600"},{name: "48466332_p0", format: ".png", height: "606"},{name: "48998760_p0", format: ".jpg", height: "294"},{name: "53003270_p0", format: ".jpg", height: "261"},{name: "54089272_p1", format: ".jpg", height: "635"},{name: "55982257_p0", format: ".jpg", height: "684"},{name: "56828146_p0", format: ".png", height: "684"},{name: "57203074_p0", format: ".jpg", height: "580"},{name: "57618220_p0", format: ".jpg", height: "536"},{name: "58756091_p0", format: ".jpg", height: "450"},{name: "58898621_p0", format: ".jpg", height: "879"},{name: "59209057_p0", format: ".jpg", height: "636"},{name: "59903623_p0", format: ".png", height: "356"},{name: "60018375_p0", format: ".jpg", height: "642"},{name: "61067775_p0", format: ".jpg", height: "307"},{name: "61462595_p0", format: ".jpg", height: "266"},{name: "62304822_p0", format: ".png", height: "636"},{name: "62366020_p0", format: ".jpg", height: "597"},{name: "63816442_p0", format: ".jpg", height: "695"},{name: "64018800_p0", format: ".jpg", height: "617"},{name: "64959545_p1", format: ".jpg", height: "313"},{name: "65430492_p0", format: ".png", height: "629"},{name: "65747305_p0", format: ".jpg", height: "253"},{name: "65822051_p0", format: ".jpg", height: "612"},{name: "66187270_p0", format: ".jpg", height: "450"},{name: "66380765_p0", format: ".jpg", height: "620"},{name: "66439020_p0", format: ".jpg", height: "707"},{name: "66467615_p0", format: ".jpg", height: "636"},{name: "66474729_p0", format: ".jpg", height: "253"},{name: "66923002_p0", format: ".jpg", height: "320"},{name: "66942873_p0", format: ".png", height: "699"},{name: "67069310_p0", format: ".jpg", height: "351"},{name: "67490108_p0", format: ".jpg", height: "382"},{name: "67737876_p0", format: ".png", height: "636"},{name: "67962380_p0", format: ".png", height: "636"},{name: "68243148_p2", format: ".jpg", height: "601"},{name: "68245920_p0", format: ".jpg", height: "644"},{name: "68296718_p0", format: ".png", height: "450"},{name: "68308941_p0", format: ".jpg", height: "523"},{name: "69075233_p0", format: ".jpg", height: "636"},{name: "69311501_p0", format: ".jpg", height: "636"},{name: "69387106_p0", format: ".jpg", height: "582"},{name: "70455360_p0", format: ".png", height: "450"},{name: "70858381_p0", format: ".jpg", height: "619"},{name: "71079390_p0", format: ".png", height: "253"},{name: "71171353_p0", format: ".png", height: "629"},{name: "71308103_p0", format: ".jpg", height: "642"},{name: "71492208_p0", format: ".jpg", height: "631"},{name: "71775808_p0", format: ".jpg", height: "279"},{name: "72027189_p0", format: ".png", height: "639"},{name: "72361530_p0", format: ".png", height: "490"},{name: "72811179_p0", format: ".png", height: "635"},{name: "72822308_p0", format: ".png", height: "590"},{name: "72956271_p0", format: ".jpg", height: "594"},{name: "73143226_p0", format: ".png", height: "636"},{name: "73192263_p0", format: ".png", height: "450"},{name: "73246816_p0", format: ".jpg", height: "631"},{name: "73451226_p0", format: ".jpg", height: "388"},{name: "73486071_p0", format: ".png", height: "668"},{name: "73739659_p0", format: ".jpg", height: "600"},{name: "73787173_p0", format: ".jpg", height: "636"},{name: "73805181_p1", format: ".jpg", height: "450"},{name: "73805181_p3", format: ".jpg", height: "450"},{name: "74055613_p0", format: ".jpg", height: "635"},{name: "74279779_p0-1", format: ".jpg", height: "591"},{name: "75338347_p0", format: ".jpg", height: "592"},{name: "75422834_p0", format: ".jpg", height: "599"},{name: "75746643_p0", format: ".jpg", height: "453"},{name: "75908797_p0", format: ".jpg", height: "580"},{name: "76026741_p0", format: ".png", height: "590"},{name: "76422957_p0", format: ".png", height: "638"},{name: "76455250_p0", format: ".png", height: "484"},{name: "76518579_p0", format: ".jpg", height: "629"},{name: "76605242_p0", format: ".jpg", height: "302"},{name: "76807859_p0", format: ".jpg", height: "641"},{name: "76813572_p0", format: ".jpg", height: "633"},{name: "77005971_p0", format: ".jpg", height: "257"},{name: "77055925_p0", format: ".png", height: "651"},{name: "77089474_p0", format: ".jpg", height: "267"},{name: "77300726_p0", format: ".jpg", height: "636"},{name: "77688144_p1", format: ".png", height: "316"},{name: "78135753_p0", format: ".png", height: "667"},{name: "78172995_p0", format: ".jpg", height: "646"},{name: "78245066_p0", format: ".jpg", height: "319"},{name: "78300125_p0", format: ".jpg", height: "619"},{name: "78572714_p0", format: ".jpg", height: "281"},{name: "78693112_p0", format: ".png", height: "616"},{name: "79283322_p0", format: ".png", height: "636"},{name: "79784484_p0", format: ".png", height: "307"},{name: "80147954_p0", format: ".png", height: "588"},{name: "80440672_p0", format: ".png", height: "586"},{name: "80657120_p0", format: ".jpg", height: "562"},{name: "80820149_p0", format: ".jpg", height: "514"},{name: "80843564_p0", format: ".jpg", height: "577"},{name: "80954537_p0", format: ".png", height: "792"},{name: "80994745_p0", format: ".png", height: "295"},{name: "81035268_p0", format: ".png", height: "339"},{name: "81082833_p0", format: ".jpg", height: "491"},{name: "81489526_p0", format: ".jpg", height: "267"},{name: "81820095_p0", format: ".jpg", height: "636"},{name: "82036411_p0", format: ".png", height: "450"},{name: "82284613_p0", format: ".png", height: "450"},{name: "82298682_p1", format: ".jpg", height: "659"},{name: "82298682_p3", format: ".jpg", height: "659"},{name: "82461279_p0", format: ".jpg", height: "580"},{name: "82714472_p0", format: ".png", height: "636"},{name: "82828735_p6", format: ".jpg", height: "681"},{name: "82979781_p0", format: ".jpg", height: "703"},{name: "83068254_p0", format: ".jpg", height: "542"},{name: "83514166_p0", format: ".png", height: "636"},{name: "83988105_p0", format: ".jpg", height: "633"},{name: "84116229_p0", format: ".png", height: "636"},{name: "84271064_p0", format: ".jpg", height: "632"},{name: "84565482_p0", format: ".png", height: "675"},{name: "85443587_p0", format: ".jpg", height: "672"},{name: "85496404_p0", format: ".jpg", height: "636"},{name: "86094437_p0", format: ".png", height: "245"},{name: "86221238_p0", format: ".png", height: "636"},{name: "86328229_p0", format: ".jpg", height: "595"},{name: "86699336_p0", format: ".jpg", height: "636"},{name: "86751901_p0", format: ".jpg", height: "636"},{name: "86844722_p0", format: ".jpg", height: "282"},{name: "87119406_p0", format: ".jpg", height: "318"},{name: "87279779_p0", format: ".jpg", height: "636"},{name: "87709922_p0", format: ".jpg", height: "344"},{name: "88218097_p0", format: ".jpg", height: "782"},{name: "88244831_p0", format: ".png", height: "507"},{name: "88501831_p0", format: ".jpg", height: "687"},{name: "89133756_p0", format: ".jpg", height: "450"},{name: "90214136_p0", format: ".jpg", height: "647"},{name: "90868303_p0", format: ".jpg", height: "673"},{name: "92219685_p0", format: ".jpg", height: "552"},{name: "92753814_p0", format: ".png", height: "642"},{name: "93474571_p0", format: ".jpg", height: "605"},{name: "93980571_p0", format: ".jpg", height: "485"},{name: "94000385_p0", format: ".png", height: "636"},{name: "94993064_p0", format: ".png", height: "450"},{name: "97415366_p0", format: ".jpg", height: "800"},{name: "98024306_p0", format: ".jpg", height: "756"},{name: "98083210_p0", format: ".png", height: "253"},{name: "98503581_p0", format: ".jpg", height: "1012"},{name: "98809137_p0", format: ".jpg", height: "679"},{name: "99057853_p0", format: ".jpg", height: "665"},{name: "99079886_p0", format: ".jpg", height: "683"},{name: "99213563_p0", format: ".jpg", height: "735"},{name: "E29m1dfUcAEVl4-", format: ".jpeg", height: "318"},{name: "E2Eg7mSUYAAum7g", format: ".jpeg", height: "654"},{name: "E3JC0g9VkAAtMKL", format: ".jpeg", height: "318"},{name: "IMG_20200219_232806_961", format: ".png", height: "253"},{name: "IMG_20200219_232809_604", format: ".jpg", height: "612"},{name: "arnor-lucy3", format: ".jpg", height: "666"},{name: "dd0yrx1-3f5540e3-aacf-40b8-8111-1dde5cde368a", format: ".jpg", height: "267"},{name: "illust_52520072_20200527_004229", format: ".png", height: "318"},{name: "illust_56857092_20200517_005425", format: ".jpg", height: "707"},{name: "illust_63149181_20200620_234127", format: ".jpg", height: "261"},{name: "illust_63176977_20200613_204144", format: ".jpg", height: "253"},{name: "illust_64535234_20200710_011539", format: ".png", height: "259"},{name: "illust_64585758_20200606_234550", format: ".jpg", height: "270"},{name: "illust_67010409_20200620_234906", format: ".png", height: "252"},{name: "illust_67208132_20200507_015259", format: ".jpg", height: "318"},{name: "illust_67994735_20200610_235133", format: ".png", height: "281"},{name: "illust_68657131_20200612_010240", format: ".jpg", height: "253"},{name: "illust_68766270_20200517_010400", format: ".png", height: "319"},{name: "illust_68772358_20201202_194134", format: ".png", height: "653"},{name: "illust_69695596_20200518_224158", format: ".png", height: "636"},{name: "illust_69983148_20200717_010342", format: ".jpg", height: "1081"},{name: "illust_72301374_20200613_232348", format: ".png", height: "635"},{name: "illust_72354655_20200717_010500", format: ".jpg", height: "253"},{name: "illust_74983835_20200525_192152", format: ".png", height: "636"},{name: "illust_75063622_20200612_010119", format: ".jpg", height: "667"},{name: "illust_75092997_20200608_012035", format: ".jpg", height: "629"},{name: "illust_75453892_20200524_005014", format: ".jpg", height: "623"},{name: "illust_76371059_20200616_015726", format: ".jpg", height: "606"},{name: "illust_76654781_20200507_231622", format: ".png", height: "585"},{name: "illust_76707966_20200616_015746", format: ".jpg", height: "783"},{name: "illust_76763038_20200612_005442", format: ".jpg", height: "806"},{name: "illust_76822484_20200620_233136", format: ".jpg", height: "634"},{name: "illust_78466735_20200616_015323", format: ".jpg", height: "337"},{name: "illust_78511602_20210414_030440", format: ".png", height: "665"},{name: "illust_78905175_20200507_231522", format: ".png", height: "637"},{name: "illust_78908984_20200624_012656", format: ".png", height: "253"},{name: "illust_79580326_20200620_233011", format: ".jpg", height: "601"},{name: "illust_79711298_20200717_005844", format: ".png", height: "280"},{name: "illust_80009292_20200620_232940", format: ".jpg", height: "681"},{name: "illust_80035153_20200601_015450", format: ".jpg", height: "636"},{name: "illust_81566462_20210414_030822", format: ".jpg", height: "450"},{name: "illust_81648738_20200609_224539", format: ".png", height: "432"},{name: "illust_81853167_20200601_015034", format: ".jpg", height: "636"},{name: "illust_81976038_20200629_091436", format: ".png", height: "800"},{name: "illust_82072496_20200610_220808", format: ".jpg", height: "299"},{name: "illust_82140995_20200705_104941", format: ".jpg", height: "786"},{name: "illust_82284574_20200620_232140", format: ".png", height: "598"},{name: "illust_82500395_20200629_090649", format: ".png", height: "429"},{name: "illust_82565785_20200626_014855", format: ".png", height: "450"},{name: "illust_82590422_20200703_173817", format: ".png", height: "635"},{name: "illust_82713723_20200703_173516", format: ".jpg", height: "585"},{name: "illust_82900645_20200713_010238", format: ".jpg", height: "681"},{name: "illust_83091645_20200723_013657", format: ".jpg", height: "655"},{name: "illust_83438695_20220616_082249", format: ".png", height: "638"},{name: "illust_85159063_20201028_194548", format: ".png", height: "648"},{name: "illust_85340093_20201123_000856", format: ".jpg", height: "569"},{name: "illust_85793822_20201123_001155", format: ".png", height: "436"},{name: "illust_86094212_20201204_161912", format: ".png", height: "317"},{name: "illust_86094696_20201208_125655", format: ".png", height: "261"},{name: "illust_87335574_20210319_000824", format: ".png", height: "629"},{name: "illust_87469505_20210303_010957", format: ".png", height: "636"},{name: "illust_88137512_20210303_010912", format: ".png", height: "636"},{name: "illust_89828749_20210520_235910", format: ".jpg", height: "450"},{name: "illust_89942876_20210520_235557", format: ".jpg", height: "600"},{name: "illust_89977816_20210520_235622", format: ".jpg", height: "600"},{name: "illust_90027120_20210530_030820", format: ".jpg", height: "607"},{name: "illust_90097332_20210611_205518", format: ".jpg", height: "722"},{name: "illust_90159882_20210530_031055", format: ".png", height: "870"},{name: "illust_92651755_20211007_090010", format: ".png", height: "601"},{name: "illust_93745659_20211101_220908", format: ".jpg", height: "310"},{name: "illust_94162123_20211122_181319", format: ".jpg", height: "680"},{name: "illust_97973029_20220725_021413", format: ".jpg", height: "915"},{name: "illust_98921171_20220725_021112", format: ".jpg", height: "828"},{name: "illust_99349797_20220712_105733", format: ".jpg", height: "789"},{name: "illust_99641744_20220712_105631", format: ".jpg", height: "764"},{name: "illust_99663712_20220712_105639", format: ".jpg", height: "959"},{name: "illust_99705960_20220714_011258", format: ".jpg", height: "1074"},{name: "lei-deng-chunli", format: ".jpg", height: "911"},{name: "lei-deng-cyberpunk2077", format: ".jpg", height: "636"},{name: "z-w-gu-backb5pfst", format: ".jpg", height: "562"}];
  var myWidth = 0, myHeight = 0;

  shuffle(files);
  fetchNewSize();

  function fetchNewSize(){
    var myTempWidth;

    if( typeof( window.innerWidth ) == 'number' ) {
      //Non-IE
      myTempWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+ in 'standards compliant mode'
      myTempWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myTempWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }

    if(myWidth!=myTempWidth){
      rebuildColumns( ((myTempWidth/450)-1) <= 0 ? 1 : ((myTempWidth/450)-1) ); // at least one column
      myWidth=myTempWidth;
    }
    setTimeout(fetchNewSize, 10);
  }

  function rebuildColumns(columnsNum){
    let columnsSize = [];
    let gallery = document.querySelector("#main .gallery");
    let tempInnerHTML="";
    for(let i=0; i<columnsNum; i++){
      tempInnerHTML+=`
      <div class="column-${i} column">
      </div>
      `;
      columnsSize[i]=0;
    }
    gallery.innerHTML=tempInnerHTML;

    files.forEach(
      function(file, index){
        // a mobile optimization would be to skip the shorterColumn type when only one column is present
        let shorterColumn = findShorterColumn(columnsNum, columnsSize);
        columnsSize[shorterColumn]+=parseInt(file.height);
        let column = document.querySelector(`#main .column-${shorterColumn}`);
        let url = `images/${file.name}.webp`;
        let fullImageUrl = `https://raw.githubusercontent.com/Delath/Artworks/main/images/${file.name}${file.format}`
        // (myHeight*2) may get changed to something else in the future
        if(columnsSize[shorterColumn]>(myHeight*2)){
          column.innerHTML+=`
          <!-- ======= Gallery Item ======= -->
          <div class="artwork-padding">
            <div class="artwork-image">
              <img class="artwork lazy image-${index}" onclick="openModal(&quot;${fullImageUrl}&quot;)" alt="Anime artwork">
            </div>
          </div>
          `;
        }else{
          column.innerHTML+=`
          <!-- ======= Gallery Item ======= -->
          <div class="artwork-padding">
            <div class="artwork-image">
              <img class="artwork" onclick="openModal(&quot;${fullImageUrl}&quot;)" src="${url}" alt="Anime artwork">
            </div>
          </div>
          `;
        }
      }
    )
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);    
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there are elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  function findShorterColumn(columnsNum, columnsSize){
    let minSize = columnsSize[0];
    let minId = 0;
    for(let i=0; i<columnsNum; i++){
      if(columnsSize[i] < minSize){
        minSize = columnsSize[i];
        minId = i;
      }
    }
    return minId
  }

  // this function might get cleaned in the future
  function lazyload () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
        if(img.offsetTop < (window.innerHeight + scrollTop)) {
          let id = img.className.slice(-3)
          if(id[0]=="-"){
            id = img.className.slice(-2)
          }else if(id[1]=="-"){
            id = img.className.slice(-1)
          }
          if(id!="ork" && id!="rk"){
            let src = `images/${files[id].name}.webp`;
            img.src = src;
            img.classList.remove('lazy');
            img.classList.remove(`image-${id}`);

          }
        }
      });
      if(lazyloadImages.length == 0) { 
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

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

  setTimeout(function(){
    let pageObscurer = document.getElementById("obscure-loading")
    pageObscurer.style.backgroundColor = "rgba(0, 0, 0, 0)"  

    setTimeout(function(){
      pageObscurer.style.width = "0px"
      pageObscurer.style.height = "0px"  
    }, 150)
  }, 100)

});