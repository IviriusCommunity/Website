<script>
  //Imports
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";

  //Variables
  let open = true;

import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

</script>

<!--Head-->
<svelte:head>
	<title>Ivirius</title>
	<meta name="description" content="Ivirius Community official website"/>
	<meta content="Ivirius Community Community" name="author" />
	<meta content="#6ba4ff" name="theme-color" />
        <!-- Other head content -->
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"><style>
                #output {
                    min-height: 200px; /* Ensures there's space for the content */
                    padding: 20px; /* Adds padding inside the box */
                    border: 0px solid #ccc; /* Adds a border around the content */
                    background-color: transparent; /* Makes the background transparent */
                    font-family: 'Roboto', sans-serif; /* Applies the custom font */
                    line-height: 1.6; /* Improves readability */
    margin: 0 auto;
    padding: 25px;
    max-width: 1250px;
                }
            
                /* Optional: Customize Markdown elements */
                #output h1, #output h2, #output h3 {
                    color: #333; /* Change heading colors */
                }
            
                #output a {
                    color: #1a73e8; /* Customize link color */
                    text-decoration: none; /* Remove underline from links */
                }
            
                #output a:hover {
                    text-decoration: underline; /* Underline on hover */
                }
            
                #output code {
                    background-color: #f4f4f4; /* Background for code blocks */
                    border-radius: 4px; /* Rounded corners for code blocks */
                    padding: 2px 4px; /* Padding inside code blocks */
                }
            
                #output pre {
                    background-color: #f4f4f4; /* Background for preformatted code */
                    border-radius: 4px; /* Rounded corners for code blocks */
                    padding: 10px; /* Padding inside code blocks */
                    overflow-x: auto; /* Enable horizontal scrolling */
                }
            </style>
            
    <!-- Load Showdown library from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/showdown@2.0.0/dist/showdown.min.js"></script>
</svelte:head>

<!--Title-->
<section class="centered-section-2" style="margin: 0px; alignment:stretch; max-width: 999999px; background-size: cover; background-position:center; background-image: url('https://i.spoo.me/755932');">
        <div style="margin: -25px; padding: 25px; height: 200px; background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));">

                <h1>
                        <Fluent.TextBlock variant="titleLarge" style="color: black">Rebound 11</Fluent.TextBlock>
                </h1>
         <h2>
                        <Fluent.TextBlock variant="body" align="center" style="color: black; font-size:18px">Windows 11 as it should have been.</Fluent.TextBlock>
         </h2>
         <h2>
           <Fluent.Button variant="accent" style="margin-right: 15px; margin-top: 15px;" onclick="window.location.href='https://github.com/IviriusMain/ReboundHub/releases/download/Alpha-v0.0.2/ReboundHubInstaller.exe';">Download</Fluent.Button>
         </h2>
        </div>
</section>

