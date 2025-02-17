<script>
        //Imports
              import * as Fluent from "fluent-svelte";
              import "fluent-svelte/theme.css";
      
      </script>
      
      <!--Head-->
      <svelte:head>
              <title>Ivirius Community</title>
              <meta name="description" content="Ivirius Community official website"/>
              <meta content="Ivirius Community" name="author" />
              <meta content="#6ba4ff" name="theme-color" />
      
          <meta property="og:image" content="https://ivirius.com/homepageheader.png" />
          <meta property="og:image:alt" content="Ivirius Community" />
          <meta property="og:image:type" content="image/png" />
      </svelte:head>
      <header class="main-header">
              <div class="header-content">
                  <!-- Left Side (Title, Subtitle, Buttons) -->
                  <div class="header-left">
                      <h1 class="header-title">Rebound v0.1.0</h1>
                      <p class="header-subtitle">The best of Rebound in a brand new release.</p>
                      <div class="header-buttons">
                          <Fluent.Button variant="accent" disabled>Coming Soon</Fluent.Button>
                          <Fluent.Button variant="hyperlink">Read more</Fluent.Button>
                      </div>
                  </div>
                  
                  <!-- Right Side (Image) -->
                  <div class="header-right">
                      <img src="./homepageheader.png" alt="Main Image" class="header-image"/>
                  </div>
              </div>
          </header>
          <h1 style="display: flex; justify-content: center; font-size: 40px; margin-top: 50px;">Welcome!</h1>
          <p style="display: flex; justify-content: center; text-align: center; font-size: 16px; margin: 0 25px 30px 25px;">
              Learn more about our products, community, and the people that help shape them!
          </p>
          
          <div class="cards-container">
              <div class="card">
                  <img src="./homepageheader.png" alt="Card Image" class="card-image">
                  <div class="card-content">
                      <div>
                          <h2 class="card-title">Ivirius Text Editor</h2>
                          <p class="card-description">The #1 WinUI WordPad replacement in the Microsoft Store. Keep your documents updated with autosave, multitask with tabs, use Windows voice typing, view your document in dark mode, and more!</p>
                      </div>
                      <div class="card-footer">
                              <Fluent.Button variant="accent">Download</Fluent.Button>
                              <Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
                      </div>
                  </div>
              </div>
              <div class="card">
                  <img src="./homepageheader.png" alt="Card Image" class="card-image">
                  <div class="card-content">
                      <div>
                          <h2 class="card-title">Ivirius Text Editor Plus</h2>
                          <p class="card-description">The best WinUI WordPad replacement with advanced features. Draw and insert tables, write with generative AI, apply stunning themes, manage your workflow with the homepage, customize the layout as you desire, use vertical tabs and ribbon, and so much more!</p>
                      </div>
                      <div class="card-footer">
                              <Fluent.Button variant="accent">Buy for $1.09</Fluent.Button>
                              <Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
                      </div>
                  </div>
              </div>
              <div class="card">
                  <img src="./homepageheader.png" alt="Card Image" class="card-image">
                  <div class="card-content">
                      <div>
                          <h2 class="card-title">Rebound</h2>
                          <p class="card-description">Make your Windows truly consistent with Rebound. The first safe FOSS Windows mod in the Microsoft Store with WinUI 3 applets to replace every deprecated Windows tool. Featuring apps like Files, Ambie, Character Map UWP, Lively Wallpaper, Wino Mail, and so many others!</p>
                      </div>
                      <div class="card-footer">
                              <Fluent.Button variant="accent" disabled>Download</Fluent.Button>
                              <Fluent.Button>Contribute</Fluent.Button>
                              <Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
                      </div>
                  </div>
              </div>
              <div class="card">
                  <img src="./homepageheader.png" alt="Card Image" class="card-image">
                  <div class="card-content">
                      <div>
                          <h2 class="card-title">CubeKit</h2>
                          <p class="card-description">Collaboration project with FireCube and Lamparter: the best toolkit for WinUI apps featuring an XAML title bar, the popular GlowUI library, and a lot of useful helpers.</p>
                      </div>
                      <div class="card-footer">
                              <Fluent.Button variant="accent">NuGet Gallery</Fluent.Button>
                              <Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
                      </div>
                  </div>
              </div>
              <div class="card">
                  <img src="./homepageheader.png" alt="Card Image" class="card-image">
                  <div class="card-content">
                      <div>
                          <h2 class="card-title">Discord Server</h2>
                          <p class="card-description">Get early access to apps, talk to community members and project developers, ask questions, contribute, and learn more about Windows development!</p>
                      </div>
                      <div class="card-footer">
                              <Fluent.Button variant="accent">Join</Fluent.Button>
                              <Fluent.Flyout>
                                      <Fluent.Button variant="hyperlink">Affiliated servers</Fluent.Button>
                                      <svelte:fragment slot="flyout">
                                              <Fluent.Button variant="hyperlink">Developer Sanctuary</Fluent.Button>
                                              <Fluent.Button variant="hyperlink">Windows Customization Hub</Fluent.Button>
                                      </svelte:fragment>
                              </Fluent.Flyout>
                      </div>
                  </div>
              </div>
          
              <!-- Add more cards as needed -->
          </div>
          
      <!--Styles-->
      <style>
        /*Import theme*/
              @import url("https://unpkg.com/fluent-svelte/theme.css");
      
              /* Some base styles to get things looking right. */
              :global(body)
        {
          /*Background color*/
                      background-color: var(--fds-solid-background-base);
      
          /*Background color*/
                      color: var(--fds-text-primary);
              }
      
        .main-header {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--fds-control-fill-default);
      }
      
      .header-content {
          display: flex;
          justify-content: space-between;
          width: 100%;
      }
      
      .header-left {
          flex: 1;
          max-width: 50%;
          align-content: center;
          margin-left: 50px;
      }
      
      .header-title {
          font-size: 2.5rem;
          margin-bottom: -10px;
      }
      
      .header-subtitle {
          font-size: 1.25rem;
          margin-bottom: 40px;
      }
      
      .header-buttons {
          display: flex;
          gap: 15px;
      }
      
      .header-right {
          flex: 1;
          max-width: 50%; /* Ensures it remains 50% */
          height: 600px; /* Max height */
          position: relative; /* Needed for proper image containment */
          overflow: hidden; /* Prevents any overflow */
      }
      
      .header-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
      }
      
      /* Responsiveness: Keep 50/50 ratio and stack when smaller screen */
      @media (max-width: 768px) {
          .header-content {
              flex-direction: column;
              align-items: center;
              text-align: center;
          }
      
          .header-left {
              max-width: 100%;
              margin-bottom: 20px;
              margin-left: 0px;
              align-items: center;
              text-align: center;
          }
      
          .header-buttons {
              align-items: center;
          display: flex;
          justify-content: center;
          margin-top: -20px;
          gap: 15px;
      }
      
          .header-right {
              max-width: 100%;
              position: relative;
              height: 300px; /* Optional: Adjust this value based on your design needs */
          }
      
          .header-image {
              object-fit: cover;
              width: 100%;
              height: 100%;
          }
      }
      
      .cards-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center; /* Center cards horizontally */
          align-items: center; /* Align cards vertically */
          padding: 20px;
      }
      
      .card {
          width: 500px;
          height: 425px;
          display: flex;
          flex-direction: column;
          border-radius: 6px;
          border-width: 1px;
          border-style: solid;
          border-color: var(--fds-card-stroke-default);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          background: var(--fds-control-fill-default);
      }
      
      .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
      }
      
      .card-content {
          flex: 1;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }
      
      .card-title {
              margin-top: -4px;
          font-size: 1.5em;
          font-weight: bold;
      }
      
      .card-description {
          flex-grow: 1;
          margin: 10px 0;
      }
      
      .card-footer {
              align-self: stretch;
               background: var(--fds-control-fill-disabled); 
               margin: -16px; 
               padding: 16px;
               gap: 8px;
          display: flex; /* Enables flexbox */
          justify-content: flex-end; /* Aligns content to the right */
      }
      
      
      </style>