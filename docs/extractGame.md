---
sidebar_position: 2
---

# Open files from the game
Assets in TSW are packaged into a file called a pak file. These files have the extension ‘.pak’ and are located in two folders:
‘DLC’ – This folder contains any additional DLC for the game.
‘Paks’ – This contains any core files and the three routes that come with the game (Bakerloo, Koln-Aachen, Sand Patch Grade).
To read assets from pak files they must first be extracted, then the assets you want to use must be copied into the correct folder in the editor so that they are discovered when the editor starts up.

import Video from '@site/src/components/Video';

## Extracting
There is a program called ‘UnrealPak.exe’ which can be used to extract files from TSW using the command line. The path for this file is: `'Editor\Engine\Binaries\Win64\UnrealPak.exe'`.

To extract a pak file open PowerShell and type the following command, changing the parts in parentheses. 

`<Path to editor>\Engine\Binaries\Win64\UnrealPak.exe <Path to pak file> -Extract <Folder to place extracted files>`

If done correctly there should be a folder named, ‘TS2Prototype’ in the folder specified for the extracted files. This contains the assets from the pak file.

<Video videoID="Xk0BR_7j7Yk" />

## Copying the core files
To get the core files into the editor they must be copied into the correct folder `EXTRACTED_CORE\TS2Prototype\Content` should be copied to `Editor\TS2Prototype\Content`.
<Video videoID="MWgLI0uZg-8" />

## Copying files from a DLC
Each DLC is normally split up into many plugins, these are split up so that there is a plugin for each rail vehicle, a gameplay plugin and the main route plugin.
Each plugin can be copied when needed, not all the plugins from the DLC must be copied. This is like copying the core folder but instead everything is in the Plugins\DLC folder. 

`EXTRACTED_CORE\TS2Prototype\Plugins\DLC\PLUGIN_NAME` should be copied to `Editor\TS2Prototype\Plugins\DLC`.

To improve performance in the editor some assets that aren’t needed can be deleted from a plugin. In the video below the Class 37 from Tees Valley Line is transferred to the editor and most of the stuff in the plugin is then deleted. In this example this is because the 37 was going to be used in the timetable editor so only the ‘RailVehicleDefinition’ is needed. There would be nothing wrong with leaving all the assets. It would just cause the editor to take slightly longer to start up.
<Video videoID="II6ahBf3DIk" />

## Viewing assets in editor
The assets extracted from the game are in a cooked format this means all the data specifically for the editor is removed. Cooked assets aren’t designed to be opened once cooked as they are missing chunks of information the editor needs such as the nodes and their positions on a graph. Some parts of the editor have been modified to support reading cooked assets. There are also many classes specific to TSW that are missing in the editor. The combination of cooked content and missing components makes the editor slightly unstable and so there are some assets that should be avoided as they will cause a crash. 

Some types of assets won’t do anything when clicked on, others will open, and some may just crash. To edit an asset, it must be duplicated first as it cannot be edited directly in its cooked state. Some types of cooked assets cannot be duplicated or edited at all.

