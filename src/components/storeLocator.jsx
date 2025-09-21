/* StoreLocator.jsx
   * combina geolib para distancias (lógica)
   * y react-leaflet para renderizar mapa (visual)
*/
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getDistance } from "geolib";

import storesData from "../data/stores.json";
import { useGeolocation } from "../hooks/useGeolocation";

// --- Fix de iconos (Leaflet necesita esto para que se vean los pines) ---
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
    iconRetinalrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl:markerShadow,
    iconSize:[25,41],
    iconAnchor:[12,41],
});
L.marker.prototype.options.icon=DefaultIcon;
