//     O(n) ---> Linear Time


const vazio = [];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(1000).fill('nemo');

const veryLarge = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log("Found nemo!")
            break;
        }
    }
}


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

BigO can compare how scalable code can be regardless of performance differences.
*/

findNemo(veryLarge); 




