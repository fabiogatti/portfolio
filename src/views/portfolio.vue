<template>
  <div class="routeContent h-full w-full flex flex-col justify-center">
    <p class="contentTitle z-20" :colortitle="titleColor" @click="$emit('changeTitle')">{{ $t('portfolio.title1') }}</p>
    <div class="relative h-full flex flex-row items-center justify-around space-x-8">
      <projectCard :title="'Pokedex'" color="1">
        <template v-slot:default>
          <img class="w-[5.5vh] h-max p-1" :src="getImg('vue')" alt="Vue logo">
        </template>
      </projectCard>
      <projectCard :title="'Stratos'" color="2">
        <template v-slot:default>
          <img class="w-[5vh] h-max p-1" :src="getImg('react')" alt="React logo">
        </template>
      </projectCard>
    </div>
    
    <!--<div class="sign-wrapper relative">
      <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 500"><title>gattiConstruction2</title><path class="cls-1" d="M226.58,269.23l346.21-.36c13.19,0,23.82,14,23.61,31.05l-1.57,129c-.21,16.69-10.71,30.08-23.59,30.08H226.6c-13,0-23.59-13.68-23.59-30.56V299.79C203,282.92,213.56,269.24,226.58,269.23Z"/><path class="cls-2" d="M315.44,196.64l6.81-6.81S327,185,321,179.05s-10.58-1-10.58-1l-6.81,6.81-6.82,6.82s-4.72,4.82,1.24,10.77,10.58,1.05,10.58,1.05Z"/><path class="cls-2" d="M273.76,238.32l6.82-6.82s4.72-4.82-1.24-10.77-10.58-1-10.58-1l-6.82,6.82-6.81,6.81s-4.72,4.82,1.24,10.78,10.58,1,10.58,1Z"/><line class="cls-3" x1="300.64" y1="199.62" x2="277.48" y2="222.78"/><path class="cls-2" d="M233,279.08l6.82-6.82s4.71-4.81-1.24-10.77S228,260.44,228,260.44l-6.82,6.82-6.81,6.81s-4.72,4.82,1.24,10.78,10.57,1,10.57,1Z"/><line class="cls-3" x1="259.88" y1="240.38" x2="236.71" y2="263.55"/><path class="cls-2" d="M397.29,114.79l6.82-6.82s4.72-4.82-1.24-10.78-10.58-1-10.58-1L385.47,103l-6.81,6.81s-4.72,4.82,1.24,10.78,10.58,1,10.58,1Z"/><path class="cls-2" d="M355.62,156.46l6.81-6.82s4.72-4.81-1.24-10.77-10.57-1-10.57-1l-6.82,6.81L337,151.46s-4.71,4.81,1.25,10.77,10.57,1.05,10.57,1.05Z"/><line class="cls-3" x1="382.5" y1="117.76" x2="359.33" y2="140.93"/><line class="cls-3" x1="341.74" y1="158.52" x2="318.57" y2="181.69"/><path class="cls-2" d="M481.83,196.35,475,189.54s-4.71-4.82,1.24-10.78,10.58-1,10.58-1l6.82,6.81,6.81,6.82s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><path class="cls-2" d="M523.5,238l-6.81-6.82s-4.72-4.82,1.24-10.77,10.58-1.05,10.58-1.05l6.81,6.82,6.82,6.81s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><line class="cls-3" x1="496.62" y1="199.33" x2="519.79" y2="222.49"/><path class="cls-2" d="M564.26,278.79,557.45,272s-4.72-4.81,1.24-10.77,10.58-1.05,10.58-1.05l6.81,6.82,6.82,6.81s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><line class="cls-3" x1="537.39" y1="240.09" x2="560.55" y2="263.26"/><path class="cls-2" d="M400,114.5l-6.81-6.82s-4.72-4.82,1.24-10.78,10.58-1,10.58-1l6.81,6.82,6.82,6.81s4.71,4.82-1.24,10.78-10.58,1-10.58,1Z"/><path class="cls-2" d="M441.65,156.17l-6.82-6.82s-4.72-4.81,1.24-10.77,10.58-1,10.58-1l6.82,6.81,6.81,6.82S465,156,459,161.94,448.46,163,448.46,163Z"/><line class="cls-3" x1="414.77" y1="117.47" x2="437.93" y2="140.64"/><line class="cls-3" x1="455.53" y1="158.23" x2="478.69" y2="181.4"/><circle class="cls-4" cx="398.71" cy="102.24" r="8"/><circle class="cls-4" cx="577.03" cy="279.51" r="8"/><circle class="cls-4" cx="220.59" cy="279.51" r="8"/><text class="cls-5" transform="translate(296.94 333)">Under<tspan x="-74.69" y="54">Con</tspan><tspan class="cls-6" x="1.38" y="54">s</tspan><tspan x="23.97" y="54">tru</tspan><tspan class="cls-6" x="90.15" y="54">c</tspan><tspan x="112.72" y="54">tion</tspan></text><path class="cls-7" d="M575.9,327.21a1.7,1.7,0,0,0-2.84-.78l-10.49,10.5-9.58-1.6-1.59-9.58,10.49-10.49a1.7,1.7,0,0,0-.8-2.84A20.21,20.21,0,0,0,537,338.54l-30.11,30.1a9,9,0,0,0,12.77,12.77l30.08-30.08a20.25,20.25,0,0,0,26.14-24.12Zm-62.6,51.2a3.39,3.39,0,1,1,3.38-3.38A3.38,3.38,0,0,1,513.3,378.41Z"/><text class="cls-8" transform="translate(268.7 439)">So<tspan class="cls-9" x="23.48" y="0">r</tspan><tspan x="29.74" y="0">ry </tspan><tspan class="cls-10" x="55.13" y="0">f</tspan><tspan x="61.53" y="0">or the in</tspan><tspan class="cls-11" x="138.68" y="0">c</tspan><tspan x="148.63" y="0">o</tspan><tspan class="cls-12" x="160.37" y="0">n</tspan><tspan x="170.94" y="0">vinien</tspan><tspan class="cls-11" x="224.7" y="0">c</tspan><tspan x="234.65" y="0">e</tspan></text><path class="cls-13" d="M236.71,409.67l10.12-.44,10.12-.36,20.24-.71H520.07c13.49.5,27,.89,40.48,1.5-13.49.6-27,1-40.48,1.5H277.19L257,410.47l-10.12-.37Z"/></svg>-->
      <!--<svg class="sign absolute" id="sign1" data-name="Capa 1 En" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" :height="height" :width="width"  :style="[ lang2 == 'en' ? {opacity:1,visibility:'visible'}:{opacity:0,visibility:'hidden'}]"><title>gattiConstruction2</title><path class="cls-1" d="M226.58,269.23l346.21-.36c13.19,0,23.82,14,23.61,31.05l-1.57,129c-.21,16.69-10.71,30.08-23.59,30.08H226.6c-13,0-23.59-13.68-23.59-30.56V299.79C203,282.92,213.56,269.24,226.58,269.23Z"/><path class="cls-2" d="M315.44,196.64l6.81-6.81S327,185,321,179.05s-10.58-1-10.58-1l-6.81,6.81-6.82,6.82s-4.72,4.82,1.24,10.77,10.58,1.05,10.58,1.05Z"/><path class="cls-2" d="M273.76,238.32l6.82-6.82s4.72-4.82-1.24-10.77-10.58-1-10.58-1l-6.82,6.82-6.81,6.81s-4.72,4.82,1.24,10.78,10.58,1,10.58,1Z"/><line class="cls-3" x1="300.64" y1="199.62" x2="277.48" y2="222.78"/><path class="cls-2" d="M233,279.08l6.82-6.82s4.71-4.81-1.24-10.77S228,260.44,228,260.44l-6.82,6.82-6.81,6.81s-4.72,4.82,1.24,10.78,10.57,1,10.57,1Z"/><line class="cls-3" x1="259.88" y1="240.38" x2="236.71" y2="263.55"/><path class="cls-2" d="M397.29,114.79l6.82-6.82s4.72-4.82-1.24-10.78-10.58-1-10.58-1L385.47,103l-6.81,6.81s-4.72,4.82,1.24,10.78,10.58,1,10.58,1Z"/><path class="cls-2" d="M355.62,156.46l6.81-6.82s4.72-4.81-1.24-10.77-10.57-1-10.57-1l-6.82,6.81L337,151.46s-4.71,4.81,1.25,10.77,10.57,1.05,10.57,1.05Z"/><line class="cls-3" x1="382.5" y1="117.76" x2="359.33" y2="140.93"/><line class="cls-3" x1="341.74" y1="158.52" x2="318.57" y2="181.69"/><path class="cls-2" d="M481.83,196.35,475,189.54s-4.71-4.82,1.24-10.78,10.58-1,10.58-1l6.82,6.81,6.81,6.82s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><path class="cls-2" d="M523.5,238l-6.81-6.82s-4.72-4.82,1.24-10.77,10.58-1.05,10.58-1.05l6.81,6.82,6.82,6.81s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><line class="cls-3" x1="496.62" y1="199.33" x2="519.79" y2="222.49"/><path class="cls-2" d="M564.26,278.79,557.45,272s-4.72-4.81,1.24-10.77,10.58-1.05,10.58-1.05l6.81,6.82,6.82,6.81s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><line class="cls-3" x1="537.39" y1="240.09" x2="560.55" y2="263.26"/><path class="cls-2" d="M400,114.5l-6.81-6.82s-4.72-4.82,1.24-10.78,10.58-1,10.58-1l6.81,6.82,6.82,6.81s4.71,4.82-1.24,10.78-10.58,1-10.58,1Z"/><path class="cls-2" d="M441.65,156.17l-6.82-6.82s-4.72-4.81,1.24-10.77,10.58-1,10.58-1l6.82,6.81,6.81,6.82S465,156,459,161.94,448.46,163,448.46,163Z"/><line class="cls-3" x1="414.77" y1="117.47" x2="437.93" y2="140.64"/><line class="cls-3" x1="455.53" y1="158.23" x2="478.69" y2="181.4"/><circle class="cls-4" cx="398.71" cy="102.24" r="8"/><circle class="cls-4" cx="577.03" cy="279.51" r="8"/><circle class="cls-4" cx="220.59" cy="279.51" r="8"/><text class="cls-5" transform="translate(296.94 333)">Under<tspan x="-74.69" y="54">Con</tspan><tspan class="cls-6" x="1.38" y="54">s</tspan><tspan x="23.97" y="54">tru</tspan><tspan class="cls-6" x="90.15" y="54">c</tspan><tspan x="112.72" y="54">tion</tspan></text><path class="cls-7" d="M575.9,327.21a1.7,1.7,0,0,0-2.84-.78l-10.49,10.5-9.58-1.6-1.59-9.58,10.49-10.49a1.7,1.7,0,0,0-.8-2.84A20.21,20.21,0,0,0,537,338.54l-30.11,30.1a9,9,0,0,0,12.77,12.77l30.08-30.08a20.25,20.25,0,0,0,26.14-24.12Zm-62.6,51.2a3.39,3.39,0,1,1,3.38-3.38A3.38,3.38,0,0,1,513.3,378.41Z"/><text class="cls-8" transform="translate(268.7 439)">So<tspan class="cls-9" x="23.48" y="0">r</tspan><tspan x="29.74" y="0">ry </tspan><tspan class="cls-10" x="55.13" y="0">f</tspan><tspan x="61.53" y="0">or the in</tspan><tspan class="cls-11" x="138.68" y="0">c</tspan><tspan x="148.63" y="0">o</tspan><tspan class="cls-12" x="160.37" y="0">n</tspan><tspan x="170.94" y="0">vinien</tspan><tspan class="cls-11" x="224.7" y="0">c</tspan><tspan x="234.65" y="0">e</tspan></text><path class="cls-13" d="M236.71,409.67l10.12-.44,10.12-.36,20.24-.71H520.07c13.49.5,27,.89,40.48,1.5-13.49.6-27,1-40.48,1.5H277.19L257,410.47l-10.12-.37Z"/></svg>
      <svg class="sign absolute" id="sign2" data-name="Capa 2 Es" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" :height="height" :width="width"  :style="[ lang2 == 'es' ? {opacity:1,visibility:'visible'}:{opacity:0,visibility:'hidden'}]"><title>gattiConstructionEs</title><path class="cls-1" d="M226.58,269.23l346.21-.36c13.19,0,23.82,14,23.61,31.05l-1.57,129c-.21,16.69-10.71,30.08-23.59,30.08H226.6c-13,0-23.59-13.68-23.59-30.56V299.79C203,282.92,213.56,269.24,226.58,269.23Z"/><path class="cls-2" d="M315.44,196.64l6.81-6.81S327,185,321,179.05s-10.58-1-10.58-1l-6.81,6.81-6.82,6.82s-4.72,4.82,1.24,10.77,10.58,1.05,10.58,1.05Z"/><path class="cls-2" d="M273.76,238.32l6.82-6.82s4.72-4.82-1.24-10.77-10.58-1-10.58-1l-6.82,6.82-6.81,6.81s-4.72,4.82,1.24,10.78,10.58,1,10.58,1Z"/><line class="cls-3" x1="300.64" y1="199.62" x2="277.48" y2="222.78"/><path class="cls-2" d="M233,279.08l6.82-6.82s4.71-4.81-1.24-10.77S228,260.44,228,260.44l-6.82,6.82-6.81,6.81s-4.72,4.82,1.24,10.78,10.57,1,10.57,1Z"/><line class="cls-3" x1="259.88" y1="240.38" x2="236.71" y2="263.55"/><path class="cls-2" d="M397.29,114.79l6.82-6.82s4.72-4.82-1.24-10.78-10.58-1-10.58-1L385.47,103l-6.81,6.81s-4.72,4.82,1.24,10.78,10.58,1,10.58,1Z"/><path class="cls-2" d="M355.62,156.46l6.81-6.82s4.72-4.81-1.24-10.77-10.57-1-10.57-1l-6.82,6.81L337,151.46s-4.71,4.81,1.25,10.77,10.57,1.05,10.57,1.05Z"/><line class="cls-3" x1="382.5" y1="117.76" x2="359.33" y2="140.93"/><line class="cls-3" x1="341.74" y1="158.52" x2="318.57" y2="181.69"/><path class="cls-2" d="M481.83,196.35,475,189.54s-4.71-4.82,1.24-10.78,10.58-1,10.58-1l6.82,6.81,6.81,6.82s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><path class="cls-2" d="M523.5,238l-6.81-6.82s-4.72-4.82,1.24-10.77,10.58-1.05,10.58-1.05l6.81,6.82,6.82,6.81s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><line class="cls-3" x1="496.62" y1="199.33" x2="519.79" y2="222.49"/><path class="cls-2" d="M564.26,278.79,557.45,272s-4.72-4.81,1.24-10.77,10.58-1.05,10.58-1.05l6.81,6.82,6.82,6.81s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><line class="cls-3" x1="537.39" y1="240.09" x2="560.55" y2="263.26"/><path class="cls-2" d="M400,114.5l-6.81-6.82s-4.72-4.82,1.24-10.78,10.58-1,10.58-1l6.81,6.82,6.82,6.81s4.71,4.82-1.24,10.78-10.58,1-10.58,1Z"/><path class="cls-2" d="M441.65,156.17l-6.82-6.82s-4.72-4.81,1.24-10.77,10.58-1,10.58-1l6.82,6.81,6.81,6.82S465,156,459,161.94,448.46,163,448.46,163Z"/><line class="cls-3" x1="414.77" y1="117.47" x2="437.93" y2="140.64"/><line class="cls-3" x1="455.53" y1="158.23" x2="478.69" y2="181.4"/><circle class="cls-4" cx="398.71" cy="102.24" r="8"/><circle class="cls-4" cx="577.03" cy="279.51" r="8"/><circle class="cls-4" cx="220.59" cy="279.51" r="8"/><text class="cls-5" transform="translate(329.46 333)">En<tspan x="-106.22" y="54">Con</tspan><tspan class="cls-6" x="-30.15" y="54">s</tspan><tspan x="-7.56" y="54">tru</tspan><tspan class="cls-7" x="58.62" y="54">c</tspan><tspan class="cls-8" x="80.97" y="54">cion</tspan></text><path class="cls-9" d="M575.9,327.21a1.7,1.7,0,0,0-2.84-.78l-10.49,10.5-9.58-1.6-1.59-9.58,10.49-10.49a1.7,1.7,0,0,0-.8-2.84A20.21,20.21,0,0,0,537,338.54l-30.11,30.1a9,9,0,0,0,12.77,12.77l30.08-30.08a20.25,20.25,0,0,0,26.14-24.12Zm-62.6,51.2a3.39,3.39,0,1,1,3.38-3.38A3.38,3.38,0,0,1,513.3,378.41Z"/><text class="cls-10" transform="translate(273.6 439)">Se<tspan class="cls-11" x="22.45" y="0">n</tspan><tspan x="32.88" y="0">tim</tspan><tspan class="cls-12" x="64.18" y="0">o</tspan><tspan x="75.67" y="0">s l</tspan><tspan class="cls-12" x="94.21" y="0">o</tspan><tspan x="105.7" y="0">s in</tspan><tspan class="cls-13" x="135.98" y="0">c</tspan><tspan x="145.93" y="0">o</tspan><tspan class="cls-14" x="157.67" y="0">nv</tspan><tspan x="178.8" y="0">enie</tspan><tspan class="cls-11" x="215.88" y="0">n</tspan><tspan class="cls-15" x="226.31" y="0">t</tspan><tspan x="232.72" y="0">es</tspan></text><path class="cls-16" d="M236.71,409.67l10.12-.44,10.12-.36,20.24-.71H520.07c13.49.5,27,.89,40.48,1.5-13.49.6-27,1-40.48,1.5H277.19L257,410.47l-10.12-.37Z"/><polygon class="cls-17" points="463.54 349.23 459.38 356.63 461.81 358.25 465.92 350.92 463.54 349.23"/></svg>
      <svg class="sign absolute" id="sign3" data-name="Capa 3 It" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" :height="height" :width="width"  :style="[ lang2 == 'it' ? {opacity:1,visibility:'visible'}:{opacity:0,visibility:'hidden'}]"><title>gattiConstructionIt</title><path class="cls-1" d="M226.58,269.23l346.21-.36c13.19,0,23.82,14,23.61,31.05l-1.57,129c-.21,16.69-10.71,30.08-23.59,30.08H226.6c-13,0-23.59-13.68-23.59-30.56V299.79C203,282.92,213.56,269.24,226.58,269.23Z"/><path class="cls-2" d="M315.44,196.64l6.81-6.81S327,185,321,179.05s-10.58-1-10.58-1l-6.81,6.81-6.82,6.82s-4.72,4.82,1.24,10.77,10.58,1.05,10.58,1.05Z"/><path class="cls-2" d="M273.76,238.32l6.82-6.82s4.72-4.82-1.24-10.77-10.58-1-10.58-1l-6.82,6.82-6.81,6.81s-4.72,4.82,1.24,10.78,10.58,1,10.58,1Z"/><line class="cls-3" x1="300.64" y1="199.62" x2="277.48" y2="222.78"/><path class="cls-2" d="M233,279.08l6.82-6.82s4.71-4.81-1.24-10.77S228,260.44,228,260.44l-6.82,6.82-6.81,6.81s-4.72,4.82,1.24,10.78,10.57,1,10.57,1Z"/><line class="cls-3" x1="259.88" y1="240.38" x2="236.71" y2="263.55"/><path class="cls-2" d="M397.29,114.79l6.82-6.82s4.72-4.82-1.24-10.78-10.58-1-10.58-1L385.47,103l-6.81,6.81s-4.72,4.82,1.24,10.78,10.58,1,10.58,1Z"/><path class="cls-2" d="M355.62,156.46l6.81-6.82s4.72-4.81-1.24-10.77-10.57-1-10.57-1l-6.82,6.81L337,151.46s-4.71,4.81,1.25,10.77,10.57,1.05,10.57,1.05Z"/><line class="cls-3" x1="382.5" y1="117.76" x2="359.33" y2="140.93"/><line class="cls-3" x1="341.74" y1="158.52" x2="318.57" y2="181.69"/><path class="cls-2" d="M481.83,196.35,475,189.54s-4.71-4.82,1.24-10.78,10.58-1,10.58-1l6.82,6.81,6.81,6.82s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><path class="cls-2" d="M523.5,238l-6.81-6.82s-4.72-4.82,1.24-10.77,10.58-1.05,10.58-1.05l6.81,6.82,6.82,6.81s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><line class="cls-3" x1="496.62" y1="199.33" x2="519.79" y2="222.49"/><path class="cls-2" d="M564.26,278.79,557.45,272s-4.72-4.81,1.24-10.77,10.58-1.05,10.58-1.05l6.81,6.82,6.82,6.81s4.72,4.82-1.24,10.78-10.58,1-10.58,1Z"/><line class="cls-3" x1="537.39" y1="240.09" x2="560.55" y2="263.26"/><path class="cls-2" d="M400,114.5l-6.81-6.82s-4.72-4.82,1.24-10.78,10.58-1,10.58-1l6.81,6.82,6.82,6.81s4.71,4.82-1.24,10.78-10.58,1-10.58,1Z"/><path class="cls-2" d="M441.65,156.17l-6.82-6.82s-4.72-4.81,1.24-10.77,10.58-1,10.58-1l6.82,6.81,6.81,6.82S465,156,459,161.94,448.46,163,448.46,163Z"/><line class="cls-3" x1="414.77" y1="117.47" x2="437.93" y2="140.64"/><line class="cls-3" x1="455.53" y1="158.23" x2="478.69" y2="181.4"/><circle class="cls-4" cx="398.71" cy="102.24" r="8"/><circle class="cls-4" cx="577.03" cy="279.51" r="8"/><circle class="cls-4" cx="220.59" cy="279.51" r="8"/><text class="cls-5" transform="translate(339.92 333)">In<tspan x="-117.5" y="54">Con</tspan><tspan class="cls-6" x="-41.43" y="54">s</tspan><tspan x="-18.84" y="54">truzione</tspan></text><path class="cls-7" d="M575.9,327.21a1.7,1.7,0,0,0-2.84-.78l-10.49,10.5-9.58-1.6-1.59-9.58,10.49-10.49a1.7,1.7,0,0,0-.8-2.84A20.21,20.21,0,0,0,537,338.54l-30.11,30.1a9,9,0,0,0,12.77,12.77l30.08-30.08a20.25,20.25,0,0,0,26.14-24.12Zm-62.6,51.2a3.39,3.39,0,1,1,3.38-3.38A3.38,3.38,0,0,1,513.3,378.41Z"/><text class="cls-8" transform="translate(269.6 439)">Spia<tspan class="cls-9" x="39.13" y="0">c</tspan><tspan x="49.08" y="0">e</tspan><tspan class="cls-10" x="59.79" y="0">n</tspan><tspan class="cls-11" x="70.22" y="0">t</tspan><tspan x="76.63" y="0">e per l'in</tspan><tspan class="cls-9" x="152.76" y="0">c</tspan><tspan x="162.71" y="0">o</tspan><tspan class="cls-12" x="174.45" y="0">nv</tspan><tspan x="195.59" y="0">enie</tspan><tspan class="cls-10" x="232.67" y="0">n</tspan><tspan class="cls-11" x="243.1" y="0">t</tspan><tspan x="249.5" y="0">e</tspan></text><path class="cls-13" d="M236.71,409.67l10.12-.44,10.12-.36,20.24-.71H520.07c13.49.5,27,.89,40.48,1.5-13.49.6-27,1-40.48,1.5H277.19L257,410.47l-10.12-.37Z"/></svg>
    </div>-->
  </div>
