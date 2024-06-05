import {NavLink} from "react-router-dom";
import classes from './MainNavigation.module.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
function MainNavigation()
{
  
  const navigate = useNavigate();
    const [show,setShow]=useState(true);
    //axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:3001/getcoke')
        .then(res=>{
            if(res.data.status=='Not')
            {
                setShow(true);
            }
            else{
                setShow(false);
            }
            
        })
    })
    
    const handleLogout=()=>{
      axios.post('http://localhost:3001/logout')
      .then(res=>{
          if(res.data.status=="success")
          {   
              console.log("HEllo");
              navigate('/signin');
          }
      })
  }
    const scriptContent=`
    (function ($) {
        "user strict";
        // Preloader Js
        $(window).on('load', function () {
          $('#overlayer').fadeOut(1000);
          var img = $('.bg_img');
          img.css('background-image', function () {
            var bg = ('url(' + $(this).data('background') + ')');
            return bg;
          });
          galleryMasonary();
          galleryMasonaryTwo();
        });
      
                  //>> Aos Animation <<//
                AOS.init({
                  once: true,
                  easing: 'ease-in-out',
                });
                //>> Aos Animation <<//
        // play
        function galleryMasonary() {
          // filter functions
          var $grid = $(".auction-wrapper-5");
          var filterFns = {};
          $grid.isotope({
            itemSelector: '.auction-item-5',
            masonry: {
              columnWidth: 0,
            }
          });
          // bind filter button click
          $('ul.filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-check');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
              filter: filterValue
            });
          });
          // change is-checked class on buttons
          $('ul.filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function () {
              $buttonGroup.find('.active').removeClass('active');
              $(this).addClass('active');
            });
          });
        }
        // Gallery Masonary
        function galleryMasonaryTwo() {
          // filter functions
          var $gridTwo = $(".auction-wrapper-7");
          var filter = {};
          $gridTwo.isotope({
            itemSelector: '.auction-item-7',
            masonry: {
              columnWidth: 0,
            }
          });
          // bind filter button click
          $('ul.filter').on('click', 'li', function () {
            var filterValueTwo = $(this).attr('data-check');
            // use filterFn if matches value
            filterValueTwo = filter[filterValueTwo] || filterValueTwo;
            $gridTwo.isotope({
              filter: filterValueTwo
            });
          });
          // change is-checked class on buttons
          $('ul.filter').each(function (i, buttonGroup) {
            var $buttonGroupTwo = $(buttonGroup);
            $buttonGroupTwo.on('click', 'li', function () {
              $buttonGroupTwo.find('.active').removeClass('active');
              $(this).addClass('active');
            });
          });
        }
        $(document).ready(function () {
          //Bidding All Events Here
          //New Countdown Starts
          if ($("#bid_counter1").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter1");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter2").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter2");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter3").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter3");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter4").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter4");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter5").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter5");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter6").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter6");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter7").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter7");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter8").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter8");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter9").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter9");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter10").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter10");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter11").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter11");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter12").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter12");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter13").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter13");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter14").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter14");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter15").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter15");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter16").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter16");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter17").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter17");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter18").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter18");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter19").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter19");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter20").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter20");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter21").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter21");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter22").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter22");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter23").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter23");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter24").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter24");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter25").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter25");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter26").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter26");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter27").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter27");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter28").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter28");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter29").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter29");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter30").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter30");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter31").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter31");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter32").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter32");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter33").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter33");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#bid_counter34").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#bid_counter34");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d  : ";
                    message += re_hours +"h  : ";
                    message += remaining.minutes +"m  : ";
                    message += remaining.seconds + "s";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#min_counter_1").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#min_counter_1");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d ";
                    message += re_hours +"h ";
                    message += remaining.minutes +"m";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#min_counter_1").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#min_counter_2");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d ";
                    message += re_hours +"h ";
                    message += remaining.minutes +"m";
                }
                counterElement.textContent = message;
            });
          }
          //New Countdown Starts
          if ($("#min_counter_1").length) {
            // If you need specific date then comment out 1 and comment in 2
            // let endDate = "2020/03/20"; //This is 1
            let endDate = (new Date().getFullYear()) + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getDate() + 1); //This is 2
            let counterElement = document.querySelector("#min_counter_3");
            let myCountDown = new ysCountDown(endDate, function (remaining, finished) {
                let message = "";
                if (finished) {
                message = "Expired";
                } else {
                    var re_days = remaining.totalDays;
                    var re_hours = remaining.hours;
                    message += re_days +"d ";
                    message += re_hours +"h ";
                    message += remaining.minutes +"m";
                }
                counterElement.textContent = message;
            });
          }
          // Nice Select
          $('.select-bar').niceSelect();
          // counter 
          $('.counter').countUp({
            'time': 2500,
            'delay': 10
          });
          // PoPuP 
          $('.popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
          });
          $("body").each(function () {
            $(this).find(".img-pop").magnificPopup({
              type: "image",
              gallery: {
                enabled: true
              }
            });
          })
          //Faq
          $('.faq-wrapper .faq-title').on('click', function (e) {
            var element = $(this).parent('.faq-item');
            if (element.hasClass('open')) {
              element.removeClass('open');
              element.find('.faq-content').removeClass('open');
              element.find('.faq-content').slideUp(300, "swing");
            } else {
              element.addClass('open');
              element.children('.faq-content').slideDown(300, "swing");
              element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
              element.siblings('.faq-item').removeClass('open');
              element.siblings('.faq-item').find('.faq-title').removeClass('open');
              element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
            }
          });
          //Menu Dropdown Icon Adding
          $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
          // drop down menu width overflow problem fix
          $('.submenu').parent('li').hover(function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
              var newpos = -$(menu).width();
              menu.css({
                left: newpos
              });
            }
          });
          $('.menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
              element.removeClass('open');
              element.find('li').removeClass('open');
              element.find('ul').slideUp(300, "swing");
            } else {
              element.addClass('open');
              element.children('ul').slideDown(300, "swing");
              element.siblings('li').children('ul').slideUp(300, "swing");
              element.siblings('li').removeClass('open');
              element.siblings('li').find('li').removeClass('open');
              element.siblings('li').find('ul').slideUp(300, "swing");
            }
          })
          // Scroll To Top 
          var scrollTop = $(".scrollToTop");
          $(window).on('scroll', function () {
            if ($(this).scrollTop() < 500) {
              scrollTop.removeClass("active");
            } else {
              scrollTop.addClass("active");
            }
          });
          //Click event to scroll to top
          $('.scrollToTop').on('click', function () {
            $('html, body').animate({
              scrollTop: 0
            }, 500);
            return false;
          });
          //Header Bar
          $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.menu').toggleClass('active');
          })
          $('.overlay').on('click', function () {
            $(this).removeClass('active');
            $('.header-bar').removeClass('active');
            $('.menu').removeClass('active');
            $('.cart-sidebar-area').removeClass('active');
          })
          $('.cart-button, .side-sidebar-close-btn').on('click', function () {
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.cart-sidebar-area').toggleClass('active');
          })
          $('.search-bar').on('click', function() {
            $('.search-form').toggleClass('active');
          })    
          $('.remove-cart').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent().hide(300);
          });
          // Header Sticky Herevar prevScrollpos = window.pageYOffset;
          var scrollPosition = window.scrollY;
          if (scrollPosition >= 1) {
            $(".header-section").addClass('active');
          }
          var header = $(".header-bottom");
          $(window).on('scroll', function () {
            if ($(this).scrollTop() < 1) {
              header.removeClass("active");
            } else {
              header.addClass("active");
            }
          });
          $('.tab ul.tab-menu li').on('click', function (g) {
            var tab = $(this).closest('.tab'),
              index = $(this).closest('li').index();
            tab.find('li').siblings('li').removeClass('active');
            $(this).closest('li').addClass('active');
            tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').hide(10);
            tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').fadeIn(10);
            g.preventDefault();
          });
          //Client Slider
          $('.client-slider').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            items: 1,
            autoHeight: true,
            responsive:{
                768:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items:3,
                },
            }
          })
          //Auction Slider One
          $('.auction-slider-1').owlCarousel({
            // loop:true,
            nav:false,
            dots: false,
            items:1,
            autoplay:true,
            autoplayTimeout:2500,
            autoplaySpeed: 1000,
            autoplayHoverPause:true,
            autoHeight: true,
            margin: 30,
          });
          var owlOne = $('.auction-slider-1');
          owlOne.owlCarousel();
          // Go to the next item
          $('.electro-next').on('click', function() {
              owlOne.trigger('next.owl.carousel');
          })
          // Go to the previous item
          $('.electro-prev').on('click', function() {
              owlOne.trigger('prev.owl.carousel', [300]);
          })
          //Auction Slider
          $('.auction-slider-2').owlCarousel({
            // loop:true,
            nav:false,
            dots: false,
            items:1,
            autoplay:true,
            autoplayTimeout:2500,
            autoplaySpeed: 1000,
            autoplayHoverPause:true,
            autoHeight: true,
            margin: 30,
          });
          var owlTwo = $('.auction-slider-2');
          owlTwo.owlCarousel();
          // Go to the next item
          $('.art-next').on('click', function() {
              owlTwo.trigger('next.owl.carousel');
          })
          // Go to the next item
          $('.art-prev').on('click', function() {
              owlTwo.trigger('prev.owl.carousel');
          })
          //Browse Auction Slider
          $('.browse-slider').owlCarousel({
            loop:true,
            nav:false,
            dots: false,
            items:1,
            autoplay:true,
            autoplayTimeout:2500,
            autoplaySpeed: 1000,
            autoplayHoverPause:true,
            autoHeight: true,
            responsive:{
                450:{
                    items: 2,
                },
                768:{
                    items: 3,
                },
                992:{
                    items: 5,
                },
                1200:{
                    items:6,
                },
            }
          });
          var owlThree = $('.browse-slider');
          owlThree.owlCarousel();
          // Go to the next item
          $('.bro-next').on('click', function() {
              owlThree.trigger('next.owl.carousel');
          })
          // Go to the previous item
          $('.bro-prev').on('click', function() {
              owlThree.trigger('prev.owl.carousel', [300]);
          })
          //Browse Auction Slider
          $('.browse-slider-2').owlCarousel({
            loop:true,
            nav:false,
            dots: false,
            items:1,
            autoplay:true,
            autoplayTimeout:2500,
            autoplaySpeed: 1000,
            autoplayHoverPause:true,
            autoHeight: true,
            responsive:{
                500:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items:4,
                },
            }
          });
          var owlBrowseTwo = $('.browse-slider-2');
          owlBrowseTwo.owlCarousel();
          // Go to the next item
          $('.bro-next').on('click', function() {
              owlBrowseTwo.trigger('next.owl.carousel');
          })
          // Go to the previous item
          $('.bro-prev').on('click', function() {
              owlBrowseTwo.trigger('prev.owl.carousel', [300]);
          })
          //Browse Auction Slider
          $('.auction-slider-4').owlCarousel({
            // loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplaySpeed: 1000,
            autoplayHoverPause: true,
            autoHeight: true,
            margin: 30,
            responsive:{
                768:{
                    items: 2,
                },
                992:{
                    items: 1,
                },
            }
          });
          var owlFour = $('.auction-slider-4');
          owlFour.owlCarousel();
          // Go to the next item
          $('.real-next').on('click', function() {
              owlFour.trigger('next.owl.carousel');
          })
          // Go to the previous item
          $('.real-prev').on('click', function() {
              owlFour.trigger('prev.owl.carousel', [300]);
          })
          //The Password Show
          $('.pass-type').on('click', function () {
            var x = document.getElementById("login-pass");
            if (x.type === "password") {
              x.type = "text";
            } else {
              x.type = "password";
            }
          });
          $( function() {
            $( "#slider-range" ).slider({
              range: true,
              min: 0,
              max: 10000,
              values: [ 600, 7000 ],
              slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
              }
            });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
          });
          var sync1 = $("#sync1");
          var sync2 = $("#sync2");
          var thumbnailItemClass = '.owl-item';
          var slides = sync1.owlCarousel({
            startPosition: 12,
            items: 1,
            loop: true,
            margin: 0,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            scrollPerPage: true,
            autoplayHoverPause: false,
            nav: false,
            dots: false,
          }).on('changed.owl.carousel', syncPosition);
      
          function syncPosition(el) {
            $owl_slider = $(this).data('owl.carousel');
            var loop = $owl_slider.options.loop;
      
            if (loop) {
              var count = el.item.count - 1;
              var current = Math.round(el.item.index - (el.item.count / 2) - .5);
              if (current < 0) {
                current = count;
              }
              if (current > count) {
                current = 0;
              }
            } else {
              var current = el.item.index;
            }
      
            var owl_thumbnail = sync2.data('owl.carousel');
            var itemClass = "." + owl_thumbnail.options.itemClass;
      
            var thumbnailCurrentItem = sync2
              .find(itemClass)
              .removeClass("synced")
              .eq(current);
            thumbnailCurrentItem.addClass('synced');
      
            if (!thumbnailCurrentItem.hasClass('active')) {
              var duration = 500;
              sync2.trigger('to.owl.carousel', [current, duration, true]);
            }
          }
          var thumbs = sync2.owlCarousel({
              startPosition: 12,
              items: 2,
              loop: false,
              margin: 0,
              autoplay: false,
              autoplaySpeed: 1000,
              nav: false,
              dots: false,
              responsive:{
                  500:{
                      items: 3,
                  },
                  768:{
                      items: 4,
                  },
                  992:{
                      items: 5,
                  },
                  1200:{
                      items: 6,
                  },
              },
              onInitialized: function(e) {
                var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
                thumbnailCurrentItem.addClass('synced');
              },
            })
            .on('click', thumbnailItemClass, function(e) {
              e.preventDefault();
              var duration = 500;
              var itemIndex = $(e.target).parents(thumbnailItemClass).index();
              sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
            }).on("changed.owl.carousel", function(el) {
              var number = el.item.index;
              $owl_slider = sync1.data('owl.carousel');
              $owl_slider.to(number, 500, true);
            });  
          sync1.owlCarousel();
          // Go to the next item
          $('.det-next').on('click', function() {
            sync1.trigger('next.owl.carousel');
            sync2.trigger('next.owl.carousel');
          })
          // Go to the previous item
          $('.det-prev').on('click', function() {
            sync1.trigger('prev.owl.carousel', [300]);
            sync2.trigger('prev.owl.carousel', [300]);
          })
        });
      })(jQuery);
      /*! yscountdown v1.0.0 | Yusuf SEZER <yusufsezer@mail.com> | MIT License | https://github.com/yusufsefasezer/ysCountDown.js */
!function(t,o){"function"==typeof define&&define.amd?define([],function(){return o(t)}):"object"==typeof exports?module.exports=o(t):t.ysCountDown=o(t)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(u){"use strict";return function(t,o){var n={},r=null,a=null,e=null,l=null,i=!1;n.init=function(t,o){if(!("addEventListener"in u))throw"ysCountDown: This browser does not support the required JavaScript methods.";if(n.destroy(),r="string"==typeof t?new Date(t):t,!((e=r)instanceof Date)||isNaN(e))throw new TypeError("ysCountDown: Please enter a valid date.");var e;if("function"!=typeof o)throw new TypeError("ysCountDown: Please enter a callback function.");a=o,s()},n.destroy=function(){a=r=null,f(),l=null,i=!1};var s=function(){e||(e=setInterval(function(){var t,o;t=new Date,(o=Math.ceil((r.getTime()-t.getTime())/1e3))<=0&&(i=!0,f()),l={seconds:o%60,minutes:Math.floor(o/60)%60,hours:Math.floor(o/60/60)%24,days:Math.floor(o/60/60/24)%7,daysToWeek:Math.floor(o/60/60/24)%7,daysToMonth:Math.floor(o/60/60/24%30.4368),weeks:Math.floor(o/60/60/24/7),weeksToMonth:Math.floor(o/60/60/24/7)%4,months:Math.floor(o/60/60/24/30.4368),monthsToYear:Math.floor(o/60/60/24/30.4368)%12,years:Math.abs(r.getFullYear()-t.getFullYear()),totalDays:Math.floor(o/60/60/24),totalHours:Math.floor(o/60/60),totalMinutes:Math.floor(o/60),totalSeconds:o},a(l,i)},100))},f=function(){e&&(clearInterval(e),e=null)};return n.init(t,o),n}});
!function (t) { "use strict"; t.fn.countUp = function (e) { var a = t.extend({ time: 2e3, delay: 10 }, e); return this.each(function () { var e = t(this), n = a, u = function () { e.data("counterupTo") || e.data("counterupTo", e.text()); var t = parseInt(e.data("counter-time")) > 0 ? parseInt(e.data("counter-time")) : n.time, a = parseInt(e.data("counter-delay")) > 0 ? parseInt(e.data("counter-delay")) : n.delay, u = t / a, r = e.data("counterupTo"), o = [r], c = /[0-9]+,[0-9]+/.test(r); r = r.replace(/,/g, ""); for (var d = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)), s = d ? (r.split(".")[1] || []).length : 0, i = u; i >= 1; i--) { var p = parseInt(Math.round(r / u * i)); if (d && (p = parseFloat(r / u * i).toFixed(s)), c) for (; /(\d+)(\d{3})/.test(p.toString());)p = p.toString().replace(/(\d+)(\d{3})/, "$1,$2"); o.unshift(p) } e.data("counterup-nums", o), e.text("0"); var f = function () { e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), a) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null)) }; e.data("counterup-func", f), setTimeout(e.data("counterup-func"), a) }; e.waypoint(u, { offset: "100%", triggerOnce: !0 }) }) } }(jQuery);
      
      
  `
      useEffect(()=>{
    const ele=document.createElement('script');
    ele.innerHTML=scriptContent;
    document.body.appendChild(ele);
    return ()=>{
        document.body.removeChild(ele);
    }
  })
    return(
        <>
        <header>
        <div className="header-top">
            <div className="container">
                <div className="header-top-wrapper">
                    <ul className="customer-support">
                        <li className="cmn-support-text">
                            <a href="#0" className="mr-3"><i className="fas fa-phone-alt"></i><span className="ml-2 d-none d-sm-inline-block">Customer Support</span></a>
                        </li>
                        
                    </ul>
                    <ul className="cart-button-area">
                                           
                        <li>
                            <NavLink to="/signin" className="user-button"><i className="flaticon-user"></i></NavLink>
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <NavLink to="/">
                            <img src="/homeimages/14.png" height="80px" width="10000px" alt="logo"/>
                        </NavLink>
                    </div>
                    <ul className="menu ml-auto">
                        <li>
                            <NavLink to="/" className={(isActive)=>isActive?classes.active:undefined } end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allauctions">Auction</NavLink>
                        </li>
                        <li>
                            <a href="#0">Pages</a>
                            <ul className="submenu">
                                <li>
                                    <a href="#0">Product</a>
                                    <ul className="submenu">
                                        <li>
                                            <NavLink to="/Product1" className={(isActive)=>isActive?classes.active:undefined } >Cars</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/product2" className={(isActive)=>isActive?classes.active:undefined } >House</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/product3" className={(isActive)=>isActive?classes.active:undefined } >Jewelry</NavLink>
                                        </li>
                                        
                                    </ul>
                                </li>
                                {show&&
                                <li>
                                    <a href="#0">My Account</a>
                                    <ul className="submenu">
                                        <li>
                                        <NavLink to="/signup" className={(isActive)=>isActive?classes.active:undefined } >Sign Up</NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="/signin" className={(isActive)=>isActive?classes.active:undefined } >Sign In</NavLink>
                                        </li>
                                    </ul>
                                </li>
}
                                <li>
                                    <a href="#0">Dashboard</a>
                                    <ul className="submenu">
                                        <li>
                                            <NavLink to="/dashboard">Dashboard</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/userprofile">Personal Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/userbid">My Bids</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/winningbid">Winning Bids</NavLink>
                                        </li>
                                       
                                        <li>
                                            <NavLink to="/fvtbids">My Favorites</NavLink>
                                        </li>
                                        <li>
                                         <NavLink to="/myitems">My Items</NavLink>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/aboutus" className={(isActive)=>isActive?classes.active:undefined } >About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/chatbot" className={(isActive)=>isActive?classes.active:undefined } >Chat bot</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/error" className={(isActive)=>isActive?classes.active:undefined } >404 Error</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/contactus" className={(isActive)=>isActive?classes.active:undefined } >Contact</NavLink>
                        </li>
                        {!show &&
                        <li>
                            <NavLink to="/uploaditem" className={(isActive)=>isActive?classes.active:undefined } >Upload Item</NavLink>
                        </li>}
                        {!show &&
                        <li> 
                        <a href="#" onClick={handleLogout} className={(isActive)=>isActive?classes.active:undefined } >Logout</a>
                        </li>}
                    </ul>
                    <form className="search-form">
                    </form>
                    <div className="search-bar d-md-none">
                        <a href="#0"><i className="fas fa-search"></i></a>
                    </div>
                    <div className="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}
export default MainNavigation;