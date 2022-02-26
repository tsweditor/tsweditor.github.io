---
sidebar_position: 3
---

# Open a Cooked Map
To open a cooked map, a new uncooked map must be first created in the ‘Map’ folder then opened. Under the ‘World Settings’ tab (which can be opened by going to Window->World Settings) there is an option to ‘Enable World Composition’ under the ‘World’ category. After enabling this there should be a pop-up stating how many sub-levels were found, press ‘OK’ on this pop-up.

![World Settings Button](/img/openingMap/WorldSettings.png) 
![Enable World Composition](/img/openingMap/WorldComposition.png)

After world composition has been enabled sub-levels can now be loaded. Open the levels tab to manage what levels are loaded and unloaded. This can be opened by going to Window->Levels.

![Levels Tab Button](/img/openingMap/LevelsTab.png)

## Types of tiles
In the levels tab there should be a list with many tiles shown, one will be the base tile that can be loaded. For example, on GWE this is named, ‘PaddingtonReadingMap’. The base level will normally contain things that affect the whole route such as the sky and track network manager. There are also four other types of levels located in the ‘Tiles’ folder.

- Landscape Tiles: These contain the terrain in the form of ‘LandscapeStreamingProxy’ actors.
- Scenery Tiles: These contain all scenic items in the route that are not related to the track. Such as trees and buildings.
- Track Scenery Tiles: These contain all the meshes for track, points, and signals.
- Track Tiles: These contain the internal data for the track and signals but won’t add anything to the map visually.

## Loading the tiles
Levels can be loaded by double clicking on them or selecting many and right clicking then selecting ‘Load’. All track tiles can be loaded for a route without a noticeable performance hit. However, all other types of tiles that are loaded can lower the framerate in editor, so it is best to only have the scenery and landscape tiles in a small area loaded at a time. Trying to load all the tiles at once will cause a dramatic decrease in framerate.

:::caution

Not all tiles can be loaded. There are some routes where a few tiles may crash the editor.

In most cases these are the track scenery tiles, although most track scenery tiles should be fine.

:::

In the levels tab there is a button labelled, ‘Summons World Composition’ pressing this brings up a map where tiles can more easily be loaded based on where they are located on the route.

![World Composition Map Button](/img/openingMap/WorldCompositionMapButton.png)
![World Composition Window](/img/openingMap/WorldCompositionWindow.png)

import Video from '@site/src/components/Video';

<Video videoID="a4FdstqHT3Q" />