</template>

<script>
import projectCard from '../components/projectCard.vue';

export default {
  name:"Portfolio",
  props:['titleColor'],
  data(){
    return{
      color:1,
      height:'100px',
      width:'100px',
    }
  },
  methods:{
    resizeViewBox(){
      var w =  window.innerWidth;
      var h =  window.innerHeight;
      if(w/h>1){
        this.height = window.innerHeight/1.5+'px';
        this.width = window.innerWidth/1.5+'px';
      }
      else{
        this.height = window.innerHeight/1+'px';
        this.width = window.innerWidth/1+'px';
      }
    },
    getImg(name){
      return new URL(`../assets/img/${name}.png`, import.meta.url).href;
    }
  },
  components:{
    projectCard
  },
  computed:{
    lang2(){
      return this.$i18n.locale;
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.resizeViewBox();
    });
    window.addEventListener('resize',()=>{
      this.resizeViewBox();
    });
  }
}
</script>

<style scoped lang="scss">
.sign-wrapper{
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign{
  transform-origin: 50% 0;
  animation: swinging 5s ease-in-out alternate infinite;
}
#sign1{
  .cls-1 {
  fill:#040006;
  stroke:#252425;
  stroke-linejoin:bevel;
  }
  .cls-1,
  .cls-3 {
  stroke-linecap:round;
  }
  .cls-1,
  .cls-2,
  .cls-3 {
  stroke-width:5px;
  }
  .cls-2,
  .cls-3,
  .cls-5,
  .cls-7 {
  fill:none;
  stroke-miterlimit:10;
  }
  .cls-2,
  .cls-3 {
  stroke:#1a191a;
  }
  .cls-4 {
  fill:#999;
  }
  .cls-5 {
  font-size:45px;
  font-family:"Neon-glow";
  font-weight:700;
  }
  .cls-5,
  .cls-7 {
  stroke:#c85c7c;
  }
  .cls-6 {
  letter-spacing:0em;
  }
  .cls-7 {
  stroke-width:2px;
  }
  .cls-8 {
  font-size:20px;
  font-family:Neon80s, Neon 80s;
    font-family:"Neon";
  }
  .cls-13,
  .cls-8 {
  fill:#b172a7;
  }
  .cls-9 {
  letter-spacing:-0.08em;
  }
  .cls-10 {
  letter-spacing:-0.07em;
  }
  .cls-11 {
  letter-spacing:-0.04em;
  }
  .cls-12 {
  letter-spacing:-0.06em;
  }
}
#sign2{
  .cls-1 {
  fill:#040006;
  stroke:#252425;
  }
  .cls-1,
  .cls-17,
  .cls-3 {
  stroke-linecap:round;
  }
  .cls-1,
  .cls-17 {
  stroke-linejoin:bevel;
  }
  .cls-1,
  .cls-2,
  .cls-3 {
  stroke-width:5px;
  }
  .cls-17,
  .cls-2,
  .cls-3,
  .cls-5,
  .cls-9 {
  fill:none;
  }
  .cls-2,
  .cls-3 {
  stroke:#1a191a;
  }
  .cls-2,
  .cls-3,
  .cls-5,
  .cls-9 {
  stroke-miterlimit:10;
  }
  .cls-4 {
  fill:#999;
  }
  .cls-5 {
  font-size:45px;
  font-family:"Neon-glow";
  font-weight:700;
  }
  .cls-17,
  .cls-5,
  .cls-9 {
  stroke:#c85c7c;
  }
  .cls-6 {
  letter-spacing:0em;
  }
  .cls-7 {
  letter-spacing:-0.01em;
  }
  .cls-8 {
  letter-spacing:0em;
  }
  .cls-9 {
  stroke-width:2px;
  }
  .cls-10 {
  font-size:20px;
  font-family:"Neon";
  }
  .cls-10,
  .cls-16 {
  fill:#b172a7;
  }
  .cls-11 {
  letter-spacing:-0.07em;
  }
  .cls-12 {
  letter-spacing:-0.01em;
  }
  .cls-13 {
  letter-spacing:-0.04em;
  }
  .cls-14 {
  letter-spacing:-0.06em;
  }
  .cls-15 {
  letter-spacing:-0.07em;
  }
}
#sign3{
  .cls-1 {
  fill:#040006;
  stroke:#252425;
  stroke-linejoin:bevel;
  }
  .cls-1,
  .cls-3 {
  stroke-linecap:round;
  }
  .cls-1,
  .cls-2,
  .cls-3 {
  stroke-width:5px;
  }
  .cls-2,
  .cls-3,
  .cls-5,
  .cls-7 {
  fill:none;
  stroke-miterlimit:10;
  }
  .cls-2,
  .cls-3 {
  stroke:#1a191a;
  }
  .cls-4 {
  fill:#999;
  }
  .cls-5 {
  font-size:45px;
  font-family:"Neon-glow";
  font-weight:700;
  }
  .cls-5,
  .cls-7 {
  stroke:#c85c7c;
  }
  .cls-6 {
  letter-spacing:0em;
  }
  .cls-7 {
  stroke-width:2px;
  }
  .cls-8 {
  font-size:20px;
  font-family:"Neon";
  }
  .cls-13,
  .cls-8 {
  fill:#b172a7;
  }
  .cls-9 {
  letter-spacing:-0.04em;
  }
  .cls-10 {
  letter-spacing:-0.07em;
  }
  .cls-11 {
  letter-spacing:-0.07em;
  }
  .cls-12 {
  letter-spacing:-0.06em;
  }
}
@keyframes swinging{
  0%{transform: rotate(5deg);}
  50%{transform: rotate(-2.5deg)}
  100%{transform: rotate(5deg);}
}
</style>