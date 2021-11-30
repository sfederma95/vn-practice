class Chat {
    constructor(text, speaker, delay){
        this.text = text;
        this.speaker = speaker;
        this.delay = delay;
        this.next = null;
    }
}

export default Chat;