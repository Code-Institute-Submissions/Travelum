function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(41.390205, 2.154007),
        zoom: 2
    });

    let locations = [
        [
            `<b><a href="bar.html">Barcelona</a></b><br>
        Country: Spain<br>
        Language: Spanish<br>
        Population: 5.5 million<br>
        Currency: Euro<br>
        <img src="https://images.unsplash.com/photo-1562883676-8c7feb83f09b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            41.390205,
            2.154007,
            1,
        ],
        [`<b><a href="rio.html">Rio De Janeiro</a></b><br>
        Country: Brazil<br>
        Language: Portugese<br>
        Population: 6.3 million<br>
        Currency: Brazilian Real<br>
        <img src="https://images.unsplash.com/photo-1507125524815-d9d6dccda1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            -22.908333,
            -43.196388,
            5,
        ],
        [
            `<b><a href="ny.html">New York</a></b><br>
        Country: USA<br>
        Language:English<br>
        Population: 8.6 million<br>
        Currency: U.S. Dollar<br>
        <img src="https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            40.73061,
            -73.935242,
            4,
        ],
        [
            `<b><a href="dub.html">Dublin</a></b><br>
        Country: Ireland<br>
        Language: English & Irish<br>
        Population: 1.4 million<br>
        Currency: Euro<br>
        <img src="https://images.unsplash.com/photo-1554900662-d4fb5f28aa59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            53.35014,
            -6.266155,
            3,
        ],
        [
            `<b><a href="sthlm.html">Stockholm</a></b><br>
        Country: Sweden<br>
        Language: Swedish<br>
        Population: 1 million<br>
        Currency: Swedish Krona<br>
        <img src="https://images.unsplash.com/photo-1572225303717-a96db5e8d8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            59.334591,
            18.06324,
            2,
        ],
        [
            `<b><a href="syd.html">Sydney</a></b><br>
        Country: Australia<br>Language: English<br>
        Population: 5.2 million<br>
        Currency: Australian Dollar<br>
        <img src="https://images.unsplash.com/photo-1524293581917-878a6d017c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            -33.865143,
            151.2099,
            6,
        ],
        [
            `<b><a href="tok.html">Tokyo</a></b><br>
        Country: Japan<br>
        Language: Japanese<br>
        Population: 9.3 million<br>
        Currency: Yen<br>
        <img src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            35.652832,
            139.839478,
            7,
        ],
        [
            `<b><a href="mal.html">Maldives</a></b><br>
        Country: Maldives<br>
        Language: English<br>
        Population: 0.4 million<br>
        Currency: Rufiyah<br>
        <img src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            1.924992,
            73.399658,
            8,
        ],
        [
            `<b><a href="ct.html">Cape Town</a></b><br>
        Country: South Africa<br>
        Language: English<br>
        Population: 0.4 million<br>
        Currency: South African Rand<br>
        <img src="https://images.unsplash.com/photo-1496497243327-9dccd845c35f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" height="150" width="150">`,
            -33.918861,
            18.4233,
            9,
        ],
    ];

    let markerTitle = [
        [`Barcelona`, 41.390205, 2.154007, 1],
        [`Rio De Janiero`, -22.908333, -43.196388, 5],
        [`New York`, 40.73061, -73.935242, 4],
        [`Dublin`, 53.35014, -6.266155, 3],
        [`Stockholm`, 59.334591, 18.06324, 2],
        [`Sydney`, -33.865143, 151.2099, 6],
        [`Tokyo`, 35.652832, 139.839478, 7],
        [`Maldives`, 1.924992, 73.399658, 8],
        [`Cape Town` - 33.918861, 18.4233, 9],
    ];

    let marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            title: markerTitle[i][0]
        });

        google.maps.event.addListener(
            marker,
            "click",
            (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i)
        );
    }
        let currentInfoWindow = null;
        let infowindow = new google.maps.InfoWindow({});
        currentInfoWindow = infowindow;
        google.maps.event.addListenerOnce(currentInfoWindow);
}
      