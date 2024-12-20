'use strict';

import { elements } from "./modules/heimdall.js";

const main = () => {
    var map = L.map('map', {
        attributionControl: false,
        zoomControl: false,
    }).setView([48.8553633, 2.3449551], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.control.attribution({
        position: 'topright'
    }).addTo(map);
    
    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    map.on('mousemove', (e) => {
        var lat = e.latlng.lat.toString().slice(0, 10);
        var lng = e.latlng.lng.toString().slice(0, 10);
        elements.coordinates.innerText = `${lat}, ${lng}`;
    });

    let isResizing = false;

    elements.appResize.addEventListener("mousedown", (e) => {
        isResizing = true;

        const startWidth = elements.app.offsetWidth;
        const startX = e.clientX;

        const onMouseMove = (event) => {
            if (!isResizing) return;

            const newWidth = startWidth + (event.clientX - startX);

            elements.app.style.width = `${newWidth}px`;
        };

        const onMouseUp = () => {
            isResizing = false;
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    })
};

window.onload = main;
