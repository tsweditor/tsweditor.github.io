---
sidebar_position: 5
---

# Custom Consists

Formations can be created for custom pak scenarios or use with the in-game scenario designer. Scenario designer scenarios that contain custom formations must not be uploaded to the Creators Club as it will only upload the scenario with a reference to the formation and not the actual formation. For a formation to appear in the scenario designer the ‘Is Available for User Scenarios’ box must be checked and the plugin must be packaged correctly including the Asset Registry file.

## Creating a new formation

To create a new formation, create a new data asset (Right Click on Content Browser->Miscellaneous->Data Asset) and search for/select ‘Train Formation’. After it has been created give it an appropriate name. Normally assets are named with the asset type at the start so formations should start with ‘TF_’ although it’ll work fine without the naming convention.

When the formation is opened, there is an array named ‘formation’ each item in the array can be one or many rail vehicles depending on what is selected in the train entry box where either a formation or rail vehicle definition can be selected. 

import Video from '@site/src/components/Video';

<Video videoID="80XHIZNwytw" />
