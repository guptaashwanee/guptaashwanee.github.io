
// SideNav Initialization
$(".button-collapse").sideNav();

var container = document.querySelector('.custom-scrollbar');
var ps = new PerfectScrollbar(container, {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
});

// Data Picker Initialization
$('.datepicker').pickadate();

// Material Select Initialization
$(document).ready(function () {
    $('.mdb-select').material_select();
});

// Tooltips Initialization
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// Small chart
$(function () {
    $('.min-chart#chart-sales').easyPieChart({
        barColor: "#FF5252",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});

// Main chart
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "#fff",
            backgroundColor: 'rgba(255, 255, 255, .3)',
            borderColor: 'rgba(255, 255, 255)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "#fff",
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: true,
                    color: "rgba(255,255,255,.25)"
                },
                ticks: {
                    fontColor: "#fff",
                },
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255,255,255,.25)"
                },
                ticks: {
                    fontColor: "#fff",
                },
            }],
        }
    }
});

$(function () {
    $('#dark-mode').on('click', function (e) {

        e.preventDefault();
        $('h4, button').not('.check').toggleClass('dark-grey-text text-white');
        $('.list-panel a').toggleClass('dark-grey-text');

        $('footer, .card').toggleClass('dark-card-admin');
        $('body, .navbar').toggleClass('white-skin navy-blue-skin');
        $(this).toggleClass('white text-dark btn-outline-black');
        $('body').toggleClass('dark-bg-admin');
        $('h6, .card, p, td, th, i, li a, h4, input, label').not(
            '#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white');
        $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3');
        $('.gradient-card-header').toggleClass('white black lighten-4');
        $('.list-panel a').toggleClass('navy-blue-bg-a text-white').toggleClass('list-group-border');

    });
});


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
    }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});
