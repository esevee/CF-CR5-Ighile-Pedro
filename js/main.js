$(document).ready (function(){
    var mainData = JSON.parse(ourMovies);
   
    for (var i = 0; i < mainData.length; i++) {
      $(".items").append('<div class="col-lg-6"><div class="card mb-3" style="max-width: 540px;"> <div class="row no-gutters"><div class="col-md-4"><img src="' + mainData[i].image + '" class="card-img" alt="' + mainData[i].movieName + '"> </div>  <div class="col-md-8"><div class="card-body"><h5 class="card-title">' + mainData[i].movieName +'</h5> <p class="card-text">' + mainData[i].description +'</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> <div class="likes"><button id="like">likes: ' + mainData[i].likes + ' </button></div></div> </div></div></div></div>');                      
    };

        $('#like').on('click', function(){
            var like_num = $(this).mainData[i].likes;
            like_num += 1;
            console.log(like_num)
        })                     

});
