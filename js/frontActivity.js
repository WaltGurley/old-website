var contWidth = window.innerWidth, contHeight = window.innerHeight,
  cont = SVG('mainContainer').size('100%','100%'),
  warmDone = false,
  coldDone = false,
  warmMap = false,
  coldMap = false;

  console.log(cont)

//Produces museum, globe, horizon, sky, map, ALL TEXTS, raleigh, gboro, gville, questionBox, warmFrontMap, coldFrontMap
function makeStationaryObjects() {
  var	museumPath = 'm 391.21308,694.34071 c 0,-2.2764 0.2439,-18.61765 0.2439,-18.61765 l 4.0599,-0.0457 0.15752,-4.35459 7.30681,-4.96947 8.03851,5.35565 0.23374,4.78652 c 5.30427,0.005 9.34288,0.24362 14.4307,0.44713 l -0.0813,-2.35768 13.00796,1.05689 -0.1626,5.85359 6.74788,-0.4065 1.21949,-32.84508 14.47136,6.34135 0.0813,9.34947 18.12984,1.30082 0.5691,9.59337 23.4187,0.28571 -0.1626,-6.17876 8.69907,0.16259 -0.1626,6.1788 c 6.40006,-0.46738 12.36422,0.0919 18.78301,-0.0336 l -0.0365,-3.23615 11.691,0.44308 0.2973,21.66518 z';

  //Set up horizon items
  var	horizon = cont.line(0,contHeight*0.75,contWidth,contHeight*0.75).attr({'stroke': '#000', 'stroke-width': 4}),
    museum = cont.path(museumPath).attr({'fill': '#000'}),
    globe = cont.image('css/images/globe.png',26,26),
    mapGradient = cont.gradient('linear', function(stop) {
        stop.at({ offset: 0, color: '#000' });
        stop.at({ offset: 0.3, color: '#333' });
        stop.at({ offset: 1, color: '#ffb380' });
      }),
    map = cont.rect(contWidth,contHeight-horizon.bbox().y).fill(mapGradient.from(0,0).to(0,1)).move(0,horizon.bbox().y).back();

  museum.move(cont.bbox().width/2-museum.bbox().width/2,horizon.bbox().y-museum.rbox().height);
  globe.move(museum.rbox().x+museum.rbox().width/2-26,contHeight*0.75-globe.rbox().height*4/5);


  //Texts and points for map view
  var raleigh = cont.circle(10).move(globe.bbox().x,globe.bbox().y+100),
    raleighText = cont.text('Raleigh').move(raleigh.bbox().x+raleigh.bbox().width+5,raleigh.bbox().y).font({size: 30, family: 'Helvetica', anchor: 'middle'}).attr({'cursor': 'default'}),

    gboro = cont.circle(10).move(contWidth*0.1,globe.bbox().y+100),
    gboroText = cont.text('Asheville').move(gboro.bbox().x+gboro.bbox().width+5,gboro.bbox().y).font({size: 30, family: 'Helvetica', anchor: 'middle'}).attr({'cursor': 'default'}),

    gville = cont.circle(10).move(contWidth*0.8,globe.bbox().y+100),
    gvilleText = cont.text('Kitty Hawk').move(gville.bbox().x+gville.bbox().width+5,gville.bbox().y).font({size: 30, family: 'Helvetica', anchor: 'middle'}).attr({'cursor': 'default'});

}

//Produces stormCloud
function makeStormCloud(boundary) {
  //Create lightning bolt
  var	boltPath = 'm 252.5,621.78571 -7.14286,13.92858 9.28572,0 -6.78572,14.28571 8.21429,-2.85714 -15,26.07143 33.21429,-32.85715 -8.92857,-0.35714 6.07142,-7.14285 -7.5,2.14285 8.21429,-17.85714 -17.85715,-0.35715 z',
      bolt = cont.path(boltPath).attr({fill: '#ffff00','stroke-width': 2}),
      bolt1 = cont.path(boltPath).attr({fill: '#ffff00','stroke-width': 2});

  //Create rain
  var	rainDrops = [];
      for (var i = 0; i < 50; i++) {
        rainDrops[i] = cont.ellipse(4,8).attr({fill: '#5f8dd3','stroke-width': 0})
      }

  //Create storm cloud
  var	stormGradient = cont.gradient('linear', function(stop) {
        stop.at({ offset: 0, color: '#222' });
        stop.at({ offset: 1, color: '#888' });
      }),
      stormCloudPath = 'm 280.71482,415.41234 c -54.90364,-2.44355 -112.98929,4.84776 -166.9375,4.25 -3.32615,0.35524 -4.0793,1.81867 -4.875,4.46875 0,2.46315 2.17726,4.46875 4.875,4.46875 5.16152,-1.01489 3.44515,-3.09084 3.625,0 0,3.2842 3.77703,5.9375 8.46875,5.9375 1.73189,0 3.34433,-0.34583 4.6875,-0.96875 0.0904,3.35784 4.98863,6.0625 11.03125,6.0625 1.42263,0 2.78362,-0.16043 4.03125,-0.4375 0.93518,3.40164 5.05965,5.96875 10,5.96875 0.87423,0 1.72153,-0.0991 2.53125,-0.25 0.15209,4.60546 5.90922,8.3125 12.96875,8.3125 2.76692,0 5.33287,-0.56224 7.4375,-1.53125 0.12072,4.15009 5.00777,7.46875 11.03125,7.46875 1.58768,0 3.10441,-0.23863 4.46875,-0.65625 0.81146,3.53199 4.09632,6.1875 8.0625,6.1875 1.14361,0 2.22782,-0.22736 3.21875,-0.625 0.22423,3.89745 3.34511,7 7.1875,7 0.19741,0 0.40034,-0.0152 0.59375,-0.0312 -0.90627,1.06329 -1.4375,2.28744 -1.4375,3.625 0,2.19741 1.41902,4.18376 3.625,5.46875 -1.18672,1.50979 -1.9375,3.62967 -1.9375,6 0,1.1224 0.1992,2.21137 0.5,3.1875 -2.39247,0.10346 -4.3125,2.64878 -4.3125,5.75 0,1.84109 0.70099,3.45083 1.75,4.5 -3.31958,2.27092 -5.5625,6.54708 -5.5625,11.4375 0,5.93324 3.288,10.91633 7.8125,12.5625 -0.57487,1.36858 -1.06404,2.92664 -1.5,4.59375 -5.92576,2.13498 -10.15625,7.41658 -10.15625,13.625 0,5.29937 3.07555,9.92636 7.65625,12.5 -0.52949,1.13055 -0.84375,2.36798 -0.84375,3.65625 0,3.73709 2.43995,6.97677 6.0625,8.6875 l -0.1875,4.90625 c -1.54514,2.53308 -2.46875,5.80297 -2.46875,9.34375 0,2.99751 0.67091,5.77213 1.8125,8.09375 l -0.125,3.15625 -0.9375,0.84375 c -0.0421,-3.7e-4 -0.0828,0 -0.125,0 -5.74735,0 -10.40625,3.4337 -10.40625,7.65625 0,0.57232 0.0877,1.11984 0.25,1.65625 l -1.875,1.6875 c -0.95763,-0.24201 -1.97561,-0.375 -3.03125,-0.375 -5.63006,0 -10.21875,3.70683 -10.21875,8.28125 0,4.57442 4.58869,8.28125 10.21875,8.28125 0,0 58.00387,-0.0349 81.3125,0 23.0364,0.93289 46.78943,-2.17618 69.46875,-2.125 0.3884,0.15865 10.12228,0.34347 14.21875,0.40625 3.40149,0 6.15625,-2.17726 6.15625,-4.875 0,-2.45317 -2.27885,-4.46445 -5.25,-4.8125 2.2e-4,-0.0209 0,-0.0415 0,-0.0625 0,-5.12141 -6.67519,-9.28042 -14.9375,-9.34375 1.21188,-1.21148 1.9375,-2.77533 1.9375,-4.46875 0,-3.87067 -3.80828,-7 -8.5,-7 -1.2085,0 -2.36545,0.18723 -3.40625,0.5625 -0.0292,-2.6707 -1.86968,-4.85351 -4.25,-5.1875 -0.0922,-3.74047 -3.46476,-6.75297 -7.65625,-6.84375 l 0,-1.75 c 2.0343,-1.80672 3.40625,-5.30212 3.40625,-9.3125 0,-2.78226 -0.66439,-5.29414 -1.75,-7.1875 4.44773,-1.26661 7.71875,-5.36471 7.71875,-10.21875 0,-3.98207 -2.19443,-7.46372 -5.4375,-9.28125 1.26074,-1.25194 2.03125,-2.83221 2.03125,-4.53125 0,-2.80234 -2.05258,-5.23338 -5.0625,-6.5 1.81003,-1.89361 2.9375,-4.55099 2.9375,-7.5 0,-1.43684 -0.26639,-2.81748 -0.75,-4.0625 2.40042,-1.14748 4.15625,-4.48776 4.15625,-8.46875 0,-2.50105 -0.70706,-4.75532 -1.8125,-6.375 1.61273,-1.32455 2.65625,-3.31906 2.65625,-5.53125 0,-2.1026 -0.92987,-3.99284 -2.40625,-5.3125 1.2341,-1.85813 1.96875,-4.20828 1.96875,-6.78125 0,-3.12664 -1.09878,-5.92918 -2.84375,-7.90625 0.71835,-0.84974 1.15625,-1.86004 1.15625,-2.9375 0,-2.37445 -2.0127,-4.37625 -4.84375,-5.15625 l 0,-0.90625 c 3.66597,-0.49685 6.57294,-2.72552 7.25,-5.59375 l 0.75,-0.28125 c 2.00527,1.08197 4.62082,1.75 7.46875,1.75 4.67312,0 8.6818,-1.75673 10.46875,-4.28125 0.2597,0.0314 0.51427,0.0312 0.78125,0.0312 3.3939,0 6.23483,-2.60438 7.125,-6.15625 1.90539,1.69268 4.66985,2.75 7.75,2.75 2.81263,0 5.34587,-0.8694 7.21875,-2.3125 2.09507,1.97593 4.83323,3.1875 7.84375,3.1875 5.21721,0 9.64711,-3.61755 11.25,-8.625 0.48999,0.074 0.98882,0.125 1.5,0.125 4.68564,0 8.58218,-3.22512 9.53125,-7.53125 2.08731,1.25949 4.74789,2 7.65625,2 5.79232,0 10.65311,-2.99529 11.84375,-7 0.49411,0.12292 1.03035,0.21875 1.5625,0.21875 3.30931,0 6.00038,-2.52258 6.3125,-5.75 1.22577,0.41805 2.68554,0.65625 4.28125,0.65625 4.22255,0 7.65625,-1.73248 7.65625,-3.84375 0,-0.0546 0.005,-0.10221 0,-0.15625 1.24169,-0.40595 2.125,-1.51498 2.125,-2.8125 0,-1.6421 -1.42811,-2.96875 -3.1875,-2.96875 -62.59929,-4.14308 -113.82856,-4.63883 -164.375,-4.6875 z',
      stormCloud = cont.path(stormCloudPath).attr({fill: stormGradient.from(0,1).to(0,0),'stroke-width': 2});

      //Create storm group
  var	storm = cont.group(),
    stormStuff = [bolt, bolt1, stormCloud];

  //Move storm elements to cloud
  for (var i = 0; i < 50; i++) {
    if (i < stormStuff.length-1) {
      stormStuff[i].move(stormCloud.bbox().width/4,stormCloud.bbox().height-10);
    }
    rainDrops[i].move(stormCloud.bbox().width/4,stormCloud.bbox().height-10);
  }

  //Add rainDrops to storm group
  for (var i = 0; i < 50; i++) {
    storm.add(rainDrops[i]);
  }

  //Add other elements to storm group
  for (var i = 0; i < stormStuff.length; i++) {
    storm.add(stormStuff[i]);
  }

  //Set up rain drops animation, rainDowns then rainUp in loop
  var rainDowns, rainUps;
    rainDowns = function(dropIn) {
      rainDrops[dropIn].animate(400, '<', Math.random()*400).transform('y',70).after(function() {
        rainUps(dropIn);
      });
    }

    rainUps = function(dropOut) {
      rainDrops[dropOut].animate(0).transform('y',0).transform('x', Math.random()*150).after(function() {
        rainDowns(dropOut);
      });
    }

  //Start rain drops animation
  for (var i = 0; i < 50; i++) {
    rainDowns(i);
  }

  //Set up storm cloud animation
  var bigger, smaller;
  bigger = function() {
    storm.animate(600).scale(1, 0.95).after(smaller);
    bolt.animate(400, SVG.easing.bounce).scale(1,1).after(function () {
      bolt.animate(10).scale(0,0).transform('x', stormCloud.bbox().width/4+Math.random()*140);
    });
  }

  smaller = function() {
    storm.animate(600).scale(0.95,1).after(bigger);
    bolt1.animate(400, SVG.easing.bounce).scale(1,1).after(function () {
      bolt1.animate(10).scale(0,0).transform('x', stormCloud.bbox().width/4+Math.random()*140);
    });
  }

  smaller();

  storm.move(boundary.bbox().width*5/12,0);
  boundary.add(storm);
  boundary.children()[5].back()
  boundary.children()[3].click('null')
  boundary.children()[4].click('null')
}

