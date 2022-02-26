---
sidebar_position: 4
---

# Create a Plugin
Whenever new content is being added to the game, it should be done by creating a plugin. This prevents it conflicting with other mods being made for the same route. For example, if two mods edit the same ‘Content Manifest’ one won’t work.

## Creating a new content only plugin

To create a new plugin, go to Edit->Plugins. This should open a new window showing all the plugins included with Unreal Engine. Click on the green box labelled, ‘New Plugin’ in the bottom right of the plugin window. Then select, ‘Content Only’. Name the plugin and click ‘Create Plugin’. That should create a new plugin that’ll show up in the content browser.

## Adding a Content Manifest

Each plugin normally contains a ‘Content Manifest’ which is a type of data asset that tells the game what the plugin contains. This can be created by right clicking on the content folder of the plugin and selecting ‘Miscellaneous->Data Asset’. A new window should appear with a list of all the data assets, in the search box begin to type ‘Content Manifest’ or scroll down until it’s found and select it. The content manifest must be located at the root of the plugin and named, ‘ContentManifest’.

import Video from '@site/src/components/Video';

<Video videoID="pyYCMtS7n88" />
