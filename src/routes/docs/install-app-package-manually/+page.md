<script>
        //Imports
        import * as Fluent from "fluent-svelte";
        import "fluent-svelte/theme.css";
      
        //Variables
        let open = true;
</script>
      
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

In this article, I will show you how to install a UWP app package along with its certificate and dependencies. A UWP package contains all the information required for a UWP, WinUI 3 or Win32 packaged app to install on your system.

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" severity="attention" title="Tip!" message="If you want to speed up the process, consider downloading our portable certificate    installer for MSIX." open>
        <Fluent.Button slot="action" variant="accent" onclick="window.location.href='https://github.com/Ivirius-Main/CertificateInstallerForMSIX/releases/download/Publish/CertificateInstallerForMSIX.exe';">Download the Certificate Installer For MSIX</Fluent.Button>
</Fluent.InfoBar>

UWP apps are packaged into bundles that contain all the required dependencies to be installed. When downloading such a bundle online, you might expect it to be easy to install, but it's not always a straightforward task. This article will help you fix the most common problem: missing certificates. When opening a UWP app bundle, you may see this error appear:

<section class="centered-section">
        <img src="https://i.spoo.me/287069" alt="Certificate window"/>
</section>

Here's how to properly install a UWP package:

# Method 1 - Using the Certificate Installer For MSIX

### Step 1 - Download the <a href="https://google.com">Certificate Installer for MSIX</a>

### Step 2 - Open the program and navigate to the certificate file

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" severity="caution" title="Warning!" message="Requires administrator permissions." open></Fluent.InfoBar>

<section class="centered-section">
        <img src="https://i.spoo.me/751928"/>
</section> 

### Step 3 - Press install

If the certificate has been succesfully installed, the window will close automatically. If the certificate needs a password to be installed, please contact the developer and ask them to give you the password.

# Method 2 - Manual installation

### Step 1 - Import app certificate

Before you begin the installation of an untrusted Universal Windows Platform (UWP) package, it's crucial to ensure that the app's certificate is properly imported into your system. If the app package comes with a certificate file, this step is necessary to validate the package and allow for a smooth installation. To import the certificate, simply double-click on it. After the window below opens, follow the next steps.

<section class="centered-section">
        <img src="https://i.spoo.me/979956"/>
</section> 

Now, click the "Install Certificate..." button. This action will open the Certificate Import Wizard, which will guide you through the process of adding the certificate to your system.

<section class="centered-section">
        <img src="https://i.spoo.me/852685"/>
</section> 

Make sure to select the "Local Machine" option and click "Next". This ensures that the certificate is installed for all users on the system, granting the app the necessary permissions to run properly.

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" severity="caution" title="Warning!" message="Requires administrator permissions." open></Fluent.InfoBar>
      
<section class="centered-section">
        <img src="https://i.spoo.me/443430"/>
</section> 
  
Select "Trusted Root Certification Authorities" to proceed. This step is crucial because it adds the app's certificate to the system's trusted root store, which means that Windows will recognize the certificate as valid and secure for UWP apps. Once you've made this selection, click "OK" to confirm and move forward with the installation process.

<section class="centered-section">
        <img src="https://i.spoo.me/541594"/>
</section> 
  
Click "Finish" to proceed.

### Step 2 - Install dependencies

If the app comes with another package that contains dependencies, you might need to install that one as well. Since these dependencies are mostly Microsoft runtimes, they don't require a certificate.

<section class="centered-section">
        <img src="https://i.spoo.me/831789"/>
</section> 

### Step 3 - Install the app

Now that all the required dependencies have been installed, you can install the app package.

<section class="centered-section">
        <img src="https://i.spoo.me/311777"/>
</section>
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
          max-width: 750px;
          text-align: justify;
        }
        
        @media (min-width: 600px) {
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

  a {
    color: var(--fds-accent-default);         /* Text color */
    text-decoration: none;  /* Removes underline */
    font-size: 16px;        /* Font size */
    font-family: Arial, sans-serif;  /* Font family */
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