//Produces thinClouds
function makeThinClouds(boundary) {
  var	thinCloudPath4 = 'M 680.66575,602.70374 C 671.98819,602.5237 664.5679,605.48476 661.651,609.77688 658.62355,605.83241 651.55898,602.97268 643.28374,602.80099 633.9271,602.60686 626.02177,605.91768 623.6616,610.57274 620.42424,607.72982 614.83032,605.76667 608.41152,605.6335 600.66189,605.47271 593.97972,608.02147 591.19697,611.74184 589.14046,610.37319 586.42326,609.50918 583.45915,609.44768 577.68435,609.32787 572.85507,612.27265 571.69998,616.28344 570.06813,614.92372 568.28147,612.72607 565.09947,613.04844 562.71755,613.05444 552.68262,614.88944 551.33597,622.39962 L 551.56466,627.82056 801.83248,625.58401 C 802.87241,625.76653 803.96602,625.88688 805.10785,625.91058 811.55725,626.04439 816.84546,623.40932 816.91132,620.01325 816.97722,616.61718 811.79602,613.73256 805.34661,613.59874 804.28321,613.57664 803.26231,613.64154 802.28053,613.76142 799.27067,611.48658 793.65924,609.86489 787.16913,609.73023 779.97654,609.58101 773.77588,611.29739 770.99316,613.85582 768.78617,610.53095 762.35755,608.01934 754.70092,607.86048 748.21153,607.72583 742.53396,609.29575 739.52971,611.74829 736.82758,607.44456 728.65364,604.18429 718.89622,603.98184 710.02963,603.79788 702.35445,606.19387 698.87492,609.77333 695.78647,605.7631 688.82491,602.87302 680.66575,602.70374 z',
      thinCloudPath3 = 'M 731.97579,587.19372 C 724.9432,586.96102 718.83215,590.0651 716.14553,594.73304 713.61397,592.79634 710.19354,591.57339 706.40801,591.44814 701.46711,591.28466 697.06796,593.03472 694.39913,595.88866 693.24671,595.692 692.05429,595.54856 690.81395,595.50753 685.96677,595.34714 681.60325,596.45857 678.71634,598.36999 676.48906,594.27129 671.11861,591.29308 664.78928,591.08365 658.907,590.88902 653.73473,593.14281 651.09864,596.63113 649.74894,596.32585 648.32431,596.12681 646.82989,596.07735 641.39646,595.89759 636.63279,597.61045 634.10795,600.26929 632.58149,599.56899 630.81469,599.11024 628.917,599.04745 623.38977,598.86456 618.78894,601.85555 618.19754,605.85581 618.17624,605.85501 618.15644,605.85481 618.13504,605.85381 614.19268,605.72336 610.86619,607.30619 610.11276,609.52618 603.83688,609.52918 598.89164,610.96552 598.84624,612.94119 598.79754,615.06078 604.38765,616.98734 611.31116,617.21642 615.40863,617.35199 618.99924,616.86456 621.30812,616.00956 L 880.43768,615.02024 880.43968,614.94534 C 884.29758,614.62844 887.31285,612.31927 887.37994,609.39953 887.45424,606.16445 883.8802,603.43329 879.42625,603.28592 879.35135,603.28392 879.28216,603.27992 879.20765,603.27892 876.92144,599.92646 870.93369,597.37971 863.8478,597.14526 856.67704,596.908 850.54128,599.10414 848.16461,602.36429 845.87164,599.54436 840.10819,597.37236 833.28373,597.14656 827.00655,596.93886 821.54649,598.40955 818.82594,600.71849 815.93497,598.20823 810.67336,596.39844 804.61658,596.19803 798.86591,596.00777 793.7692,597.30092 790.69827,599.4128 788.87764,597.44295 786.00707,596.10734 782.74504,595.9994 779.69759,595.89857 776.96754,596.88549 775.06172,598.52041 772.1272,596.1201 767.46972,594.48141 762.18914,594.30669 756.44034,594.11648 751.35248,595.71369 748.37853,598.27506 746.91731,592.20394 740.16568,587.46502 731.97603,587.19405 z',
      thinCloudPath2 = 'M 841.44346,570.31057 C 835.2407,570.03595 829.76924,572.81302 826.76961,577.115 824.933,576.59371 822.96267,576.24631 820.88768,576.15445 813.81699,575.84138 807.67938,578.35484 804.79469,582.2371 802.49457,580.98529 799.65264,580.19737 796.56873,580.06081 791.70507,579.84547 787.38276,581.32825 784.75486,583.77959 783.22258,579.563 779.57386,576.5079 775.22616,576.31539 771.81746,576.16447 768.75505,577.83106 766.74397,580.51115 764.03231,578.59291 760.45995,577.35009 756.51625,577.17548 750.02636,576.88814 744.38009,579.55688 741.88201,583.65219 739.42318,580.89882 735.56757,579.00721 731.19259,578.8135 726.69223,578.61424 722.67478,580.27324 720.08723,582.93429 718.58926,581.4704 716.68588,580.5598 714.5875,580.46689 711.78101,580.34262 709.2454,581.72253 707.52888,583.98438 705.15412,583.17407 702.41524,582.64602 699.47238,582.51571 690.35421,582.112 682.86148,585.62285 682.74015,590.38211 682.72155,591.11191 682.90634,591.85349 683.21627,592.54472 682.29123,592.38977 681.32805,592.29637 680.31742,592.25163 674.34207,591.98705 669.43087,593.91906 669.36395,596.54387 669.35205,597.01085 669.52377,597.442 669.79863,597.88098 667.71601,598.29271 666.33066,599.07256 666.30618,600.03259 666.26678,601.5766 669.76613,602.98623 674.10119,603.17818 676.65279,603.29115 678.89065,602.95071 680.34141,602.34252 L 931.26403,600.72705 C 931.94503,600.99144 932.69483,601.20223 933.46983,601.23655 936.98483,601.39216 939.87393,598.87701 939.95663,595.63459 940.03963,592.39215 937.28473,589.62711 933.76983,589.47149 933.33043,589.45199 932.87193,589.47649 932.45563,589.53689 931.56133,586.80096 929.23293,584.82288 926.45383,584.69982 925.88633,584.67472 925.32323,584.70582 924.79413,584.83225 923.53603,580.73947 919.92713,577.65682 915.57553,577.46416 911.72953,577.29387 908.34643,579.43246 906.59883,582.66758 904.87813,581.55561 902.75163,580.84993 900.42893,580.74708 898.28633,580.65218 896.27763,581.06988 894.58713,581.88865 892.01896,578.55993 887.47982,576.22016 882.26848,575.98943 877.14256,575.76245 872.58569,577.62288 869.8374,580.62807 867.65667,579.72783 865.1242,579.18389 862.43955,579.06503 860.30131,578.97033 858.26115,579.13843 856.39502,579.57988 853.87338,574.3979 848.17625,570.60872 841.44346,570.31061 z',
      thinCloudPath1 = 'M 829.64532,560.87851 C 820.96776,560.69847 813.54747,563.65953 810.63057,567.95165 807.60312,564.00718 800.53855,561.14745 792.26331,560.97576 782.90667,560.78163 775.00134,564.09245 772.64117,568.74751 769.40381,565.90459 763.80989,563.94144 757.39109,563.80827 749.64146,563.64748 742.95929,566.19624 740.17654,569.91661 738.12003,568.54796 735.40283,567.68395 732.43872,567.62245 726.66392,567.50264 721.83464,570.44742 720.67955,574.45821 719.0477,573.09849 717.26104,570.90084 714.07904,571.22321 711.69712,571.22921 701.66219,573.06421 700.31554,580.57439 L 700.54423,585.99533 950.81203,583.75878 C 951.85193,583.9413 952.94563,584.06165 954.08743,584.08535 960.53683,584.21916 965.82503,581.58409 965.89093,578.18802 965.95693,574.79195 960.77563,571.90733 954.32613,571.77351 953.26273,571.75141 952.24183,571.81631 951.26013,571.93619 948.25023,569.66135 942.63883,568.03966 936.14873,567.905 928.95613,567.75578 922.75543,569.47216 919.97273,572.03059 917.76573,568.70572 911.33713,566.19411 903.68053,566.03525 897.19113,565.9006 891.51353,567.47052 888.50928,569.92306 885.80715,565.61933 877.63321,562.35906 867.87579,562.15661 859.0092,561.97265 851.33402,564.36864 847.85449,567.9481 844.76604,563.93787 837.80448,561.04779 829.64532,560.87851 z',
      paths = [thinCloudPath1, thinCloudPath2, thinCloudPath3, thinCloudPath4],
      thinCloud = [],
      thinGradient = cont.gradient('linear', function(stop) {
        stop.at({ offset: 0, color: '#666' });
        stop.at({ offset: 1, color: '#fff' });
      });

  var rainDrops1 = [];
  for (var i = 0; i < 50; i++) {
    rainDrops1[i] = cont.ellipse(4,8).attr({fill: '#5f8dd3','stroke-width': 0});
  }

  for (var i = 0; i < paths.length; i++) {
    thinCloud[i] = cont.path(paths[i]).attr({fill: thinGradient.from(0,1).to(0,0),'stroke-width': 2}).move(0-i*50,i == 1 ? i*10 : i*12);
  }

  var	thinClouds = cont.group();

  //Move rainDrops1 to cloud
  for (var i = 0; i < 50; i++) {
    rainDrops1[i].move(thinClouds.bbox().x-150,thinClouds.bbox().height+50);
  }

  //Add rainDrops1 to thinClouds group
  for (var i = 0; i < 50; i++) {
    thinClouds.add(rainDrops1[i]);
  }

  //Add each thinCloud to thinClouds group
  for (var i = 0; i < paths.length; i++) {
    thinClouds.add(thinCloud[i]);
  }

  //Set up rain drops animation, rainDowns1 then rainUps1 in loop
  var rainDowns1, rainUps1;
    rainDowns1 = function(dropIn) {
      rainDrops1[dropIn].animate(400, '<', Math.random()*400).transform('y',100).after(function() {
        rainUps1(dropIn);
      });
    }

    rainUps1 = function(dropOut) {
      rainDrops1[dropOut].animate(0).transform('y',0).transform('x', Math.random()*325).after(function() {
        rainDowns1(dropOut);
      });
    }

  //Start rain drop animation
  for (var i = 0; i < 50; i++) {
    rainDowns1(i);
  }

  //Set up cloud animation
  var bigger1, smaller1;
  bigger1 = function() {
    thinClouds.animate().scale(1, 0.95).after(smaller1);
  }
  smaller1 = function() {
    thinClouds.animate(1000,'<>').scale(0.95,1).after(bigger1);
  }

  smaller1();

  thinClouds.move(boundary.bbox().width/3,20);
  boundary.add(thinClouds);
  boundary.children()[5].back()
  boundary.children()[3].click('null')
  boundary.children()[4].click('null')
}

