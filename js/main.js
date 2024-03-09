let counts= document.querySelectorAll('.repeat');

counts.forEach(function(i) {
    i.addEventListener('click', ()=> {
        if(i.innerHTML>0)
        i.innerHTML--;
    });
});