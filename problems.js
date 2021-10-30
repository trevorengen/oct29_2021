/* Imagine that an employment tree represents the formal employee hierarchy at Amazon. Manager nodes have
chid nodes for each employee that reports to them; each of these employees can, in turn, have child nodes
representing their respective reportees. Each node in the tree contains an integer representing the number of
months the employee has spent at the company. Team tenure is computed as the average tenure of the manager
and all the company employees working below the manager. The oldest team has the highest team tenure.

Write an algorithm to find the manager of the team with the highest tenure. An employee must have child nodes
to be a manager. */

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

var company = new Node(20);
var m1 = new Node(12);
var m2 = new Node(18);
company.children.push(m1);
company.children.push(m2);
var emp1 = new Node(11);
var emp2 = new Node(2);
var emp3 = new Node(3);
var emp4 = new Node(15);
var emp5 = new Node(8);
var m1Emp = [emp1, emp2, emp3];
var m2Emp = [emp4, emp5];
m1.children.push(...m1Emp);
m2.children.push(...m2Emp);

function seniorTeam(company) {
    let teams = new Map();
    let averageFinder = (node) => {
        if (node.children.length === 0) return [node.value];
        let team = [node.value];
        for (var i = 0; i < node.children.length; i++) {
            let children = averageFinder(node.children[i]);
            team.push(...children);
        }
        teams.set(node, team);
        return team;
    }
    averageFinder(company);
    let max = 0;
    let highKey;
    teams.forEach((val, key) => {
        let avg = val.reduce((a, b) => a + b) / val.length;
        if (avg > max) {
            max = avg;
            highKey = key
        };
    });
    return highKey;
}

/* Your team at amazon is overseeing the design of a new high-efficiency data center at HQ2. 
A power grid need to be generated for supplying power to N servers. All servers in the grid have to be connected
such that they have access to power. The cost of connections between different servers varies.

Assume that there are no ties, names of servers are unique, connections are directionless, 
there is at most one connection between a pair of servers, all costs are greater than zero, 
and a server does not connect to itself.

Write an algorithm to minimize the cost of connecting all servers in the power grid.

Input
two arguments - num, an Integer representing number of connections.
connectons, representing a list of connections where each element of the list consists of two 
servers and the cost of connection between the servers. */

function cheapestGrid(num, connections) {
    let graph = new Map();
    for (var i = 0; i < connections.length; i++) {
        if (graph.has(connections[i][0])) {
            let key = connections[i][1];
            let val = connections[i][2];
            graph.connections[i][0].push({});
            graph.connections[i][0][graph.connections[i].length][key] = val;
        } else {
            let obj = {};
            obj[connections[i][1]] = connections[i][2];
            graph.set(connections[i][0], obj);
        }
    }
    console.log(graph);
}

let num = 5;
let connection =[
    ['A','B',1],
 	['B','C',4],
 	['B','D',6],
 	['D','E',5],
 	['C','E',1]
];

cheapestGrid(num, connection);