//Produces sun
function makeSun() {
  var 	sunRay1Path = 'M 528.66713,332.02193 C 527.05502,331.09773 525.83399,329.51451 525.34972,327.72049 524.86544,325.92647 525.12393,323.94388 526.05199,322.33399 526.87771,320.90164 528.1691,319.81 529.29872,318.60276 529.86352,317.99914 530.39484,317.35712 530.80118,316.63723 531.20752,315.91734 531.48628,315.11383 531.51953,314.28784 531.55637,313.37271 531.29012,312.46281 530.86494,311.65161 530.43975,310.84041 529.86007,310.11996 529.24142,309.44462 528.0041,308.09393 526.57146,306.86713 525.74709,305.23137 524.98107,303.71139 524.81096,301.90068 525.28048,300.26462 525.75,298.62856 526.85444,297.18362 528.30992,296.30118',
      sunRay2Path = 'M 546.13173,314.55733 C 545.20753,312.94522 543.62431,311.72419 541.83029,311.23992 540.03627,310.75564 538.05368,311.01413 536.44379,311.94219 535.01144,312.76791 533.9198,314.0593 532.71256,315.18892 532.10894,315.75372 531.46692,316.28504 530.74703,316.69138 530.02714,317.09772 529.22363,317.37648 528.39764,317.40973 527.48251,317.44657 526.57261,317.18032 525.76141,316.75514 524.95021,316.32995 524.22976,315.75027 523.55442,315.13162 522.20373,313.8943 520.97693,312.46166 519.34117,311.63729 517.82119,310.87127 516.01048,310.70116 514.37442,311.17068 512.73836,311.6402 511.29342,312.74464 510.41098,314.20012',

      sunBall = cont.circle(75).attr({fill: '#ffff00', 'stroke': '#000', 'stroke-width': 2}),
      sunRay1 = cont.path(sunRay1Path).attr({fill: 'none', 'stroke': '#ffd42a', 'stroke-width': 4}),
      sunRay2 = cont.path(sunRay1Path).attr({fill: 'none', 'stroke': '#ffd42a', 'stroke-width': 4}),
      sunRay3 = cont.path(sunRay2Path).attr({fill: 'none', 'stroke': '#ffd42a', 'stroke-width': 4}),
      sunRay4 = cont.path(sunRay2Path).attr({fill: 'none', 'stroke': '#ffd42a', 'stroke-width': 4}),
      sunRay5 = cont.path(sunRay1Path).attr({fill: 'none', 'stroke': '#ffd42a', 'stroke-width': 4}),
      sunRay6 = cont.path(sunRay1Path).attr({fill: 'none', 'stroke': '#ffd42a', 'stroke-width': 4}),
      sunRay7 = cont.path(sunRay2Path).attr({fill: 'none', 'stroke': '#ffd42a', 'stroke-width': 4}),
      sunRay8 = cont.path(sunRay2Path).attr({fill: 'none', 'stroke': '#ffd42a', 'stroke-width': 4});

  var	rayIn, rayOut;

  sunRay1.move(sunBall.bbox().x+sunBall.bbox().width/2, sunBall.bbox().y-5);
  sunRay2.move(sunBall.bbox().x+sunBall.bbox().width/2, sunBall.bbox().y+sunBall.bbox().height+5);
  sunRay3.move(sunBall.bbox().x-5, sunBall.bbox().y+sunBall.bbox().height/2);
  sunRay4.move(sunBall.bbox().x+sunBall.bbox().width+5, sunBall.bbox().y+sunBall.bbox().height/2);
  sunRay5.move(sunBall.bbox().x+sunBall.bbox().width/2, sunBall.bbox().y-5);
  sunRay6.move(sunBall.bbox().x+sunBall.bbox().width/2, sunBall.bbox().y+sunBall.bbox().height+5);
  sunRay7.move(sunBall.bbox().x-5, sunBall.bbox().y+sunBall.bbox().height/2);
  sunRay8.move(sunBall.bbox().x+sunBall.bbox().width+5, sunBall.bbox().y+sunBall.bbox().height/2);

  rayOut = function() {
    sunRay1.animate(500,'>').scale(1,-0.5).attr({'stroke': '#ffff00'});
    sunRay2.animate(500,'>').scale(1,0.5).attr({'stroke': '#ffff00'});
    sunRay3.animate(500,'>').scale(-0.5,1).attr({'stroke': '#ffff00'});
    sunRay4.animate(500,'>').scale(0.5,1).attr({'stroke': '#ffff00'});
    sunRay5.animate(500,'>').scale(1,-1).rotate(45,sunBall.bbox().cx,sunBall.bbox().cy).attr({'stroke': '#ffff00'});
    sunRay6.animate(500,'>').scale(1,1).rotate(45,sunBall.bbox().cx,sunBall.bbox().cy).attr({'stroke': '#ffff00'});
    sunRay7.animate(500,'>').scale(-1,1).rotate(45,sunBall.bbox().cx,sunBall.bbox().cy).attr({'stroke': '#ffff00'});
    sunRay8.animate(500,'>').scale(1,1).rotate(45,sunBall.bbox().cx,sunBall.bbox().cy).attr({'stroke': '#ffff00'}).after(rayIn);
  }
  rayIn = function() {
    sunRay1.animate(500,'>').scale(1,-1).attr({'stroke': '#ffd42a'});
    sunRay2.animate(500,'>').scale(1,1).attr({'stroke': '#ffd42a'});
    sunRay3.animate(500,'>').scale(-1,1).attr({'stroke': '#ffd42a'});
    sunRay4.animate(500,'>').scale(1,1).attr({'stroke': '#ffd42a'});
    sunRay5.animate(500,'>').scale(1,-0.5).rotate(45,sunBall.bbox().cx,sunBall.bbox().cy).attr({'stroke': '#ffd42a'});
    sunRay6.animate(500,'>').scale(1,0.5).rotate(45,sunBall.bbox().cx,sunBall.bbox().cy).attr({'stroke': '#ffd42a'});
    sunRay7.animate(500,'>').scale(-0.5,1).rotate(45,sunBall.bbox().cx,sunBall.bbox().cy).attr({'stroke': '#ffd42a'});
    sunRay8.animate(500,'>').scale(0.5,1).rotate(45,sunBall.bbox().cx,sunBall.bbox().cy).attr({'stroke': '#ffd42a'}).after(rayOut);
  }

  rayOut();

  var	sun = cont.group().draggable({minX: -50, minY: 0, maxX: contWidth+50, maxY: contHeight*0.75});
  sun.add(sunBall).add(sunRay1).add(sunRay2).add(sunRay3).add(sunRay4).add(sunRay5).add(sunRay6).add(sunRay7).add(sunRay8);
}

