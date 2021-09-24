---
sidebar_position: 1
---

# Download and Install
The total download size of the editor is around 5 GB so this
may take some time depending on internet speed.

## Getting Access
To download the editor you must have a GitHub account and
**[joined the Epic Games organisation](https://www.unrealengine.com/en-US/ue4-on-github)**. Otherwise, the download link
will show a **404** error.

## Downloading
Releases for the editor can be found on the releases page in the
GitHub repository **linked below** look for the release that has
the tag 'Latest Release' and it clearly labeled as TSW.

**[Editor Releases Page](https://github.com/tsweditor/UnrealEngine/releases/)**

Under the 'Assets' section there are many files, only the files
that start with `UE-Editor` are needed. **Do not** download
the files labeled as 'Source Code'. This will just download the standard
unmodified 4.26 source.

Occasionally an additional file may be included engine with `.Patch.zip`
this will be for if there was a bug in the release or to transition to
a newer build without needing to download the whole editor again.

![Screenshot of a release](/img/install/release.png)

## Extracting
To extract the files you will need **[WinRar](https://www.win-rar.com)**. 

To begin with create a new folder wherever you want to store the editor,
the location shouldn't matter. Ensure all `UE-Editor.part` files are
placed in the same folder (It's easiest to leave them all in the 
downloads' folder), then open the file ending with **`part1`**. 
Extract all the files in the WinRar window into the new folder.
(This can take a while due to the number of files that need extracting)

![Screenshot of extracted files](/img/install/rootFolder.png)

This should result in five files being extracted into the newly
created folder.

## Launching The Editor
If you already have a version of the UE4 editor installed the `.uproject` file
should be recognised (located in the `TS2Prototype` folder) and this can be
used to open the editor.

If you cannot open `TS2Prototype.uproject`, Launch: 
`Engine\Binaries\Win64\UE4Editor.exe` then open the TS2Prototype
project from there.

![EditorSplash](/img/EdSplash.png)
When the loading screen looks like that the editor will be launching
correctly.

