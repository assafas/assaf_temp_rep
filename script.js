
var myapp = angular.module('myapp', ['ngRoute']);


// configure our routes
myapp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the show page
        .when('/show', {
            templateUrl : 'show.html',
            controller  : 'showController'
        });
});

myapp.controller('showController', function($scope) {

    showfunc();
    $scope.message ="";

});


myapp.controller('mainController', function($scope) {

    $scope.message = "SIZE : 600 X 600 px";
    hidefunc();
    $scope.user = {
        Ax: "0", Ay: "0",
        Bx: "0", By: "0",
        Cx: "0", Cy: "0",


        getA: function () {

           
            flag1 = 0;
            var userObject = $scope.user;
            if(isNaN(userObject.Ax)||isNaN(userObject.Ay))
                return "only numbers!"
            if (userObject.Ax == 0 && userObject.Ay == 0)
                return "insert numbers";
            if (userObject.Ax == userObject.Ay) {
                return "Error: Equal numbers ";
            }
            if (userObject.Ax > 600)
                return "Error: width (X) Max numer - 600";
            if (userObject.Ay > 600)
                return "Error: height (Y) Max numer - 600";
            if (userObject.Ax < 0)
                return "Error: width (X) Min numer - 0";
            if (userObject.Ay <0)
                return "Error: height (Y) Min numer - 0";

            flag1 = 1;
            return "";

        },
        getB: function () {
        flag2=0;
        var userObject = $scope.user;
            if(isNaN(userObject.Bx)||isNaN(userObject.By))
                return "only numbers!"
        if(userObject.Bx ==0 && userObject.By==0)
            return "insert numbers";
        if(userObject.Bx == userObject.By)
        {return "Error: Equal numbers ";}
        if(userObject.Bx>600)
            return "Error: width (X) Max numer - 600";
        if(userObject.By>600)
            return "Error: height (Y) Max numer - 600";
        if (userObject.Bx < 0)
                return "Error: width (X) Min numer - 0";
        if (userObject.By <0)
                return "Error: height (Y) Min numer - 0";


        flag2 =1;
        return "";

    },

    getC: function () {
        flag3=0;
        var userObject = $scope.user;
        if(isNaN(userObject.Cx)||isNaN(userObject.Cy))
                return "only numbers!"
        if(userObject.Cx ==0 && userObject.Cy==0)
            return "insert numbers";
        if(userObject.Cx == userObject.Cy)
        {return "Error: Equal numbers ";}
        if(userObject.Cx>600)
            return "Error: width (X) Max numer - 600";
        if(userObject.Cy>600)
            return "Error: height (Y) Max numer - 600";
        if (userObject.Cx < 0)
                return "Error: width (X) Min numer - 0";
        if (userObject.Cy <0)
                return "Error: height (Y) Min numer - 0";


        flag3 =1;
        return "";

    },
        
        fixerror: function () {
            var userObject = $scope.user;
        if(flag1==0 || flag2==0 || flag3==0) {
            $("#show_temp").hide(0); 
            return "fix errors please";
        }
            
       $("#show_temp").show(250); 
    
        return "";
        
    }
    };
   

});


////////////////////////////////////////


document.getElementById("tempcanvas").style.marginLeft = "20%";

document.getElementById("tempcanvas").style.backgroundColor="#ff4341";



////////////////////////////////////////

function hidefunc() {

    document.getElementById("tempcanvas").width="0";
    document.getElementById("tempcanvas").height="0";

   $("#Points").show(1000); 


};

function showfunc() {

    document.getElementById("tempcanvas").width="600";
    document.getElementById("tempcanvas").height="600";

    document.getElementById("tempcanvas").style.visibility="visible";

new_myFunction();
$("#Points").hide(900);
    
};




