
function feedShow(){
    if($("#feed").css("display") == "none"){
      $("#feed").css("display","block");
      // $(".shift-btn1").css("border-bottom","2px solid #0095EB");
      $(".feed-btn").css("border-bottom","2px solid #0095EB");
      $(".stats-btn").css("border-bottom","0px");
      $(".charts-btn").css("border-bottom","0px");
      $(".portfolio-btn").css("border-bottom","0px");
      $("#stats").css("display","none");
      $("#portfolio").css("display","none");
    }
    // else{
    //   $("#social-trading").css("display","block");
    //   $("#copy-trading").css("display","none");
    // }
  }
  
  
  function statsShow(){
    if($("#stats").css("display") == "none"){
      $("#stats").css("display","block");
      $(".stats-btn").css("border-bottom","2px solid #0095EB");
      $(".feed-btn").css("border-bottom","0px");
      $(".charts-btn").css("border-bottom","0px");
      $(".portfolio-btn").css("border-bottom","0px");
      $("#feed").css("display","none");
      $("#portfolio").css("display","none");
    }
    // else{
    //   $("#copy-trading").css("display","block");
    //   $("#social-trading").css("display","none");
    // }
  }
 

  function portfolioShow(){
    if($("#portfolio").css("display") == "none"){
      $("#portfolio").css("display","block");
      $(".portfolio-btn").css("border-bottom","2px solid #0095EB");
      $(".feed-btn").css("border-bottom","0px");
      $(".charts-btn").css("border-bottom","0px");
      $(".stats-btn").css("border-bottom","0px");
    //   $("#portfolio").css("text-decoration","underline");
      $("#feed").css("display","none");
      $("#stats").css("display","none");
    }
    // else{
    //   $("#copy-trading").css("display","block");
    //   $("#social-trading").css("display","none");
    // }
  }

  function chartsShow(){
    if($("#charts").css("display") == "none"){
      $("#charts").css("display","block");
      $(".charts-btn").css("border-bottom","2px solid #0095EB");
      $(".feed-btn").css("border-bottom","0px");
      $(".stats-btn").css("border-bottom","0px");
      $(".portfolio-btn").css("border-bottom","0px");
    //   $("#portfolio").css("text-decoration","underline");
      $("#feed").css("display","none");
      $("#stats").css("display","none");
    }
    // else{
    //   $("#copy-trading").css("display","block");
    //   $("#social-trading").css("display","none");
    // }
  }