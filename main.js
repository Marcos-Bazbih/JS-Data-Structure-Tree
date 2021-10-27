// const FAMILY = {
//     name: "gen 1",
//     child: {
//         name: "gen 2",
//         child: {
//             name: "gen 3",
//             child: {
//                 name: "gen 4",
//                 child: {
//                     name: "gen 5",
//                 }
//             }
//         }
//     }
// };


// const printFamilyOneChild = (tree) => {
//     console.log(tree.name);
//     if (tree.child) printFamilyOneChild(tree.child);
// };
// printFamilyOneChild(FAMILY);



const FAMILY_2 = {
    name: "grandfather",
    children: [
        {
            name: "father 1",
            children: [
                {
                    name: "son 1",
                    children: []
                },
                {
                    name: "son 2",
                    children: []
                }
            ]
        },
        {
            name: "father 2",
            children: [
                {
                    name: "son 1",
                    children: []
                },
                {
                    name: "son 2",
                    children: []
                },
                {
                    name: "son 3",
                    children: []
                },
            ]
        },
        {
            name: "father 3",
            children: [
                {
                    name: "son 1",
                    children: []
                },
                {
                    name: "son 2",
                    children: []
                }
            ]
        }
    ]
};


const printFamily = (tree) => {
    console.log(tree.name);
    if (tree.children) for (let item of tree.children) printFamily(item);
};
printFamily(FAMILY_2);