//Produces coldFrontBoundary, warmFrontBoundary, coldSideText, warmSideText (x2), coolSideText
function makeFrontLines() {
  var	coldFrontPath = 'm 256.62668,291.70267 c 83.67194,26.2339 149.26546,93.36037 168.05409,266.35741',
    warmFrontPath = 'M 602.79514,691.20102 C 680.49843,639.12516 811.12505,581.84477 955.06201,521.65612';

  //Create cold front
  var	frontGradient1 = cont.gradient('linear', function(stop) {
        stop.at({ offset: 0, color: '#c83737', opacity: 0});
        stop.at({ offset: 0.5, color: '#c83737'});
      }),
      frontGradient2 = cont.gradient('linear', function(stop) {
          stop.at({ offset: 0, color: '#87aade', opacity: 0});
          stop.at({ offset: 0.5, color: '#87aade'});
      }),

      coldFrontBoundary = cont.group().data('type', 'cold'),
      coldRed = cont.path(coldFrontPath).attr({fill: 'none', 'stroke': frontGradient1, 'stroke-width': 8}),
      coldBlue = cont.path(coldFrontPath).attr({fill: 'none', 'stroke': frontGradient2, 'stroke-width': 8, 'stroke-dasharray': '30 30'});

  coldFrontBoundary.add(coldRed).add(coldBlue);

  var	cq1 = cont.text('?').move(coldFrontBoundary.rbox().x+coldFrontBoundary.bbox().width/2,coldFrontBoundary.rbox().y+coldFrontBoundary.bbox().height/2).font({size: 50, family: 'Lucida Sans Unicode', 'font-weight': 'bold', anchor: 'middle'}).attr({'cursor': 'pointer'}).data('key', {id: 'cfBehind', text: 'What type of air mass\nfollows a cold front?'}),
    cq2 = cont.text('?').move(coldFrontBoundary.rbox().x+coldFrontBoundary.bbox().width+10,coldFrontBoundary.rbox().y+coldFrontBoundary.bbox().height/8).font({size: 50, family: 'Lucida Sans Unicode', 'font-weight': 'bold', anchor: 'middle'}).attr({'cursor': 'pointer'}).data('key', {id: 'cfBefore', text: 'What type of air mass\ncomes before a cold front?'}),
    cq3 = cont.text('?').move(coldFrontBoundary.rbox().x+coldFrontBoundary.bbox().width,coldFrontBoundary.rbox().y+coldFrontBoundary.bbox().height).font({size: 50, family: 'Lucida Sans Unicode', 'font-weight': 'bold', anchor: 'middle'}).attr({'fill': '#fff', 'cursor': 'pointer'}).data('key', {id: 'map', text: 'What map symbol is used\nto indicate a cold front?'});

  coldFrontBoundary.add(cq1).add(cq2).add(cq3).move(contWidth-coldRed.bbox().width-200, contHeight*0.75-coldRed.bbox().height);
  coldFrontBoundary.draggable({minX: 0, minY: contHeight*0.75-coldRed.bbox().height, maxX: contWidth, maxY: contHeight*0.75-coldRed.bbox().height+coldFrontBoundary.bbox().height});

  cq1.click(function(e) {
    airQuestionPopUp(this, cq2, coldFrontBoundary);
  });
  cq2.click(function(e) {
    airQuestionPopUp(this, cq1, coldFrontBoundary);
  });
  cq3.click(function(e) {
    mapQuestionPopUp(this, coldFrontBoundary, coldRed);
  });

  //Create warm front
  var	frontGradient3 = cont.gradient('linear', function(stop) {
        stop.at({ offset: 0.5, color: '#c83737'});
        stop.at({ offset: 1, color: '#c83737', opacity: 0});
      }),
      frontGradient4 = cont.gradient('linear', function(stop) {
        stop.at({ offset: 0.5, color: '#87aade'});
        stop.at({ offset: 1, color: '#87aade', opacity: 0});
      }),

    warmFrontBoundary = cont.group().data('type', 'warm'),
    warmRed = cont.path(warmFrontPath).attr({fill: 'none', 'stroke': frontGradient3, 'stroke-width': 8}),
    warmBlue = cont.path(warmFrontPath).attr({fill: 'none', 'stroke': frontGradient4, 'stroke-width': 8, 'stroke-dasharray': '30 30'})

  warmFrontBoundary.add(warmRed).add(warmBlue);

  var	wq1 = cont.text('?').move(warmFrontBoundary.bbox().x+warmFrontBoundary.bbox().width/8,warmFrontBoundary.bbox().y+warmFrontBoundary.bbox().height/8).font({size: 50, family: 'Lucida Sans Unicode', 'font-weight': 'bold', anchor: 'middle'}).attr({'cursor': 'pointer'}).data('key', {id: 'wfBehind', text: 'What type of air mass\nfollows a warm front?'}),
    wq2 = cont.text('?').move(warmFrontBoundary.bbox().x+warmFrontBoundary.bbox().width*3/4,warmFrontBoundary.bbox().y+warmFrontBoundary.bbox().height/3).font({size: 50, family: 'Lucida Sans Unicode', 'font-weight': 'bold', anchor: 'middle'}).attr({'cursor': 'pointer'}).data('key', {id: 'wfBefore', text: 'What type of air mass\ncomes before a warm front?'}),
    wq3 = cont.text('?').move(warmFrontBoundary.bbox().x,warmFrontBoundary.bbox().y+warmFrontBoundary.bbox().height).font({size: 50, family: 'Lucida Sans Unicode', 'font-weight': 'bold', anchor: 'middle'}).attr({'fill': '#fff', 'cursor': 'pointer'}).data('key', {id: 'map', text: 'What map symbol is used\nto indicate a warm front?'});

  warmFrontBoundary.add(wq1).add(wq2).add(wq3).move(200, contHeight*0.75-warmRed.bbox().height)
  warmFrontBoundary.draggable({minX: 0, minY: contHeight*0.75-warmRed.bbox().height, maxX: contWidth, maxY: contHeight*0.75-warmRed.bbox().height+warmFrontBoundary.bbox().height})

  wq1.click(function(e) {
    airQuestionPopUp(this, wq2, warmFrontBoundary);
  });
  wq2.click(function(e) {
    airQuestionPopUp(this, wq1, warmFrontBoundary);
  });
  wq3.click(function(e) {
    mapQuestionPopUp(this, warmFrontBoundary, warmRed);
  });
}