function new_myFunction() {
    $("#tempcanvas").hide(0); 
    var temp = document.getElementById("tempcanvas");
    var cts = temp.getContext("2d");


    cts.font = "20px Georgia";

    
        var _Ax = document.getElementById("user.Ax").value;
        var _Ay = document.getElementById("user.Ay").value;
        var _Bx = document.getElementById("user.Bx").value;
        var _By = document.getElementById("user.By").value;
        var _Cx = document.getElementById("user.Cx").value;
        var _Cy = document.getElementById("user.Cy").value;
        cts.beginPath();
        cts.clearRect (0, 0, temp.width, temp.height);

        drawTriangle(_Ax,_Ay,_Bx,_By,_Cx,_Cy);
        

        function distance(x, y, xx, yy) {
            return Math.sqrt(Math.pow(x - xx, 2) + Math.pow(y - yy, 2) );
        }


        function direction(x, y, xx, yy) {
            var angV = Math.acos( (xx - x) / Math.sqrt( Math.pow(x - xx, 2) + Math.pow(y - yy, 2) ) );

            if (y - yy > 0) angV = - angV; 
            return (angV + Math.PI * 2) % (Math.PI * 2); 
        }

    
        function drawTriangle(x1,y1,x2,y2,x3,y3) {
            
            function drawAngle(x, y, dirA, dirB) {
                dirB += Math.PI;              
                var sweepAng = dirB - dirA;   
                var startAng = dirA;          
                if (Math.abs(sweepAng) > Math.PI) {  
                    sweepAng = Math.PI * 2 - sweepAng;  
                    startAng = dirB;          
                }
                cts.beginPath();
                if (sweepAng < 0) {                 
                    cts.arc(x, y, minDist, startAng + sweepAng, startAng);
                } else {                        
                    cts.arc(x, y, minDist, startAng, startAng + sweepAng);
                }
                cts.stroke();                 
            }

            cts.lineWidth = 3;               
            cts.strokeStyle = "white";
            cts.beginPath();
            cts.moveTo(x1, y1);
            cts.lineTo(x2, y2);
            cts.lineTo(x3, y3);
            cts.closePath();
            
            
//////////////////////angle Text///////////////////////
            
        var AC;
        var AB;
        var BC;


        AC = Math.pow(Math.pow(Math.abs(_Ax-_Cx),2)+Math.pow(Math.abs(_Ay-_Cy),2), 0.5);
        AB = Math.pow(Math.pow(Math.abs(_Ax-_Bx),2)+Math.pow(Math.abs(_Ay-_By),2), 0.5);
        BC = Math.pow(Math.pow(Math.abs(_Bx-_Cx),2)+Math.pow(Math.abs(_By-_Cy),2), 0.5);



        var tempA = ((Math.acos((Math.pow(AC,2)+Math.pow(AB,2)-Math.pow(BC,2))/(2*AC*AB)))*180)/Math.PI;
        
        var tempB = ((Math.acos((Math.pow(AB,2)+Math.pow(BC,2)-Math.pow(AC,2))/(2*BC*AB)))*180)/Math.PI;
        var tempC = ((Math.acos((Math.pow(AC,2)+Math.pow(BC,2)-Math.pow(AB,2))/(2*BC*AC)))*180)/Math.PI;
            
            
            
            
    cts.fillText(parseFloat(tempA).toFixed(1), _Ax-15,_Ay-25);
    cts.fillText(parseFloat(tempB).toFixed(1), _Bx-20,_By-20);
    cts.fillText(parseFloat(tempC).toFixed(1), _Cx,_Cy-5);
            
///////////////////////////////////angle Text////////////
            cts.stroke();
$("#tempcanvas").show(2000); 

            // now work out the radius of the angle stroke
            var dist1 = distance(x1, y1, x2, y2);  // get the 3 distance of the lines
            var dist2 = distance(x2, y2, x3, y3);
            var dist3 = distance(x3, y3, x1, y1);
            var minDist = Math.min(dist1, dist2, dist3); // get the min dist;
            if (minDist === 0) {
                return; // there are no angles to draw and exit
                        // to avoid divide by zero in direction function
            }
            minDist /= 5; // get the amgle arc radius 1/5th

            var dir1 = direction(x1, y1, x2, y2);  // get the 3 directions of the lines
            var dir2 = direction(x2, y2, x3, y3);
            var dir3 = direction(x3, y3, x1, y1);

            drawAngle(x1, y1, dir1, dir3); // draw the angle stoke first corner;
            drawAngle(x2, y2, dir2, dir1); // draw the angle stoke second corner;
            drawAngle(x3, y3, dir3, dir2); // draw the angle stoke third;
        }
    };





