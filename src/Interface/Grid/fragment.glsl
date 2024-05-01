uniform float uTime;
uniform float uThickness;
uniform float uBrightness;

varying vec2 vUv;

// cosine based palette, 4 vec3 params
vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263,0.416,0.557);

    return a + b*cos( 6.28318*(c*t+d) );
}

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

    // COLOR
    vec3 col = palette(uTime / 30.0);

    gl_FragColor = vec4(vec3(uBrightness), fadeLines);
}