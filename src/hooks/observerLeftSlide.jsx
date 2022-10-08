const observerLeftSlide = new IntersectionObserver((entities)=>{
    entities.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})
export default observerLeftSlide 