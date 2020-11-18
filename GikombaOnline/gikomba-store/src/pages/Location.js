import React, { Component } from 'react'

export class Location extends Component {
    render() {
        return (
            <main class=" m-0 p-0">
  <div class="container-fluid m-0 p-0">

    <!--Google map-->
    <div id="map-container-google-4" class="z-depth-1-half map-container-4" style="height: 500px">
      <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
        style="border:0" allowfullscreen></iframe>
    </div>

  </div>
</main>
        )
    }
}

export default Location