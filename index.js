class List {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    Append(n){
        if(this.head === null){
            this.head = n
            this.head.prev = null;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = n
            currentNode.next.prev = currentNode;
        }
        this.size++;
    }

    GetNodeByName(name){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.info === name)
                return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }

    InsertAfter(n, c){
        if(this.head === null){
            this.head = n
        }
        else {
            let node = c.next;
            n.next = node;
            if(node)
                node.prev = n;
            c.next = n;
            n.prev = c;
        }
        this.size++;
    }

    Delete(c){
        if(this.head === null){
            console.log('Lista je prazna')
            return false;
        }
        else {
            let currentNode = this.head;
            let node;
            while(currentNode !== null){
                if(currentNode === c){
                    node = currentNode;
                    break;
                }
                currentNode = currentNode.next;
            }
            let p = node.prev;
            let n = node.next;
            if(p)
                p.next = n;
            else
                this.head = n;
            if(n)
                n.prev = p;
            node.next = null;
            node.prev = null;
            node = null;
            this.size--;
        }
    }

    Print(){
        console.log(`Velicina liste je: ${this.size}`)
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(`Ime noda je: ${currentNode.info}, njegov prethodnik je: ${currentNode.prev ? currentNode.prev.info : null} a njegov sledbenik je: ${currentNode.next ? currentNode.next.info : null}`);
            currentNode = currentNode.next;
        }
    }
}

class Node {
    constructor(info, next, prev){
        this.info = info;
        this.next = next;
        this.prev = prev;
    }
}

function main(){
    const l = new List();
    l.Append(new Node("Prvi", null))
    l.Append(new Node("Drugi", null))
    l.Append(new Node("Treci", null))
    l.Append(new Node("Cetvrti", null))
    l.Append(new Node("Peti", null))
    l.Append(new Node("Sesti", null))
    // l.Print()
    let treci = l.GetNodeByName("Treci");
    l.InsertAfter(new Node("Sedmi", null), treci);
    // l.Print();
    let sesti = l.GetNodeByName("Sesti");
    l.InsertAfter(new Node("Osmi", null), sesti);
    // l.Print();
    let prvi = l.GetNodeByName("Prvi");
    l.InsertAfter(new Node("Deveti", null), prvi);
    // l.Print();
    l.Delete(prvi);
    l.Delete(treci);
    // l.Print()
    l.Delete(sesti);
    l.Print()
    // l.Delete(sesti);
}

main()




/*
 * 
 * TODO: Methods:
 *      - Append()                  --> DONE
 *      - Prepend()
 *      - InsertAfter(new, curr)    --> DONE
 *      - InsertBefore(new, curr)
 *      - InsertOnPosition(position)
 *      - Delete()                  --> DONE
 *      - DeleteFirst()
 *      - DeleteLast()
 *      - DeleteOnPosition(position)
 *      - DeleteAll()   
 *      - GetNodeByProperty(prop, value)
 *      - GetNodeByPosition(position)
 */