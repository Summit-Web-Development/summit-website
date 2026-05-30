"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function ProjectMap() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <div style={{ height: "500px", width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--navy-border)" }}>
      <MapContainer 
        center={[39.8283, -98.5795]} 
        zoom={4} 
        style={{ height: "100%", width: "100%", background: "#0F1E35" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {projects.map((project) => (
          <Marker key={project.id} position={project.coordinates}>
            <Popup>
              <div style={{ padding: "0.5rem" }}>
                <strong style={{ display: "block", fontSize: "1.1rem", marginBottom: "0.25rem", color: "#333" }}>{project.name}</strong>
                <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "0.5rem" }}>{project.industry} | {project.location}</div>
                <div style={{ fontWeight: "bold", color: "#0B2545", marginBottom: "0.5rem" }}>{project.results}</div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: "#4F7EFF", textDecoration: "none", fontWeight: "bold" }}>Visit Website →</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
