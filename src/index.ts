import * as CryptoJS from "crypto-js";

class Block
{
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string
    ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString()
    
    constructor(index:number, hash:string, previousHash:string, data:string, timestamp:number)
    {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "20202020", '', 'hello', 123456);

// 배열
let blockchain: Block[] = [genesisBlock];
console.log(blockchain); 

const getBlockchain = () : Block[] => blockchain;

export {};