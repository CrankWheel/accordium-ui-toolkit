import React from 'react';
import { storiesOf } from '@storybook/react';
import Lottie from './Lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: {"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Dot14","ks":{"o":{"k":100},"r":{"k":-320},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[47],"e":[29]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[29],"e":[9]},{"t":78}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[48],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[30],"e":[10]},{"t":78}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.63,0.81,0.94,1],"e":[0.82,0.65,0.91,1]},{"t":56}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[5],"e":[2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[2],"e":[0]},{"t":70}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":4,"nm":"Dot13","ks":{"o":{"k":100},"r":{"k":-306.6},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[44],"e":[19]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[19],"e":[0]},{"t":89}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[45],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[20],"e":[1]},{"t":89}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.66,0.8,0.97,1],"e":[0.82,0.65,0.91,1]},{"t":56}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[5],"e":[0]},{"t":89}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"Dot12","ks":{"o":{"k":100},"r":{"k":-271.7},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[47],"e":[29]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[29],"e":[9]},{"t":78}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[48],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[30],"e":[10]},{"t":78}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.78,0.59,0.9,1],"e":[0.89,0.82,0.58,1]},{"t":56}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[5],"e":[2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[2],"e":[0]},{"t":70}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"Dot11","ks":{"o":{"k":100},"r":{"k":-258.3},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[44],"e":[19]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[19],"e":[0]},{"t":89}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[45],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[20],"e":[1]},{"t":89}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.78,0.62,0.89,1],"e":[0.92,0.75,0.33,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[0.92,0.75,0.33,1],"e":[0.55,0.27,0.71,1]},{"t":66}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[5],"e":[0]},{"t":89}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"Dot10","ks":{"o":{"k":100},"r":{"k":-220.3},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[47],"e":[29]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[29],"e":[9]},{"t":78}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[48],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[30],"e":[10]},{"t":78}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.61,0.89,0.79,1],"e":[0.79,0.74,0.6,1]},{"t":56}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[5],"e":[2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[2],"e":[0]},{"t":70}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"Dot9","ks":{"o":{"k":100},"r":{"k":-206.9},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[44],"e":[19]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[19],"e":[0]},{"t":89}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[45],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[20],"e":[1]},{"t":89}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.62,0.88,0.78,1],"e":[0.79,0.74,0.6,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[0.79,0.74,0.6,1],"e":[0.55,0.27,0.71,1]},{"t":66}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[5],"e":[0]},{"t":89}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tm","s":{"k":44,"ix":1},"e":{"k":45,"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":4,"nm":"Trim Paths 2"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"Dot8","ks":{"o":{"k":100},"r":{"k":-168.2},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[47],"e":[29]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[29],"e":[9]},{"t":78}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[48],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[30],"e":[10]},{"t":78}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.86,0.62,0.68,1],"e":[0.33,0.6,0.8,1]},{"t":56}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[5],"e":[2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[2],"e":[0]},{"t":70}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":7,"ty":4,"nm":"Dot7","ks":{"o":{"k":100},"r":{"k":-154.8},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[44],"e":[19]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[19],"e":[0]},{"t":89}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[45],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[20],"e":[1]},{"t":89}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.89,0.6,0.69,1],"e":[0.33,0.6,0.8,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[0.33,0.6,0.8,1],"e":[0.55,0.27,0.71,1]},{"t":66}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[5],"e":[0]},{"t":89}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":8,"ty":4,"nm":"Dot6","ks":{"o":{"k":100},"r":{"k":-117.1},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[47],"e":[29]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[29],"e":[9]},{"t":78}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[48],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[30],"e":[10]},{"t":78}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.62,0.82,0.96,1],"e":[0.7,0.84,0.66,1]},{"t":56}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[5],"e":[2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[2],"e":[0]},{"t":70}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tm","s":{"k":29,"ix":1},"e":{"k":30,"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":4,"nm":"Trim Paths 2"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":9,"ty":4,"nm":"Dot5","ks":{"o":{"k":100},"r":{"k":-103.7},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[44],"e":[19]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[19],"e":[0]},{"t":89}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[45],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[20],"e":[1]},{"t":89}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.72,0.85,0.95,1],"e":[0.7,0.84,0.67,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[0.7,0.84,0.67,1],"e":[0.55,0.27,0.71,1]},{"t":66}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[5],"e":[0]},{"t":89}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":10,"ty":4,"nm":"Dot4","ks":{"o":{"k":100},"r":{"k":-69.3},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[47],"e":[29]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[29],"e":[9]},{"t":78}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[48],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[30],"e":[10]},{"t":78}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.8,0.58,0.93,1],"e":[0.7,0.85,0.66,1]},{"t":56}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[5],"e":[2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[2],"e":[0]},{"t":70}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":11,"ty":4,"nm":"Dot3","ks":{"o":{"k":100},"r":{"k":-55.9},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[44],"e":[19]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[19],"e":[0]},{"t":89}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[45],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[20],"e":[1]},{"t":89}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.64,0.81,0.97,1],"e":[0.7,0.85,0.66,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[0.7,0.85,0.66,1],"e":[0.55,0.27,0.71,1]},{"t":66}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[5],"e":[0]},{"t":89}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":12,"ty":4,"nm":"Dot2","ks":{"o":{"k":100},"r":{"k":-13.4},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[47],"e":[29]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[29],"e":[9]},{"t":78}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[48],"e":[30]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[30],"e":[10]},{"t":78}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.61,0.89,0.79,1],"e":[0.63,0.51,0.62,1]},{"t":56}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[5],"e":[2]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[2],"e":[0]},{"t":70}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":13,"ty":4,"nm":"Dot1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-37.5,-40.5],[-1,0.5]],"c":false}},"nm":"Path 1"},{"ty":"tm","s":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[44],"e":[19]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[19],"e":[0]},{"t":89}],"ix":1},"e":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[45],"e":[20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[20],"e":[1]},{"t":89}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1"},{"ty":"st","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":44,"s":[0.62,0.88,0.78,1],"e":[0.8,0.52,0.76,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[0.8,0.52,0.76,1],"e":[0.55,0.27,0.71,1]},{"t":66}]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":56,"s":[5],"e":[0]},{"t":89}]},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":44,"op":90,"st":-44,"bm":0,"sr":1},{"ddd":0,"ind":14,"ty":4,"nm":"C2","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":38,"s":[25.744,25.744],"e":[60.744,60.744]},{"t":45}]},"p":{"k":[0,0]},"nm":"Ellipse Path 1"},{"ty":"st","fillEnabled":true,"c":{"k":[0.81,0.58,0.96,1]},"o":{"k":100},"w":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":38,"s":[23.3],"e":[1]},{"t":45}]},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1"}],"ip":38,"op":46,"st":-47,"bm":0,"sr":1},{"ddd":0,"ind":15,"ty":4,"nm":"C1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[50,50,0]},"a":{"k":[0,0,0]},"s":{"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":33,"s":[4,4,100],"e":[40,40,100]},{"t":39}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"k":[57.344,57.344]},"p":{"k":[0,0]},"nm":"Ellipse Path 1"},{"ty":"fl","fillEnabled":true,"c":{"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":33,"s":[1,0,0.26,1],"e":[0.81,0.56,0.97,1]},{"t":39}]},"o":{"k":100},"nm":"Fill 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1"}],"ip":33,"op":39,"st":-46,"bm":0,"sr":1},{"ddd":0,"ind":16,"ty":4,"nm":"H2","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[50.217,50.85,0]},"a":{"k":[2.958,2.958,0]},"s":{"k":[{"i":{"x":[0.32,0.32,0.32],"y":[1,1,0.32]},"o":{"x":[0.68,0.68,0.68],"y":[0,0,0.68]},"n":["0p32_1_0p68_0","0p32_1_0p68_0","0p32_0p32_0p68_0p68"],"t":43,"s":[4,4,100],"e":[48.44,48.44,100]},{"i":{"x":[0.32,0.32,0.32],"y":[1,1,0.32]},"o":{"x":[0.68,0.68,0.68],"y":[0,0,0.68]},"n":["0p32_1_0p68_0","0p32_1_0p68_0","0p32_0p32_0p68_0p68"],"t":54,"s":[48.44,48.44,100],"e":[37.04,37.04,100]},{"i":{"x":[0.32,0.32,0.32],"y":[1,1,0.32]},"o":{"x":[0.68,0.68,0.68],"y":[0,0,0.68]},"n":["0p32_1_0p68_0","0p32_1_0p68_0","0p32_0p32_0p68_0p68"],"t":70,"s":[37.04,37.04,100],"e":[40,40,100]},{"t":91}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[4.833,0],[0,-3.333],[-3.25,0],[0,8.333],[3.917,0],[0,0]],"o":[[-4.833,0],[0,7.667],[3.25,0],[0,-4.5],[-3.917,0],[0,0]],"v":[[-4.583,-10.167],[-11.25,-2.25],[2.833,16.083],[17.167,-2.333],[10.167,-10],[2.917,-5.917]],"c":true}},"nm":"Path 1"},{"ty":"fl","fillEnabled":true,"c":{"k":[0.84,0.18,0.32,1]},"o":{"k":100},"nm":"Fill 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":43,"op":136,"st":-46,"bm":0,"sr":1},{"ddd":0,"ind":17,"ty":4,"nm":"H1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[50.217,50.85,0]},"a":{"k":[2.958,2.958,0]},"s":{"k":[40,40,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"k":{"i":[[4.833,0],[0,-3.333],[-3.25,0],[0,8.333],[3.917,0],[0,0]],"o":[[-4.833,0],[0,7.667],[3.25,0],[0,-4.5],[-3.917,0],[0,0]],"v":[[-4.583,-10.167],[-11.25,-2.25],[2.833,16.083],[17.167,-2.333],[10.167,-10],[2.917,-5.917]],"c":true}},"nm":"Path 1"},{"ty":"fl","fillEnabled":true,"c":{"k":[0.67,0.73,0.76,1]},"o":{"k":100},"nm":"Fill 1"},{"ty":"tr","p":{"k":[0,0],"ix":2},"a":{"k":[0,0],"ix":1},"s":{"k":[100,100],"ix":3},"r":{"k":0,"ix":6},"o":{"k":100,"ix":7},"sk":{"k":0,"ix":4},"sa":{"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1"}],"ip":0,"op":33,"st":-46,"bm":0,"sr":1}],"v":"4.4.26","ddd":0,"ip":0,"op":116,"fr":60,"w":100,"h":100}
  ,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

storiesOf('Lottie Component', module).add('with default props', () => (
  <div>
    <Lottie options={defaultOptions} height={400} width={400} />
  </div>
));
