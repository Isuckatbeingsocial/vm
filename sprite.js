// Add a sprite
const code = [
    ["SAY_HELLO", []]
];

let spriteJson = {
  "id": "sprite1",
  "name": "Sprite 1",
  "variables": [],
  "isOriginal": true,
  "spriteStorage": null,
  "imagename": "sprite1.png",
  "imagedata": null,
  "imagearray": [],
  "layer": 1,
  "drawableID": 1,
  "x": 0,
  "y": 0,
  "scripts": ["G", "V"],
  "blocks": {
    "G": [
      ["FOREACH", ["hello", "123456", code ]],
      ["SAY_HELLO", []]
    ],
    "V": [
      ["SAY_HELLO", []],
      ["SAY_HELLO", []]
    ]
  }
};

// Add the sprite to the VM
vm.addSprite(spriteJson);

// Find the added sprite by ID and add a variable to it
const addedSprite = vm.runtime.findSpriteById('sprite1');
if (addedSprite) {
    addedSprite.addVariable('hello', 0, 'variable', false, 'global');
} 
