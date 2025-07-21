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

const sns = new Swiper('#etc_swiper',{
    slidesPerView:5,
    spaceBetween:5,
    autoplay:{delay:0,},
    speed:3000,
    loop:true,
})