$(document).ready(function(){
   
    //cargar paginas 
    var about = $('#about');
    var episodes = $('#episodes');
    var change = $('#change');
    var contact = $('#contacto')
    
   change.click(function(e){
        e.preventDefault();
        if(episodes.hasClass('hide')){
            episodes.removeClass('hide');
            about.addClass('hide');
            about.slideUp();
            change.html('inicio');
        }else{
            about.removeClass('hide');
            episodes.addClass('hide');
            change.html('episodios')
        }
   })
   

   //go top
   $('#top').click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop:0
        },'slow')
        return false;
   })


   //ejemplo almacenar post : 

   var posts = [
    {
        title: 'pandemias de la historia',
        img:'./img/ep6.jpeg',
        date: 'publicado el: 19/3/2020',
        content: 'platicamos acerca de las enfermedades mas pandemicas ',
        audio: './audio/episodio6.mp3'
    },
    {
        title: 'Asesinos en serie: El zodiaco',
        img:'./img/ep4.jpg',
        date: 'publicado el: 10/3/2020',
        content: 'Uno de los asesinos de culto mas populares.',
        audio: './audio/EP4.mp3'
    },
    
    {
        title: 'Sirenas',
        img:'./img/sirenasportada.png',
        date: 'publicado el: 28/2/2020',
        content:'El mito desde un punto de vista literario.',
        audio: './audio/episodio3.mp3'
    },
    {
        title:'Sectas',
        img:'./img/ep2.jpeg',
        date: 'publicado el: 25/2/2020',
        content:'Hablamos sobre que son las sectas y algunas de las mas famosas.'
        
    },
    {
        title:'Demonología',
        img:'./img/ep1.jpg',
        date: 'publicado el: 7/2/2020',
        content: 'una breve explicación de la rama de la teología mas "polémica".'
        
    }
];

console.log(posts);

    posts.forEach((item,index)=>{

    var post = 
    `<article class='episode'>
        <h4 style="text-align: center;">${item.title}</h4><br>
        <img src='${item.img}'><br><br>
        <span class=''><strong>${item.date}</strong></span><br><br>
        <p>
            ${item.content}
        </p><br><br>
        <audio controls style='width: 100%;' type ='audio/mp3' src='${item.audio}'></audio>
        `;
    
    $('#episodes').append(post);

});

})