<!--Rebound 11-->
<section class="margin-section" style="border: 1px solid #999999AA;
            border-radius: 8px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
            height: 550px; padding: 0px;
            position: relative;
            display: flex;
            justify-content: flex-end;
            margin-top: 25px;
            background-color: var(--fds-mica-background-base);
            max-width: 1000px;">
        
    <div class="caption-buttons">
        <button class="caption-button minimize">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="transform: scale(0.3);" class="caption-icon">
                <path d="M 0.996094 10 C 0.859375 10 0.730794 9.973959 0.610352 9.921875 C 0.489909 9.869792 0.384115 9.798178 0.292969 9.707031 C 0.201823 9.615886 0.130208 9.510092 0.078125 9.389648 C 0.026042 9.269206 0 9.140625 0 9.003906 C 0 8.867188 0.026042 8.738607 0.078125 8.618164 C 0.130208 8.497722 0.201823 8.3903 0.292969 8.295898 C 0.384115 8.201498 0.489909 8.128256 0.610352 8.076172 C 0.730794 8.024089 0.859375 7.998047 0.996094 7.998047 L 19.003906 7.998047 C 19.140625 7.998047 19.269205 8.024089 19.389648 8.076172 C 19.51009 8.128256 19.615885 8.201498 19.707031 8.295898 C 19.798176 8.3903 19.869791 8.497722 19.921875 8.618164 C 19.973957 8.738607 20 8.867188 20 9.003906 C 20 9.140625 19.973957 9.269206 19.921875 9.389648 C 19.869791 9.510092 19.798176 9.615886 19.707031 9.707031 C 19.615885 9.798178 19.51009 9.869792 19.389648 9.921875 C 19.269205 9.973959 19.140625 10 19.003906 10 Z "/>
            </svg>
        </button>
        <button class="caption-button maximize">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="transform: scale(0.325);" class="caption-icon">
                    <path d="M 2.949219 20 C 2.558594 20 2.184245 19.920248 1.826172 19.760742 C 1.468099 19.601236 1.153971 19.386393 0.883789 19.116211 C 0.613607 18.846029 0.398763 18.5319 0.239258 18.173828 C 0.079753 17.815756 0 17.441406 0 17.050781 L 0 2.949219 C 0 2.558594 0.079753 2.184246 0.239258 1.826172 C 0.398763 1.4681 0.613607 1.153973 0.883789 0.883789 C 1.153971 0.613607 1.468099 0.398764 1.826172 0.239258 C 2.184245 0.079754 2.558594 0 2.949219 0 L 17.050781 0 C 17.441406 0 17.815754 0.079754 18.173828 0.239258 C 18.5319 0.398764 18.846027 0.613607 19.116211 0.883789 C 19.386393 1.153973 19.601236 1.4681 19.760742 1.826172 C 19.920246 2.184246 20 2.558594 20 2.949219 L 20 17.050781 C 20 17.441406 19.920246 17.815756 19.760742 18.173828 C 19.601236 18.5319 19.386393 18.846029 19.116211 19.116211 C 18.846027 19.386393 18.5319 19.601236 18.173828 19.760742 C 17.815754 19.920248 17.441406 20 17.050781 20 Z M 17.001953 17.998047 C 17.138672 17.998047 17.267252 17.972006 17.387695 17.919922 C 17.508137 17.867838 17.613932 17.796225 17.705078 17.705078 C 17.796223 17.613932 17.867838 17.508139 17.919922 17.387695 C 17.972004 17.267252 17.998047 17.138672 17.998047 17.001953 L 17.998047 2.998047 C 17.998047 2.861328 17.972004 2.732748 17.919922 2.612305 C 17.867838 2.491863 17.796223 2.386068 17.705078 2.294922 C 17.613932 2.203777 17.508137 2.132162 17.387695 2.080078 C 17.267252 2.027996 17.138672 2.001953 17.001953 2.001953 L 2.998047 2.001953 C 2.861328 2.001953 2.732747 2.027996 2.612305 2.080078 C 2.491862 2.132162 2.386068 2.203777 2.294922 2.294922 C 2.203776 2.386068 2.132161 2.491863 2.080078 2.612305 C 2.027995 2.732748 2.001953 2.861328 2.001953 2.998047 L 2.001953 17.001953 C 2.001953 17.138672 2.027995 17.267252 2.080078 17.387695 C 2.132161 17.508139 2.203776 17.613932 2.294922 17.705078 C 2.386068 17.796225 2.491862 17.867838 2.612305 17.919922 C 2.732747 17.972006 2.861328 17.998047 2.998047 17.998047 Z "/>
                </svg>
        </button>
        <button class="caption-button close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="transform: scale(0.35);" class="caption-icon">
                    <path d="M 10 11.416016 L 1.708984 19.707031 C 1.513672 19.902344 1.279297 20 1.005859 20 C 0.719401 20 0.480143 19.903971 0.288086 19.711914 C 0.096029 19.519857 0 19.2806 0 18.994141 C 0 18.720703 0.097656 18.486328 0.292969 18.291016 L 8.583984 10 L 0.292969 1.708984 C 0.097656 1.513672 0 1.276043 0 0.996094 C 0 0.859375 0.026042 0.729168 0.078125 0.605469 C 0.130208 0.481771 0.201823 0.375977 0.292969 0.288086 C 0.384115 0.200195 0.491536 0.130209 0.615234 0.078125 C 0.738932 0.026043 0.869141 0 1.005859 0 C 1.279297 0 1.513672 0.097656 1.708984 0.292969 L 10 8.583984 L 18.291016 0.292969 C 18.486328 0.097656 18.723957 0 19.003906 0 C 19.140625 0 19.269205 0.026043 19.389648 0.078125 C 19.51009 0.130209 19.615885 0.201824 19.707031 0.292969 C 19.798176 0.384115 19.869791 0.48991 19.921875 0.610352 C 19.973957 0.730795 20 0.859375 20 0.996094 C 20 1.276043 19.902344 1.513672 19.707031 1.708984 L 11.416016 10 L 19.707031 18.291016 C 19.902344 18.486328 20 18.720703 20 18.994141 C 20 19.130859 19.973957 19.261068 19.921875 19.384766 C 19.869791 19.508463 19.799805 19.615885 19.711914 19.707031 C 19.624023 19.798178 19.518229 19.869791 19.394531 19.921875 C 19.270832 19.973959 19.140625 20 19.003906 20 C 18.723957 20 18.486328 19.902344 18.291016 19.707031 Z "/>
                </svg>
        </button>
    </div>
      </section>
      
