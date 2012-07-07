
Vegas Text Editor
=====================

  A configurable, extensable, text editor with a focus on usability and
  progressive efficiency.

Check It Out
=====================
  view it <a href="http://www.code.editor.vegasjs.com/master/src/vegas.html">online</a>
  view your <a href="src/vegas.html">local copy</a>
  or download the compiled <a href="http://download.editor.vegasjs.com/">version</a> here.

Status
=====================
* Completed Working prototype: http://bit.ly/vegasprototype (Chrome seems to work)
* Built out rough skeleton of new architecture (will be evolving of course)
* Working on a robust GUI
* Figured out most of the new architecture, documentation pending.
* Creating new "clean" branch removing unused code, etc.
* Converting GUI work to the new branch

Authors
=====================
* DeShawn Williams <deshawn.b.williams@gmail.com>

License
=====================

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details at
  http://www.gnu.org/copyleft/gpl.html

Application Focus
=====================

  The primary audience is developers using web technologies for both development
  of the project and regular use. In general it should support the use of and be
  extensible to include other editing focuses, e.i., general text editing, Ruby,
  Python, C, C++, Java, etc.

  With the primary audience being web developers, the application should be
  written in web technologies so web developers can easily contribute and extend
  the text editor.

Target environments
=====================

  The application's environment is the LOCAL, and should inherit benefits of
  desktop applications while allowing for existence on the web as well in the
  future.

  Target desktop platforms include, Titanium Desktop, appjs, macgap, bottles,
  Future versions of adobe air and any other desktop environments which may
  provide a desktop GUI and provides an API to the file system and some portions
  of the operating system.

 Usability Goals
=====================

### General usability ###

  - Default settings are extremely important, and should be thought out well

  - Expose as much as possible as a configuration option

  - Initially two flavors, minimal and visual.

     - Minimal: The editing area will be the only default visual area. Any
     additional interfaces will be called via shortcuts, including the command
     bar.

     - Visual: By default configurations will contain two panels, the file
     explorer and the editor hint pane (code and shortcut completion/hints)

### Developer usability ###

  - Entry point to development of core application should be minimal.

  - Should not be abstracted unless necessary.

  - Editor public API should easily accessable and easily convert editor
    features into public api features.

  - When possible should be almost entirely in web technologies.

  - Code optimizations should not unnecessarily make the application harder
   to understand. If necessary these optimizations should be EXCESSIVELY
   documented.

Application Concepts
=====================

  - **Editor**
     The Editor is the entire application itself providing the global object

  - **Scope:**
     Gives the file context, defines the root of the project, via a project
     definition file / from version control / the current active directory)

  - **Buffers:**
     Contain the text that is currently in memory

  - **Resources:**
     References to location for text storage (a reference to a file on disk)

  - **Views:**
     A base container for visualization, typically just a window instance. These
     will contain regions.

  - **Regions:**
     A typically rectangular portion of the screen containing a component. These
     can be overlayed on top of other Regions and are for use in a canvas element.
     visual area.

  - **Components:**
     Visual representations of data in Regions, i.e. editArea, fileExplorer, hintViewer

  - **Tabs:**
     A group of Components inside of a single panes, can be visualized in (but
     is not limited to) the traditional tab form.

  - **Options:**
      Selections the user may make to change the behavior of the editor

  - **Settings:**
      Options that are preserved between sessions

  - **Actions:**
     Actions are rudimentary... actions such as moveCursorLeft, removePreviousCharacter, scroll down, cut, paste

  - **Macros:**
     Sets of actions and that contain custom logic, macros should be small
     in relation to plugins. Macros can be ran via the command line and do not
     need to be "loaded"

  - **Plugins:**
     Contain general features that alter the behavior or view of the editor.

  - **Flavors:**
     Contain sets of settings and plugins to form different user experiences

  - **Modules**
     Basically javascript files that are loaded at runtime, may provide
     configurations, macros, plugins.

TODO
=====================
* Functional requirements for 1.0
