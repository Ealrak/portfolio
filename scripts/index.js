// 전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})

// 프로젝트 슬라이드
const project1 = new Swiper('#project_swiper', {
    scrollbar:{el:'#project_swiper ~ .swiper-scrollbar'},
    navigation:{
        nextEl:'#project_swiper ~ .swiper-button-next',
        prevEl:'#project_swiper ~ .swiper-button-prev',
    },
    loop:true,
})

//내비게이션 클릭 시 해당 위치 수직 스와이프 이동
const nav = document.querySelectorAll('nav a');
// 수직 스와이프 이동 함수
// 수직스와이프변수명.slideTop(이동인덱스값, 지속시간)
nav.forEach((obj, idx)=>{
    console.log(obj, idx);
    obj.addEventListener('click',(e)=>{
        e.preventDefault();//a의 href기본기능막기
        wrap.slideTo(idx, 1000)
    })
})

const sns = new Swiper('#sns_swiper',{
    slidesPerView:5,
    spaceBetween:100,
    autoplay:{delay:0,},
    speed:3000,
    loop:true,
})

// SNS 프로젝트 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const snsProject = document.querySelectorAll('#sns_swiper .swiper-slide')
const popup = document.querySelector('.popup_bg');
console.log(snsProject, popup);

for(let sns of snsProject){
    sns.addEventListener('click',()=>{
        popup.style.display='block';
        popup.children[0].children[0].src = sns.children[0].src;
        // 팝업 실행 시 전체 수작 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable(); //스크롤 풀기 enable()
    })
}

popup.addEventListener('click',()=>{
    popup.style.display = 'none'
    wrap.mousewheel.enable();
})