<section>
    <section id="output">Loading content...</section>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize Showdown converter
            var converter = new showdown.Converter({
                simplifiedAutoLink: true,
                literalMidWordUnderscores: true
            });

            // Fetch the content of the Markdown file
            fetch('/markdown/rebound11/content.md')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch content: ' + response.statusText);
                    }
                    return response.text();
                })
                .then(text => {
                    // Convert the Markdown content to HTML
                    var renderedHTML = converter.makeHtml(text);
                    // Insert the rendered HTML into the output section
                    document.getElementById('output').innerHTML = renderedHTML;
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('output').innerHTML = 'Failed to load content: ' + error.message;
                });
        });
    </script>
</section>

<section class="centered-section" style="margin-top: 20px;">
  <Fluent.TextBlock variant="titleLarge">Top apps</Fluent.TextBlock>
</section>

<!--Ivirius Text Editor Plus-->
<section class="margin-section">
        <img src="https://i.spoo.me/729297" style="border-radius: 8px; display: block; height: auto; width: auto; max-width: 1000px;"/>
  <h1>
          <Fluent.TextBlock variant="title">Ivirius Text Editor Plus</Fluent.TextBlock>
  </h1>
  <h2>
	  <Fluent.TextBlock variant="body">Ivirius Text Editor Plus is a powerful and user-friendly editor for Windows. It features advanced RTF editing with AI assistant Zippy, tabs for multitasking, and a setup with a Win32 look. Enjoy the best of both worlds with CrimsonUI and WinUI integration. The autosave feature ensures your work is safe. Download it from the Microsoft Store for the ultimate text editing experience.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Consistent</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Experience seamless and reliable performance with Ivirius Text Editor Plus, designed with Windows 11’s modern design language. The intuitive interface ensures that your text editing tasks are smooth and uninterrupted, providing a consistent user experience that aligns perfectly with the aesthetics and functionality of Windows 11. With features like autosave and a robust AI assistant, your work is always secure and up-to-date.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Powerful</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Unlock the full potential of your text editing with Ivirius Text Editor Plus. Equipped with advanced AI capabilities and table insertion, this editor empowers you to create and manage documents with ease. The integration of CrimsonUI and WinUI provides a robust and visually appealing interface, while the multitasking tabs and autosave feature ensure you can handle complex projects efficiently. Experience the power of seamless editing and enhanced productivity.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Made for everyone</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Ivirius Text Editor Plus features many themes and customization settings, making sure that everyone can personalize the UI to their liking.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="accent" style="margin-right: 10px;" onclick="window.location.href='https://apps.microsoft.com/detail/9N4T9H9182J5?hl=en-US';">Buy</Fluent.Button>
    <Fluent.Button variant="hyperlink" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
</section>

<!--Ivirius Text Editor-->
<section class="margin-section">
  <h1>
          <Fluent.TextBlock variant="subtitle">Ivirius Text Editor</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Ivirius Text Editor combines the power of Ivirius Text Editor Plus with a consistent user interface using WinUI styles.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="accent" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Download</Fluent.Button>
    <Fluent.Button variant="hyperlink" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
</section>

<section class="centered-section" style="margin-top: 20px;">
  <Fluent.TextBlock variant="titleLarge">Rebound 11</Fluent.TextBlock>
