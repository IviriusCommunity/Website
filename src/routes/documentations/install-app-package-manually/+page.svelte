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
      
      <!--Navbar-->
      <section style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; padding: 10px; background: var(--fds-solid-background-base); border-bottom: 1px solid rgba(205, 205, 205, 0.25);">
      
        <!--Favicon-->
        <Fluent.PersonPicture src="/favicon.png" style="width: 35px; height: 35px; margin-right: 15px; margin-left: 15px; margin-top: 18px; align-items: center;"/>
      
        <!--Title-->
        <Fluent.TextBlock variant="bodyLarge" style="margin-right: 25px; align-items: center;">Ivirius</Fluent.TextBlock>
      
        <!--Home-->
        <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/';">Home</Fluent.Button>
      
        <!--CrimsonUI-->
        <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/crimsonui';">CrimsonUI</Fluent.Button>
      
        <!--Documentations-->
        <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/documentations';">Documentations</Fluent.Button>
      
        <!--Contact us-->
        <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/contact';">Contact us</Fluent.Button>
      
        <!--About-->
        <Fluent.Button style="color: var(--fds-text-primary); height: 32px; margin-right: 15px; align-items: center;" variant="hyperlink" onclick="window.location.href='/about';">About</Fluent.Button>
      </section>
      
      <section class="centered-section-2">
        <Fluent.TextBlock variant="titleLarge" style="text-alignment: left; margin-top: 25px;">Install app package manually</Fluent.TextBlock>
      </section>
      
      <!--Author-->
      <section class="margin-section">
        <section style="display: flex; margin-bottom: -30px;">
                <Fluent.PersonPicture src="/favicon.png" style="width: 30px; height: 30px; margin-right: 15px;"/>
                <Fluent.TextBlock variant="body" style="margin-left: -25px; margin-top: 5px;">Author: Ivirius</Fluent.TextBlock>
                <Fluent.TextBlock variant="body" style="margin-left: 10px; margin-top: 5px; opacity: 0.5;">•</Fluent.TextBlock>
                <Fluent.TextBlock variant="body" style="margin-left: 10px; margin-top: 5px; opacity: 0.5;">July 13, 2024</Fluent.TextBlock>
        </section>
        <h1>
                <Fluent.TextBlock variant="subtitle">Step 1 - Import app certificate</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">If the app package comes with a certificate, double click on it. The window below will be opened.</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000054-7cca57cca6/700/Screenshot%202022-11-30%20131454.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Now, click "Install Certificate..."</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000056-3f5313f532/700/Screenshot%202022-11-30%20131511.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">The following window will open. Make sure to select the "Local Machine" option and click "Next".</Fluent.TextBlock>
                <Fluent.InfoBar style="margin-top: 20px;" severity="caution" title="Warning!" message="Requires administrator permissions." open></Fluent.InfoBar>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000060-d95e0d95e2/450/Screenshot%202022-11-30%20131556.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Select "Trusted Root Certification Authorities" to proceed. This will ensure the app's certificate is trusted by the system. Click "OK".</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000062-c9aefc9af0/700/Screenshot%202022-11-30%20131619.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Click "Finish" to close the window.</Fluent.TextBlock>
        </h2>
        <h1>
                <Fluent.TextBlock variant="subtitle">Step 1 - Import app certificate</Fluent.TextBlock>
        </h1>
        <h2>
                <Fluent.TextBlock variant="body">If the app package comes with a certificate, double click on it. The window below will be opened.</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000054-7cca57cca6/700/Screenshot%202022-11-30%20131454.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Now, click "Install Certificate..."</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000056-3f5313f532/700/Screenshot%202022-11-30%20131511.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">The following window will open. Make sure to select the "Local Machine" option and click "Next".</Fluent.TextBlock>
                <Fluent.InfoBar style="margin-top: 20px;" severity="caution" title="Warning!" message="Requires administrator permissions." open></Fluent.InfoBar>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000060-d95e0d95e2/450/Screenshot%202022-11-30%20131556.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Select "Trusted Root Certification Authorities" to proceed. This will ensure the app's certificate is trusted by the system. Click "OK".</Fluent.TextBlock>
        </h2>
        <section class="centered-section">
                <img src="https://57a6227aab.cbaul-cdnwnd.com/faa5aca8a748076d073f9c252b407e05/200000062-c9aefc9af0/700/Screenshot%202022-11-30%20131619.webp?ph=57a6227aab" alt="Certificate window"/>
        </section>
        <h2>
                <Fluent.TextBlock variant="body">Click "Finish" to close the window.</Fluent.TextBlock>
        </h2>
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
      </style>