//Adds pop-up question box about type of air mass, sets the canvas text on selection of an air type
function airQuestionPopUp(currentQuestion, otherQuestion, boundary) {
  //Create question box
  var	questionBox = cont.group(),
      box = cont.rect(400,200).attr({'rx': 20, 'ry': 20, 'fill': '#fff', 'fill-opacity': 0.9, 'stroke-color': '#000', 'stroke-width': 4}),
      question = cont.text('').font({size: 30, family: 'Helvetica', anchor: 'middle', fill: '#000'}).move(box.bbox().cx, box.bbox().y+10, true),
      choice1 = cont.text('Warm\nAir').font({size: 40, family: 'Helvetica', 'font-weight': 'bold', fill: '#c83737', stroke: '#000', 'stroke-width' : 2, anchor: 'middle'}).attr({'cursor': 'pointer'}).move(box.bbox().x+box.bbox().width/4-20, box.bbox().cy-10, true),
      choice2 = cont.text('Cool\nAir').font({size: 40, family: 'Helvetica', 'font-weight': 'bold', fill: '#87aade', stroke: '#000', 'stroke-width' : 2, anchor: 'middle'}).attr({'cursor': 'pointer'}).move(box.bbox().cx, box.bbox().cy-10, true),
      choice3 = cont.text('Cold\nAir').font({size: 40, family: 'Helvetica', 'font-weight': 'bold', fill: '#3771c8', stroke: '#000', 'stroke-width' : 2, anchor: 'middle'}).attr({'cursor': 'pointer'}).move(box.bbox().x+box.bbox().width*3/4+20, box.bbox().cy-10, true);

  //Put question box together
  questionBox.add(box).add(question).add(choice1).add(choice2).add(choice3);

  //Position pop-up question box based on position and screen width
  if (cont.bbox().width-(currentQuestion.rbox().x+currentQuestion.rbox().width) > 400) {
    questionBox.move(currentQuestion.rbox().x+currentQuestion.rbox().width,currentQuestion.rbox().y+5).front().show();
  } else {
    questionBox.move(currentQuestion.rbox().x-400,currentQuestion.rbox().y+5).front().show();
  }
  //Set text of question
  question.attr({'text': currentQuestion.data('key').text});

  choice1.click(function() {
    //Check if 'Warm Air' is the correct answer. Set it in window if it is, if not reduce its opacity.
    if (currentQuestion.data('key').id == 'wfBehind' || currentQuestion.data('key').id == 'cfBefore') {
      currentQuestion.text('Warm\nAir').font({size: 40, family: 'Helvetica', 'font-weight': 'bold', fill: '#c83737', stroke: '#000', 'stroke-width' : 2});
      questionBox.remove();
      cont.mousedown('null');
    } else if (currentQuestion.data('key').id == 'wfBefore' || currentQuestion.data('key').id == 'cfBehind') {
      choice1.attr({'opacity': 0.3})
    }

    //Check if correct answer finishes air mass questions for front. If so, run showSelectWeatherEvent
    if (currentQuestion.data('key').id == 'wfBehind' && otherQuestion.text().indexOf('Cool') !== -1) {
      showSelectWeatherEvent(boundary);
      currentQuestion.click('null');
      otherQuestion.click('null');
    } else if (currentQuestion.data('key').id == 'cfBefore' && otherQuestion.text().indexOf('Cold') !== -1) {
      showSelectWeatherEvent(boundary);
      currentQuestion.click('null');
      otherQuestion.click('null');
    }
  });
  choice2.click(function() {
    //Check if 'Cool Air' is the correct answer. Set it in window if it is, if not reduce its opacity.
    if (currentQuestion.data('key').id == 'wfBefore') {
      currentQuestion.text('Cool\nAir').font({size: 40, family: 'Helvetica', 'font-weight': 'bold', fill: '#87aade', stroke: '#000', 'stroke-width' : 2});
      questionBox.remove();
      cont.mousedown('null')
    } else if (currentQuestion.data('key').id == 'wfBehind' || currentQuestion.data('key').id == 'cfBehind' || currentQuestion.data('key').id == 'cfBefore') {
      choice2.attr({'opacity': 0.3})
    }

    //Check if correct answer finishes air mass questions for front. If so, run showSelectWeatherEvent
    if (currentQuestion.data('key').id == 'wfBefore' && otherQuestion.text().indexOf('Warm') !== -1) {
      showSelectWeatherEvent(boundary);
      currentQuestion.click('null');
      otherQuestion.click('null');
    }
  });
  choice3.click(function() {
    //Check if 'Cold Air' is the correct answer. Set it in window if it is, if not reduce its opacity.
    if (currentQuestion.data('key').id == 'cfBehind') {
      currentQuestion.text('Cold\nAir').font({size: 40, family: 'Helvetica', 'font-weight': 'bold', fill: '#3771c8', stroke: '#000', 'stroke-width' : 2});
      questionBox.remove();
      cont.mousedown('null');
    } else if (currentQuestion.data('key').id == 'wfBehind' || currentQuestion.data('key').id == 'wfBefore' || currentQuestion.data('key').id == 'cfBefore') {
      choice3.attr({'opacity': 0.3})
    }

    //Check if correct answer finishes air mass questions for front. If so, run showSelectWeatherEvent
    if (currentQuestion.data('key').id == 'cfBehind' && otherQuestion.text().indexOf('Warm') !== -1) {
      showSelectWeatherEvent(boundary);
      currentQuestion.click('null');
      otherQuestion.click('null');
    }
  });

  cont.mousedown(function(e) {
    if (e.pageX < questionBox.rbox().x || e.pageX > questionBox.rbox().x+questionBox.rbox().width || e.pageY < questionBox.rbox().y || e.pageY > questionBox.rbox().y+questionBox.rbox().height) {
      questionBox.remove();
      cont.mousedown('null');
    }
  });
}