</section>

<!--Rebound 11-->
<section class="margin-section">
  <h1>
          <Fluent.TextBlock variant="title">Windows 11 as it should be</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Rebound 11 is an effort by the Ivirius Team to make Windows 11 more consistent and beautiful.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Simple and intuitive installation</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">Rebound 11 comes as an installation package which allows you to install all the Rebound tools onto your computer with one click.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">All legacy apps and tools replaced</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Rebound apps suite is a group of applications that aims to improve the consistency of Windows.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Powered by the community</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Rebound project is made by a group of dedicated, talented developers who know exactly how to make Windows 11 look its best.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Made using WinUI 3</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">All the Rebound apps are made using WInUI3 for a consistent, modern experience.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">One app to manage it all</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Rebound Hub provides a visually pleasing experience, while allowing you to try out Ivirius.UI and download Rebound 11.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="accent" style="margin-right: 10px;">Download Rebound 11</Fluent.Button>
    <Fluent.Button variant="hyperlink">Learn more</Fluent.Button>
  </h3>
</section>

<section class="centered-section" style="margin-top: 20px;">
  <Fluent.TextBlock variant="titleLarge">Software development community</Fluent.TextBlock>
</section>

<!--Developers-->
<section class="margin-section">
  <h1>
          <Fluent.TextBlock variant="title">Ivirius Community</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Ivirius Community is an inclusive, welcoming group of people who are eager to share ideas and experiences with one another. Join our official Discord server and follow our social media using the links below!</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="accent" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Discord</Fluent.Button>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Twitter</Fluent.Button>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">YouTube</Fluent.Button>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">GitHub</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">UWP</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">UWP is a modern, Fluent design framework that allows you to create packaged apps. It is widely seen as one of the precursors of WinUI3, which is part of the Windows App SDK.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">WinUI 3</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">WinUI3 is a modern, versatile UI framework combining the Fluent UI of UWP with the power and stability of WinForms and WPF. WinUI3 is an integral component of the Windows App SDK.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">Ivirius.UI</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Ivirius.UI family of libraries allows you to create apps using CrimsonUI (via Ivirius.UI.Styles) and a set of meticulously crafted components (via Ivirius.UI.Conteols). Ivirius.UI packages are currently only available for WinUI3 and the Windows App SDK, but UWP ports are planned.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">CrimsonUI</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">CrimsonUI is a dynamic UI library designed for UWP and Windows App SDK. Rooted in WinUI and influenced by FireCube's GlowUI, CrimsonUI seamlessly blends default WinUI elements with glowing, shiny components. Immerse yourself in stunning animations, ensuring a very smooth and beautiful user experience. Elevate your app's visual appeal with the elegance of CrimsonUI.</Fluent.TextBlock>
  </h2>
  <h3>
    <Fluent.Button variant="hyperlink" style="margin-right: 10px;" onclick="window.location.href='/ivirius-text-editor-plus';">Learn more</Fluent.Button>
  </h3>
  <h1>
          <Fluent.TextBlock variant="subtitle">Contributions</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">The Ivirius Team welcomes community contributions from other developers in an effort to make our apps even better.</Fluent.TextBlock>
  </h2>
  <h1>
          <Fluent.TextBlock variant="subtitle">Events</Fluent.TextBlock>
  </h1>
  <h2>
          <Fluent.TextBlock variant="body">We host several events in our Discord server (such as the Ivirius Summit), keeping you up to date about several exciting developments with our apps.</Fluent.TextBlock>
  </h2>
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

  .caption-buttons {
            display: flex;
            margin-left: auto;
            margin-right: 0px;
        }

        .caption-button {
            width: 45px;
            height: 30px;
            background-color: #f3f3f300;
            border: none;
            border-radius: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s;
            color: var(--fds-text-primary);
        }

        .caption-button:hover {
            background-color: #a7a7a74f;
        }

        .caption-button.close:hover {
            background-color: #cf1010dc;
        }

        .caption-button.close {
            border-top-right-radius: 7px;
        }

        .caption-icon {
            font-size: 12px;
            fill: var(--fds-text-primary);
        }

        .caption-button.close:hover .caption-icon {
            fill: #ffffff;
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