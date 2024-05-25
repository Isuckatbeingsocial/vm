class flowblocks {
  constructor() {
    this.id = 'flowblocks';
    this.color = '#FFA500';
  }

  MyInfo() {
    return {
      extname: 'Control',
      id: this.id,
      color1: this.color,
      blocks: [
        { Opcode: 'CONDITIONALIF', PARAMS: ['condition', 'code'], TEXT: 'IF [condition] then [code]', TYPE: 'conditional' },
        { Opcode: 'FOREACH', PARAMS: ['VAR', 'STRNG', 'CODE'], TEXT: 'FOR EACH [VAR] IN [STRNG] DO [CODE]', TYPE: 'conditional'},
        { Opcode: 'FOR', PARAMS: ['VAR', 'START', 'END', 'CODE'], TEXT: 'FOR [VAR] FROM [START] TO [END] DO [CODE]', TYPE: 'conditional'},
        { Opcode: 'STOPALL', PARAMS: [], TEXT: 'STOP ALL', TYPE: 'command'},
        { Opcode: 'CLONE', PARAMS: [], TEXT: 'Create clone of myself', TYPE: 'command'},
        { Opcode: 'IfElse', PARAMS: ['condition', 'code1', 'code2'], TEXT: 'IF [condition] then [code1] else [code2]', TYPE: 'conditional' }
      ],
      menus: []
    };
  }

  CONDITIONALIF(condition, code) {
    if (condition && Array.isArray(code)) {
        code.forEach(([opcode, args]) => {
           vm.RunBlockByOpCode(opcode, args);
        });
    }
  }

  FOREACH(VAR, STRNG, CODE) {
    for (let i = 0; i < STRNG.length; i++) {
        let item = Array.isArray(STRNG) ? STRNG[i] : STRNG.charAt(i);
        
        vm.runtime.CurrentTarget.findVariableByName(VAR).value = item;
        
        CODE.forEach(([opcode, args]) => {
            vm.RunBlockByOpCode(opcode, args);
        });
    }
  }

  FOR(VAR, START, END, CODE) {
    for (let i = START; i <= END; i++) {
        vm.runtime.CurrentTarget.findVariableByName(VAR).value = i;
        
        CODE.forEach(([opcode, args]) => {
            vm.RunBlockByOpCode(opcode, args);
        });
    }
  }

  STOPALL() {
    vm.stopall();
  }

  CLONE() {
   let current = vm.runtime.CurrentTarget
   vm.duplicateTarget(current.name)

  }



IfElse(condition, code1, code2) {
    if (condition && Array.isArray(code1)) {
        code1.forEach(([opcode, args]) => {
            vm.RunBlockByOpCode(opcode, args);
        });
    } else {
        code2.forEach(([opcode, args]) => {
            vm.RunBlockByOpCode(opcode, args);
        });
    }
}



}

vm.extensionHandler.register(new flowblocks());
