<script>
        //Imports
        import * as Fluent from "fluent-svelte";
        import "fluent-svelte/theme.css";
      
        //Variables
        let open = true;
</script>

# 📝 Rebound Release Notes

### Latest version: **v0.0.6 Beta**

---

# 🧪 v0.0.6 Beta

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" severity="caution" title="IMPORTANT!" message="If you already have Rebound installed, you must first uninstall it through Rebound Hub > Rebound11 > Uninstall, and then uninstall Rebound Hub itself. After this, you can safely install v0.0.6." open/>

<Fluent.InfoBar style="margin-top: 20px; margin-bottom: 20px;" severity="attention" title="Note:" message="To uninstall Rebound Hub (and Rebound, if still present), use the Rebound Hub installer." open/>

---

## 🚀 What's New in v0.0.6

- 🔄 **Project Rebranding**: Rebound 11 is now simply **Rebound**.
- 🧩 **Improved Shortcut Handling**: Rebound no longer replaces system shortcuts; It now creates **additional ones**, preserving the originals. This feature can be toggled off from the **Options** menu in the Rebound page inside Rebound Hub.
- 🎬 **Simplified (Un)Installation**: The old fullscreen installer/uninstaller has been replaced with a **new runtime system**.
- 🛠️ **Repair Functionality**: You can now **repair Rebound directly from Rebound Hub** if something breaks.
- 🧹 **Temporary Feature Removal**:

  - TPM Management and Defragment/Optimize Drives are **temporarily removed** due to vulnerabilities and bad management.

- 🪟 **New Shell Features**: Added two new dialogs in the Rebound Shell app:

  - “This app can’t run on your PC”
  - “Shut Down Windows”

- 📦 **Single Executable Format**: All Rebound apps have been converted into **standalone executables**.
- 🎨 **Full UI Overhaul**: The entire mod has received a **complete user interface rebuild**.

---

## 🐞 Known Issues

- Some **buttons and links** currently don’t respond.
- **Disk Cleanup** may sometimes appear, hover, then close on mouse movement, without doing anything.
