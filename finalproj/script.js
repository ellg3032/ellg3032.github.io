const north_west = L.marker([41, -109.03]);
const north_east = L.marker([41, -102.05]);
const south_west = L.marker([37, -109.05]);
const south_east = L.marker([37, -102.04]);

const bounds = L.latLngBounds(south_west.getLatLng(), north_east.getLatLng());

var map = L.map("map", {
  maxZoom: 18,
  minZoom: 8,
  maxBounds: bounds,
}).setView([39.7536, -105.000556], 10.5);

const colorado_west_border = L.polyline(
  [south_west.getLatLng(), north_west.getLatLng()],
  { color: "red" }
).addTo(map);
const colorado_north_border = L.polyline(
  [north_west.getLatLng(), north_east.getLatLng()],
  { color: "red" }
).addTo(map);
const colorado_east_border = L.polyline(
  [north_east.getLatLng(), south_east.getLatLng()],
  { color: "red" }
).addTo(map);
const colorado_south_border = L.polyline(
  [south_east.getLatLng(), south_west.getLatLng()],
  { color: "red" }
).addTo(map);
const colorado_borders = [
  colorado_west_border,
  colorado_east_border,
  colorado_north_border,
  colorado_south_border,
];

L.tileLayer(
  "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=34556e721b214cdbbc82835eabaffb66",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

//hiding zones
var hiding_radius;

if (localStorage.getItem("hide_radius")) {
  hiding_radius = localStorage.getItem("hide_radius");
} else {
  hiding_radius = 0.25;
}

function miToMeter(miles) {
  var converted = miles * 1609.344;
  return converted;
}

//union stops

var union_station_ABGN = L.circle([39.753627, -105.00075], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var union_station_rail_plaza = L.circle([39.75538, -105.00307], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});

//a line

var _38th_blake = L.circle([39.770762, -104.973665], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _40th_colo = L.circle([39.776048, -104.942559], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var central_park = L.circle([39.7706377, -104.8916202], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var peoria = L.circle([39.7674618, -104.8504308], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _40th_airport = L.circle([39.7698584, -104.7876666], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _61st_pena = L.circle([39.8069325, -104.7840088], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var DIA = L.circle([39.8468904, -104.6740115], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
//r line - a line

var fitzsimons = L.circle([39.7549514, -104.8405337], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var colfax = L.circle([39.7401938, -104.8269939], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _13th = L.circle([39.7350003, -104.8235767], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _2nd_abilene = L.circle([39.7194498, -104.8256749], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var aurora_metro = L.circle([39.7084866, -104.8190753], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var florida = L.circle([39.689987, -104.8284739], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var iliff = L.circle([39.6733167, -104.8268705], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var nine_mile = L.circle([39.6575427, -104.845125], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var dayton = L.circle([39.6429662, -104.8779868], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var belleview = L.circle([39.6275442, -104.904451], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var orchard = L.circle([39.6135611, -104.8962163], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var arapahoe_at_village_ctr = L.circle([39.6002396, -104.8884968], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var dry_creek = L.circle([39.5788597, -104.8766099], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var county_line = L.circle([39.5617227, -104.8722856], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var lincoln = L.circle([39.54599, -104.8696195], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
//e line - r line

var ball_elitches = L.circle([39.7486, -105.0097924], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var mile_high = L.circle([39.7434489, -105.013231], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var auraria_west = L.circle([39.7416835, -105.0108331], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _10th_osage = L.circle([39.7317835, -105.0055592], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var alameda = L.circle([39.7084185, -104.9929428], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var i_25_broadway = L.circle([39.7017182, -104.9902062], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var louisiana_pearl = L.circle([39.6928352, -104.9782717], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var du = L.circle([39.6852598, -104.9647836], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var colorado = L.circle([39.6796167, -104.9376999], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var yale = L.circle([39.6686338, -104.9270838], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var southmoor = L.circle([39.6485586, -104.9162578], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var sky_ridge = L.circle([39.5321228, -104.8702149], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var lone_tree_ctr = L.circle([39.5276206, -104.8632137], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var ridgegate = L.circle([39.520549, -104.8654621], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
//l line

var _30th_downing = L.circle([39.7589677, -104.9735229], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _27th_welton = L.circle([39.7552448, -104.9773585], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _25th_welton = L.circle([39.7533301, -104.9798469], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _20th_welton = L.circle([39.7479236, -104.9868958], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _18th_california = L.circle([39.7466698, -104.9901527], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _16th_california = L.circle([39.7448132, -104.9925345], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _18th_stout = L.circle([39.7479453, -104.9905006], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _16th_stout = L.circle([39.746064, -104.992916], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
//d line

var convention_ctr = L.circle([39.7439351, -104.9961172], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var colfax_auraria = L.circle([39.7403047, -105.0020671], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var evans = L.circle([39.6776721, -104.9928516], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var englewood = L.circle([39.6555784, -104.9999059], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var oxford_cty_o_sheridan = L.circle([39.6429533, -105.0048343], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var littleton_dtwn = L.circle([39.6119644, -105.0148725], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var littleton_mineral = L.circle([39.5801859, -105.0249838], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
//w line - e line

var decatur_federal = L.circle([39.7372975, -105.0239753], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var knox = L.circle([39.7356769, -105.0328582], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var perry = L.circle([39.7347404, -105.0400097], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var sheridan = L.circle([39.7351328, -105.0532154], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var lamar = L.circle([39.7366752, -105.0666445], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var lakewood_wadsworth = L.circle([39.7366917, -105.0814289], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var garrison = L.circle([39.7365674, -105.0994794], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var oak = L.circle([39.7372852, -105.1199179], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var federal_ctr = L.circle([39.7199708, -105.1289946], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var red_rocks_college = L.circle([39.7250788, -105.1521362], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var jeffco_govt_ctr_golden = L.circle([39.7265048, -105.2013699], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
//b line

var _41st_fox = L.circle([39.7732146, -104.9969279], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var pecos_junction = L.circle([39.8051429, -105.0052059], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var westminster = L.circle([39.8227593, -105.0292002], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
//g line - b line

var clear_creek_federal = L.circle([39.8039365, -105.0234234], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _60th_sheridan = L.circle([39.8036727, -105.0492639], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var olde_town_arvada = L.circle([39.7990275, -105.0802701], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var arvada_ridge = L.circle([39.7925034, -105.111726], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var wheat_ridge_ward_road = L.circle([39.7880234, -105.1329863], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
//n line

var eastlake_124th = L.circle([39.9229265, -104.9620773], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var northglenn_112th = L.circle([39.9026003, -104.9601233], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var thornton_crossroads_104th = L.circle([39.8821404, -104.9423973], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var original_thornton_88th = L.circle([39.8587466, -104.953112], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var commerce_city_72nd = L.circle([39.8262984, -104.9430537], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});
var _48th_brighton_national_western = L.circle([39.7847704, -104.9683778], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0,
  radius: miToMeter(hiding_radius),
});

let hiding_zones = [
  union_station_ABGN,
  union_station_rail_plaza,
  _38th_blake,
  _40th_colo,
  central_park,
  peoria,
  _40th_airport,
  _61st_pena,
  DIA,
  fitzsimons,
  colfax,
  _13th,
  _2nd_abilene,
  aurora_metro,
  florida,
  iliff,
  nine_mile,
  dayton,
  belleview,
  orchard,
  arapahoe_at_village_ctr,
  dry_creek,
  county_line,
  lincoln,
  sky_ridge,
  lone_tree_ctr,
  ridgegate,
  southmoor,
  yale,
  colorado,
  du,
  louisiana_pearl,
  i_25_broadway,
  alameda,
  _10th_osage,
  colfax_auraria,
  convention_ctr,
  _16th_california,
  _16th_stout,
  _18th_california,
  _18th_stout,
  _20th_welton,
  _25th_welton,
  _27th_welton,
  _30th_downing,
  evans,
  englewood,
  oxford_cty_o_sheridan,
  littleton_dtwn,
  littleton_mineral,
  ball_elitches,
  mile_high,
  auraria_west,
  decatur_federal,
  knox,
  perry,
  sheridan,
  lamar,
  lakewood_wadsworth,
  garrison,
  oak,
  federal_ctr,
  red_rocks_college,
  jeffco_govt_ctr_golden,
  _41st_fox,
  pecos_junction,
  westminster,
  clear_creek_federal,
  _60th_sheridan,
  olde_town_arvada,
  arvada_ridge,
  wheat_ridge_ward_road,
  _48th_brighton_national_western,
  commerce_city_72nd,
  original_thornton_88th,
  thornton_crossroads_104th,
  northglenn_112th,
  eastlake_124th,
];
function onMapClick(e) {
  for (const x of hiding_zones) {
    if (map.distance(e.latlng, x.getLatLng()) < 30) {
      map.addLayer(x);
    } else {
      map.removeLayer(x);
    }
  }
}

map.on("click", onMapClick);

function bearingPointDestination(point, distance, bearing, radius = 6371e3) {
  let φ1 = point.lat * (Math.PI / 180);
  let λ1 = point.lng * (Math.PI / 180);
  const brng = bearing * (Math.PI / 180);
  const φ2 = Math.asin(
    Math.sin(φ1) * Math.cos(distance / radius) +
      Math.cos(φ1) * Math.sin(distance / radius) * Math.cos(brng)
  );
  const λ2 =
    λ1 +
    Math.atan2(
      Math.sin(brng) * Math.sin(distance / radius) * Math.cos(φ1),
      Math.cos(distance / radius) - Math.sin(φ1) * Math.sin(φ2)
    );

  const lat = φ2 * (180 / Math.PI);
  const lon = λ2 * (180 / Math.PI);

  return [lat, lon];
}

function lineSegmentBearing(line_start, line_end) {
  const φ1 = line_start.lat * (Math.PI / 180);
  const λ1 = line_start.lng * (Math.PI / 180);
  const φ2 = line_end.lat * (Math.PI / 180);
  const λ2 = line_end.lng * (Math.PI / 180);
  const y = Math.sin(λ2 - λ1) * Math.cos(φ2);
  const x =
    Math.cos(φ1) * Math.sin(φ2) -
    Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);
  const θ = Math.atan2(y, x);
  const brng = ((θ * 180) / Math.PI + 360) % 360; // in degrees
  return brng;
}

function thermometer() {
  var thermo_start_lat = prompt("Thermometer Latitude:");
  var thermo_start_lng = prompt("Thermometer Longitude:");
  var thermo_start = L.marker([thermo_start_lat, -1 * thermo_start_lng]).addTo(
    map
  );
  var thermo_radius = prompt("Thermometer Radius:");
  var thermo_radius_circle = L.circle(
    [thermo_start_lat, -1 * thermo_start_lng],
    {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0,
      radius: thermo_radius * 1609.3448,
    }
  ).addTo(map);
  const marker_start = bearingPointDestination(
    thermo_start.getLatLng(),
    thermo_radius * 1609.3448,
    0
  );
  var thermo_end_marker = L.marker(marker_start, { draggable: "true" }).addTo(
    map
  );
  var thermo_line = L.polyline(
    [thermo_start.getLatLng(), thermo_end_marker.getLatLng()],
    { color: "red" }
  ).addTo(map);
  var thermo_midpoint = L.marker([39.74773, 104.96748]).addTo(map);
  var perp_line_1 = L.polyline(
    [thermo_start.getLatLng(), thermo_end_marker.getLatLng()],
    { color: "red" }
  ).addTo(map);
  var perp_line_2 = L.polyline(
    [thermo_start.getLatLng(), thermo_end_marker.getLatLng()],
    { color: "red" }
  ).addTo(map);
  var confirm_button = document.getElementById("confirm_button");
  confirm_button.style = "display: block";
  var radar_button = document.getElementById("radar_button");
  var rule_out_button = document.getElementById("hide_radius");
  radar_button.style.top = "270px";
  rule_out_button.style.top = "330px";
  var end_point_1 = L.marker([39, 105]);
  var end_point_2 = L.marker([39, 105]);
  thermo_end_marker.on("drag", function (e) {
    var marker = e.target;
    var bearing = lineSegmentBearing(
      thermo_start.getLatLng(),
      marker.getLatLng()
    );
    var new_position = bearingPointDestination(
      thermo_start.getLatLng(),
      thermo_radius * 1609.3448,
      bearing
    );
    marker.setLatLng(new_position);
    thermo_line.setLatLngs([thermo_start.getLatLng(), new_position]);
    thermo_midpoint.setLatLng(
      midpoint(marker.getLatLng(), thermo_start.getLatLng())
    );
    const brng = lineSegmentBearing(
      thermo_midpoint.getLatLng(),
      marker.getLatLng()
    );
    const perp_brng = brng + 90;
    var end_point_1_latlng = bearingPointDestination(
      thermo_midpoint.getLatLng(),
      400000,
      perp_brng
    );
    var end_point_2_latlng = bearingPointDestination(
      thermo_midpoint.getLatLng(),
      400000,
      perp_brng - 180
    );
    end_point_1.setLatLng(end_point_1_latlng);
    end_point_2.setLatLng(end_point_2_latlng);
    const perp_line_latlngs_1 = [
      thermo_midpoint.getLatLng(),
      end_point_1_latlng,
    ];
    perp_line_1.setLatLngs(perp_line_latlngs_1);
    const perp_line_latlngs_2 = [
      thermo_midpoint.getLatLng(),
      end_point_2_latlng,
    ];
    perp_line_2.setLatLngs(perp_line_latlngs_2);
  });
  confirm_button.addEventListener("click", function () {
    var polygon_latlngs = [
      end_point_1.getLatLng(),
      thermo_midpoint.getLatLng(),
      end_point_2.getLatLng(),
    ];
    var warmer_colder = prompt("Warmer or Colder?");
    if (warmer_colder == "Colder") {
      var bearing = lineSegmentBearing(
        thermo_midpoint.getLatLng(),
        thermo_end_marker.getLatLng()
      );
      var new_point_1 = bearingPointDestination(
        end_point_1.getLatLng(),
        400000,
        bearing
      );
      var new_point_2 = bearingPointDestination(
        end_point_2.getLatLng(),
        400000,
        bearing
      );
      polygon_latlngs.push(new_point_2);
      polygon_latlngs.push(new_point_1);
    } else {
      var bearing = lineSegmentBearing(
        thermo_midpoint.getLatLng(),
        thermo_start.getLatLng()
      );
      var new_point_1 = bearingPointDestination(
        end_point_1.getLatLng(),
        400000,
        bearing
      );
      var new_point_2 = bearingPointDestination(
        end_point_2.getLatLng(),
        400000,
        bearing
      );
      polygon_latlngs.push(new_point_2);
      polygon_latlngs.push(new_point_1);
    }
    var wrong_polygon = L.polygon(polygon_latlngs, {
      color: "gray",
      fillOpacity: 0.6,
    }).addTo(map);
    confirm_button.style = "display: none";
    radar_button.style.top = "210px";
    rule_out_button.style.top = "270px";
    map.removeLayer(thermo_start);
    map.removeLayer(thermo_radius_circle);
    map.removeLayer(perp_line_1);
    map.removeLayer(perp_line_2);
    map.removeLayer(thermo_line);
    map.removeLayer(thermo_end_marker);
    map.removeLayer(thermo_midpoint);
  });
}

function radar() {
  var radar_center_lat = prompt("Radar Start Latitude:");
  var radar_center_lang = -1 * prompt("Radar Start Longitude:");
  var radar_radius = prompt("Radar Radius:");
  var hit = prompt("Did it hit? (true or false)");
  var radar_center = L.marker([radar_center_lat, radar_center_lang]);
  if (hit == "true") {
    var circle_latlngs = [];
    for (let i = -180; i < 181; i++) {
      circle_latlngs[i + 180] = bearingPointDestination(
        radar_center.getLatLng(),
        radar_radius * 1609.3448,
        i
      );
    }
    var latlngs = [
      [
        [37, -109.05],
        [41, -109.03],
        [41, -102.05],
        [37, -102.04],
      ], // Colorado Border
      circle_latlngs, // hole
    ];
    let wrong_zone = L.polygon(latlngs, {
      color: "gray",
      fillOpacity: 0.6,
    }).addTo(map);
  } else {
    let wrong_zone = L.circle([radar_center_lat, radar_center_lang], {
      color: "gray",
      fillColor: "gray",
      fillOpacity: 0.6,
      radius: radar_radius * 1609.3448,
    }).addTo(map);
  }
}

function midpoint(point_1, point_2) {
  let φ1 = point_1.lat * (Math.PI / 180);
  let λ1 = point_1.lng * (Math.PI / 180);
  let φ2 = point_2.lat * (Math.PI / 180);
  let λ2 = point_2.lng * (Math.PI / 180);
  const Bx = Math.cos(φ2) * Math.cos(λ2 - λ1);
  const By = Math.cos(φ2) * Math.sin(λ2 - λ1);
  const φ3 = Math.atan2(
    Math.sin(φ1) + Math.sin(φ2),
    Math.sqrt((Math.cos(φ1) + Bx) * (Math.cos(φ1) + Bx) + By * By)
  );
  const λ3 = λ1 + Math.atan2(By, Math.cos(φ1) + Bx);
  const midpoint_lat = φ3 * (180 / Math.PI);
  const midpoint_lang = λ3 * (180 / Math.PI);
  return [midpoint_lat, midpoint_lang];
}

function changeHideRadius() {
  const hideradiusbtn = document.getElementById("hide_radius");
  if (hiding_radius == 0.25) {
    hiding_radius = 0.5;
    localStorage.setItem("hide_radius", 0.5);
    hideradiusbtn.innerText = "Hiding Radius: 0.5 Miles";
  } else if (hiding_radius == 0.5) {
    hiding_radius = 0.25;
    localStorage.setItem("hide_radius", 0.25);
    hideradiusbtn.innerText = "Hiding Radius: 0.25 Miles";
  }
  for (x of hiding_zones) {
    console.log(x["options"]["radius"]);
    x.setRadius(miToMeter(hiding_radius));
    console.log(x["options"]["radius"]);
  }
}
