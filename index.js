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

    Prepend(n){
        let node = this.head;
        if(node)
            node.prev = n;
        n.next = node;
        n.prev = null
        this.head = n;
    }

    GetNodeByValue(value){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.info === value)
                return currentNode.info;
            currentNode = currentNode.next;
        }
        return null;
    }

    GetNodeByPosition(position){
        if(isNaN(position)){
            console.log("Position must be a valid number!")
            return false;
        }
        let pos = parseInt(position);
        if(pos > this.size - 1 || pos < 0){
            console.log("Position out of range!!!")
            return false;
        }
        let currentNode = this.head;
        let counter = 0;
        while(currentNode !== null){
            if(counter === position)
                return currentNode.info;
            currentNode = currentNode.next;
            counter++
        }
        return null;
    }

    InsertAfter(n, c){
        if(this.head === null){
            this.head = n
            this.head.prev = null;
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

    InsertBefore(n, c){
        if(this.head === null){
            this.head = n;
            this.head.prev = null;
        }
        else {
            let node = c.prev;
            n.next = c;
            n.prev = node;
            c.prev = n;
            if(node){
                node.next = n;
            }
            else {
                this.head = n;
            }
        }
        this.size++;
    }

    InsertOnPosition(position, n){
        if(isNaN(position)){
            console.log("Position must be a valid number!")
            return false;
        }
        let pos = parseInt(position);
        if(pos > this.size - 1 || pos < 0){
            console.log("Position out of range!!!")
            return false;
        }

        if(pos === 0){
            let node = this.head;
            n.next = node;
            n.prev = null;
            node.prev = n;
            this.head = n;
        }
        else{
            let currentNode = this.head;
            let node;
            let counter = 0;
            while(currentNode !== null){
                if(pos === counter){
                    node = currentNode;
                    break;
                }
                currentNode = currentNode.next;
                counter++;
            }
            let pv = node.prev;
            pv.next = n;
            n.prev = pv;
            n.next = node;
            node.prev = n;
        }
    }

    Remove(c){
        if(this.head === null){
            console.log('Lista je prazna')
            return false;
        }
        else {
            let currentNode = this.head;
            let counter = 0;
            while(currentNode !== null){
                if(currentNode.info === c)
                    break;
                else
                    counter++;
                currentNode = currentNode.next;
            }
            if(counter === this.size){
                console.log("No node found with that content!")
                return false;
            }
            let p = currentNode.prev;
            let n = currentNode.next;
            if(p)
                p.next = n;
            else
                this.head = n;
            if(n)
                n.prev = p;
            currentNode.next = null;
            currentNode.prev = null;
            let tmp = currentNode.info;
            currentNode = null;
            this.size--;
            return tmp;
        }
    }

    RemoveFirst(){
        if(this.head === null){
            console.log('List is empty!')
            return null;
        }

        let node = this.head
        if(node.next){
            node.next.prev = null;
            this.head = null;
            this.head = node.next;
        }
        else{
            this.head = null;
        }
        this.size--;
        return node.info;
    }

    RemoveLast(){
        if(this.head === null){
            console.log('List is empty!')
            return null;
        }

        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        let pv = currentNode.prev;
        if(pv){
            pv.next = null;
            currentNode.prev = null;
            let val = currentNode.info;
            currentNode = null;
            this.size--;
            return val;
        }
        else {
            let val = this.head.info;
            this.head = null;
            this.size--;
            return val;
        }
    }

    RemoveOnPosition(position){
        if(this.head === null){
            console.log('List is empty!')
            return false;
        }
        if(isNaN(position)){
            console.log("Position must be a valid number!")
            return false;
        }
        let pos = parseInt(position);
        if(pos > this.size - 1 || pos < 0){
            console.log("Position out of range!!!")
            return false;
        }
        let currentNode = this.head;
        let counter = 0;
        while(currentNode !== null){
            if(pos === counter){
                break;
            }
            currentNode = currentNode.next;
            counter++;
        }
        let p = currentNode.prev;
        let n = currentNode.next;
        if(p)
            p.next = n;
        else
            this.head = n;
        if(n)
            n.prev = p;
        currentNode.next = null;
        currentNode.prev = null;
        let tmp = currentNode.info;
        currentNode = null;
        this.size--;
        return tmp;
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
    // l.Prepend(new Node('Deveti', null))
    l.Append(new Node("Prvi", null))
    l.Append(new Node("Drugi", null))
    l.Append(new Node("Treci", null))
    l.Append(new Node("Cetvrti", null))
    l.Append(new Node("Peti", null))
    l.Append(new Node("Sesti", null))
    // l.Prepend(new Node('Osmi', null))
    // let treci = l.GetNodeByName("Osmi");
    // l.InsertBefore(new Node("Deseti", null), treci);
    // l.InsertOnPosition(3, new Node("Osamdesdrugi", null));
    l.Print()
    // let a = l.RemoveLast()
    // console.log(a);
    // l.Print()
    // l.RemoveLast()
    // let treci = l.GetNodeByName("Treci");
    // l.InsertAfter(new Node("Sedmi", null), treci);
    // l.Print();
    // let sesti = l.GetNodeByName("Sesti");
    // l.InsertAfter(new Node("Osmi", null), sesti);
    // l.Print();
    // let prvi = l.GetNodeByName("Prvi");
    // l.InsertAfter(new Node("Deveti", null), prvi);
    // l.Print();
    // l.Remove("Prvi");
    let a = l.GetNodeByPosition(1);
    // l.Print()
    console.log(a)
    // l.Delete(sesti);
    // l.Print()
    // l.Delete(sesti);
}

main()




/*
 * 
 * TODO: Methods:
 *      - Append()                      --> DONE
 *      - Prepend()                     --> DONE
 *      - InsertAfter(new, curr)        --> DONE
 *      - InsertBefore(new, curr)       --> DONE
 *      - InsertOnPosition(position)    --> DONE
 *      - Remove(node)                  --> DONE
 *      - RemoveFirst()                 --> DONE
 *      - RemoveLast()                  --> DONE
 *      - RemoveOnPosition(position)    --> DONE
 *      - GetNodeByValue(value)         --> DONE
 *      - GetNodeByPosition(position)   --> DONE
 *      - GetFirst()
 *      - GetLast()
 *      - SetNodeByProperty(old, new)
 *      - SetNodeOnPosition(pos, value) 
 *      - Contains(node)
 *      - Clear()
 *      - toArray()
 *      - Size()
 */