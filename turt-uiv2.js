//==============================================================================
// Native Spark AR UI boiler plate 
// - Brandy G.
// 3.14.2020
//==============================================================================

// Load in the required modules
const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

const tinfo = Scene.root.find('tinfo');
const turtle = Scene.root.find('turtle');


const index = 0;
const configuration = {
selectedIndex: index,

items: [
{image_texture: Textures.get('b1')},
{image_texture: Textures.get('b2')},
{image_texture: Textures.get('b3')},
{image_texture: Textures.get('b4')},
{image_texture: Textures.get('b5')},
{image_texture: Textures.get('b6')},
{image_texture: Textures.get('b7')},

],

mats: [
{material: Materials.get("turtle-1")},
{material: Materials.get("turtle-2")},
{material: Materials.get("turtle-3")},
{material: Materials.get("turtle-4")},
{material: Materials.get("turtle-5")},
{material: Materials.get("turtle-6")},
{material: Materials.get("turtle-7")},

],

mats2: [
{material2: Materials.get("turtle-mat")},
{material2: Materials.get("turtle-mat0")},
{material2: Materials.get("turtle-mat1")},
{material2: Materials.get("turtle-mat2")},
{material2: Materials.get("turtle-mat3")},
{material2: Materials.get("turtle-mat4")},
{material2: Materials.get("turtle-mat5")},

],
};


const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) 
{
tinfo.material = configuration.mats[val.newValue].material;
turtle.material = configuration.mats2[val.newValue].material2;
});