//Adds pop-up question box about type of map symbol, sets the canvas map symbol on selection of a symbol type
function mapQuestionPopUp(currentQuestion, fullBoundary, boundaryLine) {
  var	coldFrontMapPath = 'm 192.5088,699.88473 c 2.9879,4.33622 15.58871,10.44831 20.93836,14.5562 -6.28501,2.04832 -17.79126,8.47185 -21.2955,13.30094 l 0,21.42857 c 4.49668,7.61681 17.63927,13.37949 23.08122,14.85206 -5.85114,2.35959 -19.43236,6.71706 -22.90265,11.93366 l 0.53571,17.85714 c 2.94775,3.58091 15.45952,5.99412 21.23423,8.63271 -4.60938,3.5305 -17.69564,9.50495 -20.87708,16.36729 l 0,16.42857 c 4.65906,5.63141 16.88116,11.29773 22.93328,13.21429 -6.90352,3.41373 -18.44399,9.27679 -22.57614,14.99999 -0.35714,-54.52381 -2.79612,-106.96578 -1.07143,-163.57142 z',
    warmFrontMapPath = 'm 602.81381,701.82904 c 21.57918,5.33138 21.3766,24.67532 -2.79586,24.40827 l -1.68112,19.98206 c 26.13026,1.45095 23.41628,31.18933 -0.3138,27.35206 l 0.25254,15.54097 c 31.57689,2.559 20.10973,30.90345 -0.35715,27.67331 l 0.40047,16.78572 c 21.90052,-4.7503 30.73805,27.442 0.71429,23.92857 -1.71424,-50.94691 -3.65772,-113.81152 3.55348,-157.54332';

  //questionBox is for the pop-up box of questions
  var	questionBox = cont.group(),
      box = cont.rect(400,200).attr({'rx': 20, 'ry': 20, 'fill': '#fff', 'fill-opacity': 0.9, 'stroke-color': '#000', 'stroke-width': 4}),
      question = cont.text('').font({size: 30, family: 'Helvetica', anchor: 'middle', fill: '#000'}).move(box.bbox().cx, box.bbox().y+10, true),
      warmFrontMap = cont.path(warmFrontMapPath).attr({fill: '#a02c2c', 'stroke-width': 4, 'cursor': 'pointer'}).move(box.bbox().x+box.bbox().width/20, box.bbox().cy+40),
      coldFrontMap = cont.path(coldFrontMapPath).attr({fill: '#5f8dd3', 'stroke-width': 4, 'cursor': 'pointer'}).move(box.bbox().x+box.bbox().width*11/20, box.bbox().cy+40);

  //Rotate map symbols for display in questionBox
  coldFrontMap.rotate(-80,coldFrontMap.rbox().x,coldFrontMap.rbox().y);
  warmFrontMap.rotate(-80,warmFrontMap.rbox().x,warmFrontMap.rbox().y);

  questionBox.add(box).add(question).add(warmFrontMap).add(coldFrontMap);

  //Sets position of question box based on question position and screen
  if (contWidth-(currentQuestion.rbox().x+currentQuestion.rbox().width) > 400) {
    questionBox.move(currentQuestion.rbox().x+currentQuestion.rbox().width,currentQuestion.rbox().y-40).front().show();
  } else {
    questionBox.move(currentQuestion.rbox().x-400,currentQuestion.rbox().y-40).front().show();
  }
  question.attr({'text': currentQuestion.data('key').text});

  //If question is associated with warm front
  if (currentQuestion.data('key').text.indexOf('warm') !== -1) {
    warmFrontMap.click(function() {
      currentQuestion.remove();
      currentQuestion = cont.path(warmFrontMapPath).attr({fill: '#a02c2c', 'stroke-width': 4}).move(-5,fullBoundary.bbox().height).data('key', {id: 'map', text: currentQuestion.data('key').text});
      fullBoundary.add(currentQuestion).draggable({minX: 0, minY: contHeight*0.75-boundaryLine.bbox().height, maxX: contWidth, maxY: contHeight*0.75-boundaryLine.bbox().height+fullBoundary.bbox().height});
      questionBox.remove();
      warmMap = true;
      cont.mousedown('null');
      if (warmDone && coldDone && warmMap && coldMap) {
        showDirections();
      }
    });
    coldFrontMap.click(function() {
      coldFrontMap.attr({'opacity': 0.3});
    });
  //If question is associated with cold front
  } else if (currentQuestion.data('key').text.indexOf('cold') !== -1) {
    warmFrontMap.click(function() {
      warmFrontMap.attr({'opacity': 0.3});
    });
    coldFrontMap.click(function() {
      currentQuestion.remove();
      currentQuestion = cont.path(coldFrontMapPath).attr({fill: '#5f8dd3', 'stroke-width': 4}).move(boundaryLine.rbox().width,fullBoundary.bbox().height+5).data('key', {id: 'map', text: currentQuestion.data('key').text});
      fullBoundary.add(currentQuestion).draggable({minX: 0, minY: contHeight*0.75-boundaryLine.bbox().height, maxX: contWidth, maxY: contHeight*0.75-boundaryLine.bbox().height+fullBoundary.bbox().height});
      questionBox.remove();
      coldMap = true;
      cont.mousedown('null');
      if (warmDone && coldDone && warmMap && coldMap) {
        showDirections();
      }
    });
  }

  //Close question box if click is outside of bounding box
  cont.mousedown(function(e) {
    if (e.pageX < questionBox.rbox().x || e.pageX > questionBox.rbox().x+questionBox.rbox().width || e.pageY < questionBox.rbox().y || e.pageY > questionBox.rbox().y+questionBox.rbox().height) {
      questionBox.remove();
      cont.mousedown('null');
    }
  });
}

