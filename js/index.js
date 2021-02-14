$(document).ready( function() {
    function shuffle(arra1) {
        let arrLength = arra1.length;
        let temp;
        let index;
        while (arrLength > 0) {
            index = Math.floor(Math.random() * arrLength);
            arrLength--;
            temp = arra1[arrLength];
            arra1[arrLength] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    var reset = function(){  
        location.reload();
    }
    const myArray = [1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9];
    var newArray = shuffle(myArray);
    console.log(newArray);


    $("#hscore").html(sessionStorage.getItem('hscore'));
    var score = 0;
    
    var showTime1 = function(e){
        e.preventDefault();
        var a = newArray[0]
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime2 = function(e){
        e.preventDefault();
        var a = newArray[1];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime3 = function(e){
        e.preventDefault();
        var a = newArray[2];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime4 = function(e){
        e.preventDefault();
        var a = newArray[3];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    var showTime5 = function(e){
        e.preventDefault();
        var a = newArray[4];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime6 = function(e){
        e.preventDefault();
        var a = newArray[5];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime7 = function(e){
        e.preventDefault();
        var a = newArray[6];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime8 = function(e){
        e.preventDefault();
        var a = newArray[7];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime9 = function(e){
        e.preventDefault();
        var a = newArray[8];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime10 = function(e){
        e.preventDefault();
        var a = newArray[9];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime11 = function(e){
        e.preventDefault();
        var a = newArray[10];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }
    
    var showTime12 = function(e){
        e.preventDefault();
        var a = newArray[11];
        console.log(newArray, a);
        $(this).css("background-image", "none");
        
        if(a!=9){
            $(this).css("background-image", "url('images/penguin_"+a+".png')");
            (new Audio("sounds/quack.mp3")).play();
            score++;
            $("#score").html("<p> Score: <br>"+score+"</p>");
             if (score > sessionStorage.getItem('hscore')) {
                 sessionStorage.setItem('hscore',score)
                $("#highscore").html("Highscore: <br>"+sessionStorage.getItem('hscore'));
            }
            if(score==11){
                (new Audio("sounds/applause.mp3")).play();
                setTimeout( function() {
                    alert("You Won!!");
                    reset();
                    },250 );        
            }
        }else{
            $(this).css("background-image", "url('images/yeti.png')");
            (new Audio("sounds/toink.mp3")).play();
            setTimeout( function() {
            alert("Yaaaarrrr!!  **Game Over** \nYour Score is:  "+score+" \nPlay again??");
            reset();
            },200 );
        }
    }

    $("#penguin1").one('mousedown',showTime1);
    $("#penguin2").one('mousedown',showTime2);
    $("#penguin3").one('mousedown',showTime3);
    $("#penguin4").one('mousedown',showTime4);
    $("#penguin5").one('mousedown',showTime5);
    $("#penguin6").one('mousedown',showTime6);
    $("#penguin7").one('mousedown',showTime7);
    $("#penguin8").one('mousedown',showTime8);
    $("#penguin9").one('mousedown',showTime9);
    $("#penguin10").one('mousedown',showTime10);
    $("#penguin11").one('mousedown',showTime11);
    $("#yeti").one('mousedown',showTime12);
});

