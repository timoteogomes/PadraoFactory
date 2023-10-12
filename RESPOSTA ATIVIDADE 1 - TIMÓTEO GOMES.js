// Definindo uma interface comum para os computadores
class Computer {
  constructor(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

  toString() {
    return `Tipo: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}

// Definindo classes concretas para PC e Server
class PC extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, 'PC');
  }
}

class Server extends Computer {
  constructor(ram, hdd, cpu) {
    super(ram, hdd, cpu, 'Server');
  }
}

// Fábrica de computadores
class ComputerFactory {
  createComputer(type, ram, hdd, cpu) {
    switch (type.toLowerCase()) {
      case 'pc':
        return new PC(ram, hdd, cpu);
      case 'server':
        return new Server(ram, hdd, cpu);
      default:
        throw new Error('Tipo de computador inválido: ' + type);
    }
  }
}

// Uso da fábrica para criar instâncias de computadores
const factory = new ComputerFactory();

const myPC = factory.createComputer('PC', 4, 512, 3.4);
const myServer = factory.createComputer('Server', 64, 1024, 2.2);

// Imprimindo os atributos dos computadores
console.log(myPC.toString());
console.log(myServer.toString());
