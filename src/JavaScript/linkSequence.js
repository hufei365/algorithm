class LinkSequence {
    constructor( arr ){
        let len = arr.length;
        this.db = [];
        this.head = {
            value: null,
            length: len,
            next: 0
        }
        this.empty = [];
        arr.forEach( (el, i)=>{
            let node= {
                value: el,
                next: i+1 < len ? i+1 : null
            }
            this.db.push(node)
        })
    }

    traverse(){
        let p = this.head;
        while(p.next !== null){
            p = this.db[p.next];
            console.log(p.value)
        }
    }
    insert(value, pos){
        let cur = 0, p = this.head;
        while( p.next !== null && cur < pos-1 ){
            p = this.db[p.next];
            cur++;
        }
        if(cur === pos-1 ){
            let node = {
                value,
                next: p.next
            }

            
        }
    }
}


let ls = new LinkSequence([1,3,5,9])

ls.traverse()