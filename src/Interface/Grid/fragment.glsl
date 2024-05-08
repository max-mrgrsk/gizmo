uniform float uThickness;
uniform float uBrightness;
varying vec2 vUv;

void main() {

    // LINES
    // float thickness = 1.0 - uThickness / 10;
    float thickness = 1.0 - uThickness / 10.0 ;
    // lines-x
    float linesX = vUv.x; 
    linesX = mod(linesX * 10.0 , 1.0); // step
    linesX = step(thickness, linesX); //thickness
    // lines-y
    float linesY = vUv.y; 
    linesY = mod(linesY * 10.0 , 1.0); // step
    linesY = step(thickness, linesY); //thickness
    // lines
    float lines = linesX + linesY;
    lines = clamp(lines, 0.0, 1.0);

    // FADE OUT
    float fadeStrength = 2.0;
    vec2 uv = vUv;
    uv*=fadeStrength;
    //fades
    float fadeXa = uv.x;
    float fadeXb = fadeStrength - uv.x;
    float fadeYa = uv.y;
    float fadeYb = fadeStrength - uv.y;
    float fadeX = min(fadeXa, fadeXb);
    float fadeY = min(fadeYa, fadeYb);
    float fade = min(fadeX, fadeY);

    // FADE LINES
    float fadeLines = lines * fade ;

    gl_FragColor = vec4(vec3(uBrightness), fadeLines);
}