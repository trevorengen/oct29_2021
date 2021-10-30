var graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: [],
}

function hasPath(graph, src, dst) {
    let q = [src];
    let c = 0;
    while (c < q.length) {
        let curr = q[c];
        if (graph[curr].includes(dst)) {
            return true;
        }
        q = [...q, ...graph[curr]];
        c++;
    }
    return false;
}

function hasPathRec(graph, src, dst) {
    if (graph[src].includes(dst)) return true;
    for (var i = 0; i < graph[src].length; i++) {
        if (hasPathRec(graph, graph[src][i], dst)) return true;
        return false;
    }
}

console.log(hasPathRec(graph, 'f', 'i'));