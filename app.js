const question = document.querySelectorAll('.questions-ans')
question.forEach((que)=>{
    que.addEventListener('click',()=>{
        que.classList.toggle('active')
    })
})


// question.forEach((que2)=>{
        //     if(que2.classList.contains('active')){
        //         que2.classList.remove('active')
        //     }
        // })

