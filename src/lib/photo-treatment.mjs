// Shared by the in-browser preview, PNG export and downloadable filter document.
export const photoFilterDefs = `<defs>
<filter id="mise-photo" x="-2%" y="-2%" width="104%" height="104%" color-interpolation-filters="sRGB">
<feColorMatrix type="saturate" values="0.72" result="muted"/>
<feComponentTransfer in="muted" result="washed"><feFuncR type="linear" slope="0.90" intercept="0.075"/><feFuncG type="linear" slope="0.91" intercept="0.075"/><feFuncB type="linear" slope="0.92" intercept="0.075"/></feComponentTransfer>
<feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="11" result="noise"/>
<feDisplacementMap in="washed" in2="noise" scale="1.3" xChannelSelector="R" yChannelSelector="G" result="softened"/>
<feColorMatrix in="noise" type="saturate" values="0" result="grain"/>
<feBlend in="softened" in2="grain" mode="soft-light" result="textured"/>
<feComposite in="textured" in2="softened" operator="arithmetic" k1="0" k2="0.18" k3="0.82" k4="0"/>
</filter>
<radialGradient id="mise-edges" gradientTransform="translate(.5 .5) scale(1.34 1.44) translate(-.5 -.5)"><stop offset=".53" stop-color="white"/><stop offset=".76" stop-color="black"/></radialGradient>
<mask id="mise-paper-edge"><rect width="100%" height="100%" fill="url(#mise-edges)"/></mask>
</defs>`;
export function photoOutputSize(width, height) {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0)
    throw new Error('Invalid image dimensions');
  const scale = Math.min(1, 1600 / Math.max(width, height));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}
export function photoStudySvg(dataUrl, width, height, paper = '#f7f6f2') {
  if (!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+=*$/.test(dataUrl))
    throw new Error('Only local raster image data is supported');
  if (!/^#[0-9a-f]{6}$/i.test(paper)) throw new Error('Invalid paper color');
  if (
    !Number.isInteger(width) ||
    !Number.isInteger(height) ||
    width < 1 ||
    height < 1 ||
    width > 1600 ||
    height > 1600
  )
    throw new Error('Invalid output dimensions');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><title>Mise photographic wash</title>${photoFilterDefs}<rect width="100%" height="100%" fill="${paper}"/><g mask="url(#mise-paper-edge)"><image href="${dataUrl}" width="${width}" height="${height}" filter="url(#mise-photo)"/></g></svg>`;
}
