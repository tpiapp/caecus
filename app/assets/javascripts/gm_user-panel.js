var map;
var heatmap;
var colombia = {
    lat: 4,
    lng: -72
};
var infowindow;
var reportes = []



function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        
        zoom: 7,
        center: colombia,
        title: "crime"
    });

    showMarkers(data);
    

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(data),
        map: map,
        radius: 50
    });
    $('.filtros input').click(function () {
        boxclick(this, this.value);
    });



    function changeGradient() {
        var gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
    }
    
   
    


}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') == 100 ? 50 : 100);
}

function changeGradient() {
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function showMarkers(data) {
    for (var i = 0; i < data.length; i++) {
        var details = data[i][2];
        var city = data[i][3];
        var date = data[i][4];
        var image_report = img_marker_complaint;
        loc_crime = {
            lat: data[i][0],
            lng: data[i][1]
        };
        addMarker(loc_crime, image_report, details, city, date);
    }
}



function getPoints(data) {
    var points = [];
    for (var i = 0; i < data.length; i++) {
        points.push(new google.maps.LatLng(data[i][0], data[i][1]));
    }
    return points;
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function showMarkers_susp(data) {
    for (var i = 0; i < data.length; i++) {
        loc_crime = {
            lat: data[i][0],
            lng: data[i][1]
        };
        addMarker(loc_crime, img_marker_suspect, data[i][2], data[i][3], data[i][4], data[i][5]);
    }
}



function show(category) {
    for (var i = 0; i < reportes.length; i++) {
        if (reportes[i].category == category || reportes[i].transp == category) {
            reportes[i].setVisible(true);
        }
        
    }
    document.getElementById(category + "box").checked = true;
}

function hide(category) {
    var aux = 0;
    var showable = [];
    var showable_points = [];
    for (var i = 0; i < reportes.length; i++) {
        if (reportes[i].category == category || reportes[i].transp == category) {
            reportes[i].setVisible(false);
            
      /*      if(i< data.length){
                heatmap.data[i].setVisible()=false;
            }/**/
            
            
        } else {
            showable[aux] = reportes[i];
            showable_points[aux] = reportes[i].position;
            aux++;
        }

    }
    // trabajar despues, concordancia entre mapa de calor y filtros 
    // heatmap.setMap(null);
    // heatmap = new google.maps.visualization.HeatmapLayer({
    //     data: showable_points,
    //     map: map,
    //     radius: 50
    // });
    document.getElementById(category + "box").checked = false;
    infowindow.close();
}

function boxclick(box, category) {
    if (box.checked) {
        show(category);
    } else {
        hide(category);
    }
}

function addMarker(location, image, details, city, date) {
    var complaint_marker;
    complaint_marker = new google.maps.Marker({
        position: location,
        map: map,
        // category: report_type,
        // transp: transport_type,
        icon: image,
    });

    reportes.push(complaint_marker);
    infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(complaint_marker, 'click', function () {
        map.panTo(complaint_marker.getPosition());

        var pdetails = "<strong> Detalles: </strong>" + details;
        //var purl = "<br><a href=" + report_url + "><strong> Ver Reporte </strong></a>";
        var pcity = "<strong> Ciudad: </strong>" + city;
        var pdate = "<strong> Fecha: </strong>" + date;
        var windowcontent = pdetails + pcity + pdate;
        if (details.length == 1) {
            console.log("In!");
            pdetails = pdetails + "   <i> No info available </i>   ";
        }

        infowindow.setContent(windowcontent);
        infowindow.open(map, complaint_marker);
    });

}