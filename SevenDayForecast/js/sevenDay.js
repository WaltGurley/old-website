$(function() {
  var	contWidth = window.innerWidth, contHeight = window.innerHeight,
      cont = Raphael('mainContainer');

  function monBox() {
    var	boxPath = 'm 194.95944,526.74353 c -6.11041,-90.58746 3.46356,-160.73541 -1.51523,-249.0026 28.62099,1.71219 57.24198,-0.83909 85.86297,-1.51523 0.16836,83.84266 -2.77128,208.32404 0.50508,251.52798 -18.90441,-4.50555 -54.96206,-1.38743 -84.85282,-1.01015 z',
      cloud1Path = 'm 312.17741,415.58642 c 4.16685,-7.60437 -1.132,-19.0465 -11.96429,-10.71428 1.62271,-11.93442 -14.65156,-8.73874 -10.89286,1.25 -11.48103,-5.35008 -11.52185,8.06147 -6.07143,12.32142 z',
      cloud1FillPath = 'm 284.68761,408.08336 -1.51523,7.07107 4.04061,-7.32361 -1.76777,8.83884 3.53554,-7.82868 0,0 -1.01016,8.08122 5.05077,-16.16244 -2.77792,14.64721 4.79822,-15.15229 -3.03046,15.15229 4.54569,-12.87945 -2.27284,12.37437 3.28299,-7.82868 -1.01015,7.57614 5.05076,-7.82868 -2.27284,8.08122 5.80838,-10.35406 -2.77792,9.84899 5.55584,-9.84899 -3.283,10.10152 5.55584,-8.33375 -1.26269,6.06091',
      cloud2Path = 'm 281.95614,403.28832 27.5,-0.35715 c 3.39115,-8.52082 -1.5493,-12.78602 -11.25,-8.57143 6.2728,-10.16392 -10.51256,-8.78733 -8.92857,0.89286 -6.13832,-6.00321 -12.55185,2.84869 -7.32143,8.03572 z',
      cloud2FillPath = 'm 283.56328,401.14546 2.5,-5.17857 -1.60714,6.42857 2.67857,-5.71428 -1.25,5.53571 2.67857,-5 -1.42857,5.35714 2.5,-4.46428 -0.89285,4.28571 2.67857,-3.92857 -0.71429,3.75 3.39286,-10.89286 -2.14286,10.71429 3.92857,-12.14286 -2.5,11.42857 4.28572,-10.89285 -2.5,11.42857 2.5,-3.92857 -0.89286,3.92857 3.39286,-5.35714 -1.78572,5 4.28572,-5.89286 -2.14286,5.89286 4.28571,-6.25 -2.67857,6.42857 4.10715,-6.42857 -2.14286,6.60714 3.92857,-6.25 -2.14286,5.71428 2.85715,-3.75 -0.89286,3.39286',
      sunOutlinePath = 'm 210.35714,393.21428 c 0.66868,-5.01829 2.9795,-9.85413 12.14286,-13.92857 8.3682,-2.25468 15.08267,-2.02876 19.64286,1.42857 9.23668,7.76773 8.79816,19.38907 6.42857,28.21429 -4.77086,11.14568 -12.97292,12.27827 -20.71429,12.14285 -14.36708,-2.35204 -18.32178,-13.16415 -17.5,-27.85714 z',
      sunFillPath = 'm 215.94964,395.15153 12.14286,-12.5 -11.42857,24.28572 19.2857,-22.85715 -14.99999,31.07143 21.7857,-24.28571 -14.64284,28.57143 14.64284,-17.85715 -5.35714,13.21429',
      ray1Path = 'm 202.14286,371.42857 9.28571,8.21429',
      ray2Path = 'm 225.35714,355.71429 c -0.95238,6.66666 -0.95238,12.85714 0,18.57142',
      ray3Path = 'm 239.28571,375.71429 11.42858,-16.07143',
      ray4Path = 'm 251.42857,411.07143 c 6.60401,2.53133 11.71402,5.80965 16.42857,9.28571',
      ray5Path = 'm 233.21429,424.28571 2.5,14.64286',
      ray6Path = 'm 253.95655,389.42929 c 6.32569,-1.35991 11.11191,-3.27735 16.49838,-7.29424',
      ray7Path = 'm 203.47323,430.9667 8.18257,-12.10408',
      ray8Path = 'm 192.06812,395.77281 c 7.08491,2.13402 7.31713,1.91886 14.40205,1.29814',

      box = cont.path(boxPath),

      sunOutline = cont.path(sunOutlinePath),
      sunFill = cont.path(sunFillPath),
      ray1 = cont.path(ray1Path),
      ray2 = cont.path(ray2Path),
      ray3 = cont.path(ray3Path),
      ray4 = cont.path(ray4Path),
      ray5 = cont.path(ray5Path),
      ray6 = cont.path(ray6Path),
      ray7 = cont.path(ray7Path),
      ray8 = cont.path(ray8Path),
      rays = cont.set().push(ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8)

      cloud2Outline = cont.path(cloud2Path),
      cloud2Fill = cont.path(cloud2FillPath),
      cloud2 = cont.set(),

      cloud1 = cont.set(),
      cloud1Outline = cont.path(cloud1Path),
      cloud1Fill = cont.path(cloud1FillPath);

    box.attr({'fill': '#afc6e9'});

    rays.attr({'stroke': '#ff6600', 'stroke-width': 5});
    sunOutline.attr({'fill': '#ffdd55', 'stroke': '#ff6600', 'stroke-width': 2});
    sunFill.attr({'stroke': '#ff6600', 'stroke-width': 4, 'opacity': 0.5});

    var	sun = cont.set().push(sunOutline, sunFill, rays),
        sunOut = function() {sunFill.animate({'stroke-width': 6}, 1000, '<>', sunIn)},
        sunIn = function() {sunFill.animate({'stroke-width': 4}, 1000, '<>', sunOut)},
        raysOut = function() {rays.animate({'opacity': 0.2}, 1000, '<>', raysIn)},
        raysIn = function() {rays.animate({'opacity': 1}, 250, '<>', raysOut)};

    sunOut();
    raysOut();

    cloud1Outline.attr({'fill': '#b3b3b3', 'stroke': '#4d4d4d', 'stroke-width': 2});
    cloud1Fill.attr({'stroke': '#808080', 'stroke-width': 4, 'opacity': 0.5});
    var	cloud1 = cont.set().push(cloud1Outline, cloud1Fill),
      cloud1Move = function() {cloud1.animate({transform: 't-'+(box.getBBox().width+cloud1.getBBox().width)+',0'}, 5000, 'linear', cloud1Back)},
      cloud1Back = function() {cloud1.animate({transform: ''}, 0, 'linear', cloud1Move)};

    cloud1Move();

    cloud2Outline.attr({'fill': '#b3b3b3', 'stroke': '#4d4d4d', 'stroke-width': 2});
    cloud2Fill.attr({'stroke': '#808080', 'stroke-width': 4, 'opacity': 0.5});
    var	cloud2 = cont.set().push(cloud2Outline, cloud2Fill),
      cloud2Move = function() {cloud2.animate({transform: 't-'+(box.getBBox().width+cloud2.getBBox().width)+',0'}, 7000, 'linear', cloud2Back)},
      cloud2Back = function() {cloud2.animate({transform: ''}, 0, 'linear', cloud2Move)};

    cloud2Move();

    var high = cont.text(box.getBBox().x+20,box.getBBox().y2-40,'27'),
      low = cont.text(box.getBBox().x2-20,box.getBBox().y2-20,'23'),
      temp = cont.set().push(high, low);

    temp.attr({'font': "18px Comic Sans MS", 'text-anchor': 'middle', 'cursor': 'default'});

    var monday = cont.set().push(box, sun, cloud1, cloud2);
  }

  function tuesBox() {
    var	boxPath = 'm 298.57143,529.28571 c 28.80952,-4.00388 57.61905,-2.25141 86.42857,-2.85714 -5.83409,-43.45314 -3.64095,-78.87905 -4.28571,-117.14286 2.2844,-45.57055 5.34933,-91.66145 2.14285,-133.57142 l -83.57143,0.71428 c 0.91742,85.44122 0.25202,169.29963 -0.71428,252.85714 z',
      cloudOutlinePath = 'm 312.85714,398.57143 51.78572,-1.42857 c 9.99558,-12.25837 3.4047,-24.96186 -12.5,-18.21429 2.71832,-12.54382 -11.05733,-17.91762 -17.14286,-4.64286 -6.27949,-14.96454 -23.03167,-4.40509 -13.21429,10 -15.99086,-11.93232 -17.72392,11.85174 -8.92857,14.28572 z',
      cloudFillPath = 'm 311.87237,394.7908 3.92857,-8.57143 -1.07143,9.64286 3.57143,-9.64286 -1.07143,9.64286 3.21429,-7.14286 c 0,0 -1.78571,11.07143 -0.71429,8.57143 1.07143,-2.5 5.35715,-25.35714 5.35715,-25.35714 l -0.35715,11.07143 4.28572,-9.64286 -6.78572,22.85714 9.28572,-21.78571 -6.42857,21.42857 8.21428,-15.35714 -3.57143,10.71428 c 0,0 10.35715,-18.92857 6.78572,-11.07143 -3.57143,7.85715 -6.78572,15.71429 -6.78572,15.71429 l 13.57143,-24.28571 -9.28571,23.21428 12.5,-22.5 -8.57143,22.5 c 0,0 11.07143,-22.5 9.28571,-17.85714 -1.78571,4.64286 -7.5,19.28571 -7.5,19.28571 l 8.92858,-13.21428 -5.71429,12.5 9.28571,-13.21429 -6.07142,12.5 9.64285,-13.21428 -6.42857,12.5 10,-12.5 -5.71428,12.85714 8.57142,-11.07143 -4.28571,10 5.35714,-5.71429 -0.71428,4.64286',
      snow1Path = 'm 309.11139,404.20473 6.06092,2.77792 -0.50508,-0.50508 3.03047,4.29315 0.17731,-6.30642 -0.17857,6.16072 -4.01787,0 4.01787,-0.0893 3.75,3.03571 -9.37501,0.26786 -4.46429,-3.57143 4.64286,3.57143 -4.55357,3.66072 4.55357,-3.66072 2.94643,0 -2.67857,-3.57143 2.5,3.57143 -2.32143,4.01786 2.32143,-4.01786 6.25001,-0.26786 -6.42859,9.375 -4.19642,1.25 4.375,-1.33928 0.71428,2.76786 -0.625,-2.85715 3.48215,-5.26785 -6.25001,3.57142 6.42859,-3.57142 1.96428,3.57142 -1.96428,-3.66071 2.41071,-3.92857 8.48214,5.80357 5.08929,1.78571 -5,-1.69642 -1.16072,5.71428 1.16072,-5.89286 -4.10714,-2.41071 -1.25,5.08929 1.25,-5.08929 -4.46429,-3.30357 9.64286,-0.71429 2.41071,-6.07143 -2.23214,5.98215 4.28571,3.125 -4.19643,-3.30357 -4.28571,0.44642 2.41071,-6.25 -2.41071,6.25 4.64286,3.66072 -4.73215,-3.75 -5.53571,0.625 5,-9.01786 -2.58929,-4.01786 2.58929,4.10715 5.17857,-2.94643 -5.26786,2.94643 -2.67857,4.73214 -3.57143,-4.10714 3.57143,4.01785 6.60715,-2.85714 -6.16072,2.76786 -2.76786,4.375',
      snow2Path = 'm 339.82568,409.56188 6.06092,2.77792 -0.50508,-0.50508 3.03046,4.29315 0.17731,-6.30642 -0.17857,6.16072 -4.01786,0 4.01786,-0.0893 3.75,3.03571 -9.375,0.26786 -4.46429,-3.57143 4.64286,3.57143 -4.55357,3.66072 4.55357,-3.66072 2.94643,0 -2.67857,-3.57143 2.5,3.57143 -2.32143,4.01786 2.32143,-4.01786 6.25,-0.26786 -6.42858,9.375 -4.19642,1.25 4.375,-1.33928 0.71428,2.76786 -0.625,-2.85715 3.48214,-5.26785 -6.25,3.57142 6.42858,-3.57142 1.96428,3.57142 -1.96428,-3.66071 2.41071,-3.92857 8.48214,5.80357 5.08929,1.78571 -5,-1.69642 -1.16072,5.71428 1.16072,-5.89286 -4.10714,-2.41071 -1.25,5.08929 1.25,-5.08929 -4.46429,-3.30357 9.64286,-0.71429 2.41071,-6.07143 -2.23214,5.98215 4.28571,3.125 -4.19643,-3.30357 -4.28571,0.44642 2.41071,-6.25 -2.41071,6.25 4.64286,3.66072 -4.73215,-3.75 -5.53571,0.625 5,-9.01786 -2.58929,-4.01786 2.58929,4.10715 5.17857,-2.94643 -5.26786,2.94643 -2.67857,4.73214 -3.57143,-4.10714 3.57143,4.01785 6.60715,-2.85714 -6.16072,2.76786 -2.76786,4.375',
      snow3Path = 'm 316.05782,436.52616 6.06092,2.77792 -0.50508,-0.50508 3.03046,4.29315 0.17731,-6.30642 -0.17857,6.16072 -4.01786,0 4.01786,-0.0893 3.75,3.03571 -9.375,0.26786 -4.46429,-3.57143 4.64286,3.57143 -4.55357,3.66072 4.55357,-3.66072 2.94643,0 -2.67857,-3.57143 2.5,3.57143 -2.32143,4.01786 2.32143,-4.01786 6.25,-0.26786 -6.42858,9.375 -4.19642,1.25 4.375,-1.33928 0.71428,2.76786 -0.625,-2.85715 3.48214,-5.26785 -6.25,3.57142 6.42858,-3.57142 1.96428,3.57142 -1.96428,-3.66071 2.41071,-3.92857 8.48214,5.80357 5.08929,1.78571 -5,-1.69642 -1.16072,5.71428 1.16072,-5.89286 -4.10714,-2.41071 -1.25,5.08929 1.25,-5.08929 -4.46429,-3.30357 9.64286,-0.71429 2.41071,-6.07143 -2.23214,5.98215 4.28571,3.125 -4.19643,-3.30357 -4.28571,0.44642 2.41071,-6.25 -2.41071,6.25 4.64286,3.66072 -4.73215,-3.75 -5.53571,0.625 5,-9.01786 -2.58929,-4.01786 2.58929,4.10715 5.17857,-2.94643 -5.26786,2.94643 -2.67857,4.73214 -3.57143,-4.10714 3.57143,4.01785 6.60715,-2.85714 -6.16072,2.76786 -2.76786,4.375',
      box = cont.path(boxPath),

      snow1_1 = cont.path(snow1Path),
      snow1_2 = cont.path(snow1Path),
      snow2_1 = cont.path(snow2Path),
      snow2_2 = cont.path(snow2Path),
      snow3_1 = cont.path(snow3Path),
      snow3_2 = cont.path(snow3Path),

      cloudOutline = cont.path(cloudOutlinePath),
      cloudFill = cont.path(cloudFillPath);

    box.attr({'fill': '#d7e3f4'});

    snow1_1.attr({'stroke': '#162d50', 'stroke-width': 4, 'opacity': 0.7});
    snow1_2.attr({'stroke': '#5f8dd3', 'stroke-width': 1});
    snow2_1.attr({'stroke': '#162d50', 'stroke-width': 4, 'opacity': 0.7});
    snow2_2.attr({'stroke': '#5f8dd3', 'stroke-width': 1});
    snow3_1.attr({'stroke': '#162d50', 'stroke-width': 4, 'opacity': 0.7});
    snow3_2.attr({'stroke': '#5f8dd3', 'stroke-width': 1});
    var snow1 = cont.set().push(snow1_1,snow1_2),
      snow1Move = function() {snow1.animate({transform: 's0.5,1t-17,33'}, 1000, 'linear', snow1Mid1)},
      snow1Mid1 = function() {snow1.animate({transform: 's-0.5,1t14,66'}, 1000, 'linear', snow1Mid2)},
      snow1Mid2 = function() {snow1.animate({transform: 's0.8,1t-13,99'}, 1000, 'linear', snow1Back)},
      snow1Back = function() {snow1.animate({transform: ''}, 0, snow1Move)};

    snow1Move();

    var snow2 = cont.set().push(snow2_1,snow2_2),
      snow2Move = function() {snow2.animate({transform: 's0.5,1t-12,33'}, 1500, 'linear', snow2Mid1)},
      snow2Mid1 = function() {snow2.animate({transform: 's-1,1t10,66'}, 1500, 'linear', snow2Mid2)},
      snow2Mid2 = function() {snow2.animate({transform: 's0.75,1t-8,99'}, 1500, 'linear', snow2Back)},
      snow2Back = function() {snow2.animate({transform: ''}, 0, snow2Move)};

    snow2Move();

    var snow3 = cont.set().push(snow3_1,snow3_2),
      snow3Move = function() {snow3.animate({transform: 's-0.5,1t-13,33'}, 1250, 'linear', snow3Mid1)},
      snow3Mid1 = function() {snow3.animate({transform: 's-1.0,1t15,66'}, 1250, 'linear', snow3Mid2)},
      snow3Mid2 = function() {snow3.animate({transform: 's0.9,1t-10,99'}, 1250, 'linear', snow3Back)},
      snow3Back = function() {snow3.animate({transform: ''}, 0, snow3Move)};

    snow3Move();

    cloudOutline.attr({'fill': '#b3b3b3', 'stroke': '#4d4d4d', 'stroke-width': 2});
    cloudFill.attr({'stroke': '#808080', 'stroke-width': 4, 'opacity': 0.5});
    var	cloud = cont.set().push(cloudOutline, cloudFill),
        cloudMove = function() {cloud.animate({transform: 's1,1.1'}, 1000, 'linear', cloudBack)},
        cloudBack = function() {cloud.animate({transform: 's1.1,1'}, 1000, 'linear', cloudMove)};

    cloudMove();

    var high = cont.text(box.getBBox().x+20,box.getBBox().y2-40,'30'),
      low = cont.text(box.getBBox().x2-20,box.getBBox().y2-20,'26'),
      temp = cont.set().push(high, low);

    temp.attr({'font': "18px Comic Sans MS", 'text-anchor': 'middle', 'cursor': 'default'});
  }

  function wedBox() {
    var	boxPath = 'm 401.53564,528.25876 c 4.03957,-85.44156 -3.4264,-178.14307 3.53553,-252.03306 26.18242,2.77528 54.63116,3.28425 84.85281,2.02031 -0.78857,82.71737 -0.54909,166.4628 0,250.51783 -28.70415,1.34891 -58.34218,0.83003 -88.38834,-0.50508 z',
      cloud1Path = 'm 493.7022,386.72997 c -6.43417,-3.65002 -6.20587,-14.75554 5.42957,-9.47018 -7.05603,-9.99398 13.72483,-14.06888 10.35406,-1.01015 7.14665,-2.7861 10.97491,-1.18718 8.71257,8.46003 z',
      cloud1FillPath = 'm 493.14134,380.50751 1.78572,-1.60715 -0.71429,3.03572 3.57143,-3.92857 -1.96428,5.89285 3.75,-4.46428 -1.78572,4.28571 3.39286,-3.75 c 0,0 -1.07143,4.64286 -0.35714,3.92857 0.71428,-0.71428 2.67857,-6.25 2.67857,-6.25 l -1.25,-6.07142 1.96428,4.28571 2.5,-5.35714 -1.42857,5.89285 2.67857,-3.03571 -5.35714,10.17857 5.17857,-6.60714 -1.25,6.07143 4.64286,-5.17857 -2.5,4.82142 5.35714,-5.53571 -2.85714,5.17857 5.35714,-5.17857 -3.03571,5.17857 2.14285,-1.60714',
      cloud2Path = 'm 493.00304,413.49902 c -4.02054,-2.15857 -3.74907,-18.08217 5.80838,-9.97526 0.73005,-8.35374 12.33497,-12.84549 13.76333,-2.14657 11.30536,-6.60572 12.96341,5.26736 9.21764,9.09137 z',
      cloud2FillPath = 'm 494.33506,411.40036 1.07143,-8.03571 0.17857,8.21429 1.42857,-6.60715 0.53572,5.53572 0.71428,-5.35715 1.42857,5.17858 4.10715,-10.35715 -1.96429,10 6.07143,-11.96428 -2.85714,10.89285 4.82143,-6.60714 -1.96429,5.71429 2.85714,-4.10715 -0.71428,3.75 5,-4.46428 -2.32143,4.82143 5,-5.53572 -2.85714,5.53572 5,-5.53572 -2.32143,5.17857 3.57143,-3.21428 -1.42858,3.75',
      sunOutlinePath = 'm 427.30197,407.90959 c -9.60325,-6.00143 -13.25563,-21.37075 -1.26269,-33.84011 10.12148,-7.42115 20.25789,-6.60679 27.77919,1.01015 21.05625,19.0344 -4.4265,43.81067 -26.5165,32.82996 z',
      sunFillPath = 'm 426.16862,383.68759 12.14286,-12.5 -11.42857,24.28572 19.2857,-22.85715 -14.99999,31.07143 21.7857,-24.28571 -14.64284,28.57143 14.64284,-17.85715 -5.35714,13.21429',
      ray1Path = 'm 434.62557,350.58343 c -0.21876,5.57247 -1.27512,12.82012 0.25254,14.89975',
      ray2Path = 'm 451.79817,368.00856 10.10152,-15.15229',
      ray3Path = 'm 465.30807,383.29793 c 6.32569,-1.35991 11.11191,-3.27735 16.49838,-7.29424',
      ray4Path = 'm 464.93015,403.3639 13.38452,7.82868',
      ray5Path = 'm 451.79817,414.22304 c 2.55231,2.83855 4.45805,8.26338 6.06091,14.89975',
      ray6Path = 'm 411.13953,368.00856 8.58629,6.31346',
      ray7Path = 'm 417.54429,425.06078 c 5.46927,-4.98367 5.40389,-5.29342 8.50936,-11.69166',
      ray8Path = 'm 400.62668,396.36724 14.57797,-0.97272',

      box = cont.path(boxPath),

      sunOutline = cont.path(sunOutlinePath),
      sunFill = cont.path(sunFillPath),
      ray1 = cont.path(ray1Path),
      ray2 = cont.path(ray2Path),
      ray3 = cont.path(ray3Path),
      ray4 = cont.path(ray4Path),
      ray5 = cont.path(ray5Path),
      ray6 = cont.path(ray6Path),
      ray7 = cont.path(ray7Path),
      ray8 = cont.path(ray8Path),
      rays = cont.set().push(ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8),

      cloud2Outline = cont.path(cloud2Path),
      cloud2Fill = cont.path(cloud2FillPath),
      cloud2 = cont.set(),

      cloud1 = cont.set(),
      cloud1Outline = cont.path(cloud1Path),
      cloud1Fill = cont.path(cloud1FillPath);

    box.attr({'fill': '#afc6e9'});

    rays.attr({'stroke': '#ff6600', 'stroke-width': 5});
    sunOutline.attr({'fill': '#ffdd55', 'stroke': '#ff6600', 'stroke-width': 2});
    sunFill.attr({'stroke': '#ff6600', 'stroke-width': 4, 'opacity': 0.5});

    var	sun = cont.set().push(sunOutline, sunFill, rays),
      sunOut = function() {sunFill.animate({'stroke-width': 6}, 1000, '<>', sunIn)},
      sunIn = function() {sunFill.animate({'stroke-width': 4}, 1000, '<>', sunOut)},
      raysOut = function() {rays.animate({'opacity': 0.2}, 1000, '<>', raysIn)},
      raysIn = function() {rays.animate({'opacity': 1}, 250, '<>', raysOut)};

    sunOut();
    raysOut();

    cloud1Outline.attr({'fill': '#b3b3b3', 'stroke': '#4d4d4d', 'stroke-width': 2});
    cloud1Fill.attr({'stroke': '#808080', 'stroke-width': 4, 'opacity': 0.5});
    var	cloud1 = cont.set().push(cloud1Outline, cloud1Fill),
      cloud1Move = function() {cloud1.animate({transform: 't-'+(box.getBBox().width+cloud1.getBBox().width)+',0'}, 7000, 'linear', cloud1Back)},
      cloud1Back = function() {cloud1.animate({transform: ''}, 0, 'linear', cloud1Move)};

    cloud1Move();

    cloud2Outline.attr({'fill': '#b3b3b3', 'stroke': '#4d4d4d', 'stroke-width': 2});
    cloud2Fill.attr({'stroke': '#808080', 'stroke-width': 4, 'opacity': 0.5});
    var	cloud2 = cont.set().push(cloud2Outline, cloud2Fill),
        cloud2Move = function() {cloud2.animate({transform: 't-'+(box.getBBox().width+cloud2.getBBox().width)+',0'}, 5000, 'linear', cloud2Back)},
        cloud2Back = function() {cloud2.animate({transform: ''}, 0, 'linear', cloud2Move)};

    cloud2Move();

    var high = cont.text(box.getBBox().x+20,box.getBBox().y2-40,'38'),
      low = cont.text(box.getBBox().x2-20,box.getBBox().y2-20,'23'),
      temp = cont.set().push(high, low);

    temp.attr({'font': "18px Comic Sans MS", 'text-anchor': 'middle', 'cursor': 'default'});
  }

  function thurBox() {
    var	boxPath = 'm 512.65242,528.25876 c -6.90271,-90.74537 4.35311,-183.94953 -2.52538,-251.02291 29.12606,2.35702 68.69241,-3.87225 88.89342,-0.50507 -5.86303,49.58206 -1.34687,168.35875 -2.02031,252.53813 -38.99665,3.2902 -56.41335,-0.61292 -84.34773,-1.01015 z',
      sunOutlinePath = 'm 531.01015,390.92349 c -0.17694,-20.06198 23.31485,-23.02784 30.71429,-16.07143 21.48547,28.40559 -8.45355,39.70804 -21.78572,31.42858 -5.32859,-3.144 -8.11915,-7.46401 -8.92857,-15.35715 z',
      sunFillPath = 'm 537.69713,384.95524 12.14286,-12.5 -11.42857,24.28572 19.2857,-22.85715 -14.99999,31.07143 21.7857,-24.28571 -14.64284,28.57143 14.64284,-17.85715 -5.35714,13.21429',
      ray1Path = 'm 547.08158,366.63778 c -0.47201,-7.63577 -1.80605,-11.82343 -3.21429,-15.71429',
      ray2Path = 'm 566.72444,369.85206 11.78571,-12.85714',
      ray3Path = 'm 573.51015,391.99492 13.92857,-1.07143',
      ray4Path = 'm 567.08158,407.70921 12.85714,11.78571',
      ray5Path = 'm 551.36729,411.99492 1.42857,16.42857',
      ray6Path = 'm 533.51015,409.13778 c -2.06823,4.5016 -5.68884,8.22701 -9.64286,11.78571',
      ray7Path = 'm 526.36729,392.70921 -10,-0.35715',
      ray8Path = 'm 529.58158,373.42349 -12.5,-9.28571',

      box = cont.path(boxPath),

      sunOutline = cont.path(sunOutlinePath),
      sunFill = cont.path(sunFillPath),
      ray1 = cont.path(ray1Path),
      ray2 = cont.path(ray2Path),
      ray3 = cont.path(ray3Path),
      ray4 = cont.path(ray4Path),
      ray5 = cont.path(ray5Path),
      ray6 = cont.path(ray6Path),
      ray7 = cont.path(ray7Path),
      ray8 = cont.path(ray8Path),
      rays = cont.set().push(ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8);

    box.attr({'fill': '#afdde9'});

    rays.attr({'stroke': '#ff6600', 'stroke-width': 5});
    sunOutline.attr({'fill': '#ffdd55', 'stroke': '#ff6600', 'stroke-width': 2});
    sunFill.attr({'stroke': '#ff6600', 'stroke-width': 4, 'opacity': 0.5});

    var	sun = cont.set().push(sunOutline, sunFill),
      sunOut = function() {sunFill.animate({'stroke-width': 6}, 1000, '<>', sunIn)},
      sunIn = function() {sunFill.animate({'stroke-width': 4}, 1000, '<>', sunOut)},
      sunBounce1 = function() {sun.animate({'transform': 'S1.1,1.1'}, 1000, 'linear', sunBounce2)},
      sunBounce2 = function() {sun.animate({'transform': ''}, 1000, 'linear', sunBounce1)},
      raysOut = function() {rays.animate({'opacity': 0.2}, 1000, '<>', raysIn)},
      raysIn = function() {rays.animate({'opacity': 1}, 250, '<>', raysOut)};

    sunOut();
    sunBounce1();
    raysOut();

    var high = cont.text(box.getBBox().x+20,box.getBBox().y2-40,'43'),
      low = cont.text(box.getBBox().x2-20,box.getBBox().y2-20,'32'),
      temp = cont.set().push(high, low);

    temp.attr({'font': "18px Comic Sans MS", 'text-anchor': 'middle', 'cursor': 'default'});
  }

  function friBox() {
    var	boxPath = 'm 616.19305,528.25876 c 4.32313,-82.76188 0.47967,-167.5654 0,-251.52798 26.63891,3.12235 55.02061,2.75914 84.34774,0.50507 5.73439,4.00083 2.35702,169.03219 3.53553,253.54829 -29.29442,-0.84179 -79.79647,4.6787 -87.88327,-2.52538 z',
      cloudOutlinePath = 'm 627.85714,398.21429 56.42857,1.42857 c 11.39199,-10.35886 13.88253,-35.60112 -12.14285,-26.78572 7.27896,-18.42196 -19.66344,-20.15988 -20.35715,-1.42857 -6.66699,-14.74981 -25.04124,-1.52232 -15.35714,12.5 -12.62936,-10.84035 -18.8368,-1.27975 -8.57143,14.28572 z',
      cloudFillPath = 'm 629.28571,384.64286 -1.07143,7.14285 3.92858,-6.07143 -1.78572,10.35715 5,-8.57143 -1.78571,9.64286 6.42857,-11.78572 -0.35714,-13.57143 2.14285,12.14286 1.07143,-13.92857 0.35714,13.21428 5.35715,-11.78571 -10.71429,24.64286 13.21429,-20 L 642.5,396.78571 652.14286,380 660,365 l 4.28571,-2.5 -17.5,33.21428 19.28572,-26.07142 -10.71429,24.64285 12.85714,-17.85714 -8.21428,18.92857 16.07143,-17.5 -9.28572,16.07143 15.71429,-16.07143 -10.35714,18.92857 15.71428,-19.64285 -10.71428,18.21428 8.21428,-6.78571',
      rainPath = [],

      box = cont.path(boxPath),

      cloudOutline = cont.path(cloudOutlinePath),
      cloudFill = cont.path(cloudFillPath);

    rainPath.push('m 635.33249,401.40442 0,32.77509')
    rainPath.push('m 643.25614,403.20525 0,18.72862')
    rainPath.push('m 652.26029,403.7455 0,32.77509')
    rainPath.push('m 660.90426,403.56542 0,18.72862')
    rainPath.push('m 668.82791,403.7455 0,32.77509')
    rainPath.push('m 677.83205,404.64592 0,18.72862')
    rainPath.push('m 682.87438,403.7455 0,32.77509')

    var	rain = [],
      lengthR = [],
      rainDrop = [];
    for (var i=0; i < rainPath.length; i++) {
      rain[i] = cont.path(rainPath[i]).attr({'stroke': 'none'});
      lengthR[i] = rain[i].getTotalLength();
      rainDrop[i] = cont.rect(rain[i].getPointAtLength(0).x,rain[i].getPointAtLength(0).y, 1.5, 6).attr({'fill': '#3771c8', 'stroke': '#162d50', 'transform': 'r19'});
    }

    var rainDown = function(droplet) {
      rainDrop[droplet].animate({'x': rain[droplet].getPointAtLength(lengthR[droplet]).x, 'y': rain[droplet].getPointAtLength(lengthR[droplet]).y}, (Math.random()*500)+250, function () {rainUp(droplet)});
    }

    var rainUp = function(droplet) {
      rainDrop[droplet].animate({'x': rain[droplet].getPointAtLength(0).x, 'y': rain[droplet].getPointAtLength(0).y}, 0, function () {rainDown(droplet)});
    }

    for (var i=0; i < rainDrop.length; i++) {
      rainDown(i);
    }

    cloudOutline.attr({'fill': '#b3b3b3', 'stroke': '#4d4d4d', 'stroke-width': 2});
    cloudFill.attr({'stroke': '#808080', 'stroke-width': 4, 'opacity': 0.5});
    var	cloud = cont.set().push(cloudOutline, cloudFill).toFront(),
      cloudMove = function() {cloud.animate({transform: 's1,1.1'}, 1000, 'linear', cloudBack)},
      cloudBack = function() {cloud.animate({transform: 's1.1,1'}, 1000, 'linear', cloudMove)};

    cloudMove();

    box.attr({'fill': '#b7c4c8'});

    var 	high = cont.text(box.getBBox().x+20,box.getBBox().y2-40,'44'),
        low = cont.text(box.getBBox().x2-20,box.getBBox().y2-20,'35'),
        temp = cont.set().push(high, low);

    temp.attr({'font': "18px Comic Sans MS", 'text-anchor': 'middle', 'cursor': 'default'});
  }

  function satBox() {
    var	boxPath = 'm 723.7743,279.76124 84.85281,0 c -0.31313,83.22819 -6.87268,150.84034 0,252.03306 -26.84557,-2.91566 -55.84256,-2.6042 -85.35789,-1.51523 0.2503,-83.38303 2.66157,-163.52461 0.50508,-250.51783 z',
      cloud1Path = 'm 809.85552,409.3133 23.23351,0 c 7.42173,-8.127 1.32721,-16.92955 -7.07107,-10.6066 6.31474,-7.80332 -13.34676,-19.77976 -10.2801,-0.005 -5.52712,-4.90306 -14.50617,2.36919 -5.88234,10.61185 z',
      cloud1FillPath = 'M 808.89286,403.39286 811.75,400 l -1.60714,5.35714 4.46428,-5.89285 -3.03571,7.32142 4.28571,-5.53571 -0.17857,5.53571 4.10715,-15.89285 -2.5,15.53571 5,-13.92857 -2.32143,13.92857 3.75,-7.32143 -0.89286,7.14286 6.60714,-6.96429 -3.75,7.32143 7.32143,-6.78571 -4.10714,6.78571 3.57143,-2.5',
      cloud2Path = 'm 809.67089,393.27713 22.98097,0.3788 c 6.20248,-3.35713 7.70564,-13.55409 -3.15673,-9.72271 0.41326,-10.96867 -13.5442,-11.95544 -11.86929,-0.3751 -8.22718,-5.80913 -13.845,0.7552 -7.95495,9.71901 z',
      cloud2FillPath = 'm 809.35714,387.67857 1.78572,-4.10714 -0.17857,7.67857 2.85714,-6.96429 -1.07143,6.78572 2.5,-5.71429 c 0,0 -1.42857,7.32143 -0.17857,6.07143 1.25,-1.25 3.92857,-5.35714 3.92857,-5.35714 0,0 -1.07143,6.42857 -1.07143,5.35714 0,-1.07143 4.82143,-13.57143 4.82143,-13.57143 l -2.85714,11.78572 4.64286,-9.82143 -3.21429,11.25 L 826.5,381.25 c 0,0 -2.5,11.78571 -2.14286,10.35714 0.35715,-1.42857 6.42858,-6.07143 6.42858,-6.07143 0,0 -3.75,4.82143 -3.03572,4.82143 0.71429,0 6.25,-4.46428 6.25,-4.46428 l -2.85714,4.64285',
      sunOutlinePath = 'm 748.52304,405.02015 c -7.14213,-7.05699 -10.75178,-19.82342 3.53553,-31.56726 5.98394,-5.4259 25.29701,-1.12831 27.7792,10.85914 5.445,28.39932 -19.93749,30.49899 -31.31473,20.70812 z',
      sunFillPath = 'm 748.52104,385.85462 12.14286,-12.5 -11.42857,24.28572 19.2857,-22.85715 -14.99999,31.07143 21.7857,-24.28571 -14.64284,28.57143 14.64284,-17.85715 -5.35714,13.21429',
      ray1Path = 'm 728.82989,366.17872 c 5.06387,-0.0949 8.47454,1.97258 14.13248,6.21456',
      ray2Path = 'm 754.55907,347.62114 2.07006,17.31831',
      ray3Path = 'M 785.37177,354.71137 775.31393,368.9609',
      ray4Path = 'm 785.4005,387.53351 15.7294,0.7294',
      ray5Path = 'm 780.82382,407.64658 14.69542,9.39435',
      ray6Path = 'm 762.6403,414.54374 c 1.76473,5.77277 2.20299,11.54554 2.07006,17.31831',
      ray7Path = 'm 749.64432,409.55804 c -5.7154,4.5016 -7.70053,8.22701 -9.64286,11.78571',
      ray8Path = 'm 737.8031,392.96072 c -6.73822,0.80875 -7.76567,1.85533 -16.21159,1.76011',

      box = cont.path(boxPath),

      sunOutline = cont.path(sunOutlinePath),
      sunFill = cont.path(sunFillPath),
      ray1 = cont.path(ray1Path),
      ray2 = cont.path(ray2Path),
      ray3 = cont.path(ray3Path),
      ray4 = cont.path(ray4Path),
      ray5 = cont.path(ray5Path),
      ray6 = cont.path(ray6Path),
      ray7 = cont.path(ray7Path),
      ray8 = cont.path(ray8Path),
      rays = cont.set().push(ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8),

      cloud2Outline = cont.path(cloud2Path),
      cloud2Fill = cont.path(cloud2FillPath),
      cloud2 = cont.set(),

      cloud1 = cont.set(),
      cloud1Outline = cont.path(cloud1Path),
      cloud1Fill = cont.path(cloud1FillPath);

    box.attr({'fill': '#afc6e9'});

    rays.attr({'stroke': '#ff6600', 'stroke-width': 5});
    sunOutline.attr({'fill': '#ffdd55', 'stroke': '#ff6600', 'stroke-width': 2});
    sunFill.attr({'stroke': '#ff6600', 'stroke-width': 4, 'opacity': 0.5});

    var	sun = cont.set().push(sunOutline, sunFill, rays),
      sunOut = function() {sunFill.animate({'stroke-width': 6}, 1000, '<>', sunIn)},
      sunIn = function() {sunFill.animate({'stroke-width': 4}, 1000, '<>', sunOut)},
      raysOut = function() {rays.animate({'opacity': 0.2}, 1000, '<>', raysIn)},
      raysIn = function() {rays.animate({'opacity': 1}, 250, '<>', raysOut)};

    sunOut();
    raysOut();

    cloud1Outline.attr({'fill': '#b3b3b3', 'stroke': '#4d4d4d', 'stroke-width': 2});
    cloud1Fill.attr({'stroke': '#808080', 'stroke-width': 4, 'opacity': 0.5});
    var	cloud1 = cont.set().push(cloud1Outline, cloud1Fill),
      cloud1Move = function() {cloud1.animate({transform: 't-'+(box.getBBox().width+cloud1.getBBox().width)+',0'}, 5000, 'linear', cloud1Back)},
      cloud1Back = function() {cloud1.animate({transform: ''}, 0, 'linear', cloud1Move)};

    cloud1Move();

    cloud2Outline.attr({'fill': '#b3b3b3', 'stroke': '#4d4d4d', 'stroke-width': 2});
    cloud2Fill.attr({'stroke': '#808080', 'stroke-width': 4, 'opacity': 0.5});
    var	cloud2 = cont.set().push(cloud2Outline, cloud2Fill),
      cloud2Move = function() {cloud2.animate({transform: 't-'+(box.getBBox().width+cloud2.getBBox().width)+',0'}, 7000, 'linear', cloud2Back)},
      cloud2Back = function() {cloud2.animate({transform: ''}, 0, 'linear', cloud2Move)};

    cloud2Move();

    var high = cont.text(box.getBBox().x+20,box.getBBox().y2-40,'32'),
      low = cont.text(box.getBBox().x2-20,box.getBBox().y2-20,'24'),
      temp = cont.set().push(high, low);

    temp.attr({'font': "18px Comic Sans MS", 'text-anchor': 'middle', 'cursor': 'default'});
  }

  function sunBox() {
    var	boxPath = 'm 827.82001,532.29937 c 34.35615,1.63112 56.72325,-0.7341 83.84266,-1.51523 0.92812,-83.52321 -1.93008,-166.28915 5.05076,-251.0229 -29.38929,-0.28459 -57.80525,2.35078 -88.38834,-1.51523 -2.20273,80.61571 -2.34292,165.35651 -0.50508,254.05336 z',
      sunOutlinePath = 'm 851.30606,403.50492 c -8.29222,-29.25867 19.4808,-29.78986 27.02158,-28.03173 11.54664,5.04992 17.65772,20.12213 6.06091,32.57742 -4.0018,5.43775 -25.57981,10.19095 -33.08249,-4.54569 z',
      sunFillPath = 'm 856.80124,388.22876 12.14286,-12.5 -11.42857,24.28572 19.2857,-22.85715 -14.99999,31.07143 21.7857,-24.28571 -14.64284,28.57143 14.64284,-17.85715 -5.35714,13.21429',
      ray1Path = 'm 869.23627,367.64451 0.75761,-18.94036',
      ray2Path = 'm 883.12586,367.89704 c 3.20801,-4.87321 7.58562,-8.57682 12.12183,-12.12183',
      ray3Path = 'm 895.24769,391.38309 c 3.57667,-1.47409 8.95266,-1.14887 14.39468,-0.75761',
      ray4Path = 'm 887.16647,410.82853 14.14214,11.61675',
      ray5Path = 'm 869.4888,417.64706 c 0.89685,7.23943 0.68865,14.47885 0.25254,21.71828',
      ray6Path = 'm 853.32636,412.59629 -13.88959,16.16245',
      ray7Path = 'm 830.85047,394.91863 c 6.29654,-0.78004 12.18358,-1.42358 15.65736,-1.2627',
      ray8Path = 'M 847.77052,374.71557 835.39616,363.09882',

      box = cont.path(boxPath),

      sunOutline = cont.path(sunOutlinePath),
      sunFill = cont.path(sunFillPath),
      ray1 = cont.path(ray1Path),
      ray2 = cont.path(ray2Path),
      ray3 = cont.path(ray3Path),
      ray4 = cont.path(ray4Path),
      ray5 = cont.path(ray5Path),
      ray6 = cont.path(ray6Path),
      ray7 = cont.path(ray7Path),
      ray8 = cont.path(ray8Path),
      rays = cont.set().push(ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8);

    box.attr({'fill': '#afdde9'});

    rays.attr({'stroke': '#ff6600', 'stroke-width': 5});
    sunOutline.attr({'fill': '#ffdd55', 'stroke': '#ff6600', 'stroke-width': 2});
    sunFill.attr({'stroke': '#ff6600', 'stroke-width': 4, 'opacity': 0.5});

    var	sun = cont.set().push(sunOutline, sunFill),
      sunOut = function() {sunFill.animate({'stroke-width': 6}, 1000, '<>', sunIn)},
      sunIn = function() {sunFill.animate({'stroke-width': 4}, 1000, '<>', sunOut)},
      sunBounce1 = function() {sun.animate({'transform': 'S1.1,1.1'}, 1000, 'linear', sunBounce2)},
      sunBounce2 = function() {sun.animate({'transform': ''}, 1000, 'linear', sunBounce1)},
      raysOut = function() {rays.animate({'opacity': 0.2}, 1000, '<>', raysIn)},
      raysIn = function() {rays.animate({'opacity': 1}, 250, '<>', raysOut)};

    sunOut();
    sunBounce1();
    raysOut();

    var high = cont.text(box.getBBox().x+20,box.getBBox().y2-40,'31'),
      low = cont.text(box.getBBox().x2-20,box.getBBox().y2-20,'22'),
      temp = cont.set().push(high, low);

    temp.attr({'font': "18px Comic Sans MS", 'text-anchor': 'middle', 'cursor': 'default'});
  }

  function setBackground() {
    var	boundingPath = 'm 38.875518,247.97079 0,481.1875 904.781292,0 0,-481.1875 -904.781292,0 z m 343.968752,27.75 c 3.20648,41.90997 0.1594,87.99195 -2.125,133.5625 0.64476,38.26381 -1.55284,73.70311 4.28125,117.15625 -28.80952,0.60573 -57.62798,-1.16013 -86.4375,2.84375 0.9663,-83.55751 1.63617,-167.40253 0.71875,-252.84375 l 83.5625,-0.71875 z m 197.875,0 c 7.00521,-0.0737 13.26225,0.15821 18.3125,1 -5.86303,49.58206 -1.35781,168.38312 -2.03125,252.5625 -38.99665,3.2902 -56.40937,-0.63402 -84.34375,-1.03125 -6.90271,-90.74537 4.34724,-183.92662 -2.53125,-251 21.84455,1.76776 49.57813,-1.31028 70.59375,-1.53125 z m -301.40625,0.5 c 0.16836,83.84266 -2.77636,208.32731 0.5,251.53125 -18.90441,-4.50555 -54.95299,-1.37728 -84.84375,-1 -6.11041,-90.58746 3.44754,-160.73281 -1.53125,-249 28.62099,1.71219 57.25401,-0.85511 85.875,-1.53125 z m 125.75,0 c 26.18242,2.77528 54.65335,3.29519 84.875,2.03125 -0.78857,82.71737 -0.54909,166.44497 0,250.5 -28.70415,1.34891 -58.36009,0.83511 -88.40625,-0.5 4.03957,-85.44156 -3.43068,-178.14126 3.53125,-252.03125 z m 211.125,0.5 c 26.63891,3.12235 55.01662,2.78532 84.34375,0.53125 5.73439,4.00083 2.35274,169.01515 3.53125,253.53125 -29.29442,-0.84179 -79.7882,4.67283 -87.875,-2.53125 4.32313,-82.76188 0.47967,-167.56867 0,-251.53125 z m 212.12499,1.53125 c 30.5831,3.86601 59.017,1.21541 88.4063,1.5 -6.9809,84.73375 -4.1344,167.50804 -5.0625,251.03125 -27.1194,0.78113 -49.4876,3.16237 -83.8438,1.53125 -1.8378,-88.69685 -1.7027,-173.44679 0.5,-254.0625 z m -104.53124,1.5 84.84375,0 c -0.31313,83.22819 -6.87268,150.83853 0,252.03125 -26.84557,-2.91566 -55.82842,-2.58897 -85.34375,-1.5 0.2503,-83.38303 2.65649,-163.53803 0.5,-250.53125 z',
      bounding = cont.path(boundingPath).toFront();

    bounding.attr({'fill': '#e6e6e6', 'stroke': 'none'});
    cont.setViewBox(bounding.getBBox().x,bounding.getBBox().y,bounding.getBBox().width,bounding.getBBox().height);
  }

  function addText() {
    var	qBoxPath = 'm 99.124791,574.40361 c 0,0 27.896609,1.10464 36.671119,-1.97525 0,0 -2.61308,25.83251 -2.95736,41.48044 0,0 -21.94965,-4.52025 -34.896698,-0.65842 3.328768,-18.6909 0.217659,-38.8633 1.182939,-38.84677 z',
      qBoxFillPath = 'm 115.31928,595.29462 c 0.83638,-0.29092 0.80479,0.98389 0.48352,1.39011 -0.87062,1.10084 -2.5463,0.53471 -3.26375,-0.42308 -1.28335,-1.71325 -0.37178,-4.10858 1.32968,-5.13739 2.49695,-1.50981 5.69579,-0.21435 7.01102,2.23629 1.753,3.26631 0.0599,7.29233 -3.14288,8.88465 -4.03038,2.00378 -8.89346,-0.0929 -10.75829,-4.04948 -2.25857,-4.79198 0.24467,-10.49717 4.95608,-12.63193 5.55223,-2.51573 12.10251,0.39586 14.50556,5.86268 2.77442,6.31167 -0.54661,13.70894 -6.76928,16.37921 -7.07059,3.03411 -15.31612,-0.69709 -18.25283,-7.67589 -3.294549,-7.82915 0.84735,-16.92386 8.58248,-20.12647 8.58746,-3.5555 18.53202,0.99746 22.0001,9.48908',
      boxOpenPath1 = 'm 135.90727,572.4414 c 0,0 -4.6213,41.35138 -2.8077,41.52861',
      boxOpenPath2 = 'm 135.90727,622.40426 c 0,0 -4.6213,41.35138 -2.8077,41.52861',
      boxOpenPath3 = 'm 135.90727,672.40427 c 0,0 -4.6213,41.35137 -2.8077,41.5286',

      title = cont.text(118,395,'SEVEN-DAY\nFORECAST'),

      monText = cont.text(235,548,'Mon'),
      tuesText = cont.text(341,548,'Tues'),
      wedText = cont.text(445,548,'Wed'),
      thurText = cont.text(554,548,'Thur'),
      friText = cont.text(659,548,'Fri'),
      satText = cont.text(765,548,'Sat'),
      sunText = cont.text(871,548,'Sun'),
      dayText = cont.set().push(monText, tuesText, wedText, thurText, friText, satText, sunText),


      //For box opening animation
      hidingRect = cont.rect(38,576,65,130).attr({'fill': '#e6e6e6', 'stroke': 'none'}),
      boxOpen1 = cont.path(boxOpenPath1),
      boxOpen2 = cont.path(boxOpenPath2),
      boxOpen3 = cont.path(boxOpenPath3),
      boxOpen = cont.set().push(boxOpen1,boxOpen2,boxOpen3),

      qButton1 = cont.path(qBoxPath).data('num', '1'),
      qButton2 = cont.path(qBoxPath).transform('t0,50').data('num', '2'),
      qButton3 = cont.path(qBoxPath).transform('t0,100').data('num', '3'),
      qButtons = cont.set().push(qButton1,qButton2,qButton3),

      q1 = cont.text(qButton1.getBBox().cx,qButton1.getBBox().cy,'?').data('num', '1'),
      q2 = cont.text(qButton2.getBBox().cx,qButton2.getBBox().cy,'?').data('num', '2'),
      q3 = cont.text(qButton3.getBBox().cx,qButton3.getBBox().cy,'?').data('num', '3'),
      qs = cont.set().push(q1,q2,q3),

      questions = cont.set().push(qButtons, qs).attr({'cursor': 'pointer'}),

      questionText = cont.text(0,0,''),
      answersSet = cont.set(),
      crossOut = cont.set();

    title.attr({'font': "22px Comic Sans MS", 'cursor': 'default'});
    dayText.attr({'font': "18px Comic Sans MS", 'text-anchor': 'middle', 'cursor': 'default'});

    for (i=0; i < qButtons.length; i++) {
      qButtons[i].g = qButtons[i].glow()
    }

    qButtons.attr({'fill': '#ffeeaa'})

    qs.attr({'font': "32px Comic Sans MS", 'text-anchor': 'middle'});

    //Run on question box click
    questions.mousedown( function() {
      qButtonDown(this.data().num-1, qButtons, questionText, boxOpen, answersSet, crossOut);

      hidingRect.toFront();
      for (i=0; i < qButtons.length; i++) {
        qButtons[i].g.toFront();
      }
      questions.toFront();
    });
  }

  function qButtonDown(butNum, pressedButton, questionText, boxOpen, answersSet, crossOut) {
    pressedButton[butNum].toFront().g.remove();
    questionText.attr({'x': pressedButton[butNum].getBBox().x2, 'y': pressedButton[butNum].getBBox().cy});
    crossOut.remove();

    var	warmFrontPath = 'm 287.0881,268.76516 c 21.57918,5.33138 21.3766,24.67532 -2.79586,24.40827 l -1.68112,19.98206 c 26.13026,1.45095 23.41628,31.18933 -0.3138,27.35206 l -0.11819,17.48421 c 29.72242,-4.52654 18.11226,27.93615 -0.0295,21.95906 l -0.0295,14.70627 c 19.57252,-5.2518 28.26606,25.03504 -0.0296,23.40962 l -0.0295,13.25572 c 34.44223,-3.06676 12.62991,28.76642 -0.11819,21.83588 0,0 -0.0554,15.30838 -0.11818,15.30838 31.57689,2.559 20.10973,30.90345 -0.35715,27.67331 l 1.12575,13.8846 c 21.90052,-4.7503 30.73805,27.442 0.71429,23.92857 -1.71424,-50.94691 -3.65772,-223.32857 3.55348,-267.06037',
        coldFrontPath = 'm 282.21938,268.36475 c 2.9879,4.33622 15.58871,10.44831 20.93836,14.5562 -6.28501,2.04832 -17.79126,8.47185 -21.2955,13.30094 l 0,21.42857 c 4.49668,7.61681 17.63927,13.37949 23.08122,14.85206 -5.85114,2.35959 -19.43236,6.71706 -22.90265,11.93366 l 0.53571,17.85714 c 2.94775,3.58091 15.45952,5.99412 21.23423,8.63271 -4.60938,3.5305 -17.69564,9.50495 -20.87708,16.36729 l -1.45056,12.47945 c 7.59067,4.17111 24.29683,7.83418 24.29683,7.83418 0,0 -14.70933,9.43435 -24.29683,15.81223 l 0,11.31667 c 6.74826,4.53489 24.65947,11.75417 24.65947,11.75417 0,0 -15.70657,6.96102 -24.65947,10.30361 l 1.45056,13.93002 c 4.27622,5.68191 20.3078,13.20473 20.3078,13.20473 0,0 -16.45705,8.28348 -20.3078,11.02889 l 0,15.38056 c 4.65906,5.63141 16.88116,11.29773 22.93328,13.21429 -6.90352,3.41373 -18.44399,9.27679 -22.57614,14.99999 -0.35714,-54.52381 -2.79612,-213.58172 -1.07143,-270.18736 z',

        warmFront = cont.path(warmFrontPath).attr({'fill': '#c83737', 'stroke-width': 4}).hide(),
        coldFront = cont.path(coldFrontPath).attr({'fill': '#5f8dd3', 'stroke-width': 4}).hide(),

        questionChoice = ['WHEN DID A WARM FRONT PASS?', 'WHEN DID A COLD FRONT PASS?', 'WHY WAS THERE SNOW INSTEAD OF RAIN ON TUESDAY?'],
        answerChoice = [['Mon-Tues','Tues-Wed','Wed-Thur','Thur-Fri','Fri-Sat','Sat-Sun'],['Mon-Tues','Tues-Wed','Wed-Thur','Thur-Fri','Fri-Sat','Sat-Sun'],[]],
        answerFigure = [warmFront, coldFront, ''];

    answersSet.remove();
    questionText.attr({'text': questionChoice[butNum], 'font': "20px Comic Sans MS", 'text-anchor': 'end', 'cursor': 'default'});

    boxOpen[butNum].animate({'transform': 'R90,'+boxOpen[butNum].getBBox().x+','+boxOpen[butNum].getBBox().y2}, 750, 'bounce',function () {
      questionText.animate({'x': pressedButton[butNum].getBBox().x2+questionText.getBBox().width+50, 'y': pressedButton[butNum].getBBox().cy},1000,function () {
        showAnswerChoices(answersSet)
        boxOpen[butNum].animate({'transform': ''}, 750)
        pressedButton[butNum].g = pressedButton[butNum].glow();
      });
    });

    function showAnswerChoices(currentAnswers) {
      var	answers = [];
      for (i=0; i<answerChoice[butNum].length/3; i++) {
        for (j=0; j<answerChoice[butNum].length/2; j++) {
          answers[i] =	cont.text(670+i*100, pressedButton[0].getBBox().cy+j*50, answerChoice[0][j+i*3])
                    .attr({'font': "20px Comic Sans MS", 'text-anchor': 'end', 'cursor': 'pointer'})
                    .data('xFactor', (j+i*3)*105);
          currentAnswers.push(answers[i]);
          answers[i].hover(
            function() {
              this.attr({'fill': '#c83737'});
              answerFigure[butNum].attr({'transform': 't'+this.data().xFactor+',0'});
              answerFigure[butNum].show();
            },
            function() {
              this.attr({'fill': '#000'});
              answerFigure[butNum].hide();
            });
          answers[i].click(function () {
            if (this.attrs.text == 'Tues-Wed' && butNum == 0 || this.attrs.text == 'Fri-Sat' && butNum == 1) {
              currentAnswers.remove();
              questionText.attr({'text': ''});
              crossOut.remove();
            } else {
              crossOut.push(cont.path('m '+(this.getBBox().x-3)+','+(this.getBBox().y+2)+' 93.56093,23.20891 m -2.90112,-21.20891 -89.93453,18.85724'));
              crossOut.attr({'stroke': '#f00', 'stroke-width': 3})
              answerFigure[butNum].hide();
              this.unhover();
            }
          });
        }
      }
    }
  }

  //Add each day window to screen, the order is important
  monBox();
  wedBox();
  tuesBox();
  thurBox();
  satBox();
  friBox();
  sunBox();
  setBackground();
  addText();

  document.addEventListener('keydown', function(e) {
  console.log(e)
    if (e.altKey == true && e.keyIdentifier == "U+004D") {
      location.href = window.location.href.substring(0,window.location.href.lastIndexOf('/'))+'/currentConditions.html'
    }
  });
});
