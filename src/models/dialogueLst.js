class DialogueList {
    constructor(chats = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.currentChat = null;
    
        for (let chat of chats) this.push(chat);
    }    
    push(chat) {
        if(!this.head){
          this.head=chat;
          this.tail=this.head
          this.currentChat = this.head;
        } else {
          this.tail.next = chat;
          this.tail = chat;
        }
        this.length += 1;
    }
    printAll(){
        let curr = this.head;
        while (curr){
            console.log(curr);
            curr = curr.next;
        }
    }
    nextDialogue(){
        if (!this.currentChat) this.currentChat = this.tail
        else this.currentChat = this.currentChat.next;
        return this.currentChat;
    }
}

export default DialogueList;