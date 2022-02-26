---
sidebar_position: 6
---

# Cooking and Packaging
For a mod to be played in the game the assets in editor must be ‘cooked’ to remove unnecessary data that the game doesn’t need and convert the assets to the correct format.

## Cooking a plugin
To do this press the ‘Cook Mod’ button on the top menu bar and select the name of the plugin you want to cook. The editor will say cooking the mod failed due to the number of missing components that the game includes. But normally the mod has been cooked and the files can be found in the following path:

`EDITOR_PATH\TS2Prototype\Plugins\PLUGIN_NAME\Saved\Cooked`

After cooking the files should be organised so that the plugin sits in a ‘DLC’ folder and the other folders generated when cooking can be removed, e.g., ‘Engine’ & ‘StarterPack’.

## The dlc file
When TSW looks for plugins, it tries to verify you own the plugin/DLC and any required DLC before loading it. This is done with ‘.dlc’ files they are essentially just text files so can be created with notepad. The example below can be copied but the path and mount point must be changed, and this file needs to be at the root of the content folder in a plugin.

```text title="PLUGIN_NAME.dlc"
{
    "ContentPath": "Plugins\/DLC\/PLUGIN_NAME\/Content\/",
    "DLCDependencies": null,
    "EpicStoreItemId": null,
    "Files": [ ],
    "GDKStoreId": null,
    "LiveProductId": "00000000-0000-0000-0000-000000000000",
    "MountPoint": "\/PLUGIN_NAME\/",
    "Name": "PLUGIN_NAME",
    "PS5ContentId": null,
    "PSNContentId": null,
    "SteamAppId": 1282590,
    "UWPProductId": null
}
```

import Video from '@site/src/components/Video';

<Video videoID="8Zw1QMPpZb0" />

## Creating a pak file
The next step is to package the mod into a ‘.pak’ file so that the game will load it. This can be done manually using the command line and UnrealPak.exe as described on the page for extracting files from the game. However, a mod can take many attempts before it works correctly so it’s normally easiest to create a batch file to run the package command.

Part of the command to create a pak file is a ‘responsefile’ this specifies what content should be included in the pak file. The response file is a text file and should contain a line in the following format:
```text title="responsefile.txt"
"PATH_TO_FOLDER_WITH_COOKED_FILES\*.*" "..\..\..\*.*"
```

The following command is used to create a pak file:

`PATH_TO_EDITOR\Engine\Binaries\Win64\UnrealPak.exe "PATH_AND_NAME_FOR_NEW_PAK.pak" -create="PATH_TO_RESPONSE_FILE\responsefile.txt" -compress`

Once a pak file has been created it can be placed in the games ‘DLC’ folder so that it gets loaded when the game launches.

<Video videoID="g0Sha7notoE" />
