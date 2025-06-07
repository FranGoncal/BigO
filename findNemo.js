const vazio = [];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(1000).fill('nemo');

const veryLarge = new Array(100000).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            //console.log("Found nemo!")
        }
    }
    let t1 = performance.now();   
    console.log("Call to find Nemo took "+ (t1-t0).toFixed(3) + " miliseconds.")
}


//time comparasion//
console.log("Time comparasion:")

//avg:  0.002ms
findNemo(nemo);

//avg:  0.003ms
findNemo(everyone);

//avg:  0.129
findNemo(large);

//avg:  3.521ms
findNemo(veryLarge);





/*

A program’s short runtime doesn’t necessarily mean it is well-written.
Performance can vary greatly depending on the machine running the code. 
This means comparing runtimes across different systems isn’t a fair or reliable method of evaluating code quality.

A well-written program might run slowly on an underpowered machine, 
while poorly written code could perform well on high-end hardware. As a result, 
comparing raw execution times in such conditions leads to misleading conclusions.

Instead of focusing on small-scale runtime comparisons, 
we should evaluate code based on its scalability and maintainability.
Scalable code is designed to perform efficiently as the workload grows and is typically more robust and adaptable in real-world scenarios.

*/