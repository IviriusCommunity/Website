<script>
        //Imports
        import * as Fluent from "fluent-svelte";
        import "fluent-svelte/theme.css";
      
        //Variables
        let open = true;

  import Highlight, { LineNumbers } from "svelte-highlight";
  // direct import (recommended)
  import csharp from "svelte-highlight/languages/csharp";
  import "svelte-highlight/styles/onedark.css";

    let code = `-Command "Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'SELECTED-SYSTEM 1' ) -Verb RunAs"`;
    let code1 = `-Command "Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'SELECTED 1' ) -Verb RunAs"`;
    let code2 = `-Command "Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'OPTIMIZEALL-SYSTEM' ) -Verb RunAs"`;
    let code3 = `-Command "Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'OPTIMIZEALL' ) -Verb RunAs"`;
</script>
      
<section class="centered-section-2">
        <Fluent.TextBlock variant="titleLarge" style="text-alignment: left; margin-top: 25px;">Defragment and Optimize Drives</Fluent.TextBlock>
</section>
      
<!--Author-->
<section class="margin-section">
<section style="display: flex; margin-bottom: -30px;">
        <Fluent.PersonPicture src="https://i.spoo.me/247555" style="width: 30px; height: 30px; margin-right: 15px;"/>
        <Fluent.TextBlock variant="body" style="margin-left: -25px; margin-top: 5px;">Author: Ivirius</Fluent.TextBlock>
        <Fluent.TextBlock variant="body" style="margin-left: 10px; margin-top: 5px; opacity: 0.5;">•</Fluent.TextBlock>
        <Fluent.TextBlock variant="body" style="margin-left: 10px; margin-top: 5px; opacity: 0.5;">September 29, 2024</Fluent.TextBlock>
</section>

Rebound 11 comes with an improved Defragment and Optimize Drives app. It has WinUI 3, dark mode, "Optimize All" feature, and friendly names for system partitions. Here's how to use this app to its maximum potential.

<section class="centered-section">
        <img src="https://i.spoo.me/162282" alt="Certificate window"/>
</section>

---

# Drive optimization

To optimize a drive, simply select it and press "Optimize". You can also select multiple drives at once using the check boxes on the left.

In order to optimize all drives, go to the arrow on the "Optimize" button and press "Optimize all".

---

# View system partitions

To view all system partitions, simply toggle on the "Advanced" option. 

---

# Scheduled optimization

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" severity="caution" title="Warning!" message="Rebound Defragment and Optimize Drives will replace the default Windows scheduled optimization task's arguments, making the Windows Defragment and Optimize Drives app prompt for task recovery. This is because Rebound 11 uses newer and safer methods for this automated task." open></Fluent.InfoBar>

The scheduled optimization feature will attempt to optimize the selected drives at certain time periods. This option can easily be toggled on or off by going to the "Scheduled optimization" bar at the bottom of the window and pressing the button on the right.

---

# Analyze

This feature will be implemented soon. For now, all the button can do is to check Windows logs for the last optimization that was run on the selected drive.

---

# API Calls

Rebound Defragment and Optimize Drives also supports command line arguments, but they're different from what you might be used to in defrag.exe

---

## Optimize selected drives
With system partitions enabled
  <div style="border: 1px solid rgba(128, 128, 128, 0.5);">
<Highlight language={csharp} code="-Command &quot;Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'SELECTED-SYSTEM 1' ) -Verb RunAs&quot;" let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>
  </div>


With system partitions disabled
  <div style="border: 1px solid rgba(128, 128, 128, 0.5);">
<Highlight language={csharp} code="-Command &quot;Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'SELECTED 1' ) -Verb RunAs&quot;" let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>
  </div>

# 

---

## Optimize all drives
With system partitions enabled
  <div style="border: 1px solid rgba(128, 128, 128, 0.5);">
<Highlight language={csharp} code="-Command &quot;Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'OPTIMIZEALL-SYSTEM' ) -Verb RunAs&quot;" let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>
  </div>


With system partitions disabled
  <div style="border: 1px solid rgba(128, 128, 128, 0.5);">
<Highlight language={csharp} code="-Command &quot;Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'OPTIMIZEALL' ) -Verb RunAs&quot;" let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>
  </div>

# 

---

## Optimize all drives and close
With system partitions enabled
  <div style="border: 1px solid rgba(128, 128, 128, 0.5);">
<Highlight language={csharp} code="-Command &quot;Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'OPTIMIZEALLANDCLOSE-SYSTEM' ) -Verb RunAs&quot;" let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>
  </div>


With system partitions disabled
  <div style="border: 1px solid rgba(128, 128, 128, 0.5);">
<Highlight language={csharp} code="-Command &quot;Start-Process 'shell:AppsFolder\\54d2a63e-e616-4159-bed6-c776b8a816e1_yejd587sfa94t' -ArgumentList @( 'OPTIMIZEALLANDCLOSE' ) -Verb RunAs&quot;" let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>
  </div>
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