//Adds graphic to select type of weather event at front boundary
function showSelectWeatherEvent(boundary) {
  var	popupCloud = cont.group();

  //These objects are for the pop-up asking what type of weather event occurs at a front
  var	backgroundCloudPath = 'M 324.09375 411.84375 C 315.03012 411.84375 307.02816 416.19972 302.1875 422.875 C 297.43572 418.65958 290.93629 416.09375 283.75 416.09375 C 269.20568 416.09375 257.40625 426.73819 257.40625 439.875 C 257.40625 441.03113 257.51102 442.16922 257.6875 443.28125 C 246.64772 443.81377 237.875 453.31547 237.875 464.9375 C 237.875 475.56342 245.20872 484.37465 254.90625 486.21875 C 255.30132 494.50477 259.28839 501.03125 264.1875 501.03125 C 265.40785 501.03125 266.58757 500.60989 267.65625 499.875 C 270.16712 507.93813 277.5578 513.78125 286.28125 513.78125 C 291.94032 513.78125 297.02553 511.30327 300.59375 507.375 C 304.38649 512.27364 310.43113 515.46875 317.28125 515.46875 C 323.31438 515.46875 328.72987 512.99646 332.53125 509.0625 C 336.51647 511.99453 341.54881 513.78125 347.03125 513.78125 C 356.51414 513.78125 364.68296 508.52704 368.34375 501 C 368.73891 501.01708 369.13124 501.03125 369.53125 501.03125 C 381.37443 501.03125 391.21176 493.44517 393.03125 483.53125 C 400.97442 481.46982 406.90625 473.35805 406.90625 463.65625 C 406.90207 452.39951 398.91215 443.25 389.0625 443.25 C 386.37622 443.25 383.84737 443.97219 381.5625 445.1875 C 381.52372 445.14312 381.47653 445.10678 381.4375 445.0625 C 381.25443 432.77806 370.67828 422.875 357.65625 422.875 C 353.99762 422.875 350.53396 423.66585 347.4375 425.0625 C 342.85285 417.16453 334.11647 411.84375 324.09375 411.84375 z ',
      precipButtonPath = 'm 311.74798,489.64686 c 0,5.21057 -3.36548,8.03008 -7.51703,8.03008 -4.15154,0 -7.51703,-2.81951 -7.51703,-8.03008 0,-5.21058 4.35023,-3.48379 5.0927,-12.71174 0.42499,-5.28205 9.94136,7.50116 9.94136,12.71174 z',
      stormButtonPath = 'm 331.99981,476.72323 -7.11684,5.67023 4.44225,0 -6.73623,5.88361 4.44226,0 -8.35208,8.17885 19.15094,-8.17885 -3.37261,0 5.67688,-5.88361 -3.37264,0 5.66662,-5.67023 z',
      warmAirPath = 'm 296.73311,458.07297 0.031,0.46723 6.37802,-0.21274 -0.26673,1.10194 2.73733,-1.6704 -2.92332,-1.13304 0.39278,1.04199 -6.34908,0.40502 m 41.14292,-8.89313 0.17391,0.43477 5.99989,-2.17387 0.087,1.13042 2.08692,-2.43474 -3.13038,-0.17391 0.69564,0.86955 -5.91298,2.34778 m -13.72721,4.20863 0.14114,0.4465 6.14477,-1.72225 0.003,1.13375 2.26198,-2.27302 -3.10881,-0.40592 0.62913,0.91881 -6.07121,1.90213 m -13.67212,3.29897 0.12244,0.45197 c 1.25772,-0.29667 2.51545,-0.59334 3.77317,-0.89002 0.81265,-0.19169 1.62529,-0.38338 2.43794,-0.57507 l -0.0444,1.13288 2.3546,-2.17693 -3.08924,-0.53492 0.59036,0.94419 -6.14487,1.6479',
      warmAirPath2 = 'm 230.02095,473.20284 -0.31801,0.34372 -4.82428,-4.17739 -0.48581,1.0244 -1.0772,-3.02042 2.98524,0.95809 -0.96078,0.56294 4.68084,4.30866 m -26.38933,-32.79375 -0.40869,0.22858 -3.29672,-5.46408 -0.77871,0.82403 -0.0908,-3.20544 2.54287,1.83393 -1.08775,0.23838 3.1198,5.5446 m 8.02378,11.90662 -0.39058,0.25831 -3.69343,-5.20413 -0.71549,0.87947 -0.3286,-3.18987 2.67205,1.64001 -1.06704,0.31851 3.52309,5.2977 m 8.55319,11.16482 -0.3795,0.27432 -3.90676,-5.04595 -0.67811,0.90861 -0.46103,-3.17343 2.73798,1.52742 -1.05286,0.36263 3.74028,5.1464',
      warmAirBoundaryPath = 'm 265.50704,462.78037 c 18.74939,-7.90618 38.46514,-13.51759 58.56773,-16.66927 7.01985,-1.10057 14.08652,-1.90246 21.17449,-2.40278',
      coldAirBoundaryPath = 'm 217.18217,479.93715 c 0,0 -8.90555,-26.79962 -20.71804,-36.79238 -5.8905,-4.98306 -11.43064,-5.53672 -11.43064,-5.53672',
      coldAirPath = 'm 347.65202,448.73915 c -2.31969,5.63738 -2.42182,9.38582 -3.45399,9.83637 -5.5431,2.4196 -64.0487,3.27257 -70.1311,3.67926 -5.40625,0.36149 0.67096,-0.52561 22.2257,-7.4336 16.66512,-5.34093 53.31165,-10.82645 51.35939,-6.08203 z',
      coldAirPath2 = 'm 212.71658,479.76564 c 0,0 -23.61799,-1.23095 -45.5443,-0.0583 -5.40625,0.36149 -7.90202,-31.60266 13.65272,-38.51065 16.66512,-5.34093 33.84384,33.82449 31.89158,38.56891 z';

  //cloud background image
  var	backgroundCloud = cont.path(backgroundCloudPath).attr({fill: '#fff','stroke-width': 2});

  //Text describing front
  var	backgroundCloudText = cont.text(boundary.data('type') == 'warm' ?
                    'Along a warm front warm air is replacing colder\nair. The lighter warm air slides over the heavier cold\nair. This creates a boundary with a gentle slope.' :
                    'Along a cold front warm\nair is diplaced by cold air.\nThe heavy, cold air wedges\nunder the lighter warm air,\npushing it up and creating a\nboundary with a steep slope.');


  if (boundary.data('type') == 'warm') {

    backgroundCloudText.font({size: 4, family: 'Helvetica', anchor: 'middle', fill: '#000'}).move(backgroundCloud.rbox().cx, backgroundCloud.rbox().height/6, true)

    //Animation for warm air boundary
    var	boundaryAnim = cont.group(),
        warmAirGradient = cont.gradient('linear', function(stop) {
          stop.at({ offset: 0, color: '#a02c2c' });
          stop.at({ offset: 1, color: '#a02c2c', opacity: 0.0});
        }),
        warmAir = cont.path(warmAirPath).attr({'fill': warmAirGradient.from(1,1).to(0,0)}),
        warmAirBoundary = cont.path(warmAirBoundaryPath).attr({fill: 'none', 'stroke': '#a02c2c','stroke-width': 1}),
        coldAir = cont.path(coldAirPath).attr({fill: '#5f8dd3'});

    boundaryAnim.add(warmAir).add(warmAirBoundary).add(coldAir);

    warmAir.move(0,-2);
    boundaryAnim.center(backgroundCloud.rbox().cx, backgroundCloud.rbox().cy);

  } else if (boundary.data('type') == 'cold') {

    backgroundCloudText.font({size: 4, family: 'Helvetica', anchor: 'middle', fill: '#000'}).center(backgroundCloud.rbox().cx/1.75, backgroundCloud.rbox().cy/2.5, true)

    //Animation for cold air boundary
    var	boundaryAnim = cont.group(),
        warmAirGradient = cont.gradient('linear', function(stop) {
          stop.at({ offset: 0, color: '#a02c2c' });
          stop.at({ offset: 1, color: '#a02c2c', opacity: 0.0});
        }),
        warmAir = cont.path(warmAirPath2).attr({'fill': warmAirGradient.from(0,0).to(1,1)}),
        coldAirBoundary = cont.path(coldAirBoundaryPath).attr({fill: 'none', 'stroke': '#5f8dd3','stroke-width': 1}),
        coldAir = cont.path(coldAirPath2).attr({fill: '#5f8dd3'});

    boundaryAnim.add(warmAir).add(coldAirBoundary).add(coldAir);

    coldAirBoundary.move(coldAir.rbox().cx,0);
    warmAir.move(coldAirBoundary.rbox().cx,0);
    boundaryAnim.center(backgroundCloud.rbox().width*2/3, backgroundCloud.rbox().cy*3/4);
  }

  //Question and choices for type of weather event
  var	backgroundCloudQ = cont.text(boundary.data('type') == 'warm' ?
                  'What type of weather event commonly occurs along a warm front?' :
                  'What type of weather event commonly occurs along a cold front?'),
      precipGradient = cont.gradient('linear', function(stop) {
          stop.at({ offset: 0, color: '#4dffdf' });
          stop.at({ offset: 1, color: '#0000ff'});
        }),
      precipButton = cont.group(),
      precipGraphic = cont.path(precipButtonPath).center(backgroundCloud.rbox().width*2/6,backgroundCloud.rbox().height*4/5-2),
      precipText = cont.text('PRECIPITATION').font({size: 5, 'stroke-width': 0.2, family: 'Helvetica', anchor: 'middle', 'fill': '#fff'}).move(precipGraphic.rbox().cx, precipGraphic.rbox().cy, true),
      stormButton = cont.group(),
      stormGraphic = cont.path(stormButtonPath).center(backgroundCloud.rbox().width*4/6,backgroundCloud.rbox().height*4/5),
      stormText = cont.text('THUNDERSTORMS\nOR\nPRECIPITATION').font({size: 5, 'stroke-width': 0.2, family: 'Helvetica', anchor: 'middle', 'fill': '#fff'}).move(stormGraphic.rbox().cx, precipGraphic.rbox().cy-8, true);

  precipButton.add(precipGraphic).add(precipText)
  stormButton.add(stormGraphic).add(stormText)

  backgroundCloudQ.font({size: 5, family: 'Helvetica', anchor: 'middle', 'fill': '#000'}).move(backgroundCloud.rbox().cx, backgroundCloud.rbox().height*3/5, true);
  precipButton.attr({'fill': precipGradient.from(0, 0).to(0, 1), 'stroke-color': '#000', 'stroke-width': 1, 'cursor': 'pointer'});
  precipButton.click(function() {
    if (boundary.data('type') == 'warm') {
      makeThinClouds(boundary);
      popupCloud.remove();
      warmDone = true;
      if (warmDone && coldDone && warmMap && coldMap) {
        showDirections();
      }
    } else {
      precipButton.attr({'opacity': 0.3})
    }
  });

  stormButton.attr({'fill': '#ffff00', 'stroke-color': '#000', 'stroke-width': 1, 'cursor': 'pointer'});
  stormButton.click(function() {
    if (boundary.data('type') == 'cold') {
      makeStormCloud(boundary);
      popupCloud.remove();
      coldDone = true;
      if (warmDone && coldDone && warmMap && coldMap) {
        showDirections();
      }
    } else {
      stormButton.attr({'opacity': 0.3})
    }
  });

  popupCloud.add(backgroundCloud).add(backgroundCloudText).add(backgroundCloudQ).add(precipButton).add(stormButton).add(boundaryAnim);

  popupCloud.center(-100,0);
  popupCloud.animate(2000).center(contWidth/2, contHeight/2).scale(7,7).after(function() {
      warmAirAnim1();
    });

  var	warmAirAnim1 = function() {
      warmAir.animate(500, '>').attr(boundary.data('type') == 'warm' ? {fill: warmAirGradient.from(0, 1).to(1, 0)} : {fill: warmAirGradient.from(0, 0).to(1, 1)}).after(function() {
        warmAirAnim2();
      });
    }

  var	warmAirAnim2 = function() {
      warmAir.animate(500, '>').attr(boundary.data('type') == 'warm' ? {fill: warmAirGradient.from(1, 0).to(0, 1)} : {fill: warmAirGradient.from(1, 1).to(0, 0)}).after(function() {
        warmAirAnim1();
      });
    }
}

