let ham = document.querySelector('#ham');
ham.addEventListener('click', function () {
    let navbar = document.getElementById('navbar');
    let navul = document.getElementById('navul');
    let movble = document.getElementById('movble');
    const confirm = document.head.contains(movble);
    if (confirm == false) {
        let style = document.createElement('style');
        style.setAttribute('id', 'movble');
        style.innerHTML = `
      #navbar{
        display:flex;
        height: 50%;
        width: 100%;
        position: fixed;
        background-color: #191414;
      }
      #navbar::before{
          height:0;
          width:0;
      }
      #navbar ul{
          display:flex;
          flex-flow:column;
      }
      #navbar li{
          font-size: 3rem;
          padding:2px;
          margin:1rem;
      }
      #navul li a:hover{
            color:blue;
            background-color:white;
      }
    `;
        document.head.appendChild(style);
    }
    else {
           movble.remove();
    }
})
    // ham.addEventListener('click',function(){
    //         let movble=document.getElementById('movble');
    //         movble.remove()
    // })