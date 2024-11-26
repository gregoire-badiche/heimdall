# Heimdall

A collection of geolocation tools enabling the integration of different sources of information to identify and locate places on a map.

## Overall description

The goal of this project is to regroup a set of OSINT Geotools to aggregate localisation data, bearings, distances, etc. in order to find and localise event and places in a webapp.

Typical usage : 
- I have the path of a plane and of a boat, I want to find where they both crossed.
- From this location, I want to find the point located NW 3km.
- From here the place that I search is located at 6km, and from the previous point it was at 8km (triangulation)

This tool will integrate way of automatically gathering and parsing geo data, and have multiple integration (Flightradar, Overpassturbo, Marinetraffic, etc.)
