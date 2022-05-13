import React from "react";
import "@vime/core/themes/default.css";

// Optional light theme (extends default). ~400B
import "@vime/core/themes/light.css";

import {
  VmPlayer,
  VmVideo,
  VmFile,
  defineCustomElements,
  VmDefaultUi,
} from "@vime/core";

// 1. Define the elements individually to save on the final bundle size.

export const TestPlayer = () => {
  customElements.define("vm-player", VmPlayer);
  customElements.define("vm-video", VmVideo);
  customElements.define("vm-file", VmFile);
  customElements.define("vm-default-ui", VmDefaultUi);

  // 2. Use the following the define all the elements in the Vime library, be aware this may bloat
  // your final project size.
  defineCustomElements();
  return (
    <div>
      <vm-player>
        <vm-video cross-origin poster="https://media.vimejs.com/poster.png">
          <source
            data-src="https://media.vimejs.com/720p.mp4"
            type="video/mp4"
          />
          <track
            default
            kind="subtitles"
            src="https://media.vimejs.com/subs/english.vtt"
            srclang="en"
            label="English"
          />
          <track
            kind="subtitles"
            src="https://media.vimejs.com/subs/spanish.vtt"
            srclang="es"
            label="Spanish"
          />
        </vm-video>
        <vm-default-ui />
      </vm-player>
    </div>
  );
};
