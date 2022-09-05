import React from "react";

class Map extends React.Component {
  render() {
    return (
      <section className="section">
        <div
          className="google-map-container"
          data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
          data-zoom={5}
          data-icon="images/gmap_marker.png"
          data-icon-active="images/gmap_marker_active.png"
          data-styles="[]"
        >
          <div className="google-map" />
          <ul className="google-map-markers">
            <li
              data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
              data-description="9870 St Vincent Place, Glasgow"
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Map;
