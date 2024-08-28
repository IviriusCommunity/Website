<script>
        //Imports
              import * as Fluent from "fluent-svelte";
              import "fluent-svelte/theme.css";
      
        //Variables
        let open = true;
        </script>
      
      <!--Head-->
      <svelte:head>
              <title>Ivirius</title>
              <meta name="description" content="Ivirius Community official website"/>
              <meta content="Ivirius Community Community" name="author" />
              <meta content="#6ba4ff" name="theme-color" />
      </svelte:head>
      
      <section class="centered-section-2">
        <Fluent.TextBlock variant="titleLarge" style="text-alignment: left; margin-top: 25px;">Install app package manually</Fluent.TextBlock>
      </section>
      
      <!--Author-->
      <section class="margin-section">
        <section style="display: flex; margin-bottom: -30px;">
                <Fluent.PersonPicture src="https://i.spoo.me/247555" style="width: 30px; height: 30px; margin-right: 15px;"/>
                <Fluent.TextBlock variant="body" style="margin-left: -25px; margin-top: 5px;">Author: Ivirius</Fluent.TextBlock>
                <Fluent.TextBlock variant="body" style="margin-left: 10px; margin-top: 5px; opacity: 0.5;">•</Fluent.TextBlock>
                <Fluent.TextBlock variant="body" style="margin-left: 10px; margin-top: 5px; opacity: 0.5;">July 13, 2024</Fluent.TextBlock>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">In this article, I will show you how to install a UWP app package along with its certificate and dependencies. A UWP package contains all the information required for a UWP, WinUI 3 or Win32 packaged app to install on your system.</Fluent.TextBlock>
        </h2>
        <h2>
                <Fluent.InfoBar style="margin-top: 20px;" severity="attention" title="Tip!" message="If you want to speed up the process, consider downloading our portable certificate installer for MSIX." open>
                        
                <Fluent.Button slot="action" variant="accent" onclick="window.location.href='https://github.com/Ivirius-Main/CertificateInstallerForMSIX/releases/download/Publish/CertificateInstallerForMSIX.exe';">Download Quick Certificate Installer For MSIX</Fluent.Button>
                </Fluent.InfoBar>
        </h2>
        </section>
        <section class="margin-section">
                <section class="content-right">
                        <div>
                                <Fluent.TextBlock variant="body">UWP apps are packaged into bundles that contain all the required dependencies to be installed. When downloading such a bundle online, you might expect it to be easy to install, but it's not always a straightforward task. This article will help you fix the most common problem: missing certificates. When opening a UWP app bundle, you may see this error appear:</Fluent.TextBlock>
                        </div>
                        <img src="https://i.spoo.me/409589" alt="Certificate window"/>
                </section>
        </section>
        <section class="margin-section">
        <section class="centered-section">
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Here's how to properly install a UWP package:</Fluent.TextBlock>
        </h2>
        <h1>
                <Fluent.TextBlock variant="subtitle">Step 1 - Import app certificate</Fluent.TextBlock>
        </h1>     
        <Fluent.TextBlock variant="body">Before you begin the installation of an untrusted Universal Windows Platform (UWP) package, it's crucial to ensure that the app's certificate is properly imported into your system. If the app package comes with a certificate file, this step is necessary to validate the package and allow for a smooth installation. To import the certificate, simply double-click on it. After the window below opens, follow the next steps.</Fluent.TextBlock>
        <br/>
        <br/>
        <Fluent.TextBlock variant="body">Now, click the "Install Certificate..." button. This action will open the Certificate Import Wizard, which will guide you through the process of adding the certificate to your system.</Fluent.TextBlock>
        
        <section>
                <section class="content-right">
                        <div>
                           </div>
        <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000054-7cca57cca6/700/Screenshot%202022-11-30%20131454.webp?ph=57a6227aab" alt="Certificate window"/>
