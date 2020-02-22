class Computer {

    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = +ramMemory,
            this.cpuGHz = +cpuGHz,
            this.hddMemory = +hddMemory,
            this.taskManager = [],
            this.installedPrograms = [],
            this.ramMemoryRate = 0,
            this.cpuGHzRate = 0
    }

    installAProgram(name, requiredSpace) {

        if (this.hddMemory < +requiredSpace) {

            return new Error("There is not enough space on the hard drive");
        }
        let newObj = { name: name, requiredSpace: +requiredSpace };
        this.installedPrograms.push(newObj);
        this.hddMemory -= +requiredSpace;
        return newObj;
    }

    uninstallAProgram(name) {

        let program = this.installedPrograms.filter(x => x[`name`] === name)[0];

        if (!this.installedPrograms.includes(program)) {
            return new Error("Control panel is not responding");
        }

        this.installedPrograms = this.installedPrograms.filter(x => x[`name`] !== name);
        this.hddMemory += program[`requiredSpace`];
        return this.installedPrograms;
    }

    openAProgram(name) {

        let program = this.installedPrograms.filter(x => x[`name`] === name)[0];

        if (!this.installedPrograms.includes(program)) {
            return new Error(`The ${name} is not recognized`);
        }

        if (this.taskManager.includes(program)) {
            return new Error(`The ${name} is already open`);
        }

        let RAMMemory = (program.requiredSpace / this.ramMemory) * 1.5;
        let CPUUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;
        this.ramMemoryRate += RAMMemory;
        this.cpuGHzRate += CPUUsage;

        if (this.ramMemoryRate >= 100) {
            return new Error(`${name} caused out of memory exception`);
        }
        if (this.cpuGHzRate >= 100) {
            return new Error(`${name} caused out of cpu exception`);
        }

        let newObj = {name: name, ramUsage: RAMMemory, cpuUsage: CPUUsage};
        this.taskManager.push(newObj);
        return newObj;
    }

    taskManagerView() {

        if (this.taskManager.length === 0) {
            return new Error(`All running smooth so far`);
        }

        let result = ``;
        this.taskManager.map(x => {
            result += `Name - ${x.name} | Usage - CPU: ${x.cpuUsage.toFixed(0)}%, RAM: ${x.ramUsage.toFixed(0)}%\n`
        });
        return result.trim();
    }
}
let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());