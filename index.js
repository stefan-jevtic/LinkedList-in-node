class List {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    Append(n){
        let node = new Node(n, null, null);
        if(this.head === null){
            this.head = node
            this.head.prev = null;
        }
        else {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = node
            currentNode.next.prev = currentNode;
        }
        this.size++;
    }

    Prepend(n){
        let node = new Node(n, null, null);
        let head = this.head;
        if(head)
            head.prev = node;
        node.next = head;
        node.prev = null
        this.head = node;
        this.size++;
    }

    GetNodeByValue(value){ // should be private method in typescript
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.info === value)
                return currentNode;
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

    GetFirst(){
        if(this.head === null){
            console.log('List is empty!');
            return null;
        }
        return this.head.info;
    }

    GetLast(){
        if(this.head === null){
            console.log('List is empty!');
            return null;
        }
        let currentNode = this.head;
        while(currentNode.next !== null)
            currentNode = currentNode.next;
        return currentNode.info;
    }

    SetNodeByProperty(old, n){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.info === old){
                currentNode.info = n;
                break;
            }
            currentNode = currentNode.next;
        }
    }

    SetNodeOnPosition(position, value){
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
            if(counter === position){
                currentNode.info = value;
                break;
            }
            currentNode = currentNode.next;
            counter++
        }
    }

    InsertAfter(c, n){
        let node = new Node(n, null, null);
        c = this.GetNodeByValue(c);
        if(this.head === null){
            this.head = node;
            this.head.prev = null;
        }
        else {
            let tmp = c.next;
            node.next = tmp;
            if(tmp)
                tmp.prev = node;
            c.next = node;
            node.prev = c;
        }
        this.size++;
    }

    InsertBefore(c, n){
        let node = new Node(n, null, null);
        c = this.GetNodeByValue(c);
        if(this.head === null){
            this.head = node;
            this.head.prev = null;
        }
        else {
            let tmp = c.prev;
            node.next = c;
            node.prev = tmp;
            c.prev = node;
            if(tmp){
                tmp.next = node;
            }
            else {
                this.head = node;
            }
        }
        this.size++;
    }

    InsertOnPosition(position, n){
        let node = new Node(n, null, null);
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
            let tmp = this.head;
            node.next = tmp;
            node.prev = null;
            tmp.prev = node;
            this.head = node;
        }
        else{
            let currentNode = this.head;
            let tmp;
            let counter = 0;
            while(currentNode !== null){
                if(pos === counter){
                    tmp = currentNode;
                    break;
                }
                currentNode = currentNode.next;
                counter++;
            }
            let pv = tmp.prev;
            pv.next = node;
            node.prev = pv;
            node.next = tmp;
            tmp.prev = node;
        }
        this.size++;
    }

    Remove(c){
        if(this.head === null){
            console.log('List is empty!')
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

    Contains(value){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.info === value)
                return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    toArray(){
        let arr = []
        let currentNode = this.head;
        while(currentNode !== null){
            arr.push(currentNode.info);
            currentNode = currentNode.next;
        }
        return arr;
    }

    Size(){
        return this.size;
    }

    Clear(){
        let length = this.size;
        for(let i = 0; i < length; i++){
            let tmp = this.RemoveLast();
            tmp = null;
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
    l.Prepend("Deveti")
    l.Append("Prvi")
    l.Append("Drugi")
    l.Append("Treci")
    l.Append("Cetvrti")
    l.Append("Peti")
    l.Append("Sesti")
    l.InsertAfter("Cetvrti", "Osmi");
    l.InsertBefore("Cetvrti", "Deveti")
    l.InsertOnPosition(6, "Deseti");
    l.Remove("Deveti")
    l.RemoveFirst();
    l.RemoveLast();
    l.RemoveOnPosition(3)
    l.Print()
    console.log(l.GetFirst());
    console.log(l.GetLast());
    console.log(l.GetNodeByPosition(3));
    console.log(l.Contains("Deveti"));
    console.log(l.toArray());
    console.log(l.Size());
    l.SetNodeByProperty("Deveti", "Jedanaesti");
    l.SetNodeOnPosition(0, "Glava porodice");
    l.Print();
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
 *      - GetFirst()                    --> DONE
 *      - GetLast()                     --> DONE
 *      - SetNodeByProperty(old, new)   --> DONE
 *      - SetNodeOnPosition(pos, value) --> DONE
 *      - Contains(node)                --> DONE
 *      - Clear()                       --> DONE
 *      - toArray()                     --> DONE
 *      - Size()                        --> DONE
 */