</section>
        </section>
        <section class="centered-section">
                </section>
        <h2>
                </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000056-3f5313f532/700/Screenshot%202022-11-30%20131511.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Make sure to select the "Local Machine" option and click "Next". This ensures that the certificate is installed for all users on the system, granting the app the necessary permissions to run properly.</Fluent.TextBlock>
                <Fluent.InfoBar style="margin-top: 20px;" severity="caution" title="Warning!" message="Requires administrator permissions." open></Fluent.InfoBar>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000060-d95e0d95e2/450/Screenshot%202022-11-30%20131556.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Select "Trusted Root Certification Authorities" to proceed. This step is crucial because it adds the app's certificate to the system's trusted root store, which means that Windows will recognize the certificate as valid and secure for UWP apps. Once you've made this selection, click "OK" to confirm and move forward with the installation process.</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000062-c9aefc9af0/700/Screenshot%202022-11-30%20131619.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Click "Finish" to complete the certificate installation.</Fluent.TextBlock>
        </h2>
        <h1>
                <Fluent.TextBlock variant="subtitle">Step 2 - Install dependencies</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">If the app comes with another package that contains dependencies, you might need to install that one as well. Since these dependencies are mostly Microsoft runtimes, they don't require a certificate.</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://i.spoo.me/881744" alt="Certificate window"/>
        </section>
        <h1>
                <Fluent.TextBlock variant="subtitle">Step 3 - Install the app</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">Now that all the required dependencies have been installed, you can install the app package.</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://i.spoo.me/184923" alt="Certificate window"/>
        </section>
      </section>
      
      <!--Bottom bar-->
      <section style="padding-top: 10px; padding-bottom: 10px; padding-left: 25px; background: var(--fds-solid-background-base); border-top: 1px solid rgba(205, 205, 205, 0.25); display: flex; flex-direction: column; align-items: flex-start;">
        <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
          Partners
        </Fluent.TextBlock>
                <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.spoo.me';" style="margin-top: 10px; margin-bottom: 10px;">spoo.me URL shortener</Fluent.Button>
        <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
          Developers and contributors
        </Fluent.TextBlock>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-top: 10px; margin-bottom: 10px;">Ivirius</Fluent.Button>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">ErrorTek</Fluent.Button>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">TheDevil</Fluent.Button>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">0x5BFA</Fluent.Button>
        <Fluent.Button variant="hyperlink" onclick="window.location.href='https://website-2-sigma.vercel.app/';" style="margin-bottom: 10px;">FlamebladeOmega</Fluent.Button>
        <Fluent.TextBlock variant="bodyStrong" style="margin-top: 10px;">
          Website
        </Fluent.TextBlock>
                <Fluent.Button variant="hyperlink" onclick="window.location.href='https://fluent-svelte.vercel.app';" style="margin-top: 10px; margin-bottom: 10px;">Fluent Svelte</Fluent.Button>
                <Fluent.Button variant="hyperlink" onclick="window.location.href='https://www.vercel.com';">Vercel</Fluent.Button>
                <Fluent.Button variant="hyperlink" onclick="window.location.href='/about';" style="margin-top: 10px; margin-bottom: 10px;">About</Fluent.Button>
                <Fluent.TextBlock variant="body" style="opacity: 0.5; margin-top: 10px; margin-bottom: 10px; margin-right: 25px;">
                  Ivirius Community (2020 - 2024) Official Website - Powered by Vercel and Fluent Svelte
                </Fluent.TextBlock>
      </section>
      
      <!--Styles-->
      <style>
        /*Import theme*/
              @import url("https://unpkg.com/fluent-svelte/theme.css");
      
              /* Some base styles to get things looking right. */
              :global(body)
        {
          /*Background color*/
                      background-color: var(--fds-solid-background-base);
      
          /*Background image*/
          background-image: url("https://i.spoo.me/825520");
      
          /*Background color*/
                      color: var(--fds-text-primary);
              }
      
        /*Centered section*/
        .centered-section
        {
          text-align: center;
          margin: 0 auto;
          padding: 25px;
          max-width: 1250px;
        }
      
:global(img) {
border-radius: 8px;
    max-width: 100%; /* Make sure the image scales down */
    height: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Ensure the image fits within the container */
}

        /*Centered section*/
        .centered-section-2
        {
          text-align: left;
          margin: 0 auto;
          padding: 25px;
          max-width: 1250px;
        }
      
        /*Left aligned centered section*/
        .margin-section
        {
          margin: 0 auto;
          padding: 25px;
          max-width: 1250px;
          text-align: justify;
        }
        
        @media (min-width: 1250px) {
          .centered-section-2 {
            text-align: center;
          }
        }

        
  .content-right {
      max-width: 1500px;
      /* Set the maximum width of the container */
      width: 100%;
      /* Ensures the container takes the full width of its parent */
      display: flex;
      /* Use flexbox layout */
      flex-wrap: wrap;
      /* Allow flex items to wrap to the next line if needed */
      justify-content: space-between;
      /* Distribute flex items evenly with space between them */
  }

  .content-right div {
      flex: 1;
      margin-left: 0px;
      /* Set the maximum width of each image to half of the container width, minus some margin */
      margin-right: 75px;
      /* Set the maximum width of each image to half of the container width, minus some margin */
      margin-top: auto;
      margin-bottom: auto;
      height: auto;
      /* Allow the height to adjust proportionally based on the width */
  }

  .content-right img {
      height: 225px;
      /* Allow the height to adjust proportionally based on the width */
      width: auto;
      margin-bottom: 10px;
      /* Add some bottom margin between images */
      border-radius: 8px;
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
      margin-left: 75px;
      margin-right: 75px;
  }

  @media (max-width: 1000px) {
      .content-right img {
          max-width: 100%;
          /* Set the maximum width of each image to 100% on smaller screens */
          margin-bottom: 10px;
          /* Keep the same bottom margin between images */
      }

      .content-right div {
          max-width: 100%;
          /* Set the maximum width of each image to 100% on smaller screens */
          margin-bottom: 10px;
          /* Keep the same bottom margin between images */
      }

      .content img {
          max-width: 100%;
          /* Set the maximum width of each image to 100% on smaller screens */
          margin-bottom: 10px;
          /* Keep the same bottom margin between images */
          border-radius: 8px;
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
      }
}
      </style>