function showDirections() {
  if (warmDone && coldDone && warmMap && coldMap) {
    var 	directions = cont.group().attr({'cursor': 'default'}),
        directionsBox = cont.rect(750,275).attr({'rx': 20, 'ry': 20, 'fill': '#fff', 'fill-opacity': 0.9, 'stroke-color': '#000', 'stroke-width': 4}),
        directionsHeading = cont.text('Directions'),
        directionsText = cont.text('Good job! You have correctly assembled the fronts.\nNow use the given weather information for the city or\ntown on the map to move the fronts to the correct\nlocation. Click anywhere outside of this box to begin.');
  } else {
    var 	directions = cont.group().attr({'cursor': 'default'}),
        directionsBox = cont.rect(750,275).attr({'rx': 20, 'ry': 20, 'fill': '#fff', 'fill-opacity': 0.9, 'stroke-color': '#000', 'stroke-width': 4}),
        directionsHeading = cont.text('Directions'),
        directionsText = cont.text('Complete the information for a warm front and cold\nfront boundary moving through North Carolina. Click\non a question mark (?) to begin. Answer each question\nto assemble the types of air masses, the typical type of\nweather, and map symbol associated with each front.');
  }

  directions.add(directionsBox).add(directionsHeading).add(directionsText);
  directionsBox.center(contWidth/2,contHeight/5)
  directionsHeading.move(directionsBox.bbox().cx, directionsBox.bbox().y).font({size: 42.5, family: 'Helvetica', anchor: 'middle'})
  directionsText.move(directionsBox.bbox().x+15, directionsHeading.bbox().y+50).font({size: 30, family: 'Helvetica', anchor: 'start'})

  cont.mousedown(function(e) {
    var 	miniDirectionsBox = cont.rect(50,50),
        miniDirectionsHeading = cont.text('?').font({size: 50, family: 'Lucida Sans Unicode', anchor: 'middle'}),
        miniButton = cont.group().add(miniDirectionsBox).add(miniDirectionsHeading).attr({'cursor': 'pointer'});

    miniDirectionsBox.move(10,10).attr({'rx': 5, 'ry': 5, 'fill': '#ffff00', 'fill-opacity': 0.9, 'stroke-color': '#000', 'stroke-width': 2});
    miniDirectionsHeading.move(miniDirectionsBox.rbox().cx, -5,true);
    miniButton.hide();

    if (e.pageX < directions.rbox().x || e.pageX > directions.rbox().x+directions.rbox().width || e.pageY < directions.rbox().y || e.pageY > directions.rbox().y+directions.rbox().height) {
      directions.remove();
      cont.mousedown('null');

      if (warmDone && coldDone && warmMap && coldMap) {
        showCityWeather();
      }

      miniButton.show();

      miniButton.click(function() {
        showDirections();
        miniButton.hide();
      });
    }
  });

}

function showCityWeather() {
  var 	ashWeather = cont.group(),
      ashWeatherBox = cont.rect(225,200).attr({'rx': 20, 'ry': 20, 'fill': '#fff', 'fill-opacity': 0.9, 'stroke-color': '#000', 'stroke-width': 4}),
      ashWeatherHeading = cont.text('Asheville'),
      ashWeatherText = cont.text('A thunderstorm has\npassed through and\nthe sky is beginning\nto clear. The current\ntemperature is 56\u00B0F.'),

      ralWeather = cont.group(),
      ralWeatherBox = cont.rect(225,150).attr({'rx': 20, 'ry': 20, 'fill': '#fff', 'fill-opacity': 0.9, 'stroke-color': '#000', 'stroke-width': 4}),
      ralWeatherHeading = cont.text('Raleigh'),
      ralWeatherText = cont.text('It is warm and the sky is\nclear. The current\ntemperature is 72\u00B0F.')

      khWeather = cont.group(),
      khWeatherBox = cont.rect(225,175).attr({'rx': 20, 'ry': 20, 'fill': '#fff', 'fill-opacity': 0.9, 'stroke-color': '#000', 'stroke-width': 4}),
      khWeatherHeading = cont.text('Kitty Hawk'),
      khWeatherText = cont.text('There is rain with low\nlying clouds. The\ncurrent temperature\nis 61\u00B0F.');

  ashWeather.add(ashWeatherBox).add(ashWeatherHeading).add(ashWeatherText);
  ashWeather.center(contWidth*0.1,contHeight/4);
  ashWeatherHeading.move(ashWeatherBox.bbox().cx, ashWeatherBox.bbox().y).font({size: 42.5, family: 'Helvetica', anchor: 'middle'});
  ashWeatherText.move(ashWeatherBox.bbox().cx, ashWeatherHeading.bbox().y+50).font({size: 18, family: 'Helvetica', anchor: 'middle'});

  ralWeather.add(ralWeatherBox).add(ralWeatherHeading).add(ralWeatherText);
  ralWeather.center(contWidth/2,contHeight/4);
  ralWeatherHeading.move(ralWeatherBox.bbox().cx, ralWeatherBox.bbox().y).font({size: 42.5, family: 'Helvetica', anchor: 'middle'});
  ralWeatherText.move(ralWeatherBox.bbox().x+15, ralWeatherHeading.bbox().y+50).font({size: 18, family: 'Helvetica', anchor: 'start'});

  khWeather.add(khWeatherBox).add(khWeatherHeading).add(khWeatherText);
  khWeather.center(contWidth*0.8,contHeight/4);
  khWeatherHeading.move(khWeatherBox.bbox().cx, khWeatherBox.bbox().y).font({size: 42.5, family: 'Helvetica', anchor: 'middle'});
  khWeatherText.move(khWeatherBox.bbox().x+15, khWeatherHeading.bbox().y+50).font({size: 18, family: 'Helvetica', anchor: 'start'});
}

window.onload=function() {
  //Run functions to create objects and animations
  showDirections();
  makeStationaryObjects();
  //makeSun();
  makeFrontLines();

  document.addEventListener('keydown', function(e) {
    if (e.altKey == true && e.keyIdentifier == "U+0037") {
      location.href = window.location.href.substring(0,window.location.href.lastIndexOf('/'))+'/sevenDayForecast.html'
    }
  });
}
