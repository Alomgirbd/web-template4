// slick nav
$(document).ready(function(){
    $('#menu').slicknav({
        'label' : '',
        'appendTo': 'nav' 
    });
  });


// Pie chart
$(function() {
    $('.chart1').easyPieChart({
        //your options goes here
        lineWidth:15,
        size:180,
        animate:2000,
        trackColor:"#dfe8ed",
        barColor:"#30bae7",
        lineCap:'circle'
    });
    $('.chart2').easyPieChart({
        //your options goes here
        lineWidth:15,
        size:180,
        animate:2000,
        trackColor:"#dfe8ed",
        barColor:"#d74680",
        lineCap:'circle'
    });
    $('.chart3').easyPieChart({
        //your options goes here
        lineWidth:15,
        size:180,
        animate:2000,
        trackColor:"#dfe8ed",
        barColor:"#15c7a8",
        lineCap:'circle'
    });
    $('.chart4').easyPieChart({
        //your options goes here
        lineWidth:15,
        size:180,
        animate:2000,
        trackColor:"#dfe8ed",
        barColor:"#eb7d4b",
        lineCap:'circle'
    });
    // skill bar plugin

    $('#skill1,#skill2,#skill3,#skill4').simpleSkillbar({
        height:25 ,


    });
    // portfolio icon effect
   

});
new WOW().init();
