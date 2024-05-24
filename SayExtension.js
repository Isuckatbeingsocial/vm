class sayext {
  constructor() {
    this.id = 'sampleExtension';
    this.color = '#FFA500';
  }

  MyInfo() {
    return {
      extname: 'Sample Extension',
      id: this.id,
      color1: this.color,
      blocks: [
        { Opcode: 'SAY_HELLO', PARAMS: [], TEXT: 'Say Hello', TYPE: 'command' }
      ],
      menus: []
    };
  }

  SAY_HELLO() {
    console.log('Hello from the sample extension!');
  }
}


vm.extensionHandler.register(new sayext());
