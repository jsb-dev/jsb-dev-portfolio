<template>
    <div class="css-page">
      <h1>CSS Responsive Design</h1>
      
      <!-- Responsive Design Features Section -->
      <section>
        <h2>Responsive Design Features</h2>
        <ul>
          <li>Fluid Layouts: Using percentages instead of fixed units.</li>
          <li>Flexible Images: Scaling images to save bandwidth and fit their containing elements.</li>
          <li>Media Queries: Applying styles based on device characteristics.</li>
          <li>Viewport: Setting the viewport to scale and control the layout on all browsing devices.</li>
          <li>Responsive Typography: Adjusting font sizes based on the viewing environment.</li>
        </ul>
      </section>
      
      <!-- Media Queries Section -->
      <section>
        <h2>Media Queries</h2>
        <p>
          Media queries enable the conditional application of styles based on the device characteristics, such as its width, height, orientation, or even resolution.
        </p>
        <code>
          @media only screen and (max-width: 600px) {
            body {
              background-color: lightblue;
            }
          }
        </code>
      </section>
      
      <!-- Responsive Layouts Section -->
      <section>
        <h2>Responsive Layouts</h2>
  
        <!-- Grid -->
        <h3>Grid</h3>
        <p>
          CSS Grid layout allows for creating complex responsive designs with a clean and concise syntax.
        </p>
        <code>
          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
        </code>
  
        <!-- Flexbox -->
        <h3>Flexbox</h3>
        <p>
          Flexbox is a layout model that allows items in a container to be dynamically arranged depending on screen size.
        </p>
        <code>
          .flex-container {
            display: flex;
            flex-wrap: wrap;
          }
        </code>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CSSPage'
  }
  </script>
  
  <style scoped>
  .css-page {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  h1, h2, h3 {
    color: #333;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  code {
    background-color: #f5f5f5;
    padding: 5px 10px;
    display: block;
    margin: 10px 0;
  }
  </style>
  