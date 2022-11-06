export const BLEND_PROPS = "blendProps";
export const BLEND_LIVE = "blendLive";
export const BLEND_DEMO = "blendDemo";
export const TAG_PROPS = "tagProps";
export const TAG_LIVE = "tagDemo";
export const TAG_DEMO = "tagLive";

export const blendDemoSections = {
  live: BLEND_LIVE,
  demo: BLEND_DEMO,
};

export const tagDemoSections = {
  live: TAG_LIVE,
  demo: TAG_DEMO,
};

export const labelBySection = {
  blend: {
    [BLEND_DEMO]: "TextAnnotateBlend",
    [BLEND_LIVE]: "Live Code",
    [BLEND_PROPS]: "Props",
  },
  tag: {
    [TAG_DEMO]: "TextAnnotate",
    [TAG_LIVE]: "Live Code",
    [TAG_PROPS]: "Props",
  },
};
